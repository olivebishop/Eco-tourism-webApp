import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

// Custom rate limiter implementation
class RateLimiter {
  private requests: Map<string, { count: number; timestamp: number }>;
  private requestLimit: number;
  private windowMs: number;

  constructor(requestLimit: number, windowInSeconds: number) {
    this.requests = new Map();
    this.requestLimit = requestLimit;
    this.windowMs = windowInSeconds * 1000; // Convert to milliseconds
  }

  async checkLimit(key: string): Promise<boolean> {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    if (this.requests.has(key)) {
      const request = this.requests.get(key)!;
      if (request.timestamp < windowStart) {
        // Reset if the window has passed
        request.count = 1;
        request.timestamp = now;
      } else if (request.count >= this.requestLimit) {
        return false; // Rate limit exceeded
      } else {
        request.count++;
      }
    } else {
      this.requests.set(key, { count: 1, timestamp: now });
    }

    return true; // Request allowed
  }
}

// Create a new rate limiter that allows 5 requests per 5 minutes
const rateLimiter = new RateLimiter(5, 300);

export async function POST(req: Request) {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  
  if (!user || user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const success = await rateLimiter.checkLimit(userId);
  if (!success) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const { title, content, imageUrl, tags } = await req.json();

  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        imageUrl,
        tags,
        authorId: userId,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Error creating blog' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Error fetching blogs' }, { status: 500 });
  }
}