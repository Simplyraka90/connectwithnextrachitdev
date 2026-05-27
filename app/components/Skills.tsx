"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface SkillItem {
  name: string;
  logo: string;
  colorClass: string;
}

const skills: SkillItem[] = [
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", colorClass: "hover:border-sky-400/40 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", colorClass: "hover:border-zinc-800/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", colorClass: "hover:border-yellow-500/40 hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)]" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", colorClass: "hover:border-teal-400/40 hover:shadow-[0_10px_30px_rgba(45,212,191,0.1)]" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", colorClass: "hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)]" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", colorClass: "hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]" },
  { name: "Responsive", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", colorClass: "hover:border-purple-400/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]" },
  { name: "Git / GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", colorClass: "hover:border-neutral-900/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", colorClass: "hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)]" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", colorClass: "hover:border-blue-600/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", colorClass: "hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]" },
  { name: "Basic PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", colorClass: "hover:border-indigo-400/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]" },
];

export default function Skills() {
  const floatVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section id="skills" className="bg-[#FAFAFC] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div variants={floatVariants} animate="animate" className="absolute top-[8%] left-[4%] text-zinc-300/40 font-mono text-xl md:text-2xl hidden md:block">{"<code />"}</motion.div>
        <motion.div variants={floatVariants} animate="animate" className="absolute bottom-[12%] right-[4%] text-zinc-300/40 font-mono text-3xl md:text-4xl hidden lg:block">{"{ design }"}</motion.div>
        <motion.div variants={floatVariants} animate="animate" className="absolute top-[18%] right-[8%] text-zinc-300/40 font-mono text-lg md:text-xl hidden sm:block">{"import { skills }"}</motion.div>
        
        {/* Clean Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        
        {/* Section Heading Tag */}
        <div className="mb-10 sm:mb-14 flex items-center gap-2.5 px-1 justify-start">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            My Tech Stack
          </p>
        </div>

        {/* Dynamic Fluid Grid Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className={`flex flex-col items-center justify-center bg-white border border-zinc-200/50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer ${skill.colorClass}`}
            >
              {/* Logo Wrapper Container */}
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-3 sm:mb-4 aspect-square">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} Icon`} 
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 select-none group-hover:scale-105" 
                />
              </div>
              
              {/* Skill Title Text */}
              <span className="text-[10px] sm:text-xs font-bold text-zinc-700 tracking-tight text-center leading-none">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}