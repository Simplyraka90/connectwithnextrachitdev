"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

// 1. हेडिंग एनीमेशन वेरिएंट्स (लेटर-बाय-लेटर)
const titleContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const titleLetter: Variants = {
  hidden: { y: "120%", opacity: 0, rotate: 3 },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }, // Custom Spring Curve
  },
};

// 2. पैरेंट कंटेनर (इन्फो कार्ड्स और फॉर्म को सिंक करने के लिए)
const mainContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

// 3. इन्फो कार्ड्स के लिए स्लाइड-इन एनीमेशन
const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// 4. फॉर्म के लिए स्मूथ पॉप-अप एनीमेशन
const formVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#FAFAFC] py-20 px-6 overflow-hidden">
      {/* Dynamic Background Glows for Ambience */}
      <div className="absolute top-1/4 right-[-10%] h-[350px] w-[350px] rounded-full blur-[130px] bg-blue-500/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] h-[350px] w-[350px] rounded-full blur-[130px] bg-sky-400/10 pointer-events-none" />

      {/* SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* TAFDA MASK REVEAL TITLE */}
        <div className="overflow-hidden mb-12 flex justify-center">
          <motion.h2 
            variants={titleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter text-center py-2"
          >
            <span className="flex mr-4">
              {Array.from("Let's work").map((char, index) => (
                <motion.span key={`word1-${index}`} variants={titleLetter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="flex text-blue-600">
              {Array.from("together.").map((char, index) => (
                <motion.span key={`word2-${index}`} variants={titleLetter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
        </div>

        <motion.div 
          variants={mainContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          
          {/* CONTACT DETAILS (LEFT SIDE) */}
          <div className="space-y-6">
            <motion.p 
              variants={cardVariants}
              className="text-md text-zinc-600 font-medium leading-relaxed max-w-md"
            >
              Have a project in mind? Feel free to reach out. I'd love to hear from you.
            </motion.p>
            
            <div className="grid gap-4 w-full">
              {[
                { icon: <Mail size={20} />, text: "rachitrathour98@gmail.com", label: "Email", hoverColor: "hover:border-blue-200" },
                { icon: <Phone size={20} />, text: "+91 9140104754", label: "Phone", hoverColor: "hover:border-sky-200" },
                { icon: <MapPin size={20} />, text: "Delhi, India", label: "Location", hoverColor: "hover:border-indigo-200" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={cardVariants}
                  whileHover={{ x: 6, scale: 1.01, boxShadow: "0 10px 20px -10px rgba(0,0,0,0.04)" }}
                  className={`flex items-center gap-4 p-4 bg-white border-2 border-zinc-200/80 rounded-2xl shadow-sm transition-colors duration-300 ${item.hoverColor} group cursor-pointer`}
                >
                  <motion.div 
                    whileHover={{ rotate: [-10, 10, -5, 0], scale: 1.05 }}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PREMIUM INTERACTIVE FORM (RIGHT SIDE) */}
          <motion.form 
            variants={formVariants}
            whileHover={{ y: -2, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
            className="bg-white p-6 md:p-8 rounded-3xl border-2 border-zinc-200 shadow-xl shadow-zinc-200/30 space-y-4 transition-shadow duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white border-2 border-zinc-200 focus:border-blue-600 p-4 rounded-xl text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white border-2 border-zinc-200 focus:border-blue-600 p-4 rounded-xl text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
            </div>
            
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-white border-2 border-zinc-200 focus:border-blue-600 p-4 rounded-xl text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 shadow-inner" 
            />
            
            <textarea 
              rows={4} 
              placeholder="Your Message..." 
              className="w-full bg-white border-2 border-zinc-200 focus:border-blue-600 p-4 rounded-xl text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 shadow-inner resize-none" 
            />
            
            {/* Submit Button with Spring Hover & Icon Motion */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-zinc-900/10 hover:shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              Send Message 
              <motion.span 
                className="inline-block"
                variants={{
                  hover: { x: [0, 4, 0], y: [0, -4, 0], transition: { repeat: Infinity, duration: 0.8 } }
                }}
                whileHover="hover"
              >
                🚀
              </motion.span>
            </motion.button>
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
}