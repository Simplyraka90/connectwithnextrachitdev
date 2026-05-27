"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

// Bento Grid के लिए spans को 2-कॉलम और 3-कॉलम ग्रिड के हिसाब से परफेक्टली अलाइन किया गया है
const projects = [
  { title: "E-Commerce Info", desc: "Fast & responsive platform.", link: "https://infoecom.vercel.app/", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { title: "Softye Platform", desc: "Modern software solutions.", link: "https://softye-befbu.vercel.app/", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Lite Krone", desc: "Business digital interface.", link: "https://litekrone.netlify.app/", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Wardador PP", desc: "Optimized web application.", link: "https://wardadorpp.vercel.app/", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { title: "Qorva Tech", desc: "Tech service showcase.", link: "https://qorvatech-demo.netlify.app/", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Noida Import", desc: "Logistics & import portal.", link: "https://noidaimportdemo.vercel.app/", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Connect Rachiit", desc: "Personal portfolio.", link: "https://connectwithrachiit.vercel.app/", img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
  { title: "Skyview Hotel", desc: "Luxury booking system.", link: "https://skyviecoin.netlify.app/", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Ryaw Travel", desc: "Travel exploration.", link: "https://ryawtravelwebcom.netlify.app/", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(true);

  // मोबाइल टच डिटेक्ट करने के लिए ताकि स्क्रॉलिंग लॉक न हो
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const rotateX = useSpring(useMotionTemplate`${y}deg`, { stiffness: 100, damping: 22 });
  const rotateY = useSpring(useMotionTemplate`${x}deg`, { stiffness: 100, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * -10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: isMobile ? 0 : rotateX, 
        rotateY: isMobile ? 0 : rotateY, 
        transformStyle: "preserve-3d" 
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border border-zinc-200/60 bg-white shadow-md hover:shadow-2xl transition-all duration-300 ${project.span} min-h-[280px] sm:min-h-[320px] w-full`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <img 
          src={project.img} 
          alt={`${project.title} Preview`} 
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none" 
        />
      </div>
      
      {/* Premium Dark Vignette Overlay for High Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-6 sm:p-8 flex flex-col justify-end z-10">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{project.title}</h3>
        <p className="text-zinc-200/90 text-xs sm:text-sm mt-1 mb-4 font-medium max-w-xs">{project.desc}</p>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-fit rounded-full bg-white px-5 py-2.5 text-xs font-bold text-zinc-900 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-sm active:scale-95 z-20 relative"
        >
          View Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FAFAFC] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-sky-600 mb-2.5 sm:mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tighter leading-none"
          >
            Things I've Built.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.15 }} 
            className="text-zinc-500 mt-4 text-sm sm:text-base md:text-lg max-w-md md:max-w-lg leading-relaxed"
          >
            A collection of modern applications, immersive interfaces, and scalable systems.
          </motion.p>
        </div>
        
        {/* Bento Grid Layer Grid Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full [perspective:1000px]">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}