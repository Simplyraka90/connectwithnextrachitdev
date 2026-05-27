import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Brand Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-black tracking-tighter">RACHIT.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Crafting digital experiences that leave a lasting impact.
          </p>
          <div className="flex gap-3">
            {/* Social Icons (SVG) */}
            {/* Facebook */}
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-sky-600 transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="group-hover:stroke-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-pink-600 transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="group-hover:stroke-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-blue-700 transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="group-hover:stroke-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-black transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="group-hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="font-bold text-black mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-sky-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* 3. Services */}
        <div>
          <h4 className="font-bold text-black mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            {['Web Development', '3D Design', 'UI/UX Design', 'API Development'].map((s) => (
              <li key={s} className="hover:text-sky-500 transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        {/* 4. Let's Connect */}
        <div>
          <h4 className="font-bold text-black mb-6">Let's Connect</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li className="break-words">rachitrathour98@gmail.com</li>
            <li>+91 9140104754</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto max-w-7xl pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Rachit. All rights reserved.</p>
        
        {/* Right side Logo Section */}
        <div className="flex items-center gap-4">
  <p className="text-sm font-medium text-zinc-600">Built with Next.js & Tailwind</p>
  <img 
    src="/weblogg.png" 
    alt="Logo" 
    // h-16 और w-16 का मतलब है कि लोगो अब 64px का हो गया है
    className="h-16 w-16 object-contain rounded-full border-2 border-zinc-200 shadow-md p-1" 
  />
</div>
      </div>
    </footer>
  );
}