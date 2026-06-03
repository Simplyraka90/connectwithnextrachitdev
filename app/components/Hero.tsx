"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText, Code2, Terminal } from "lucide-react";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#FAFAFC] px-4 sm:px-6 md:px-8 pt-28 pb-16 lg:py-32">
      
      {/* Dynamic Cinematic Ambient Lighting */}
      <div className="absolute top-1/4 right-[-10%] h-[250px] w-[250px] sm:h-[600px] sm:w-[600px] rounded-full blur-[70px] sm:blur-[140px] bg-sky-400/15 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] rounded-full blur-[60px] sm:blur-[120px] bg-indigo-400/10 pointer-events-none" />

      {/* PREMIUM HIGH-TECH BACKGROUND SVGs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Left Side: Premium 3D Tech Isometric Grid */}
        <div className="absolute top-[15%] left-[-5%] opacity-5 sm:opacity-20 text-sky-400 mix-blend-multiply">
          <svg width="200" height="200" className="sm:w-[400px] sm:h-[400px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
            <path d="M0,25 L100,75 M0,50 L100,100 M0,0 L100,50 M0,75 L50,100" />
            <path d="M0,75 L100,25 M0,100 L100,50 M0,50 L100,0 M0,25 L50,0" />
          </svg>
        </div>

        {/* Center-Left: Floating 3D Wireframe Cube */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[20%] left-[42%] text-sky-400 opacity-60 hidden xl:block"
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 7v10l10 5V12L2 7z" fill="rgba(56, 189, 248, 0.05)" />
            <path d="M22 7v10l-10 5V12l10-5z" />
            <path d="M7 9.5l10 5" strokeDasharray="2 2" />
          </svg>
        </motion.div>

        {/* Top Right: Floating 3D Cylinder / Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-[12%] right-[5%] h-16 w-16 sm:h-32 sm:w-32 rounded-full border border-dashed border-sky-300/60 flex items-center justify-center hidden sm:flex"
        >
          <div className="h-10 w-10 sm:h-24 sm:w-24 rounded-full border border-sky-400/30 border-double p-1 sm:p-2">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-sky-400/10 to-transparent" />
          </div>
        </motion.div>

        {/* Bottom Left: Tech Dot Matrix */}
        <div className="absolute bottom-[5%] left-[3%] grid grid-cols-6 gap-2 opacity-10 sm:opacity-30 text-sky-400">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-current" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl w-full items-center gap-10 lg:grid-cols-12 z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full"
        >
          {/* Animated Pill Tag */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex max-w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-zinc-800 uppercase flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-sky-500" />
              Frontend • React • Next.js Dev
            </span>
          </motion.div>

          {/* Title - Fully Fluid Typography */}
          <motion.h1 
            variants={fadeInUp}
            className="mt-4 sm:mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#111113] select-none leading-[1.1] sm:leading-[1.05]"
          >
            Hi, I'm <br className="hidden lg:block" />
            <span className="relative inline-block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer py-1">
              Rachit
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg font-medium leading-relaxed text-zinc-600 px-2 sm:px-0"
          >
            A creator driven by crafting striking, robust, and unforgettable{" "}
            <span className="font-semibold text-sky-500 border-b-2 border-sky-100 pb-0.5 transition-all duration-300 hover:border-sky-400">
              digital experiences.
            </span>
          </motion.p>

          {/* UPGRADED CTAs - Stacked on Mobile, Inline on Desktop */}
          <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-xl shadow-zinc-950/10 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900 w-full sm:w-auto"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/public/CVRachit.pdf" 
              download="Rachit_Resume.pdf"
              className="group flex items-center justify-center gap-2 rounded-full border border-zinc-200/80 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-zinc-800 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-sky-400 hover:bg-zinc-50 w-full sm:w-auto"
            >/
              Download CV
            </a>
          </motion.div>

          {/* Scroll Indicator & Mini Terminal */}
          <motion.div 
            variants={fadeInUp}
            className="mt-10 sm:mt-12 hidden md:flex items-center gap-4 text-zinc-400 select-none w-full justify-center lg:justify-start"
          >
            <div className="flex h-10 w-6 flex-shrink-0 items-start justify-center rounded-full border-2 border-zinc-300 p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="h-2 w-1.5 rounded-full bg-sky-500"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest hidden lg:inline">Scroll Down</span>
            
            {/* Live Terminal Code Block */}
            <div className="ml-2 flex flex-col gap-0.5 text-[10px] font-mono leading-none text-zinc-400 bg-white border border-zinc-200/80 p-3 rounded-xl shadow-sm max-w-xs transition-all duration-300 hover:border-sky-200 text-left">
              <div className="flex items-center gap-1 mb-1 opacity-60">
                <span className="text-zinc-400 text-[8px] uppercase tracking-wider font-sans font-bold">Terminal</span>
              </div>
              <span><span className="text-indigo-500">const</span> engineer = {"{"}</span>
              <span className="pl-3">name: <span className="text-sky-600">'Rachit'</span>,</span>
              <span className="pl-3">role: <span className="text-emerald-600">'Frontend'</span>,</span>
              <span className="pl-3 flex items-center gap-0.5">status: <span className="text-amber-600">'Building'</span><span className="h-3 w-1 bg-sky-500 inline-block animate-pulse" /></span>
              <span>{"}"};</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CHARACTER & SOCIALS */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2 w-full px-4 sm:px-6">
          <div className="relative">
            
            {/* Circle Wrapper Container - Scaled Safely for All Screens */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[240px] w-[240px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] items-center justify-center rounded-full bg-gradient-to-b from-zinc-100 to-zinc-50 border border-zinc-200/40 shadow-inner"
            >
              {/* Profile Image */}
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src="/rachuu.png" 
                alt="Rachit Portfolio"
                className="absolute z-10 bottom-0 h-[105%] w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.05)]"
              />

              {/* Floating Badge 1: Code Icon */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-[12%] left-[-5px] sm:left-[-10px] rounded-xl sm:rounded-2xl border border-sky-100 bg-white/95 p-2 sm:p-3 shadow-xl backdrop-blur-xl text-sky-500 z-20 cursor-pointer"
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              
              {/* Floating Badge 2: Live Code Component Preview */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="absolute bottom-[12%] right-[-10px] sm:right-[-20px] rounded-2xl border border-zinc-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl shadow-zinc-950/5 z-20 font-mono text-[9px] sm:text-[10px] text-zinc-500 hidden sm:block w-36 sm:w-40 border-l-4 border-l-sky-500 cursor-default"
              >
                <div className="flex items-center gap-1.5 border-b border-zinc-100 pb-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[8px] text-zinc-400 ml-auto">Stack.tsx</span>
                </div>
                <p className="text-sky-600">{"<RachitDev>"}</p>
                <p className="pl-2.5 text-indigo-500">{"<React />"}</p>
                <p className="pl-2.5 text-blue-500">{"<NextJS />"}</p>
                <p className="pl-2.5 text-teal-500">{"<Tailwind />"}</p>
                <p className="text-sky-600">{"</RachitDev>"}</p>
              </motion.div>
            </motion.div>

            {/* ULTRA-CLEAN SIDEBAR SOCIALS - Fixed responsive positioning */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute right-[-10px] sm:right-[-20px] lg:right-[-30px] top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3.5 sm:gap-5 rounded-full border border-zinc-200/80 bg-white/90 px-2 py-4 sm:px-3 sm:py-6 shadow-lg backdrop-blur-xl"
            >
              <a href="https://github.com/Simplyraka90" target="_blank" rel="noreferrer" className="text-zinc-500 transition-colors hover:text-sky-500">
                <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/rachit-rathore-5b76b132b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="text-zinc-500 transition-colors hover:text-blue-600">
                <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-zinc-500 transition-colors hover:text-sky-400">
                <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <div className="h-[1px] w-3 sm:w-4 bg-zinc-200" />
              <a href="#about" className="text-zinc-500 transition-colors hover:text-sky-500" title="View CV Details">
                <FileText className="h-4 w-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}