"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface SkillItem {
  name: string;
  logo: string;
  colorClass: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "CORE FRONTEND",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", colorClass: "hover:border-sky-400/40 hover:shadow-[0_8px_20px_-10px_rgba(56,189,248,0.2)]" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", colorClass: "hover:border-zinc-800/40 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.2)]" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", colorClass: "hover:border-yellow-500/40 hover:shadow-[0_8px_20px_-10px_rgba(234,179,8,0.2)]" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", colorClass: "hover:border-orange-500/40 hover:shadow-[0_8px_20px_-10px_rgba(249,115,22,0.2)]" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", colorClass: "hover:border-blue-500/40 hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.2)]" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", colorClass: "hover:border-teal-400/40 hover:shadow-[0_8px_20px_-10px_rgba(45,212,191,0.2)]" },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", colorClass: "hover:border-neutral-900/40 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.2)]" },
      { name: "Chrome DevTools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", colorClass: "hover:border-purple-400/40 hover:shadow-[0_8px_20px_-10px_rgba(168,85,247,0.2)]" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", colorClass: "hover:border-pink-500/40 hover:shadow-[0_8px_20px_-10px_rgba(236,72,153,0.2)]" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", colorClass: "hover:border-zinc-900/40 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.2)]" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", colorClass: "hover:border-blue-500/40 hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.2)]" },
    ]
  },
  {
    title: "ADDITIONAL",
    skills: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", colorClass: "hover:border-indigo-400/40 hover:shadow-[0_8px_20px_-10px_rgba(99,102,241,0.2)]" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", colorClass: "hover:border-blue-600/40 hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.2)]" },
      { name: "SEO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", colorClass: "hover:border-green-500/40 hover:shadow-[0_8px_20px_-10px_rgba(34,197,94,0.2)]" },
      { name: "Responsive Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", colorClass: "hover:border-sky-500/40 hover:shadow-[0_8px_20px_-10px_rgba(14,165,233,0.2)]" },
    ]
  }
];

export default function Skills() {
  const floatVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section id="skills" className="bg-[#FAFAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      
      {/* Background Decor & Visible DEVELOPER Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        
        {/* DEVELOPER Watermark Text */}
        <div className="absolute w-full flex justify-center items-center opacity-[0.12] select-none pointer-events-none">
          <span className="font-extrabold tracking-tighter text-[14vw] sm:text-[15.5vw] uppercase font-mono leading-none text-zinc-900">
            DEVELOPER
          </span>
        </div>
        
        {/* Floating Code Elements */}
        <motion.div variants={floatVariants} animate="animate" className="absolute top-[15%] left-[8%] text-zinc-300/40 font-mono text-sm sm:text-lg hidden md:block">{"<code />"}</motion.div>
        <motion.div variants={floatVariants} animate="animate" className="absolute bottom-[20%] right-[8%] text-zinc-300/40 font-mono text-sm sm:text-xl hidden lg:block">{"{ skills }"}</motion.div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.12]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10 w-full">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start gap-2.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              MY SKILLS
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            Technologies I work with
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium max-w-lg">
            Tools and technologies I use to build modern, responsive, and scalable web applications.
          </p>
        </div>

        {/* Categorized Sections */}
        <div className="space-y-10 sm:space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-4">
              
              {/* Category Subheading */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {category.title}
                </span>
                <div className="h-[1px] flex-1 bg-zinc-200/60 ml-2" />
              </div>

              {/* Category Skills Grid - Fully Responsive */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                    // Hover movement effect
                    whileHover={{ 
                      y: -6, 
                      scale: 1.03,
                      transition: { duration: 0.2, ease: "easeInOut" } 
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`group flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-xl p-4 shadow-sm transition-colors duration-300 cursor-pointer ${skill.colorClass}`}
                  >
                    {/* Logo with hover zoom */}
                    <div className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center mb-2.5">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    
                    {/* Name */}
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-700 tracking-tight text-center truncate w-full group-hover:text-zinc-900 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}