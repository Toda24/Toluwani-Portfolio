import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    // Note: We removed 'bg-[#0B1120]' so the global grid shows through
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      
      <div className="max-w-5xl z-10">
        
        {/* 1. SYSTEM STATUS (Subtle Tech Flex) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center items-center gap-2"
        >
           <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
           <p className="text-slate-500 font-mono text-[10px] tracking-[0.3em] uppercase">
             System Status: ONLINE
           </p>
        </motion.div>

        {/* 2. THE NAME (Back and Bold) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#38bdf8] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Hi, I'm Toluwani Fortune Akintoye
          </p>
        </motion.div>
        
        {/* 3. THE HEADLINE (Massive & Clean) */}
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-8 leading-tight text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Engineering Intelligent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500">
            Digital Ecosystems.
          </span>
        </motion.h1>

        {/* 4. THE ROLES (Professional Static Fade-In) */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-slate-400 text-lg md:text-xl mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>Software Engineer</span>
          <span className="text-slate-700">•</span>
          <span>Full Stack Developer</span>
          <span className="text-slate-700">•</span>
          <span className="text-[#38bdf8]">n8n Automation Specialist</span>
        </motion.div>

        {/* 5. BUTTONS (Modern Glass Effect) */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="/projects" 
            className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:bg-slate-200 transition-all duration-300"
          >
            VIEW SELECTED WORKS
          </Link>

          <Link 
            to="/contact" 
            className="px-8 py-4 border border-slate-700 text-white font-bold text-sm tracking-wider hover:border-white transition-all duration-300"
          >
            CONTACT ME
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;