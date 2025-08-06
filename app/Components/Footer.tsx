'use client';

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

interface NavigationLink {
  name: string;
  href: string;
}

interface Category {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      console.log('Footer newsletter subscription:', email);
      setEmail('');
      // Add your email handling logic here
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const navigationLinks: NavigationLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const categories: Category[] = [
    { name: "Technology", href: "/category/technology" },
    { name: "Startup", href: "/category/startup" },
    { name: "Lifestyle", href: "/category/lifestyle" },
  ];

  return (
    <footer className="bg-white border-t-2 border-black mt-16">
      <div className="py-12 px-5 md:px-12 lg:px-28">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="relative w-[180px] h-[60px] mb-4">
              <Image
                src={assets.logo}
                alt="Company Logo"
                fill={true}
                sizes="180px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-sm text-gray-600 max-w-md mb-6">
              Stay updated with the latest insights, trends, and stories. 
              Join our community of readers who are passionate about technology, 
              startups, and lifestyle content.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-medium text-black mb-3">Subscribe to our Newsletter</h4>
              <form 
                onSubmit={handleNewsletterSubmit}
                className="flex max-w-[350px] border border-black"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 px-3 py-2 outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="border-l border-black px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors shadow-[-4px_4px_6px_#00000020]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-black mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link: NavigationLink) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-black mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category: Category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <button 
              type="button"
              className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[-3px_3px_4px_#00000020]"
              aria-label="Facebook"
            >
              <span className="text-sm font-bold">f</span>
            </button>
            <button 
              type="button"
              className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[-3px_3px_4px_#00000020]"
              aria-label="Twitter"
            >
              <span className="text-sm font-bold">t</span>
            </button>
            <button 
              type="button"
              className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[-3px_3px_4px_#00000020]"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-bold">in</span>
            </button>
            <button 
              type="button"
              className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[-3px_3px_4px_#00000020]"
              aria-label="Instagram"
            >
              <span className="text-sm font-bold">ig</span>
            </button>
          </div>
          
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Your Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
