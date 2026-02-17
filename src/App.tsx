import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Menu, X, ArrowRight } from 'lucide-react'; 
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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navLinks: NavLink[] = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  if (loading) return <LoadingScreen />;

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#010413] text-white scroll-smooth selection:bg-blue-500/30 font-sans">
        <Helmet>
          <title>Senesh Pahan | Graphic & Web Designer</title>
          <link rel="icon" href="/mysp.png" />
        </Helmet>

        {/* --- ULTRA PREMIUM FLOATING NAVBAR --- */}
        <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
          scrolled 
          ? 'top-4 w-[90%] md:w-[70%] lg:w-[60%]' 
          : 'top-0 w-full'
        }`}>
          <div className={`relative w-full backdrop-blur-xl border-b md:border border-white/5 transition-all duration-500 ${
            scrolled ? 'rounded-2xl bg-slate-900/40 shadow-[0_0_30px_rgba(0,0,0,0.5)] py-3 px-6' : 'bg-transparent py-6 px-10'
          }`}>
            <div className="flex justify-between items-center">
              
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg rotate-12 flex items-center justify-center font-black text-white text-sm">SP</div>
                <span className="text-white font-black text-lg tracking-tighter uppercase hidden sm:block">
                  SENESH <span className="text-blue-500">PAHAN</span>
                </span>
              </motion.div>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center space-x-8 text-[11px] tracking-[0.2em] font-bold text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors relative group">
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <div className="hidden md:block">
                <a href="#contact" className="group relative px-6 py-2 bg-blue-600/10 border border-blue-500/50 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-600">
                  <span className="relative z-10 flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-400 group-hover:text-white transition-colors">
                    HIRE ME <ArrowRight size={14} />
                  </span>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-[calc(100%+10px)] left-0 w-full bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/5 p-6 md:hidden shadow-2xl"
                >
                  <ul className="flex flex-col space-y-4 text-center">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-400 hover:text-blue-400 text-sm font-bold tracking-widest block py-2 uppercase transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                    <li className="pt-4 border-t border-white/5">
                      <a 
                        href="#contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-black tracking-widest flex items-center justify-center gap-2"
                      >
                        GET IN TOUCH <ArrowRight size={16} />
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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