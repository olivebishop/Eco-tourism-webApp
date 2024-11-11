// Import necessary modules from Next.js, Prisma, and Clerk
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Status } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

// GET endpoint - Protected with Clerk authentication
export async function GET(req: NextRequest) {
  try {
    // Check authentication with Clerk
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please login to access bookings' },
        { status: 401 }
      );
    }

    // Parse query parameters
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const status = url.searchParams.get('status') as Status | null;

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Build filter conditions
    const where: { status?: Status } = {};
    if (status && Object.values(Status).includes(status)) {
      where.status = status;
    }

    // Fetch bookings with pagination
    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
          phone: true,
          status: true,
          bookingDate: true,
          numberOfGuests: true,
          specialRequests: true,
          destinationName: true,
          price: true,
        },
      }),
      prisma.booking.count({ where }),
    ]);

    // Return bookings and pagination metadata
    return NextResponse.json({
      bookings,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

// PUT endpoint - Update booking status
export async function PUT(req: NextRequest) {
  try {
    // Check authentication with Clerk
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please login to access bookings' },
        { status: 401 }
      );
    }

    // Parse booking ID and updated data from request
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const { updatedData } = await req.json() as { updatedData: { status?: Status } };

    if (!id) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    if (updatedData.status && !Object.values(Status).includes(updatedData.status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      );
    }

    // Update the booking status
    const booking = await prisma.booking.update({
      where: { id },
      data: updatedData,
    });

    return NextResponse.json({ booking });
  } catch (error) {
    console.error('Error updating booking status:', error);
    return NextResponse.json(
      { error: 'Failed to update booking status' },
      { status: 500 }
    );
  }
}