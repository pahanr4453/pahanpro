import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Facebook, ArrowUp, Code2 } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, link: "https://github.com/pahanr4453", color: "hover:text-white" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/pahan_sewmina", color: "hover:text-blue-500" },
    { icon: <Youtube size={20} />, link: "#", color: "hover:text-red-500" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/pahansewmina", color: "hover:text-blue-600" },
    { icon: <Instagram size={20} />, link: "#https://www.instagram.com/pahan_sewmina", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 bg-[#020617] overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start border-b border-white/5 pb-20">
          
          {/* Column 1: Brand & Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6 text-center md:text-left"
          >
            <h3 className="text-4xl font-black tracking-tighter text-white uppercase">
              SENESH <span className="text-blue-600">PAHAN</span>
            </h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] max-w-xs mx-auto md:mx-0 leading-relaxed">
              Developing high-end digital experiences through code.
            </p>
            
            {/* Elite Status Badge */}
            <div className="flex items-center justify-center md:justify-start">
               <div className="flex items-center gap-3 bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400/90">
                    Global Reach <span className="text-blue-900/40 mx-1">•</span> Active
                  </span>
               </div>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 flex flex-col items-center md:items-start space-y-6"
          >
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-4 text-center md:text-left">
              {['Home', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-blue-500 font-bold text-[10px] uppercase tracking-widest transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Social & Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 flex flex-col items-center md:items-end space-y-8"
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  href={social.link}
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white hover:border-blue-500/50 transition-all group shadow-xl"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">Scroll Up</span>
              <ArrowUp size={16} className="text-blue-500 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* --- BOTTOM SIGNATURE BAR --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-gray-600 text-[9px] font-black uppercase tracking-[0.4em]">
            © 2026 ALL RIGHTS RESERVED
          </p>

          {/* Minimalist Tech Badge */}
          <div className="flex items-center bg-[#0a0f1e]/80 backdrop-blur-md px-8 py-3 rounded-full border border-blue-500/10">
            <Code2 size={14} className="text-blue-500 mr-3" />
            <span className="text-gray-500 font-black text-[9px] uppercase tracking-[0.2em]">Designed by</span>
            
            <span className="text-blue-500 font-black text-[11px] uppercase tracking-tighter ml-3 mr-3">
              Senesh Pahan
            </span>

            <div className="h-3 w-[1px] bg-white/10 mx-2"></div>
            <span className="text-gray-600 font-bold text-[14px] leading-none ml-2">🇱🇰</span>
          </div>

          <div className="flex gap-6 text-gray-600 text-[9px] font-black uppercase tracking-widest">
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-blue-900/40">v2.0</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;