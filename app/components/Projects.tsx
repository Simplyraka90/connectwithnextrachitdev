"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React from "react";

const projects = [
  { title: "E-Commerce Info", desc: "Fast & responsive platform.", link: "https://infoecom.vercel.app/", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { title: "Softye Platform", desc: "Modern software solutions.", link: "https://softye-befbu.vercel.app/", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Lite Krone", desc: "Business digital interface.", link: "https://litekrone.netlify.app/", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Wardador PP", desc: "Optimized web application.", link: "https://wardadorpp.vercel.app/", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { title: "Qorva Tech", desc: "Tech service showcase.", link: "https://qorvatech-demo.netlify.app/", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { 
    title: "Noida Import", 
    desc: "Logistics & import portal.", 
    link: "https://noidaimportdemo.vercel.app/", 
    img: "/Screenshot 2026-05-26 153232.png", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { title: "Connect Rachiit", desc: "Personal portfolio.", link: "https://connectwithrachiit.vercel.app/", img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Skyview Hotel", desc: "Luxury booking system.", link: "https://skyviecoin.netlify.app/", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { title: "Ryaw Travel", desc: "Travel exploration.", link: "https://ryawtravelwebcom.netlify.app/", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionTemplate`${y}deg`, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useMotionTemplate`${x}deg`, { stiffness: 100, damping: 20 });

  const handleInteraction = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    x.set(((clientX - rect.left) / rect.width - 0.5) * 8);
    y.set(((clientY - rect.top) / rect.height - 0.5) * -8);
  };

  return (
    <motion.div
      onMouseMove={handleInteraction}
      onTouchMove={handleInteraction}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onTouchEnd={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-lg transition-all hover:shadow-2xl hover:border-zinc-300 ${project.span} min-h-[300px]`}
    >
      <img 
        src={project.img} 
        alt={project.title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end transition-opacity duration-500">
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="text-zinc-200 text-sm mb-4">{project.desc}</p>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-fit rounded-full bg-white px-6 py-2.5 text-xs font-bold text-black hover:bg-sky-500 hover:text-white transition-all transform hover:scale-105 z-20 relative"
        >
          View Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FAFAFC] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-4">Portfolio</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter">Things I've Built.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-500 mt-6 text-lg max-w-lg">A collection of modern applications, immersive interfaces, and scalable systems.</motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 [perspective:1000px]">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}