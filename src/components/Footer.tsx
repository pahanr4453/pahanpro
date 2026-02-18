import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Youtube, Facebook, ArrowUp, Code2, X, ShieldCheck, FileText, Activity, Zap, Monitor } from 'lucide-react';

function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [os, setOs] = useState<string>("Detecting...");

  // OS Detection Logic - Line by line check
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    let platform = "Unknown OS";
    if (userAgent.indexOf("Win") !== -1) platform = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) platform = "MacOS";
    else if (userAgent.indexOf("Linux") !== -1) platform = "Linux";
    else if (userAgent.indexOf("Android") !== -1) platform = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) platform = "iOS";
    setOs(platform);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, link: "https://github.com/pahanr4453", color: "hover:text-white" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/pahan_sewmina", color: "hover:text-blue-500" },
    { icon: <Youtube size={20} />, link: "#", color: "hover:text-red-500" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/pahansewmina", color: "hover:text-blue-600" },
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/pahan_sewmina", color: "hover:text-pink-500" },
  ];

  const InfoModal = ({ title, content, onClose }: { title: string, content: string, onClose: () => void }) => (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="bg-slate-900 border border-white/10 p-8 rounded-[2rem] max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><X size={20}/></button>
        <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 flex items-center gap-3">
          {title === 'Privacy' ? <ShieldCheck className="text-blue-500"/> : <FileText className="text-blue-500"/>} {title}
        </h3>
        <p className="text-gray-400 text-[11px] font-bold uppercase leading-relaxed tracking-wider">
          {content}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <footer className="relative pt-24 pb-12 px-6 bg-[#020617] overflow-hidden">
      {/* Top Border Line Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start border-b border-white/5 pb-20">
          
          {/* Brand Identity Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6 text-center md:text-left"
          >
            <div className="flex flex-col gap-2">
               <h3 className="text-4xl font-black tracking-tighter text-white uppercase flex items-center justify-center md:justify-start gap-4">
                 SENESH <span className="text-blue-600">PAHAN</span>
                 <div className="relative flex items-center justify-center w-5 h-5">
                    <motion.span 
                      animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-full h-full bg-blue-500/30 rounded-full"
                    />
                    <motion.span 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-full h-full border border-blue-500/20 rounded-full"
                    />
                    <span className="relative w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
                 </div>
               </h3>

               <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] max-w-xs mx-auto md:mx-0 leading-relaxed">
                 Developing high-end digital experiences through code.
               </p>

               <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2">
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 shadow-inner">
                    <div className="flex items-end gap-[2px] h-3 w-5">
                      {[0.4, 0.9, 0.6, 1].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [`${h*100}%`, '25%', `${h*100}%`] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                          className="w-[2px] bg-blue-500 rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-blue-500/70 font-black text-[8px] uppercase tracking-[0.25em]">Infra Stable</span>
                  </div>

                  <motion.div 
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10"
                  >
                    <ShieldCheck size={11} className="text-emerald-500/80" />
                    <span className="text-emerald-500/70 font-black text-[8px] uppercase tracking-[0.25em]">Security Verified</span>
                  </motion.div>
               </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
               <div className="group flex items-center gap-3 bg-white/[0.01] px-5 py-2.5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-400 transition-colors">
                    Global Reach <span className="text-white/10 mx-2">|</span> 100% Active
                  </span>
               </div>
            </div>
          </motion.div>

          {/* Quick Menu Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 flex flex-col items-center md:items-start space-y-6"
          >
            <h4 className="text-white/30 font-black text-[10px] uppercase tracking-[0.5em]">Menu</h4>
            <ul className="space-y-4 text-center md:text-left">
              {['Home', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item} className="overflow-hidden">
                  <a href={`#${item.toLowerCase()}`} className="group relative text-gray-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center md:justify-start gap-2">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-blue-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Back to Top Section */}
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
                  whileHover={{ y: -5, backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.3)' }}
                  href={social.link}
                  className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 text-gray-500 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-blue-600 px-8 py-4 rounded-2xl text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:bg-blue-500 transition-all group"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* BOTTOM SIGNATURE BAR - ULTRA LUXURY */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[9px] font-black uppercase tracking-[0.4em] order-2 md:order-1">
            © 2026 ALL RIGHTS RESERVED
          </p>

          {/* CRAFTED BY BOX - GLASSMORPHISM + MICRO GLOW */}
          <div className="flex items-center bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl px-10 py-5 rounded-[2.5rem] border border-white/10 order-1 md:order-2 relative group overflow-hidden shadow-2xl">
            {/* Animated Glow Sweep */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-1/2 -skew-x-12"
            />
            
            <div className="relative flex items-center z-10">
                <div className="bg-blue-500/10 p-2.5 rounded-2xl mr-5 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Code2 size={16} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                </div>
                
                <div className="flex flex-col">
                    <span className="text-white/30 font-black text-[7px] uppercase tracking-[0.6em] mb-1">Architected By</span>
                    <span className="text-white font-black text-[14px] uppercase tracking-tighter group-hover:text-blue-400 transition-colors duration-300">Senesh Pahan</span>
                </div>
                
                <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent mx-8"></div>
                
                {/* TECH VISUALIZER */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-blue-500/20"
                    />
                    <Zap size={14} className="text-blue-500/80 animate-pulse fill-blue-500/10" />
                </div>
            </div>
          </div>

          {/* RIGHT SIDE: TERMS, PRIVACY, OS + VERSION LABEL (Layout Unchanged) */}
          <div className="flex items-center gap-6 order-3">
            <div className="flex items-center gap-6 text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] bg-white/[0.03] px-6 py-3 rounded-full border border-white/5 backdrop-blur-sm shadow-inner relative overflow-hidden group/bar">
                
                {/* VERSION LABEL (Added here to look slick) */}
                <span className="text-blue-500/60 font-black tracking-[0.3em] border-r border-white/10 pr-4 group-hover/bar:text-blue-400 transition-colors">OS V2.0</span>
                
                <span onClick={() => setModalContent("All user data is encrypted and handled with high security.")} className="hover:text-blue-400 cursor-pointer transition-all hover:tracking-widest">Privacy</span>
                <span className="text-blue-500/20 font-light select-none">/</span>
                <span onClick={() => setModalContent("By using this site, you agree to professional engagement terms.")} className="hover:text-blue-400 cursor-pointer transition-all hover:tracking-widest">Terms</span>
                
                {/* DYNAMIC OS DISPLAY CHIP */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/5 border border-blue-500/10 rounded-lg group/os">
                  <Monitor size={10} className="text-blue-500/40 group-hover:text-blue-400 transition-colors" />
                  <span className="text-blue-500/40 group-hover:text-blue-400 transition-colors tracking-widest">{os}</span>
                </div>
                
                {/* FLAG WITH ORBITING RING */}
                <div className="flex items-center pl-4 border-l border-white/10">
                    <div className="relative w-8 h-8 flex items-center justify-center group/flag">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-blue-500/30 opacity-0 group-hover/flag:opacity-100 transition-opacity"
                        />
                        <motion.span 
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[18px] leading-none drop-shadow-lg cursor-help filter grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            🇱🇰
                        </motion.span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modals */}
      <AnimatePresence>
        {modalContent && (
          <InfoModal 
            title={modalContent.includes("data") ? "Privacy" : "Terms"} 
            content={modalContent} 
            onClose={() => setModalContent(null)} 
          />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;