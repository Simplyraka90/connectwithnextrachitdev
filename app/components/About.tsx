"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  Lightbulb, 
  BookOpen, 
  Users, 
  Puzzle,
  Sparkles
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.15 } 
  }
};

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function About() {
  const traits = [
    {
      icon: <Puzzle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7a604a]" />,
      title: "Problem Solver",
      subtitle: "Turn ideas into real solutions"
    },
    {
      icon: <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7a604a]" />,
      title: "Creative Thinker",
      subtitle: "Design with purpose"
    },
    {
      icon: <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7a604a]" />,
      title: "Continuous Learner",
      subtitle: "Always exploring new tech"
    },
    {
      icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7a604a]" />,
      title: "Team Player",
      subtitle: "Love to collaborate"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#FAF6EE] text-zinc-900 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden select-none font-sans"
    >
      {/* Background Soft Warm Glows */}
      <div className="absolute top-1/4 left-[-5%] h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full blur-[120px] sm:blur-[160px] bg-[#ebdcd0]/70 pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full blur-[130px] sm:blur-[170px] bg-[#e3d0c0]/60 pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(122,96,74,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(122,96,74,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          
          {/* ================= LEFT COLUMN: ABOUT ME INFO ================= */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5 text-left">
            
            {/* Top Pill Badge */}
            <motion.div variants={elementVariants}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebdcd0]/70 border border-[#d8c2b1] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5a4433] shadow-xs">
                01 • ABOUT ME
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              variants={elementVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 leading-[1.12]"
            >
              More Than Just <br />
              a <span className="italic font-serif text-[#7a604a]">Developer.</span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={elementVariants} className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed space-y-2 max-w-md">
              <p>
                I'm Rachit Rathore, a passionate Frontend Developer with a focus on creating clean, responsive and modern web experiences.
              </p>
              <p>
                I enjoy working with React, Next.js and exploring new technologies to build better digital products.
              </p>
            </motion.div>

            {/* 4 Feature Traits */}
            <motion.div variants={elementVariants} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3 w-full my-2">
              {traits.map((trait, idx) => (
                <div key={idx} className="flex flex-col items-start p-2.5 rounded-2xl bg-white/80 border border-[#ebdcd0] shadow-xs backdrop-blur-xs">
                  <div className="p-1.5 rounded-xl bg-[#ebdcd0]/60 mb-1.5">
                    {trait.icon}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-900 leading-tight">{trait.title}</span>
                  <span className="text-[9px] text-zinc-500 font-normal leading-tight mt-0.5">{trait.subtitle}</span>
                </div>
              ))}
            </motion.div>

            {/* Action CTA Button */}
            <motion.a
              variants={elementVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3.5 text-xs sm:text-sm font-medium text-white shadow-lg hover:bg-zinc-800 transition-all duration-300"
            >
              <span>Know More About Me</span>
              <ArrowRight className="h-4 w-4 text-zinc-300" />
            </motion.a>

          </div>


          {/* ================= CENTER COLUMN: EXACT IMAGE BLOB FRAME & ORBIT WAVE ================= */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-8 lg:my-0">
            <div className="relative flex items-center justify-center w-full max-w-[360px] sm:max-w-[440px] aspect-square">
              
              {/* === BACKGROUND THIN CIRCLE ORBIT ARC === */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <svg className="w-[115%] h-[115%] text-[#c2ad9a]" viewBox="0 0 200 200" fill="none">
                  {/* Thin outer orbit line */}
                  <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                  
                  {/* Black orbital dot on the left */}
                  <circle cx="10" cy="100" r="4.5" fill="#111111" />

                  {/* Top-left small diamond sparkles */}
                  <path d="M35 30 L37 35 L42 37 L37 39 L35 44 L33 39 L28 37 L33 35 Z" fill="#7a604a" opacity="0.7" />
                  <path d="M22 45 L23 48 L26 49 L23 50 L22 53 L21 50 L18 49 L21 48 Z" fill="#7a604a" opacity="0.5" />
                </svg>
              </div>

              {/* === ORGANIC FLUID BLOB PHOTO FRAME (Matching Screenshot) === */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10 w-[270px] h-[310px] sm:w-[320px] sm:h-[370px] overflow-hidden bg-[#e3d0c0] shadow-[0_20px_50px_rgba(122,96,74,0.15)]"
                style={{
                  // Custom organic blob morphing shape exactly like screenshot
                  borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%"
                }}
              >
                <img 
                  src="/rachitt.png" 
                  alt="Rachit Rathore" 
                  className="w-full h-full object-cover object-top filter grayscale contrast-105"
                />
              </motion.div>

              {/* === FLOATING TOP RIGHT BADGE === */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 -right-2 sm:top-8 sm:-right-4 z-20 flex items-center gap-3 bg-[#FCFAf5] backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
              >
                <div className="text-left">
                  <p className="text-xs font-extrabold text-zinc-900 leading-tight">Frontend</p>
                  <p className="text-[11px] text-zinc-500 font-medium leading-tight">Developer</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#eee2d5] flex items-center justify-center text-zinc-800 text-xs shadow-inner">
                  ◆
                </div>
              </motion.div>

              {/* === FLOATING BOTTOM RIGHT BADGE (With Avatars & Project Counter) === */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 right-[-10px] sm:right-[-20px] z-20 flex items-center gap-3 bg-[#FCFAf5] backdrop-blur-md px-4 py-3 rounded-2xl border border-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="text-left">
                  <p className="text-[11px] text-zinc-500 font-medium leading-snug">Turning Ideas</p>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">into Reality.</p>
                </div>
                
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-zinc-300">
                    <img src="/rachitt.png" alt="Project 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-zinc-400">
                    <img src="/rachitt.png" alt="Project 2" className="w-full h-full object-cover filter grayscale" />
                  </div>
                </div>

                <span className="text-[11px] font-extrabold text-zinc-900 whitespace-nowrap">
                  10+ <span className="text-[9px] text-zinc-500 font-normal">Projects</span>
                </span>
              </motion.div>

              {/* === HAND-DRAWN ANNOTATION & SIGNATURE === */}
              <div className="absolute right-[-30px] top-[48%] z-20 pointer-events-none hidden sm:block text-right">
                <span className="font-serif italic text-xl sm:text-2xl text-[#5a4433] transform -rotate-6 block leading-tight">
                  Rachit <br />
                  Rathore
                </span>
                {/* Curved Arrow Vector pointing to photo */}
                <svg className="w-10 h-10 text-[#7a604a] ml-auto mt-1 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M 4 20 Q 12 4 20 4 M 20 4 L 14 4 M 20 4 L 20 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </div>


          {/* ================= RIGHT COLUMN: EXPERIENCE TIMELINE ================= */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4 sm:gap-5 pl-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-[#ebdcd0] pt-8 lg:pt-0">
            
            {/* Top Pill Badge */}
            <motion.div variants={elementVariants}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebdcd0]/70 border border-[#d8c2b1] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5a4433] shadow-xs">
                02 • EXPERIENCE
              </span>
            </motion.div>

            {/* Sub-Title */}
            <motion.h3 variants={elementVariants} className="text-xl sm:text-2xl font-serif font-bold text-zinc-900">
              My Journey
            </motion.h3>

            {/* Vertical Timeline List */}
            <div className="relative pl-6 space-y-7 w-full">
              
              {/* Timeline Line */}
              <div className="absolute left-2.5 top-2 bottom-2 w-[1px] bg-[#d8c2b1]" />

              {/* Timeline Item 1: Internship */}
              <motion.div variants={elementVariants} className="relative group">
                <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#7a604a] border-2 border-white" />
                
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-white border border-[#ebdcd0] text-[#7a604a] shadow-xs">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Frontend Developer Intern
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-medium">Digital Folks Corporation (AICTE Approved)</p>
                    <p className="text-[10px] text-[#7a604a] font-semibold mt-0.5">Aug 2025 – Sep 2025</p>
                  </div>
                </div>

                <ul className="mt-2 text-[11px] text-zinc-600 font-light space-y-1 pl-1 list-disc list-inside">
                  <li>Worked on real-world projects using React.js and Next.js.</li>
                  <li>Collaborated with team to build responsive UI components.</li>
                  <li>Learned industry best practices and deployment.</li>
                </ul>
              </motion.div>

              {/* Timeline Item 2: Education */}
              <motion.div variants={elementVariants} className="relative group">
                <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#d8c2b1] border-2 border-white" />
                
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-white border border-[#ebdcd0] text-[#7a604a] shadow-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-medium">RR Group of Institute Modern Technology</p>
                    <p className="text-[10px] text-[#7a604a] font-semibold mt-0.5">Completed (2026)</p>
                  </div>
                </div>

                <ul className="mt-2 text-[11px] text-zinc-600 font-light space-y-1 pl-1 list-disc list-inside">
                  <li>Specialization: Computer Science & Design</li>
                  <li>Built multiple academic and personal projects.</li>
                  <li>Developed strong problem solving & web skills.</li>
                </ul>
              </motion.div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}