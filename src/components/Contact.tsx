import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Mouse tracking for background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_2xd4oqb', 
      'template_m2tzznv', 
      formRef.current!, 
      'yPbxzEvg65X0nMehP'
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 5000);
    }, (error) => {
      setLoading(false);
      console.log(error.text);
      alert("Something went wrong. Please try again!");
    });
  };

  const socialLinks = [
    { icon: <Github size={20} />, color: "hover:bg-white/10", href: "https://github.com/pahanr4453" },
    { icon: <Linkedin size={20} />, color: "hover:bg-blue-600", href: "https://linkedin.com/in/pahansewmina" },
    { icon: <Facebook size={20} />, color: "hover:bg-blue-700", href: "https://www.facebook.com/pahansewmina" },
    { icon: <Youtube size={20} />, color: "hover:bg-red-600", href: "https://youtube.com/@pahansewmina" },
    { icon: <Instagram size={20} />, color: "hover:bg-pink-600", href: "https://instagram.com/pahan_sewmina" }
  ];

  return (
    <section 
      id="contact" 
      onMouseMove={handleMouseMove}
      className="py-24 px-6 bg-[#020617] relative overflow-hidden group/section"
    >
      
      {/* --- LIVE INTERACTIVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        {/* Mouse Follower Glow */}
        <motion.div 
          className="absolute -inset-[px] z-10 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${dx}px ${dy}px, rgba(37, 99, 235, 0.15), transparent 80%)`,
          }}
        />

        {/* Floating Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- HEADER WITH STATUS INDICATOR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-blue-600 pl-8"
        >
          <div className="flex flex-wrap items-center gap-5">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
              LET'S <span className="text-blue-500">CONNECT</span>
            </h2>
            <motion.div 
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="text-5xl md:text-6xl origin-bottom-right"
            >
              👋
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                Available for new projects
              </span>
            </div>
            
            <div className="flex items-center gap-2">
               <Sparkles size={14} className="text-blue-400" />
               <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                 Based in Sri Lanka 🇱🇰
               </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <p className="text-gray-400 text-xl font-medium max-w-md leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Email</p>
                  <p className="text-white font-black text-lg group-hover:text-blue-500 transition-colors">seneshpahan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Location</p>
                  <p className="text-white font-black text-lg group-hover:text-emerald-500 transition-colors">Southern, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  className={`p-4 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="p-10 md:p-12 rounded-[3rem] bg-[#030712] border border-white/10 backdrop-blur-2xl relative">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                  <input name="user_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Email</label>
                  <input name="user_email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-all font-bold resize-none"></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center justify-center gap-3 ${
                    sent ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  {loading ? 'TRANSMITTING...' : sent ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'} 
                  <Send size={16} className={sent ? 'hidden' : 'block'} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}