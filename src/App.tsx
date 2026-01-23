import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion'; // Animation සඳහා
import { Menu, X } from 'lucide-react'; // Icons සඳහා
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'ABOUT', href: '#hero' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#020617] text-white scroll-smooth selection:bg-blue-500/30 font-sans">
        
        <Helmet>
          <title>Senesh Pahan | Graphic & Web Designer Sri Lanka</title>
          <meta name="description" content="Professional portfolio of Senesh Pahan. Creative Web & Graphic Designer based in Sri Lanka." />
        </Helmet>

        {/* --- PREMIUM FLOATING NAVBAR --- */}
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[100] backdrop-blur-xl bg-slate-900/60 border border-white/10 py-4 px-8 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center group cursor-pointer">
              <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase transition-all duration-500">
                SENESH <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">PAHAN</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-all duration-300 relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg">
                  GET IN TOUCH
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button - දැං මේක වැඩ! */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-blue-500 p-2 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden mt-4 border-t border-white/5"
              >
                <ul className="flex flex-col space-y-6 py-8 text-center text-[11px] uppercase tracking-[0.5em] font-black text-gray-400">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={() => setIsMenuOpen(false)} // ලින්ක් එකක් ක්ලික් කරාම මෙනු එක වැහෙනවා
                        className="hover:text-blue-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* --- MAIN PAGE CONTENT --- */}
        <main>
          <div id="hero"><Hero /></div>
          <div id="skills"><Skills /></div>
          <div id="portfolio"><Projects /></div>
          <div id="contact"><Contact /></div>
        </main>

        <Footer />
        
      </div>
    </HelmetProvider>
  );
}

export default App;