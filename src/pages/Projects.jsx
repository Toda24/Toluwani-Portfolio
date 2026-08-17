import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

const projects = [
  {
    title: "Hybrid CNN-Transformer Architecture for Image Forgery Detection",
    category: "Computer Vision & Deep Learning",
    description: "An end-to-end deep learning framework combining Convolutional Neural Networks (CNNs) for localized artifact extraction and Vision Transformers (ViT) for global contextual self-attention, engineered to detect subtle image splicing and copy-move manipulations.",
    tech: ["PyTorch", "Vision Transformers (ViT)", "CNNs", "Computer Vision", "Python"],
    isExternal: false,
    link: "#"
  },
  {
    title: "Deep Convolutional Neural Network (CNN) Classifier",
    category: "Machine Learning / Research",
    description: "Architected a custom multi-layer CNN classification pipeline implementing convolutional, pooling, batch normalization, and dropout regularization layers to optimize convergence and eliminate overfitting on high-dimensional image datasets.",
    tech: ["TensorFlow", "Keras", "NumPy", "Hyperparameter Tuning", "Python"],
    isExternal: false,
    link: "#"
  },
  {
    title: "Applied Statistical Analysis & Predictive Data Modeling",
    category: "Data Science & Statistical Programming",
    description: "Multivariate exploratory data analysis (EDA), non-parametric hypothesis testing, and regression modeling pipeline designed to impute missing feature values and quantify statistical variances across multivariate research datasets.",
    tech: ["Python", "Pandas", "SciPy", "Statsmodels", "Seaborn"],
    isExternal: false,
    link: "#"
  },
  {
    title: "Caroline's Foods & Beverages",
    category: "Fullstack Automation",
    description: "A complete digital commerce system. Engineered the frontend in React and automated the backend order processing and inventory logic using custom n8n workflows.",
    tech: ["React", "n8n Automation", "Node.js Logic", "REST APIs"],
    isExternal: true,
    link: "/projects/caroline"
  },
  {
    title: "Purple Love Charity Foundation",
    category: "Non-Profit Platform",
    description: "A secure donation portal and outreach platform designed to drive social impact with frictionless multi-currency support and automated webhook workflows.",
    tech: ["React", "Node.js", "Payment Gateways", "n8n Webhooks"],
    isExternal: true,
    link: "/projects/purple"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-6xl mx-auto pb-16">
      <Breadcrumbs />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-b border-slate-800 pb-4"
      >
        <h1 className="text-4xl text-white font-bold">Engineered Systems & Research</h1>
        <p className="text-slate-400 mt-2">Applied Machine Learning, Deep Learning Architectures, and Production Systems.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col justify-between p-8 bg-[#1e293b] rounded-xl border border-slate-700 hover:border-[#38bdf8] transition-all shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase bg-[#38bdf8]/10 px-3 py-1 rounded-full border border-[#38bdf8]/20">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl text-white font-bold mb-3 group-hover:text-[#38bdf8] transition-colors leading-snug">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              {project.isExternal ? (
                <Link 
                  to={project.link}
                  className="inline-flex items-center gap-2 text-[#38bdf8] text-sm font-bold hover:underline"
                >
                  VIEW CASE STUDY →
                </Link>
              ) : (
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                  Research Pipeline • Production Ready
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;