'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Leaf, ChevronDown } from 'lucide-react';
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
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section with Improved Styling */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[50vh] min-h-[400px] flex items-center justify-center mb-16 md:mb-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/diani.jpg"
              alt="Beach sunset in Diani"
              layout="fill"
              objectFit="cover"
              priority
              className="transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-900/70 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
              Eco Blogs
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Explore sustainable travel, conservation stories, and eco-friendly adventures
            </p>
          </div>
        </div>
      </section>

      {/* Blog List Section with Enhanced Design */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-green-600 mr-3" />
              <span className="text-sm font-semibold uppercase tracking-wide text-green-800 bg-green-100 px-3 py-1 rounded-full">
                Sustainable Travel Insights
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover <span className="text-green-600">Responsible</span> Travel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in stories of environmental stewardship, eco-conscious journeys, and transformative travel experiences
            </p>
          </div>

          <div className="space-y-10">
            {loading ? (
              Array(3)
                .fill(0)
                .map((_, i) => <BlogListSkeleton key={i} />)
            ) : error ? (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-10 text-center shadow-md">
                <p className="text-2xl text-red-600 font-semibold">
                  Oops! {error}
                </p>
                <p className="text-gray-600 mt-4">
                  We&apos;re having trouble loading the blogs. Please try again later.
                </p>
              </div>
            ) : (
              <>
                {blogs.slice(0, visibleBlogs).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
                {visibleBlogs < blogs.length && (
                  <div className="text-center mt-16">
                    <button
                      onClick={() => setVisibleBlogs((prev) => prev + 3)}
                      className="group inline-flex items-center px-8 py-4 rounded-full 
                        bg-green-600 text-white font-semibold 
                        hover:bg-green-700 transition-all duration-300 
                        shadow-lg hover:shadow-xl transform hover:-translate-y-1
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <ChevronDown className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                      Load More Stories
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

