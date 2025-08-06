"use client"

import { useState } from 'react';
import { blog_data } from '@/Assets/assets';
import BlogItem from './BlogItem';

const categories = ['All', 'Technology', 'Startup', 'Lifestyle'];

const BlogList: React.FC = () => {
  const [menu, setMenu] = useState<string>('All');

  // Filter logic: Show all or only matching category
  const filteredBlogs = menu === 'All' 
    ? blog_data 
    : blog_data.filter((item) => item.category === menu);

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`
              py-1 px-4 rounded-sm
              ${menu === cat ? 'bg-black text-white' : 'bg-white text-black border border-black'}
              transition
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <BlogItem 
              key={item.id || item.title}
              id={item.id} // ✅ Added missing id prop
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))
        ) : (
          <div className="text-center w-full text-gray-400">No blogs in this category.</div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
