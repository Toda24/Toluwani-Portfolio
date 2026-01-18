import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className="fixed w-full top-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#38bdf8] font-bold text-xl tracking-wider">T.F.A.</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path ? 'text-[#38bdf8]' : 'text-slate-400'} hover:text-white transition-colors uppercase tracking-widest text-xs`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button (Professional Icons) */}
        <button 
          className="md:hidden text-slate-300 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // The "X" Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // The "Hamburger" (3 Dashes) Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] p-4 flex flex-col gap-4 border-b border-slate-800 shadow-2xl">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-center py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-all uppercase tracking-widest text-sm"
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