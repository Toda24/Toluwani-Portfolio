import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Unlock, Truck, ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ProjectChicJune = () => {
  // --- INTERACTIVE CHECKOUT & AUTH GATE SIMULATOR ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(35000);
  const [zone, setZone] = useState('Lekki / Victoria Island');

  const freeShippingThreshold = 50000;
  const isFreeLagosShipping = zone !== 'Interstate' && cartSubtotal >= freeShippingThreshold;
  const baseShipping = zone === 'Lekki / Victoria Island' ? 2500 : zone === 'Lagos Mainland' ? 3500 : 5500;
  const finalShipping = isFreeLagosShipping ? 0 : baseShipping;

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 max-w-4xl mx-auto pb-12">
      <Breadcrumbs />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Chic June Luxury Storefront</h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-500 mb-8 border-b border-slate-700 pb-6 text-sm md:text-base">
          <span><strong>Role:</strong> Full Stack & Automation Engineer</span>
          <span className="hidden md:inline">|</span>
          <span><strong>Tech:</strong> Vanilla JS, n8n (Railway), Paystack, Google Sheets DB</span>
        </div>

        <a
          href="https://chicjune.com.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#38bdf8] text-[#0B1120] px-6 py-3 rounded-full font-bold hover:bg-white transition-all mb-12"
        >
          View Live Project <ExternalLink size={18} />
        </a>

        {/* --- INTERACTIVE SIMULATION SECTION --- */}
        <div className="bg-[#1e293b] p-6 md:p-8 rounded-xl border border-slate-700 mb-12 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Checkout Gate & Shipping Logic Simulator
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">INPUT: AUTHENTICATION STATE</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className={`flex-1 p-3 rounded border flex items-center justify-center gap-2 text-sm ${
                      !isAuthenticated ? 'bg-red-500/20 border-red-500 text-red-400' : 'border-slate-600 text-slate-400'
                    }`}
                  >
                    <Lock size={16} /> Guest User
                  </button>
                  <button
                    onClick={() => setIsAuthenticated(true)}
                    className={`flex-1 p-3 rounded border flex items-center justify-center gap-2 text-sm ${
                      isAuthenticated ? 'bg-green-500/20 border-green-500 text-green-400' : 'border-slate-600 text-slate-400'
                    }`}
                  >
                    <Unlock size={16} /> OTP Verified
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  INPUT: BAG SUBTOTAL (₦{cartSubtotal.toLocaleString()})
                </label>
                <input
                  type="range"
                  min="15000"
                  max="75000"
                  step="5000"
                  value={cartSubtotal}
                  onChange={(e) => setCartSubtotal(Number(e.target.value))}
                  className="w-full accent-[#38bdf8] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>₦15,000</span>
                  <span>Free Lagos Threshold: ₦50,000</span>
                  <span>₦75,000</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">INPUT: DELIVERY ZONE</label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full bg-[#0B1120] border border-slate-600 p-3 rounded text-white outline-none focus:border-[#38bdf8]"
                >
                  <option value="Lekki / Victoria Island">Lekki / Victoria Island</option>
                  <option value="Lagos Mainland">Lagos Mainland</option>
                  <option value="Interstate">Interstate Delivery</option>
                </select>
              </div>
            </div>

            <div className="bg-[#0B1120] p-6 rounded-lg font-mono text-sm border border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between text-slate-400">
                  <span>Checkout Access:</span>
                  <span className={isAuthenticated ? 'text-green-400' : 'text-red-400'}>
                    {isAuthenticated ? 'UNLOCKED' : 'BLOCKED (OTP REQUIRED)'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Bag Subtotal:</span>
                  <span>₦{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400 pb-4 border-b border-slate-800">
                  <span className="flex items-center gap-1"><Truck size={14} /> Shipping:</span>
                  <span className={isFreeLagosShipping ? 'text-green-400 font-bold' : 'text-slate-300'}>
                    {isFreeLagosShipping ? 'FREE (₦0)' : `₦${finalShipping.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex justify-between text-xl font-bold text-[#38bdf8]">
                  <span>PAYSTACK TOTAL:</span>
                  <span>₦{(cartSubtotal + finalShipping).toLocaleString()}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  {isAuthenticated
                    ? '✓ Ready to dispatch webhook payload to Railway n8n instance.'
                    : '⚠ Middleware intercepts checkout and triggers 6-digit email OTP modal.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --- END SIMULATION --- */}

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Challenge</h2>
            <p>
              Chic June needed a luxury jewelry and fashion e-commerce platform capable of handling real-time inventory, customer verification, dynamic Lagos/interstate shipping zones, and automated order receipts—without the recurring overhead of heavy enterprise backend servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Architecture & Solution</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>OTP-Gated Authentication & Duplicate Prevention:</strong> Built a multi-step signup and login gate backed by Railway-hosted n8n webhooks that validate unique user records and dispatch 6-digit email verification codes before unlocking checkout.
              </li>
              <li>
                <strong>Zero-Maintenance Cloud Backend:</strong> Paired a responsive, custom-styled frontend with n8n automation pipelines, Google Sheets as a live relational-style datastore for non-technical admin management, and Google Drive for dynamic product media.
              </li>
              <li>
                <strong>Paystack & Automated Fulfillment:</strong> Integrated Paystack inline payments alongside automated post-checkout workflows that log verified transactions, trigger customer email confirmations, and update stock states in real time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#38bdf8] pl-4">The Outcome</h2>
            <p className="flex items-start gap-2">
              <ShieldCheck className="text-[#38bdf8] shrink-0 mt-1" size={20} />
              <span>
                Delivered a 24/7 cloud-hosted storefront (<code className="text-[#38bdf8]">chicjune.com.ng</code>) complete with a non-technical owner's handover guide, reducing manual order reconciliation to zero while keeping hosting costs near zero.
              </span>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectChicJune;