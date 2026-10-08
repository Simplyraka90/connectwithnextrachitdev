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

// Letter-by-letter spring animation
const mainTextContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05, 
      delayChildren: 0.3 
    },
  },
};

const mainTextLetter: Variants = {
  hidden: { y: "130%", opacity: 0, scale: 0.85, rotate: 4 },
  visible: {
    y: "0%",
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.34, 1.56, 0.64, 1] 
    },
  },
};

// Cinematic blur reveal animation
const subTextContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.015, 
      delayChildren: 1.1 
    },
  },
};

const subTextLetter: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.4, 
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
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* 1. WELCOME PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100vh",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f7f3ec] text-zinc-900 select-none px-4"
          >
            {/* Ambient Warm Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ebdcd0]/50 via-[#f7f3ec] to-[#f7f3ec] pointer-events-none" />

            <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto z-10">
              
              {/* Elegant Rotating SVG Loader */}
              <div className="relative mb-8 flex items-center justify-center">
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-16 h-16 text-[#7a604a]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" />
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="50 150" />
                </motion.svg>
                <div className="absolute w-4 h-4 rounded-full bg-[#7a604a]/80 animate-ping" />
              </div>

              {/* Tag Badge */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#7a604a] mb-5 font-semibold text-center bg-[#ebdcd0]/70 px-4 py-1.5 rounded-full border border-[#d8c2b1]"
              >
                React & Next.js Developer
              </motion.p>

              {/* Title Animation */}
              <motion.h1 
                variants={mainTextContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 text-3xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-center px-2 text-zinc-900"
              >
                {/* "Hi, I’m" */}
                <span className="flex overflow-hidden py-1">
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
                
                {/* "Rachit" */}
                <span className="flex overflow-hidden py-1 text-[#7a604a]">
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

              {/* Sub-text Animation */}
              <motion.div
                variants={subTextContainer}
                initial="hidden"
                animate="visible"
                className="mt-4 sm:mt-6 w-full flex justify-center px-4"
              >
                <motion.p
                  className="text-xs sm:text-sm text-zinc-600 font-light tracking-wide text-center max-w-md leading-relaxed"
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
            ? "py-3 bg-[#f7f3ec]/90 backdrop-blur-md border-b border-[#ebdcd0] shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: -8 }} transition={{ type: "spring", stiffness: 400 }}>
              <img src="/weblogg.png" alt="Logo" className="h-13 sm:h-13 w-auto object-contain" />
            </motion.div>
            <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-zinc-900">
              RACHIT
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center bg-white/80 p-1.5 rounded-full border border-[#ebdcd0] shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className="relative px-5 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-zinc-900 rounded-full"
              >
                {activeSection === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#ebdcd0] rounded-full shadow-inner"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 ${activeSection === link.name ? "text-[#5a4433] font-semibold" : ""}`}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden sm:flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-all duration-300 shadow-md"
          >
            Let's Talk <ArrowUpRight className="h-4 w-4" />
          </motion.a>

          {/* MOBILE MENU TRIGGER */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-zinc-800 hover:bg-[#ebdcd0]/50 rounded-full transition-colors border border-[#ebdcd0]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} className="text-zinc-900" /> : <Menu size={20} className="text-zinc-900" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#f7f3ec]/95 backdrop-blur-xl border-b border-[#ebdcd0] overflow-hidden absolute top-full left-0 w-full shadow-xl"
            >
              <div className="flex flex-col p-5 gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsOpen(false);
                    }} 
                    className={`text-base font-medium py-2.5 px-4 rounded-xl transition-all ${
                      activeSection === link.name 
                        ? "bg-[#ebdcd0] text-[#5a4433] font-semibold" 
                        : "text-zinc-700 hover:bg-white/60"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile View CTA */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex sm:hidden items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-medium text-white shadow-md mt-2"
                >
                  Let's Talk <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}