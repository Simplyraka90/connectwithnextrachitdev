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
  // Fix: Variants define ki taaki animate prop conflict na kare
  const floatVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section id="skills" className="bg-[#FAFAFC] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div variants={floatVariants} animate="animate" className="absolute top-[10%] left-[5%] text-zinc-300/50 font-mono text-2xl hidden md:block">{"<code />"}</motion.div>
        <motion.div variants={floatVariants} animate="animate" className="absolute bottom-[15%] right-[5%] text-zinc-300/50 font-mono text-4xl hidden lg:block">{"{ design }"}</motion.div>
        <motion.div variants={floatVariants} animate="animate" className="absolute top-[20%] right-[10%] text-zinc-300/50 font-mono text-xl hidden sm:block">{"import { skills }"}</motion.div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.3]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-800">My Tech Stack</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`flex flex-col items-center justify-center bg-white border border-zinc-200/60 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${skill.colorClass}`}
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-3 sm:mb-4">
                <img src={skill.logo} alt={skill.name} className="h-full w-full object-contain" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-700 tracking-tight text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}