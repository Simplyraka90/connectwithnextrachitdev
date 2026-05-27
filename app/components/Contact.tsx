"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

// 1. हेडिंग एनीमेशन वेरिएंट्स (लेटर-बाय-लेटर)
const titleContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const titleLetter: Variants = {
  hidden: { y: "110%", opacity: 0, rotate: 2 },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.34, 1.3, 0.64, 1] },
  },
};

// 2. पैरेंट कंटेनर एनीमेशन
const mainContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

// 3. इन्फो कार्ड्स के लिए एनीमेशन
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section id="contact" className="relative bg-[#FAFAFC] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-[-10%] h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] rounded-full blur-[100px] sm:blur-[130px] bg-blue-500/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] rounded-full blur-[100px] sm:blur-[130px] bg-sky-400/10 pointer-events-none" />

      {/* SVG Background Clean Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto z-10 w-full">
        
        {/* PREMIUM MASK REVEAL TITLE */}
        <div className="overflow-hidden mb-12 sm:mb-16 flex justify-center">
          <motion.h2 
            variants={titleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tighter text-center py-2 leading-none flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            <span className="inline-flex overflow-hidden whitespace-nowrap">
              {Array.from("Let's work").map((char, index) => (
                <motion.span key={`w1-${index}`} variants={titleLetter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex overflow-hidden text-blue-600 whitespace-nowrap">
              {Array.from("together.").map((char, index) => (
                <motion.span key={`w2-${index}`} variants={titleLetter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
        </div>

        {/* Grid Split Architecture */}
        <motion.div 
          variants={mainContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full"
        >
          
          {/* CONTACT DETAILS (LEFT SIDE) */}
          <div className="lg:col-span-5 space-y-6 w-full flex flex-col justify-start">
            <motion.p 
              variants={cardVariants}
              className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed max-w-md"
            >
              Have a project in mind? Feel free to reach out. I'd love to hear from you.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 w-full">
              {[
                { icon: <Mail size={18} />, text: "rachitrathour98@gmail.com", label: "Email", hoverColor: "hover:border-blue-200" },
                { icon: <Phone size={18} />, text: "+91 9140104754", label: "Phone", hoverColor: "hover:border-sky-200" },
                { icon: <MapPin size={18} />, text: "Delhi, India", label: "Location", hoverColor: "hover:border-indigo-200" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={cardVariants}
                  whileHover={isMobile ? {} : { x: 5, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex flex-row lg:items-center gap-3.5 p-4 bg-white border border-zinc-200/70 rounded-2xl shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] transition-all duration-300 ${item.hoverColor} group cursor-pointer w-full`}
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 h-fit flex items-center justify-center aspect-square">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">{item.label}</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-800 truncate group-hover:text-blue-600 transition-colors duration-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PREMIUM INTERACTIVE FORM (RIGHT SIDE) */}
          <motion.form 
            variants={cardVariants}
            whileHover={isMobile ? {} : { y: -2 }}
            className="lg:col-span-7 bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] space-y-4 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  autoComplete="name"
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-blue-600 focus:bg-white p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200" 
                />
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  autoComplete="email"
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-blue-600 focus:bg-white p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200" 
                />
              </div>
            </div>
            
            <div className="w-full">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-blue-600 focus:bg-white p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200" 
              />
            </div>
            
            <div className="w-full">
              <textarea 
                rows={4} 
                placeholder="Your Message..." 
                className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-blue-600 focus:bg-white p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 resize-none" 
              />
            </div>
            
            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="group w-full bg-zinc-900 text-white py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:bg-blue-600 transition-all duration-300 shadow-md shadow-zinc-900/5 flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Message 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                🚀
              </span>
            </motion.button>
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
}