import { motion } from 'framer-motion';
import { ExternalLink, Github, Landmark, ShoppingBag, Palmtree, Bot, Search } from 'lucide-react';

const myProjects = [
  {
    title: "FINANCIAL ANALYTICS HUB",
    description: "Secure digital banking platform for real-time transaction tracking and high-precision financial reporting.",
    tech: ["PHP", "MySQL", "Chart.js"],
    link: "#",
    github: "#",
    icon: <Landmark size={32} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
  },
  {
    title: "SMART E-COMMERCE ENGINE",
    description: "High-performance marketplace featuring dynamic product management and secure checkout systems.",
    tech: ["React", "Node.js", "Tailwind"],
    link: "#",
    github: "#",
    icon: <ShoppingBag size={32} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
  },
  {
    title: "VISIT SRI LANKA PLATFORM",
    description: "Immersive travel guide showcasing island destinations with interactive maps and local booking.",
    tech: ["JS", "CSS3", "HTML5"],
    link: "#",
    github: "#",
    icon: <Palmtree size={32} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
  },
  {
    title: "PYTHON AUTOMATION BOT",
    description: "Custom Python script for automating repetitive web tasks and social media interactions efficiently.",
    tech: ["Python", "Selenium", "Logic"],
    link: "#",
    github: "#",
    icon: <Bot size={32} className="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />
  },
  {
    title: "DATA SCRAPING ENGINE",
    description: "Advanced Python-based tool for extracting large-scale data from websites and converting it into structured insights.",
    tech: ["Python", "BeautifulSoup", "CSV"],
    link: "#",
    github: "#",
    icon: <Search size={32} className="text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.8)]" />
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#020617]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16 border-l-4 border-blue-600 pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            FEATURED <span className="text-blue-500">PROJECTS</span>
          </h2>
          <p className="text-gray-500 mt-2 text-[11px] uppercase tracking-[0.5em] font-bold">
            Building Digital Excellence
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Cards pop up one by one
              whileHover={{ y: -10 }} // Slight lift on hover
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-500"
            >
              
              {/* Icon Container with subtle animation */}
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="mb-8 p-5 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all shadow-inner"
              >
                {project.icon}
              </motion.div>

              {/* Text Content */}
              <h3 className="text-xl font-black uppercase tracking-wider text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-bold px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <a href={project.github} className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white hover:bg-white/20 transition-all">
                  <Github size={18} />
                </a>
                <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
                  EXPLORE <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}