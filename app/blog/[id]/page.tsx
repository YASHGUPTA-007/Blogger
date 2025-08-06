import { blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

interface BlogData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string | import('next/image').StaticImageData;
  author?: string;
  date?: number;
}

const Page: React.FC<PageProps> = ({ params: { id } }) => {
  // Find the blog post directly
  const blogPost = blog_data.find((item: BlogData) => item.id === Number(id));

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Blog Post Not Found</h1>
          <p className="text-gray-600">The blog post with ID {id} does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
      <div className="mb-4">
        <span className="bg-black text-white px-3 py-1 text-sm inline-block">
          {blogPost.category}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        {blogPost.title}
      </h1>

      <div className="mb-8">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={800}
          height={400}
          className="w-full h-auto border border-black shadow-[-7px_7px_8px_#000000]"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {blogPost.description}
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <a 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
        >
          ← Back to all blogs
        </a>
      </div>
    </div>
  );
};

export default Page;
