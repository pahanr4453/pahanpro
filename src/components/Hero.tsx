import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

function Hero() {
  const [text, setText] = useState('');
  const fullText = "I'm Senesh Pahan";
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setShowProfile(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 stars"></div>
      <div className="absolute inset-0 twinkling"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Picture */}
          <div className={`profile-container mb-8 transition-all duration-1000 ${
              showProfile ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-75"></div>
              <img
                src="pa.jpg"
                alt="Senesh Pahan"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl profile-image"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="typing-text">{text}</span>
              <span className="cursor-blink">|</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-2xl fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
              Graphic Designer & Web Designer
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Hello! I'm a passionate developer and designer, bringing ideas to life through code and creativity. 
              I have a keen eye for detail and a love for creating intuitive and beautiful digital experiences.
            </p>
          </div>

          {/* Updated Social Links with YT & FB */}
          <div className="flex flex-wrap justify-center gap-6 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com/yourprofile" target="_blank" className="social-icon hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="social-icon hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" className="social-icon hover:text-blue-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://youtube.com/@yourchannel" target="_blank" className="social-icon hover:text-red-500 transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://www.instagram.com/pahan_sewmina/" target="_blank" className="social-icon hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:shivajayasakara@gmail.com" className="social-icon hover:text-orange-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel"></div></div>
      </div>
    </section>
  );
}

export default Hero;