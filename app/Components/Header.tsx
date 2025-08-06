"use client"

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  onSubmit, 
  className = "" 
}) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form 
      className={`flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black pl-3 ${className}`}
      onSubmit={handleSubmit}
    >
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="pl-4 outline-none flex-1"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button 
        type="submit"
        className="border-l border-black px-4 py-3 text-white bg-black hover:bg-gray-800 transition-colors shadow-[-7px_7px_8px_#000000]"
      >
        Subscribe
      </button>
    </form>
  );
};

const Header: React.FC = () => {
  const handleNewsletterSubmit = (email: string) => {
    console.log('Newsletter subscription:', email);
    // Add your email handling logic here (API call, etc.)
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
<div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[360 px] h-[64px]">
  <Image
    src={assets.logo}
    alt="Company Logo"
    fill={true}
    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 400px"
    priority
    style={{ objectFit: 'contain' }}
  />
</div>

        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-2 sm:px-6 border border-solid border-black shadow-[-7px_7px_8px_#000000]">
          Get started
          <Image
            src={assets.arrow}
            alt="Arrow icon"
            width={16}
            height={16}
          />
        </button>
      </div>
      
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
          Hello, Welcome to our blog Site
        </p>
        <NewsletterForm onSubmit={handleNewsletterSubmit} />
      </div>
    </div>
  );
};

export default Header;