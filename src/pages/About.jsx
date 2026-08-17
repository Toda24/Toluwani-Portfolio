import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';

const skills = [
  "Python (PyTorch / TF)", "Advanced SQL & Relational DBs", 
  "CNNs & Vision Transformers", "Statistical Data Modeling",
  "React JS & Native", "n8n Workflow Automation",
  "REST APIs & Node.js", "AWS Cloud Infrastructure"
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-4xl mx-auto pb-16">
      <Breadcrumbs />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl text-white font-bold mb-6 border-b border-slate-800 pb-4">About Me</h1>
        
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            I am a Computer Science graduate from Mountain Top University (2:1, CGPA 4.26/5.00) focused on <strong className="text-white">engineering intelligent, scalable, and automated digital systems.</strong>
          </p>
          <p>
            My engineering work spans end-to-end software development: architecting deep learning pipelines (CNN-Transformers for Computer Vision), implementing statistical models, designing robust SQL database schemas, and building enterprise automation workflows with n8n.
          </p>
          <p>
            Whether developing high-performance web platforms or designing resilient cloud and data architectures, I combine custom engineering with workflow velocity to deliver production-ready systems.
          </p>
        </div>

        <a 
          href="/Toluwani_Akintoye_CV.pdf" 
          download 
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#38bdf8]/10 border border-[#38bdf8] text-[#38bdf8] rounded-md font-bold hover:bg-[#38bdf8] hover:text-[#0B1120] transition-all"
        >
          Download My CV
        </a>

        <div className="mt-16">
          <h3 className="text-2xl text-white font-bold mb-6">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e293b] p-3 text-center rounded-lg border border-transparent hover:border-[#38bdf8] hover:text-white transition-all cursor-default text-sm text-slate-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;