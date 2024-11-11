'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/types/blogs';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog post not found');
          }
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        // Ensure tags is always an array
        data.tags = data.tags || [];
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-700">Blog post not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{blog.authorName}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{format(new Date(blog.createdAt), 'MMMM d, yyyy')}</span>
          </div>
        </div>

        {blog.imageData && (
          <div className="mb-8">
            <img
              src={blog.imageData}
              alt={blog.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="prose max-w-none">
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>
      </div>
    </article>
  );
}