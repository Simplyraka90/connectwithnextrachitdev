"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  logo: string;
}

export default function SkillsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Inner Ring Skills (8 Unique Skills)
  const innerSkills: SkillItem[] = [
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5 & CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Git & GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "API Integration",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
    },
  ];

  // Outer Ring Skills (7 Unique Skills)
  const outerSkills: SkillItem[] = [
    {
      name: "Figma & Canva",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Chrome DevTools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    },
    {
      name: "Responsive Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    },
    {
      name: "SEO / AI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Search Console",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Keyword Research",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "MS Excel & Word",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f3ec] py-20 px-6 md:px-16 font-sans text-zinc-900 select-none">
      
      {/* Background Soft Organic Waves Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#eaddcf] via-[#f7f3ec] to-[#f7f3ec]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ebdcd0] text-[#7a604a] text-xs font-semibold tracking-wider uppercase shadow-sm">
            • SKILLS •
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-zinc-900 leading-tight">
            Tools &amp; Technologies <br /> I Work With
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-600 text-base sm:text-lg max-w-md font-light leading-relaxed">
            I use modern tools, frameworks, and APIs to build fast, responsive, and engaging web applications.
          </p>

          {/* Action Button */}
          <a
            href="#projects"
            className="mt-4 inline-flex items-center gap-2 bg-zinc-950 text-white font-medium text-sm px-6 py-3.5 rounded-full shadow-lg hover:bg-zinc-800 transition-all duration-300"
          >
            Explore My Skills
            <span className="text-base">→</span>
          </a>
        </div>

        {/* Right Column: Smooth Rotating Circular Orbit Layout */}
        <div className="lg:col-span-7 flex justify-center items-center py-12 lg:py-0">
          <div
            className="relative w-72 h-72 sm:w-[440px] sm:h-[440px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Orbit Circles */}
            <div className="absolute inset-0 rounded-full border border-zinc-300/60 pointer-events-none" />
            <div className="absolute inset-12 sm:inset-16 rounded-full border border-dashed border-zinc-300/80 pointer-events-none" />
            
            {/* Center Dark Badge */}
            <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-zinc-950 text-white flex flex-col items-center justify-center shadow-2xl border-4 border-[#eae1d8] pointer-events-none">
              <div className="text-amber-200 text-xl sm:text-2xl font-mono mb-1">&lt;/&gt;</div>
              <span className="text-xs sm:text-sm tracking-wide font-medium text-zinc-300">
                Frontend
              </span>
            </div>

            {/* INNER ORBIT (Clockwise Smooth Rotation) */}
            <motion.div
              className="absolute inset-0 w-full h-full pointer-events-none"
              animate={{ rotate: isHovered ? undefined : 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {innerSkills.map((skill, index) => {
                const angle = (index / innerSkills.length) * 360;
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{
                      transform: `rotate(${angle}deg) translate(clamp(110px, 20vw, 135px)) rotate(-${angle}deg)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? undefined : -360 }}
                      transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    >
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-[0_8px_20px_-5px_rgba(0,0,0,0.08)] border border-white/60 hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                        <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* OUTER ORBIT (Counter-Clockwise Smooth Rotation) */}
            <motion.div
              className="absolute inset-0 w-full h-full pointer-events-none"
              animate={{ rotate: isHovered ? undefined : -360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            >
              {outerSkills.map((skill, index) => {
                const angle = (index / outerSkills.length) * 360;
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{
                      transform: `rotate(${angle}deg) translate(clamp(150px, 30vw, 200px)) rotate(-${angle}deg)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? undefined : 360 }}
                      transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    >
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-[0_8px_20px_-5px_rgba(0,0,0,0.08)] border border-white/60 hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                        <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}