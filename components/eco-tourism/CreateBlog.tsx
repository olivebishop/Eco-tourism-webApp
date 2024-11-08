'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Define types
type FormData = {
  title: string;
  author: string;
  content: string;
  tags: string;
}

type BlogPost = {
  title: string;
  author: string;
  content: string;
  tags: string[];
  imageUrl: string;
}

const CreateBlog: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState<FormData>({
    title: '',
    author: '',
    content: '',
    tags: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }

      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTextFormat = (format: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText = '';
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'heading':
        formattedText = `\n# ${selectedText}`;
        break;
      case 'list':
        formattedText = `\n- ${selectedText}`;
        break;
    }

    const newContent = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
    setFormData(prev => ({
      ...prev,
      content: newContent
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (currentStep === 1) {
        setCurrentStep(2);
      } else {
        if (!selectedImage) {
          throw new Error('Please upload an image');
        }

        const blogPost: BlogPost = {
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          imageUrl: previewUrl
        };

        console.log('Blog post data:', blogPost);

        setFormData({
          title: '',
          author: '',
          content: '',
          tags: '',
        });
        setSelectedImage(null);
        setPreviewUrl('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="bg-white rounded-lg shadow p-6">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">Fill in the details for your new blog post</p>

          <div className="flex items-center justify-between mb-8">
            <div
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                currentStep === 1
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              Step 1
            </div>
            <div
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                currentStep === 2
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              Step 2
            </div>
          </div>

          {currentStep === 1 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium">Title</label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Author</label>
                <Input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Content</label>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 p-2 flex gap-2">
                    <Button
                      type="button"
                      onClick={() => handleTextFormat('bold')}
                      title="Bold"
                    >
                      B
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleTextFormat('italic')}
                      title="Italic"
                    >
                      I
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleTextFormat('heading')}
                      title="Heading"
                    >
                      H
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleTextFormat('list')}
                      title="List"
                    >
                      •
                    </Button>
                  </div>
                  <Textarea
                    ref={textareaRef}
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your blog content here... (Supports Markdown formatting)"
                    className="w-full p-4 min-h-[18rem] outline-none resize-y"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Tags</label>
                <Input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Enter tags separated by commas"
                  required
                />
              </div>

              <Button
                type="button"
                className="w-full"
                disabled={isLoading}
                onClick={() => setCurrentStep(2)}
              >
                Next
              </Button>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium">Blog Image</label>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                      />
                    </label>
                  </div>
                  {previewUrl && (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                        priority
                      />
                      <Button
                        type="button"
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        onClick={removeImage}
                      >
                        ✕
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  className="bg-gray-200 text-gray-500 hover:bg-gray-300"
                  disabled={isLoading}
                  onClick={() => setCurrentStep(1)}
                >
                  Previous
                </Button>
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-600"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Blog Post'}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;