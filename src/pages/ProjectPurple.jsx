import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ProjectPurple = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-4xl mx-auto pb-12">
      <Breadcrumbs />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Purple Love Charity Initiative</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-slate-500 mb-8 border-b border-slate-700 pb-6 text-sm md:text-base">
          <span><strong>Role:</strong> Frontend Developer</span>
          <span className="hidden md:inline">|</span>
          <span><strong>Tech:</strong> Payment Logic, DOM Manipulation, n8n</span>
        </div>

        <a href="https://purple-love-charity-foundation.vercel.app/" target="_blank" className="inline-flex items-center gap-2 bg-[#38bdf8] text-[#0B1120] px-6 py-3 rounded-full font-bold hover:bg-white transition-all mb-12">
          View Live Project <ExternalLink size={18} />
        </a>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Challenge</h2>
            <p>The Purple Love Charity needed a seamless donation portal that handled multi-currency support (Naira, Dollars, Pounds) without the user friction caused by traditional banking apps.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Solution</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Frictionless UX:</strong> Implemented "Click-to-Copy" logic for banking details to reduce donor drop-off.</li>
              <li><strong>Automated Alerts:</strong> Integrated n8n webhooks to instantly notify admins of new pledges.</li>
              <li><strong>Responsive Design:</strong> Optimized for mobile-first traffic (80% of donor base).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Outcome</h2>
            <p>A 40% increase in completed donation attempts due to improved UI logic.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPurple;