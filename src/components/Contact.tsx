import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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

  return (
    <section id="contact" className="py-24 px-6 bg-[#020617] relative">
      <div className="container mx-auto max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-blue-600 pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            LET'S <span className="text-blue-500">CONNECT</span>
          </h2>
          <p className="text-gray-500 mt-2 text-[11px] uppercase tracking-[0.5em] font-bold">
            Ready for new opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <p className="text-gray-400 text-lg font-medium max-w-md">
              Have a project in mind? Let's talk about how we can work together to build something amazing.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">Email Me</p>
                  <p className="text-white font-black text-lg">seneshpahan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">Location</p>
                  <p className="text-white font-black text-lg">Sri Lanka 🇱🇰</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 pt-6">
              {[
                { icon: <Github />, color: "hover:bg-white/10" },
                { icon: <Linkedin />, color: "hover:bg-blue-600" },
                { icon: <Facebook />, color: "hover:bg-blue-700" },
                { icon: <Youtube />, color: "hover:bg-red-600" },
                { icon: <Instagram />, color: "hover:bg-pink-600" }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5 }}
                  href="#"
                  className={`p-4 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 ${item.color}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Working Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl shadow-2xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                <input name="user_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                <input name="user_email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-bold resize-none"></textarea>
              </div>
              <motion.button 
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 ${sent ? 'bg-green-600' : 'bg-blue-600'} text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg flex items-center justify-center gap-3`}
              >
                {loading ? 'SENDING...' : sent ? 'MESSAGE SENT! ✓' : 'SEND MESSAGE'} 
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}