'use client'

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  title: string;
  content: string;
  tags: string;
}

export default function CreateBlog() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    tags: '',
  });

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
        toast({
          title: "Error",
          description: "Image size should be less than 5MB",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.startsWith('image/')) {
        toast({
          title: "Error",
          description: "Please upload an image file",
          variant: "destructive",
        });
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

    try {
      if (!selectedImage) {
        throw new Error('Please upload an image');
      }

      // Upload image to Cloudinary
      const imageFormData = new FormData();
      imageFormData.append('file', selectedImage);
      imageFormData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: imageFormData
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();

      if (!cloudinaryResponse.ok) {
        throw new Error('Error uploading image to Cloudinary');
      }

      const imageUrl = cloudinaryData.secure_url;

      // Create blog post
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Error creating blog post');
      }

      toast({
        title: "Success",
        description: "Blog post created successfully",
      });

      router.push('/blogs');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                      fill
                      className="object-cover rounded-lg"
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

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Blog Post'}
            </Button>
          </form>  
          
        </CardContent>
      </Card>
    </div>
  );
}