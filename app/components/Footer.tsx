"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Main Links Matrix */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 mb-12 sm:mb-16 text-center sm:text-left">
        
        {/* 1. Brand Section */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tighter">
            RACHIT<span className="text-sky-500">.</span>
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Crafting digital experiences that leave a lasting impact.
          </p>
          
          {/* Social Icon Grid Container */}
          <div className="flex gap-2.5 pt-1">
            {[
              { id: 'fb', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>, hoverBg: 'hover:bg-[#1877F2]' },
              { id: 'ig', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></>, hoverBg: 'hover:bg-[#E4405F]' },
              { id: 'in', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>, hoverBg: 'hover:bg-[#0A66C2]' },
              { id: 'gh', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>, hoverBg: 'hover:bg-zinc-900' }
            ].map((social) => (
              <a 
                key={social.id} 
                href="#" 
                className={`p-2.5 bg-zinc-50 border border-zinc-200/60 rounded-full transition-all duration-300 group ${social.hoverBg} active:scale-95`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-white transition-colors duration-200">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="w-full">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-zinc-500 font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="inline-block hover:text-sky-500 transition-all duration-200 hover:translate-x-0.5"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Services */}
        <div className="w-full">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4 sm:mb-6">Services</h4>
          <ul className="space-y-2.5 text-sm text-zinc-500 font-medium">
            {['Web Development', '3D Design', 'UI/UX Design', 'API Development'].map((s) => (
              <li key={s}>
                <span className="inline-block hover:text-sky-500 transition-all duration-200 hover:translate-x-0.5 cursor-pointer">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Let's Connect */}
        <div className="w-full sm:col-span-2 md:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4 sm:mb-6">Let's Connect</h4>
          <ul className="space-y-2.5 text-sm text-zinc-500 font-semibold overflow-hidden">
            <li className="break-all sm:break-words">
              <a href="mailto:rachitrathour98@gmail.com" className="hover:text-sky-500 transition-colors">
                rachitrathour98@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919140104754" className="hover:text-sky-500 transition-colors">
                +91 9140104754
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Sheet */}
      <div className="mx-auto max-w-7xl pt-6 sm:pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[11px] sm:text-xs text-zinc-400 font-medium order-2 md:order-1">
          © {currentYear} Rachit. All rights reserved.
        </p>
        
        {/* Right side Metadata & Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 order-1 md:order-2 w-full sm:w-auto justify-center">
          <p className="text-xs font-bold text-zinc-500 tracking-tight">
            Built with Next.js & Tailwind
          </p>
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center relative shrink-0 aspect-square">
            <img 
              src="/weblogg.png" 
              alt="Brand Logo" 
              loading="lazy"
              className="h-full w-full object-contain rounded-full border border-zinc-200/80 shadow-sm p-0.5 select-none" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}