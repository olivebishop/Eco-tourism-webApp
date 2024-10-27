'use client';

import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import BlogCard from '@/components/blogs-card';
import { BlogListSkeleton } from '@/components/skeletons';
import type { BlogPost } from '@/types/blogs';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-green-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100/30 transform skew-x-12" />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-green-900 bg-green-100 rounded-full">
            ECO TOURISM BLOG
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Sustainable Travel
            <span className="text-green-600"> Insights</span>
          </h1>
          <p className="text-lg text-gray-500">
            Discover stories about conservation, eco-friendly adventures, and sustainable tourism practices
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {loading ? (
            Array(3).fill(0).map((_, i) => <BlogListSkeleton key={i} />)
          ) : error ? (
            <div className="text-center p-8 bg-red-50 rounded-lg">
              <p className="text-red-500">Error: {error}</p>
            </div>
          ) : (
            <>
              {blogs.slice(0, visibleBlogs).map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
              {visibleBlogs < blogs.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleBlogs((prev) => prev + 3)}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                  >
                    <Leaf className="w-5 h-5 mr-2" />
                    Load More Stories
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}