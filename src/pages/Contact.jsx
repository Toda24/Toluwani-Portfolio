import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-3xl mx-auto text-center flex flex-col">
      <Breadcrumbs />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 flex flex-col justify-center items-center py-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Let's Build Something Intelligent.</h1>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
          I am available for projects that require Web Development, Workflow Automation, or Secure Frontend Architecture. If you want to move fast without breaking things, let's talk.
        </p>

        <a 
          href="mailto:akintoyetoluwani@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#38bdf8] text-[#0B1120] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] mb-12"
        >
          <Mail size={20} /> Send Me an Email
        </a>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center border-t border-slate-800 pt-10">
          <a href="https://www.linkedin.com/in/toluwani-akintoye-89215431b" target="_blank" className="flex items-center justify-center gap-2 bg-[#1e293b] py-3 px-6 rounded-lg text-slate-400 hover:text-[#38bdf8] hover:bg-[#334155] transition-all">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/Toda24" target="_blank" className="flex items-center justify-center gap-2 bg-[#1e293b] py-3 px-6 rounded-lg text-slate-400 hover:text-[#38bdf8] hover:bg-[#334155] transition-all">
            <Github size={20} /> GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;