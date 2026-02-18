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

// TypeScript Interface for Nav Links
interface NavLink {
  name: string;
  href: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
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
      <div className="min-h-screen bg-[#010413] text-white scroll-smooth selection:bg-blue-500/30 font-sans overflow-x-hidden">
        <Helmet>
          <title>Senesh Pahan | Graphic & Web Designer</title>
          <link rel="icon" href="/mysp.png" />
        </Helmet>

        {/* --- ULTRA PREMIUM FLOATING NAVBAR --- */}
        <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
          scrolled 
          ? 'top-4 w-[92%] md:w-[70%] lg:w-[60%]' 
          : 'top-0 w-full'
        }`}>
          <div className={`relative w-full backdrop-blur-xl border-b md:border border-white/5 transition-all duration-500 ${
            scrolled ? 'rounded-[20px] bg-slate-900/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] py-3 px-5 md:px-8' : 'bg-transparent py-7 px-6 md:px-12'
          }`}>
            <div className="flex justify-between items-center">
              
              {/* Logo Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl rotate-12 flex items-center justify-center font-black text-white text-xs shadow-lg shadow-blue-500/20 group-hover:rotate-0 transition-transform">
                  SP
                </div>
                <div className="flex flex-col">
                  <span className="flex text-white font-black text-sm md:text-lg tracking-tighter uppercase whitespace-nowrap leading-none">
                    SENESH <span className="text-blue-500 ml-1">PAHAN</span>
                  </span>
                  <span className="text-[7px] font-bold text-blue-400/60 tracking-[0.3em] uppercase mt-1">Digital Architect</span>
                </div>
              </motion.div>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center space-x-8 text-[10px] tracking-[0.2em] font-black text-gray-400">
                {navLinks.map((link: NavLink) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors relative group">
                      {link.name.toUpperCase()}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Call to Action - Original Style Refined */}
              <div className="hidden md:block">
                <a href="#contact" className="group relative px-6 py-2.5 bg-blue-600/10 border border-blue-500/30 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-600 shadow-sm shadow-blue-500/5">
                  <span className="relative z-10 flex items-center gap-2 text-[9px] font-black tracking-[0.15em] text-blue-400 group-hover:text-white transition-colors">
                    HIRE ME <ArrowRight size={13} />
                  </span>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20 active:scale-90 transition-all"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown - Refined Text Size */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  className="absolute top-[calc(100%+12px)] left-0 w-full bg-[#010413]/95 backdrop-blur-2xl rounded-[24px] border border-white/10 p-7 md:hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                >
                  <ul className="flex flex-col space-y-5 text-center">
                    {navLinks.map((link: NavLink) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-300 hover:text-blue-400 text-[11px] font-black tracking-[0.2em] block py-1 uppercase transition-all"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                    <li className="pt-4">
                      <a 
                        href="#contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform"
                      >
                        GET IN TOUCH <ArrowRight size={14} />
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <main className="relative">
          <section id="hero"><Hero /></section>
          <section id="skills"><Skills /></section>
          <section id="portfolio"><Projects /></section>
          <Journey />
          <section id="contact"><Contact /></section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;