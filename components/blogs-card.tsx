'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Tag, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from '@/types/blogs';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();
  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-green-100">
      <CardContent className="p-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-auto p-4">
            <div className="relative w-full lg:w-44 h-32 overflow-hidden rounded-lg">
              <Image
                src={blog.imageUrl || '/api/placeholder/400/320'}
                alt={blog.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full lg:w-9/12 p-4">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-2">
                <span className="flex items-center text-green-600 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formattedDate}
                </span>
                <div className="flex items-center space-x-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{blog.content}</p>
            </div>
          </div>
          <div className="w-full lg:w-auto p-4 lg:ml-auto">
            <button
              onClick={() => router.push(`/blogs/${blog._id}`)}
              className="inline-flex items-center text-lg font-semibold text-green-700 hover:text-green-900 transition-colors duration-300"
            >
              <span className="mr-2">Read</span>
              <ArrowUpRight className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}