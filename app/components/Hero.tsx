"use client";

import React, { useState } from "react";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, FileText, Terminal, Sparkles, Code, Cpu, Globe } from "lucide-react";

export default function Hero() {
  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#FCFBF7] px-4 sm:px-6 md:px-8 pt-28 pb-16 lg:py-32 text-zinc-900 font-sans select-none">
      
      {/* 1. ULTRA LIGHT AMBIENT GLOWS WITH SUBTLE BLUE TINT */}
      <div className="absolute top-1/4 right-[-8%] h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] rounded-full blur-[120px] sm:blur-[170px] bg-gradient-to-br from-[#0284c7]/10 via-[#38bdf8]/5 to-transparent pointer-events-none opacity-80 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[300px] w-[300px] sm:h-[550px] sm:w-[550px] rounded-full blur-[100px] sm:blur-[150px] bg-gradient-to-tr from-[#0f172a]/5 to-transparent pointer-events-none" />

      {/* 2. BACKGROUND SVGS & GRAPHICS: BLACK WITH SOFT BLUE TEXTURE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Crisp Modern Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating Developer Code Badge */}
        <motion.div 
          animate={{ y: [0, -16, 0], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[18%] left-[44%] text-slate-900 opacity-80 hidden xl:flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-900/10 shadow-sm"
        >
          <Code className="w-4 h-4 text-sky-600" />
          <span className="font-mono text-xs font-bold text-slate-900">&lt;Developer /&gt;</span>
        </motion.div>

        {/* Isometric Grid Mesh */}
        <div className="absolute top-[10%] left-[-3%] opacity-20 text-slate-950">
          <svg width="220" height="220" className="sm:w-[420px] sm:h-[420px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
            <path d="M0,25 L100,75 M0,50 L100,100 M0,0 L100,50 M0,75 L50,100" />
            <path d="M0,75 L100,25 M0,100 L100,50 M0,50 L100,0 M0,25 L50,0" />
          </svg>
        </div>

        {/* Orbit Rings SVG in Black + Blue Accent */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="absolute top-[8%] right-[8%] h-24 w-24 sm:h-44 sm:w-44 rounded-full border border-dashed border-slate-900/20 flex items-center justify-center hidden sm:flex pointer-events-none"
        >
          <div className="h-16 w-16 sm:h-32 sm:w-32 rounded-full border border-sky-500/30 border-double p-2">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-sky-400/10 via-slate-900/5 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-7xl w-full items-center gap-12 lg:grid-cols-12 z-10">
        
        {/* LEFT CONTENT AREA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full"
        >
          {/* Tag Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex max-w-fit items-center gap-2.5 rounded-full border border-slate-900/10 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-600"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-900 uppercase flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              AVAILABLE FOR FREELANCE & FULL-TIME
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="mt-5 sm:mt-7 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-zinc-900 leading-[1.08]"
          >
            Hi, I'm <br className="hidden lg:block" />
            <span className="relative inline-block text-slate-900 font-serif underline decoration-sky-400/50 underline-offset-8">
              Rachit Rathore
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p 
            variants={fadeInUp}
            className="mt-5 max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed text-zinc-600 px-2 sm:px-0"
          >
            Frontend Developer specializing in <span className="font-semibold text-zinc-900">React.js</span> & <span className="font-semibold text-zinc-900">Next.js</span>, crafting pixel-perfect, high-performance web applications with immersive interactive experiences.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-xs sm:text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800 active:scale-95 w-full sm:w-auto"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sky-400" />
            </a>

            <a
              href="/Rachit udaannn.pdf" 
              download="/Rachit udaannn.pdf"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-900/15 bg-white px-8 py-4 text-xs sm:text-sm font-semibold text-zinc-900 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-sky-500 hover:bg-white active:scale-95 w-full sm:w-auto"
            >
              <span>Get Resume</span>
              <FileText className="h-4 w-4 text-sky-600 transition-transform duration-300 group-hover:rotate-6" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 hidden md:flex items-center gap-3.5 text-zinc-500 select-none w-full justify-center lg:justify-start"
          >
            <div className="flex h-9 w-5 flex-shrink-0 items-start justify-center rounded-full border-2 border-slate-900/20 p-1">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-sky-600"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: 3D INTERACTIVE CARD */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2 w-full px-4 sm:px-6">
          <div className="relative">
            
            {/* Background Soft Glow */}
            <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-tr from-sky-200/40 via-slate-200/30 to-transparent blur-xl opacity-80 pointer-events-none" />

            {/* 3D Interactive Card */}
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[340px] w-[270px] sm:h-[440px] sm:w-[350px] md:h-[470px] md:w-[390px] items-center justify-center rounded-[2.8rem] bg-gradient-to-b from-white via-[#f1f5f9]/50 to-[#e2e8f0]/60 border-4 border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] cursor-pointer overflow-hidden group"
            >
              {/* Profile Image */}
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src="/rachuu.png" 
                alt="Rachit Rathore"
                className="absolute z-10 bottom-0 h-[103%] w-auto object-cover pointer-events-none"
              />

              {/* Inner Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-slate-900/10 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-sky-600" />
                <span className="text-[11px] font-bold text-zinc-900">React Specialist</span>
              </div>
            </motion.div>

            {/* FLOATING BADGE 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-right-6 z-30 flex items-center gap-2.5 bg-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-900/10 shadow-lg"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 text-sky-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Clean Code</p>
                <p className="text-xs font-extrabold text-zinc-900">Next.js 14+</p>
              </div>
            </motion.div>

            {/* FLOATING BADGE 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 z-30 flex items-center gap-2.5 bg-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-900/10 shadow-lg"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 text-sky-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Location</p>
                <p className="text-xs font-extrabold text-zinc-900">Delhi NCR, India</p>
              </div>
            </motion.div>

            {/* FLOATING SOCIAL BAR */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute right-[-18px] sm:right-[-28px] top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4 rounded-full border border-slate-900/10 bg-white px-3 py-5 shadow-xl backdrop-blur-md"
            >
              <a href="https://github.com/Simplyraka90" target="_blank" rel="noreferrer" className="text-zinc-600 transition-colors hover:text-sky-600 hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/rachit-rathore-5b76b132b" target="_blank" rel="noreferrer" className="text-zinc-600 transition-colors hover:text-sky-600 hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <div className="h-[1px] w-4 bg-slate-900/10" />
              <a href="#about" className="text-zinc-600 transition-colors hover:text-sky-600 hover:scale-110" title="View CV">
                <FileText className="h-4 w-4" />
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}