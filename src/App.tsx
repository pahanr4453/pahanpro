import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Menu, X } from 'lucide-react'; 
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Journey from './components/Journey'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface NavLink {
  name: string;
  href: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '#hero' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  if (loading) return <LoadingScreen />;

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#020617] text-white scroll-smooth selection:bg-blue-500/30 font-sans">
        
        <Helmet>
          <title>Senesh Pahan | Graphic & Web Designer</title>
        </Helmet>

        {/* --- SMART RESPONSIVE NAVBAR --- */}
        {/* 'short:top-2 short:py-2' කියන කෑලි වලින් rotate කරපු වෙලාවට spacing අඩු කරනවා */}
        <nav className="fixed top-5 short:top-2 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[100] backdrop-blur-xl bg-slate-900/60 border border-white/10 py-4 short:py-2 px-8 rounded-2xl shadow-2xl transition-all duration-300">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center group">
              <span className="text-white font-black text-xl md:text-2xl short:text-lg tracking-tighter uppercase">
                SENESH <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">PAHAN</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-all duration-300 relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all">
                  GET IN TOUCH
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-blue-500 p-2 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown - Scrollable for Landscape */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-y-auto max-h-[70vh] mt-4 border-t border-white/5"
              >
                <ul className="flex flex-col space-y-4 short:space-y-2 py-6 text-center text-[11px] uppercase tracking-[0.5em] font-black text-gray-400">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 block py-2">
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {/* Rotate කරපු වෙලාවට Get in touch එක මෙතනත් පේන්න දාමු */}
                  <li className="pt-4">
                     <a href="#contact" onClick={() => setIsMenuOpen(false)} className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-[10px]">
                        GET IN TOUCH
                     </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main>
          <div id="hero"><Hero /></div>
          <div id="skills"><Skills /></div>
          <div id="portfolio"><Projects /></div>
          <Journey />
          <div id="contact"><Contact /></div>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;