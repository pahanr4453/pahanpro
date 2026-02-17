import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook, Code2, Monitor, Layout, Globe, Cpu, Terminal, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState<string>('');
  const fullText: string = "Senesh Pahan";
  const [isVisible, setIsVisible] = useState(false);

  // Mouse positions - Framer motion values for extra smoothness
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate offset from center
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center px-4 md:px-10 relative overflow-hidden bg-[#010413] selection:bg-blue-500/30"
    >
      
      {/* --- ULTRA LIVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Glows that follow mouse smoothly */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
        />
        
        {/* Parallax Floating Icons */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute inset-0"
        >
          <div className="absolute top-[15%] left-[12%] animate-pulse"><Code2 size={42} className="text-blue-500/30" /></div>
          <div className="absolute bottom-[25%] left-[8%] animate-bounce-slow"><Terminal size={38} className="text-cyan-400/20" /></div>
          <div className="absolute top-[45%] right-[12%] animate-spin-slow"><Cpu size={50} className="text-blue-400/20" /></div>
          <div className="absolute bottom-[15%] right-[18%] animate-float-medium"><Layout size={35} className="text-blue-300/20" /></div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: Profile Section */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-[100px] opacity-20 animate-pulse"></div>
            
            <div className="relative group">
              {/* Rotating Dashed Border */}
              <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-blue-500/20 animate-spin-slow"></div>
              
              <div className="relative p-2 rounded-full bg-gradient-to-b from-blue-600/20 to-transparent backdrop-blur-md">
                <img
                  src="/pa.jpg" 
                  alt="Senesh Pahan"
                  className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <Sparkles className="absolute -top-2 -right-2 text-cyan-400 animate-pulse" size={48} />
            </div>
          </motion.div>

          {/* RIGHT: Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 text-sm md:text-base font-bold tracking-[0.6em] uppercase mb-4"
            >
              Graphic & Web Designer
            </motion.h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight mb-6">
              I'm <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-500">
                {text}
              </span>
              <span className="text-cyan-400 animate-blink">_</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              Crafting <span className="text-white font-medium italic underline decoration-blue-500/50 underline-offset-8">high-end digital identities</span>. 
              I specialize in making web interfaces feel alive and professional.
            </motion.p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              {[
                { icon: Github, link: "https://github.com/pahanr4453", label: "Github" },
                { icon: Linkedin, link: "https://linkedin.com/in/pahan_sewmina", label: "LinkedIn" },
                { icon: Facebook, link: "https://facebook.com/pahansewmina", label: "Facebook" },
                { icon: Instagram, link: "https://instagram.com/pahan_sewmina", label: "Instagram" },
                { icon: Mail, link: "mailto:shivajayasakara@gmail.com", label: "Email" }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -8, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.5)" }}
                  href={item.link} 
                  target="_blank"
                  className="p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modern Vertical Line */}
      <div className="absolute bottom-0 right-10 hidden lg:block">
        <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;