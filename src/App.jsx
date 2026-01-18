import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ProjectCaroline = React.lazy(() => import('./pages/ProjectCaroline'));
const ProjectPurple = React.lazy(() => import('./pages/ProjectPurple'));

// Loading Spinner
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center font-mono animate-pulse text-[#38bdf8]">
    LOADING SYSTEM...
  </div>
);

const App = () => {
  return (
    <Router>
      {/* GLOBAL CONTAINER with Background */}
      <div className="relative min-h-screen bg-[#0B1120] text-slate-300 overflow-hidden font-sans">
        
        {/* --- GLOBAL CYBER GRID BACKGROUND --- */}
        {/* This creates the tech-grid pattern everywhere */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* --- GLOBAL RADIAL GLOW --- */}
        {/* This fades the grid into darkness at the edges */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0B1120]/80 to-[#0B1120] pointer-events-none"></div>

        {/* --- CONTENT LAYER --- */}
        {/* z-10 ensures text sits ON TOP of the grid */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Case Studies */}
                <Route path="/projects/caroline" element={<ProjectCaroline />} />
                <Route path="/projects/purple" element={<ProjectPurple />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;