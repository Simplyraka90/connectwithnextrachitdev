"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// 1. "Hi, I'm Rachit" - तगड़ा लेटर-बाय-लेटर स्प्रिंग एनीमेशन
const mainTextContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05, 
      delayChildren: 0.4 
    },
  },
};

const mainTextLetter: Variants = {
  hidden: { y: "130%", opacity: 0, scale: 0.8, rotate: 5 },
  visible: {
    y: "0%",
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.34, 1.56, 0.64, 1] // Custom BackOut Elastic/Spring Bezier 
    },
  },
};

// 2. सब-टेक्स्ट के लिए स्मूथ सिनेमैटिक ब्लर रिवील एनीमेशन
const subTextContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.015, 
      delayChildren: 1.3 
    },
  },
};

const subTextLetter: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    },
  },
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // 3.5 सेकंड का टाइमर ताकि हैवी और तगड़ा एनीमेशन बिना किसी जल्दबाजी के पूरा दिखे
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* SCOPED CSS FOR THE UIVERSE LOADER */}
      <style jsx>{`
        .uiverse-loader {
          width: 44.8px;
          height: 44.8px;
          position: relative;
          background: radial-gradient(11.2px, currentColor 94%, #0000);
        }

        .uiverse-loader:before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(10.08px at bottom right, #0000 94%, currentColor) top left,
                      radial-gradient(10.08px at bottom left, #0000 94%, currentColor) top right,
                      radial-gradient(10.08px at top right, #0000 94%, currentColor) bottom left,
                      radial-gradient(10.08px at top left, #0000 94%, currentColor) bottom right;
          background-size: 22.4px 22.4px;
          background-repeat: no-repeat;
          animation: loader-anim 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
        }

        @keyframes loader-anim {
          33% {
            inset: -11.2px;
            transform: rotate(0deg);
          }
          66% {
            inset: -11.2px;
            transform: rotate(90deg);
          }
          100% {
            inset: 0;
            transform: rotate(90deg);
          }
        }
      `}</style>

      {/* 1. WELCOME PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100vh",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-white select-none"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_60%)]" />

            <div className="relative flex flex-col items-center w-full max-w-2xl px-4">
              
              {/* UIVERSE LOADER */}
              <div className="uiverse-loader text-sky-400 mb-8" />

              {/* Small Tag - Top Skill Intro */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 font-bold text-center bg-zinc-900/50 px-4 py-1.5 rounded-full border border-zinc-800/60"
              >
                React & Next.js Developer
              </motion.p>

              {/* Mask Revealed Title Animation - TAFDA SPRING LOOK */}
              <motion.h1 
                variants={mainTextContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-x-3 text-4xl md:text-6xl font-black tracking-tighter text-center px-4"
              >
                {/* "Hi, I’m" Block */}
                <span className="flex overflow-hidden py-2 text-zinc-400">
                  {Array.from("Hi, I’m").map((char, index) => (
                    <motion.span 
                      key={`greet-${index}`} 
                      variants={mainTextLetter}
                      className="inline-block origin-bottom"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                
                {/* "Rachit" Block */}
                <span className="flex overflow-hidden py-2 bg-gradient-to-r from-zinc-100 via-zinc-200 to-sky-400 bg-clip-text text-transparent">
                  {Array.from("Rachit").map((char, index) => (
                    <motion.span 
                      key={`name-${index}`} 
                      variants={mainTextLetter}
                      className="inline-block origin-bottom"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              {/* Advanced Cinematic Sub-text Animation - BLUR REVEAL */}
              <motion.div
                variants={subTextContainer}
                initial="hidden"
                animate="visible"
                className="mt-6 w-full flex justify-center"
              >
                <motion.p
                  className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide text-center max-w-md leading-relaxed"
                >
                  {Array.from("Crafting modern, scalable and immersive web experiences.").map((char, index) => (
                    <motion.span key={`sub-${index}`} variants={subTextLetter} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isLoading ? -100 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 z-[50] w-full transition-all duration-500 ${
          scrolled 
            ? "py-3 bg-white/70 backdrop-blur-2xl border-b border-zinc-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring", stiffness: 300 }}>
               <img src="/weblogg.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
            </motion.div>
            <span className="text-xl font-black tracking-tighter text-zinc-950">RACHIT</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center bg-zinc-100/50 p-1.5 rounded-full border border-zinc-200/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className="relative px-5 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-black rounded-full"
              >
                {activeSection === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden sm:flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600 transition-all duration-300 shadow-xl shadow-sky-500/10"
          >
            Let's Talk <ArrowUpRight className="h-4 w-4" />
          </motion.a>

          {/* MOBILE MENU TRIGGER */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-zinc-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-b border-zinc-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-medium text-zinc-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}