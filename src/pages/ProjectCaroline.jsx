import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudRain, Truck, ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ProjectCaroline = () => {
  // --- SIMULATION STATE ---
  const [weather, setWeather] = useState('sunny');
  const [location, setLocation] = useState('Lagos Island');
  
  const basePrice = 5000;
  const surgeMultiplier = weather === 'rainy' ? 1.2 : 1.0;
  const currentPrice = basePrice * surgeMultiplier;
  const deliveryFee = location === 'Lekki' ? 2000 : location === 'Mainland' ? 3000 : 1000;

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-4xl mx-auto pb-12">
      <Breadcrumbs />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Caroline's Foods & Beverages</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-slate-500 mb-8 border-b border-slate-700 pb-6 text-sm md:text-base">
          <span><strong>Role:</strong> Full Stack Logic</span>
          <span className="hidden md:inline">|</span>
          <span><strong>Tech:</strong> JS, n8n Automation, E-commerce Logic</span>
        </div>

        <a href="https://carolines-foods.vercel.app/" target="_blank" className="inline-flex items-center gap-2 bg-[#38bdf8] text-[#0B1120] px-6 py-3 rounded-full font-bold hover:bg-white transition-all mb-12">
          View Live Project <ExternalLink size={18} />
        </a>

        {/* --- INTERACTIVE SIMULATION SECTION --- */}
        <div className="bg-[#1e293b] p-6 md:p-8 rounded-xl border border-slate-700 mb-12 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Algorithm Simulator
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">INPUT: WEATHER CONDITION</label>
                <div className="flex gap-2">
                  <button onClick={() => setWeather('sunny')} className={`flex-1 p-3 rounded border flex items-center justify-center gap-2 ${weather === 'sunny' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'border-slate-600'}`}><Sun size={18}/> Dry Season</button>
                  <button onClick={() => setWeather('rainy')} className={`flex-1 p-3 rounded border flex items-center justify-center gap-2 ${weather === 'rainy' ? 'bg-blue-500/20 border-blue-500 text-blue-500' : 'border-slate-600'}`}><CloudRain size={18}/> Rainy Season</button>
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">INPUT: CUSTOMER LOCATION</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-[#0B1120] border border-slate-600 p-3 rounded text-white outline-none focus:border-[#38bdf8]">
                  <option value="Lagos Island">Lagos Island (Local)</option>
                  <option value="Lekki">Lekki Phase 1</option>
                  <option value="Mainland">Mainland (Ikeja)</option>
                </select>
              </div>
            </div>

            <div className="bg-[#0B1120] p-6 rounded-lg font-mono text-sm border border-slate-800">
              <div className="flex justify-between mb-2 text-slate-400"><span>Base Price:</span> <span>₦{basePrice}</span></div>
              <div className="flex justify-between mb-2 text-slate-400">
                <span>Surge:</span> 
                <span className={weather === 'rainy' ? 'text-red-400' : 'text-slate-600'}>{weather === 'rainy' ? '+20%' : '0%'}</span>
              </div>
              <div className="flex justify-between mb-4 text-slate-400 pb-4 border-b border-slate-800"><span>Delivery ({location}):</span> <span>₦{deliveryFee}</span></div>
              <div className="flex justify-between text-xl font-bold text-[#38bdf8]">
                <span>TOTAL:</span>
                <span>₦{currentPrice + deliveryFee}</span>
              </div>
            </div>
          </div>
        </div>
        {/* --- END SIMULATION --- */}

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Challenge</h2>
            <p>Caroline's F&B required an intelligent pricing system for their seasonal products. The challenge was to create a platform that automatically adjusted prices based on the time of year (Dry vs. Rainy Season) without manual intervention.</p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Solution</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Automated Seasonal Pricing:</strong> Developed a JavaScript algorithm that detects the current date and automatically applies price surges during Dry Season (Nov-Mar).</li>
              <li><strong>Logic Constraints:</strong> Implemented "LGA Locking" to restrict deliveries strictly to the Amuwo-Odofin axis.</li>
              <li><strong>n8n Order Routing:</strong> Replaced static email forms with an automated webhook that processes orders and sends structured notifications to the logistics team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Outcome</h2>
            <p>A self-managing e-commerce platform that reduces administrative overhead by 60%.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCaroline;