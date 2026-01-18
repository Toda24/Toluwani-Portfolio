import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

  return (
    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest">
      <Link to="/" className="hover:text-[#38bdf8] transition-colors font-bold">
        SYS_ROOT
      </Link>
      
      {crumbs.map((crumb, index) => {
        const currentLink = `/${crumbs.slice(0, index + 1).join('/')}`;
        const isLast = index === crumbs.length - 1;
        
        return (
          <div key={crumb} className="flex items-center gap-2">
            <span className="text-slate-700">/</span>
            <Link 
              to={currentLink} 
              className={`${isLast ? 'text-[#38bdf8] pointer-events-none' : 'hover:text-white transition-colors'}`}
            >
              {crumb.replace('-', ' ')}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;