import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// We are temporarily removing icons to stop the crash.
// import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#1e293b] border-b border-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#38bdf8] font-bold text-xl">T.F.A.</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path ? 'text-[#38bdf8]' : 'text-slate-400'} hover:text-white transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-slate-300 font-bold border border-slate-600 px-3 py-1 rounded" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] p-4 flex flex-col gap-4 border-b border-slate-700">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-center py-2 text-slate-400 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;