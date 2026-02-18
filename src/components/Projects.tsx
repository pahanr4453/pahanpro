import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Landmark, ShoppingBag, Palmtree, Bot, Search, MessageCircle, ShoppingCart, X } from 'lucide-react';

// --- 1. FEATURED PROJECTS (NO MODAL - ORIGINAL DESIGN) ---
const myProjects = [
  {
    title: "FINANCIAL ANALYTICS HUB",
    description: "SECURE DIGITAL BANKING PLATFORM FOR REAL-TIME TRANSACTION TRACKING AND HIGH-PRECISION FINANCIAL REPORTING.",
    tech: ["PHP", "MYSQL", "CHART.JS"],
    link: "https://denipitiyawestsanasa.it.com/",
    github: "#",
    color: "from-emerald-500/20",
    icon: <Landmark size={24} className="text-emerald-400" />
  },
  {
    title: "SMART E-COMMERCE ENGINE",
    description: "HIGH-PERFORMANCE MARKETPLACE FEATURING DYNAMIC PRODUCT MANAGEMENT AND SECURE CHECKOUT SYSTEMS.",
    tech: ["PHP", "CSS", "HTML5","MYSQL"],
    link: "#",
    github: "#",
    color: "from-blue-500/20",
    icon: <ShoppingBag size={24} className="text-blue-400" />
  },
  {
    title: "VISIT SRI LANKA PLATFORM",
    description: "IMMERSIVE TRAVEL GUIDE SHOWCASING ISLAND DESTINATIONS WITH INTERACTIVE MAPS AND LOCAL BOOKING.",
    tech: ["REACT", "NODE.JS", "TAILWIND"],
    link: "https://discover-sri-lanka-alpha.vercel.app/",
    github: "#",
    color: "from-amber-500/20",
    icon: <Palmtree size={24} className="text-amber-400" />
  },
  {
    title: "PYTHON AUTOMATION BOT",
    description: "CUSTOM PYTHON SCRIPT FOR AUTOMATING REPETITIVE WEB TASKS AND SOCIAL MEDIA INTERACTIONS EFFICIENTLY.",
    tech: ["PYTHON", "SELENIUM", "LOGIC"],
    link: "#",
    github: "#",
    color: "from-purple-500/20",
    icon: <Bot size={24} className="text-purple-400" />
  },
  {
    title: "DATA SCRAPING ENGINE",
    description: "ADVANCED PYTHON-BASED TOOL FOR EXTRACTING LARGE-SCALE DATA FROM WEBSITES AND STRUCTURED INSIGHTS.",
    tech: ["PYTHON", "BEAUTIFULSOUP", "CSV"],
    link: "#",
    github: "#",
    color: "from-red-500/20",
    icon: <Search size={24} className="text-red-400" />
  }
];

// --- 2. PREMIUM ASSETS (WITH MODAL & IMAGES) ---
const saleProjects = [
  {
    title: "🎓 SMART EDUCATOR PRO (LMS + ADMIN + SEO)",
    price: "$230.00",
    image: "/sale1.jpg", 
    description: "A BEAUTIFULLY CRAFTED ACADEMIC MANAGEMENT SYSTEM. FEATURES A SECURE PHP BACKEND, STUDENT DATABASE, AND AN ELEGANT UI DESIGNED FOR MODERN TEACHERS.",
    fullDetails: "BRING YOUR TUITION BRAND TO LIFE WITH A SYSTEM THAT COMBINES BEAUTY AND BRAINS. THIS IS A CUSTOM-BUILT PLATFORM DESIGNED SPECIFICALLY FOR EDUCATORS WHO NEED TO MANAGE THEIR CLASSES PROFESSIONALLY. INCLUDES STUDENT REGISTRATION, NOTES MANAGEMENT, AND FULL SEO OPTIMIZATION.",
    tech: ["PHP", "MYSQL", "LMS", "SEO"]
  },
  {
    title: "🏆 THE SEO-POWERED PHOTOGRAPHY ENGINE",
    price: "$90.00",
    image: "/sale2.jpg",
    description: "A CINEMATIC PHOTOGRAPHY ECOSYSTEM WITH A POWERFUL CMS. BUILT FOR ELITE VISUAL STORYTELLERS WHO DEMAND GOOGLE RANKING AND TOTAL CONTENT CONTROL.",
    fullDetails: "THIS IS NOT JUST A PORTFOLIO; IT'S A HIGH-PERFORMANCE BUSINESS ENGINE FOR PHOTOGRAPHERS. FEATURES AN ULTRA-MINIMALIST DESIGN, FAST LOADING TIMES, AND A COMPLETE ADMIN PANEL TO MANAGE YOUR GALLERIES WITHOUT ANY CODING.",
    tech: ["REACT", "TAILWIND", "CMS", "SEO"]
  }
];

export default function Projects() {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const whatsappNumber = "94761151536";

  return (
    <div className="bg-[#020617] relative overflow-hidden">
      
      {/* --- SOFT AURA BACKGROUND (CLEAN & LUXURY) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 blur-[180px] rounded-full"
        />
      </div>

      {/* --- MODAL FOR PREMIUM ASSETS ONLY --- */}
      <AnimatePresence>
        {selectedAsset && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedAsset(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelectedAsset(null)} className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white z-20 transition-colors"><X size={24} /></button>
              <div className="md:w-1/2 h-64 md:h-auto"><img src={selectedAsset.image} alt={selectedAsset.title} className="w-full h-full object-cover" /></div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-blue-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4 inline-block">Asset Details</span>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">{selectedAsset.title}</h2>
                <div className="text-2xl font-black text-blue-400 mb-6">{selectedAsset.price}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 uppercase font-bold tracking-wide">{selectedAsset.fullDetails}</p>
                <a href={`https://wa.me/${whatsappNumber}?text=Hi Senesh, I want to purchase: ${selectedAsset.title}`} target="_blank" className="flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] uppercase tracking-widest rounded-2xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]">BUY VIA WHATSAPP <MessageCircle size={20} /></a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION 1: FEATURED PROJECTS --- */}
      <section id="portfolio" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl relative">
          <div className="flex flex-col mb-16 border-l-2 border-blue-600/50 pl-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">FEATURED <span className="text-blue-500 italic">PROJECTS</span></h2>
              <p className="text-gray-500 mt-3 text-[9px] font-bold uppercase tracking-[0.5em] opacity-70">Building Digital Excellence</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 60 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }} 
                className="group relative"
              >
                <div className="relative h-full p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group-hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="mb-10 p-5 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-all">{project.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-8 font-bold uppercase tracking-wider">{project.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[9px] font-black px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a href={project.github} className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"><Github size={20} /></a>
                      <a href={project.link} className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">EXPLORE <ExternalLink size={16} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PREMIUM ASSETS --- */}
      <section className="py-32 px-6 bg-[#010413] border-t border-white/5 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mb-4 inline-block">Exclusive Market</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">PREMIUM <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 italic">ASSETS</span></h2>
              <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.4em]">Available for Purchase</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProjects.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95, y: 40 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15 }} 
                onClick={() => setSelectedAsset(item)} 
                className="group cursor-pointer relative"
              >
                <div className="relative h-full bg-slate-900/40 border border-white/5 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="h-64 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 right-6 px-5 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl text-blue-400 font-black text-sm">{item.price}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-[11px] font-bold uppercase leading-relaxed mb-8 opacity-70 line-clamp-2">{item.description}</p>
                    <div className="py-4 bg-blue-600 rounded-2xl text-white font-black text-[11px] text-center uppercase tracking-[0.2em] shadow-lg shadow-blue-900/40">VIEW DETAILS</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}