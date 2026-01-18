import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

const projects = [
  {
    title: "Caroline's Foods & Beverages",
    category: "Fullstack Automation",
    description: "A complete digital commerce system. I built the frontend in React and automated the entire backend logic (order processing and inventory) using n8n workflows.",
    link: "/projects/caroline",
    tech: ["React", "n8n Automation", "Node.js Logic"]
  },
  {
    title: "Purple Love Charity Foundation",
    category: "Non-Profit Platform",
    description: "A secure donation portal and outreach platform designed to drive social impact with integrated payment systems.",
    link: "/projects/purple",
    tech: ["React", "Node.js", "Stripe Integration"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Breadcrumbs />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-b border-slate-800 pb-4"
      >
        <h1 className="text-4xl text-white font-bold">Engineered Solutions</h1>
        <p className="text-slate-400 mt-2">High-performance systems built with Code and Automation.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group block p-8 bg-[#1e293b] rounded-xl border border-slate-700 hover:border-[#38bdf8] transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase bg-[#38bdf8]/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-[#38bdf8] transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <Link 
              to={project.link}
              className="inline-flex items-center gap-2 text-white text-sm font-bold hover:text-[#38bdf8] transition-colors"
            >
              VIEW CASE STUDY →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;