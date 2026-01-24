import { motion } from 'framer-motion';
import { ExternalLink, Github, Landmark, ShoppingBag, Palmtree, Bot, Search } from 'lucide-react';

const myProjects = [
  {
    title: "FINANCIAL ANALYTICS HUB",
    description: "SECURE DIGITAL BANKING PLATFORM FOR REAL-TIME TRANSACTION TRACKING AND HIGH-PRECISION FINANCIAL REPORTING.",
    tech: ["PHP", "MYSQL", "CHART.JS"],
    link: "https://denipitiyawest.vercel.app/",
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

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl">
        
        {/* --- LASSANA KARAPU HEADER --- */}
        <div className="flex flex-col mb-16 border-l-2 border-blue-600/50 pl-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title size eka 'text-3xl md:text-5xl' walata adu kala, 'font-black' wenuwata 'font-bold' damma */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
              FEATURED <span className="text-blue-500 italic">PROJECTS</span>
            </h2>
            {/* Subtext eka thawa minimal kala */}
            <p className="text-gray-500 mt-3 text-[9px] font-bold uppercase tracking-[0.5em] opacity-70">
              Building Digital Excellence
            </p>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group-hover:border-blue-500/50 group-hover:bg-slate-900/60 transition-all duration-500 flex flex-col">
                
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="mb-10 p-5 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight uppercase">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-[11px] leading-relaxed mb-8 font-bold uppercase tracking-wider">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-black px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.github} className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
                      EXPLORE <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}