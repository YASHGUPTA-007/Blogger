import { assets } from '@/Assets/assets';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogItemProps {
  id: string | number;
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  className?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ 
  id,
  title,
  description,
  category,
  image,
  className = "" 
}) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className={`max-w-[330px] bg-white border border-black hover:shadow-[-7px_7px_8px_#000000] transition-shadow duration-300 cursor-pointer ${className}`}>
        <Image 
          src={image} 
          alt={`${title} cover image`} 
          width={400} 
          height={400} 
          className='border-b border-black w-full h-auto object-cover' 
        />
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>
          {category}
        </p>
        
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-4 text-gray-700 text-sm line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors">
            Read more 
            <Image 
              src={assets.arrow} 
              alt='Read more arrow'
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
