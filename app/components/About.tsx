"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Code2, Users, Trophy, Download } from "lucide-react";

// मुख्य कंटेनर के लिए जो सब बच्चों को सिंक में लाएगा
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

// हेडिंग के अक्षरों के लिए रिवील एनीमेशन
const headingContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 }
  }
};

const headingLetter: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// लेफ्ट साइड के कंटेंट एलिमेंट्स के लिए एनीमेशन
const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// राइट साइड के स्टेट्स कार्ड्स के लिए तगड़ा स्प्रिंग/बाउंस एनीमेशन
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="relative flex min-h-screen w-full items-center justify-center bg-[#FAFAFC] px-4 py-16 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-[-10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full blur-[80px] sm:blur-[120px] bg-sky-400/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full blur-[80px] sm:blur-[120px] bg-indigo-400/10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full z-10 flex flex-col justify-center">
        
        {/* TOP HEADING SECTION WITH MASK REVEAL */}
        <div className="mb-8 sm:mb-12 md:mb-14 text-left select-none">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400"
          >
            About Me
          </motion.p>
          
          <motion.h2 
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-black tracking-tight text-[#111113] sm:text-5xl md:text-6xl leading-[1.2] sm:leading-[1.15]"
          >
            <span className="flex flex-wrap overflow-hidden py-0.5 sm:py-1">
              {Array.from("Crafting premium").map((char, i) => (
                <motion.span key={i} variants={headingLetter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="flex flex-wrap overflow-hidden py-0.5 sm:py-1">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent font-black mr-2 sm:mr-3">
                {Array.from("React & Next.js").map((char, i) => (
                  <motion.span key={i} variants={headingLetter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="flex flex-wrap">
                {Array.from("interfaces.").map((char, i) => (
                  <motion.span key={i} variants={headingLetter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </span>
          </motion.h2>
        </div>

        {/* MAIN CONTAINER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-zinc-200/80 bg-white/70 p-5 sm:p-8 md:p-12 lg:p-14 shadow-2xl shadow-zinc-200/40 backdrop-blur-xl grid gap-8 lg:grid-cols-12 items-center"
        >
          
          {/* LEFT CONTENT SECTION */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start gap-5 sm:gap-6 border-b border-zinc-100 pb-6 lg:border-b-0 lg:border-r lg:border-zinc-100 lg:pb-0 lg:pr-8 xl:pr-14 text-center sm:text-left">
            
            <motion.div variants={elementVariants} className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full">
              {/* Profile Avatar with Hover Scale */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden bg-zinc-100 border-2 border-sky-400/30 p-1 shadow-inner flex-shrink-0 cursor-pointer transition-colors duration-300 hover:border-sky-400"
              >
                <img 
                  src="/rachitt.png" 
                  alt="Rachit Avatar" 
                  className="h-full w-full object-cover rounded-full select-none"
                />
              </motion.div>
              
              <div className="space-y-1 flex flex-col items-center sm:items-start">
                <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Live Status
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-zinc-900 leading-tight tracking-tight">
                  Passionate about creating <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">impact.</span>
                </h3>
              </div>
            </motion.div>

            <motion.p variants={elementVariants} className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-600 font-medium">
              I'm a <span className="text-zinc-900 font-semibold">B.Tech CSD (Computer Science & Design)</span> graduate and Frontend Developer. I specialize in turning complex ideas into premium, pixel-perfect, and highly functional web experiences using React and JavaScript, blending clean design aesthetics with solid engineering principles.
            </motion.p>
            
            {/* CV Download Button - Fully Mobile Responsive */}
            <motion.a
              variants={elementVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/Cv Rachitt.pdf" 
              download="Rachit_Resume.pdf"
              className="group flex items-center justify-center gap-2 rounded-full border border-zinc-200/80 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-zinc-800 shadow-sm transition-all duration-300 hover:border-sky-400 hover:bg-zinc-50 w-full sm:w-auto"
            >
              Download CV 
              <motion.div className="inline-block" variants={{
                hidden: { y: 0 },
                visible: { y: [0, -2, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }
              }}>
                <Download className="h-4 w-4 text-zinc-500 group-hover:text-sky-500 transition-colors" />
              </motion.div>
            </motion.a>
          </div>

          {/* RIGHT STATS CARDS SECTION - 2 Columns on Mobile, 4 on Tablet, 2/4 on Desktop */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
            
            {/* Card 1 - Experience */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-sky-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-700 mb-3 sm:mb-4 border border-zinc-100 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors duration-300"
              >
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">6 Mo</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Experience</p>
            </motion.div>

            {/* Card 2 - Projects */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-indigo-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-700 mb-3 sm:mb-4 border border-zinc-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300"
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">25+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Projects</p>
            </motion.div>

            {/* Card 3 - Clients */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-emerald-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-700 mb-3 sm:mb-4 border border-zinc-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors duration-300"
              >
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">10+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Clients</p>
            </motion.div>

            {/* Card 4 - Certificates */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-amber-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-700 mb-3 sm:mb-4 border border-zinc-100 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors duration-300"
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">6+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Certificates</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}