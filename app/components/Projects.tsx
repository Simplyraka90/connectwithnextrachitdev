"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from "lucide-react";

// नए और डायनेमिक साइज़ के साथ प्रोजेक्ट्स लिस्ट
const projects = [
  { 
    title: "E-Commerce Info", 
    desc: "Fast & responsive e-commerce platform built with modern performance standards.", 
    link: "https://infoecom.vercel.app/", 
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop", 
    tag: "E-Commerce",
    span: "lg:col-span-8 lg:row-span-2" 
  },
  { 
    title: "Softye Platform", 
    desc: "Modern software solutions & business interfaces.", 
    link: "https://softye-befbu.vercel.app/", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", 
    tag: "SaaS",
    span: "lg:col-span-4 lg:row-span-1" 
  },
  { 
    title: "Lite Krone", 
    desc: "Business digital interface & dashboard.", 
    link: "https://litekrone.netlify.app/", 
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop", 
    tag: "Dashboard",
    span: "lg:col-span-4 lg:row-span-1" 
  },
  { 
    title: "Wardador PP", 
    desc: "Optimized web application with advanced user experience.", 
    link: "https://wardadorpp.vercel.app/", 
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop", 
    tag: "Web App",
    span: "lg:col-span-4 lg:row-span-2" 
  },
  { 
    title: "Qorva Tech", 
    desc: "Tech service showcase portal.", 
    link: "https://qorvatech-demo.netlify.app/", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", 
    tag: "Tech",
    span: "lg:col-span-4 lg:row-span-1" 
  },
  { 
    title: "Noida Import", 
    desc: "Logistics & global import portal.", 
    link: "https://noidaimportdemo.vercel.app/", 
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", 
    tag: "Logistics",
    span: "lg:col-span-4 lg:row-span-1" 
  },
  { 
    title: "Connect Rachiit", 
    desc: "Personal portfolio and interactive creator space.", 
    link: "https://connectwithrachiit.vercel.app/", 
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop", 
    tag: "Portfolio",
    span: "lg:col-span-8 lg:row-span-1" 
  },
  { 
    title: "Skyview Hotel", 
    desc: "Luxury room booking and reservation system.", 
    link: "https://skyviecoin.netlify.app/", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", 
    tag: "Booking",
    span: "lg:col-span-6 lg:row-span-1" 
  },
  {
    title: "SkillSwap",
    desc: "Community-driven peer skill sharing platform.",
    link: "https://swapwayskillcom.vercel.app/",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tag: "Platform",
    span: "lg:col-span-6 lg:row-span-1"
  }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white shadow-xl shadow-sky-950/5 hover:shadow-2xl hover:border-sky-400 transition-all duration-500 ${project.span} flex flex-col justify-between min-h-[340px] sm:min-h-[380px] p-2`}
    >
      {/* Top Floating Badge & External Icon */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200/80 text-xs font-bold text-zinc-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          {project.tag}
        </span>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto h-11 w-11 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 flex items-center justify-center text-zinc-800 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 shadow-md group-hover:scale-105"
        >
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
        </a>
      </div>

      {/* Background Image Container with Smooth Zoom */}
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[2.2rem]">
        <img 
          src={project.img} 
          alt={`${project.title} Preview`} 
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 select-none" 
        />
        {/* Soft Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      </div>
      
      {/* Spacer for top badges */}
      <div className="w-full h-16" />

      {/* Bottom Content Area */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 font-medium max-w-md leading-relaxed">
          {project.desc}
        </p>

        {/* Bottom Quick Action Strip */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
            Live Preview Available
          </span>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-sky-300 transition-colors"
          >
            <span>Explore Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#F4F5F8] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-[-10%] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full blur-[140px] bg-sky-400/15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full blur-[140px] bg-indigo-400/15 pointer-events-none" />

      {/* Modern Dual-Layered Moving SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <motion.svg 
          className="relative block w-full h-[120px] sm:h-[180px]"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <motion.path 
            d="M0,30 C150,90 350,-20 500,40 C650,100 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="url(#projects-wave-grad)"
            opacity="0.45"
            animate={{
              d: [
                "M0,30 C150,90 350,-20 500,40 C650,100 900,10 1200,40 L1200,120 L0,120 Z",
                "M0,60 C200,10 400,90 600,30 C800,-40 1000,90 1200,50 L1200,120 L0,120 Z",
                "M0,30 C150,90 350,-20 500,40 C650,100 900,10 1200,40 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="projects-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-bold uppercase tracking-[0.3em] text-sky-600 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-sky-500" /> Featured Work
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none"
            >
              Things I've Built.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} 
            className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed font-medium"
          >
            A carefully crafted selection of modern web applications, scalable platforms, and intuitive interfaces.
          </motion.p>
        </div>
        
        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}