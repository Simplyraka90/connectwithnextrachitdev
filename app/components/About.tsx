"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Code2, Sparkles, Trophy, Download } from "lucide-react";

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

// कंटेंट एलिमेंट्स के लिए एनीमेशन
const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// स्टेट्स कार्ड्स के लिए तगड़ा स्प्रिंग/बाउंस एनीमेशन
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
      className="relative flex min-h-screen w-full items-center justify-center bg-[#FAFAFC] px-4 py-16 sm:px-6 md:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-[-10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full blur-[80px] sm:blur-[120px] bg-sky-400/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full blur-[80px] sm:blur-[120px] bg-indigo-400/10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full z-10 flex flex-col justify-center">
        
        {/* MAIN CONTAINER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-16"
        >
          
          {/* TOP SECTION: TWO COLUMNS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: HEADING & TEXT */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left">
              
              {/* Small Top Tag */}
              <motion.div variants={elementVariants}>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
                  ABOUT ME
                </span>
              </motion.div>
              
              {/* Main Heading with Mask Reveal */}
              <motion.h2 
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111113] leading-[1.15]"
              >
                <span className="flex flex-wrap overflow-hidden py-1">
                  {Array.from("Building modern").map((char, i) => (
                    <motion.span key={i} variants={headingLetter} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                
                <span className="flex flex-wrap overflow-hidden py-1 items-center">
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

              {/* Bio Paragraphs */}
              <motion.div variants={elementVariants} className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-600 font-medium">
                <p>
                  I'm a B.Tech Computer Science & Design graduate and Frontend Developer specializing in React.js and Next.js. I build responsive, user-friendly web applications with JavaScript, Tailwind CSS and modern UI practices.
                </p>
                <p>
                  I also have experience with web design, SEO, API integration and website deployment through company and contract-based projects.
                </p>
              </motion.div>
              
              {/* CV Download Button */}
              <motion.a
                variants={elementVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/CVRachit.pdf" 
                download="/Rachit udaan.pdf"
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

            {/* RIGHT SIDE: LARGE IMAGE CARD WITH FLOATING CODE ICON */}
            <motion.div 
              variants={elementVariants}
              className="lg:col-span-5 relative flex justify-center items-center w-full mt-4 lg:mt-0"
            >
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[32px] sm:rounded-[40px] border border-sky-400/20 bg-white/60 p-3 sm:p-4 shadow-2xl shadow-sky-900/5 backdrop-blur-xl flex items-center justify-center">
                
                {/* Floating Code Icon Badge */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-3 sm:-left-6 top-1/4 z-20 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white shadow-xl border border-zinc-100 text-blue-600"
                >
                  <Code2 className="h-5 w-5 sm:h-7 sm:w-7" />
                </motion.div>

                {/* Main Profile Image */}
                <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-zinc-100">
                  <img 
                    src="/rachitt.png" 
                    alt="Rachit" 
                    className="h-full w-full object-cover object-center select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM SECTION: 4 STATS CARDS (Fully Responsive Grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full pt-2">
            
            {/* Card 1 - Experience */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-sky-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-sky-50/80 flex items-center justify-center text-blue-600 mb-3 sm:mb-4 border border-sky-100"
              >
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight">6+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider leading-tight">Months Experience</p>
            </motion.div>

            {/* Card 2 - Projects Completed */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-indigo-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-indigo-50/80 flex items-center justify-center text-indigo-600 mb-3 sm:mb-4 border border-indigo-100"
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight">10+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider leading-tight">Projects Completed</p>
            </motion.div>

            {/* Card 3 - React + Next.js Specialist */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-blue-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-blue-50/80 flex items-center justify-center text-blue-500 mb-3 sm:mb-4 border border-blue-100"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </motion.div>
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-zinc-900 tracking-tight">React + Next.js</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider leading-tight">Specialist</p>
            </motion.div>

            {/* Card 4 - Certifications Earned */}
            <motion.div 
              variants={cardVariants} 
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }} 
              className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:border-amber-200 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-amber-50/80 flex items-center justify-center text-amber-600 mb-3 sm:mb-4 border border-amber-100"
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </motion.div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight">3+</h4>
              <p className="mt-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider leading-tight">Certifications Earned</p>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}