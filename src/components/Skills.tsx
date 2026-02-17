import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Globe, Terminal, Palette, Cloud, 
  Layout, FileCode, Monitor, Database, Code2, 
  Layers, Github, Smartphone
} from 'lucide-react';

interface SubSkill {
  name: string;
  level: number;
  icon: JSX.Element;
}

interface SkillGroup {
  category: string;
  icon: JSX.Element;
  colorClass: string;
  items: SubSkill[];
}

function Skills() {
  // --- MOUSE INTERACTION LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Mouse eka screen eke mada idan calculate karanawa background shapes paddo
    mouseX.set((clientX - innerWidth / 2) / 30);
    mouseY.set((clientY - innerHeight / 2) / 30);
  };

  const skillGroups: SkillGroup[] = [
    {
      category: 'Web Development',
      icon: <Globe size={42} className="text-blue-400" />,
      colorClass: 'from-blue-500 to-cyan-400',
      items: [
        { name: 'HTML5', level: 95, icon: <Layout size={18} /> },
        { name: 'CSS3 / Tailwind', level: 85, icon: <Palette size={18} /> },
        { name: 'JavaScript', level: 75, icon: <FileCode size={18} /> },
        { name: 'PHP / MySQL', level: 70, icon: <Database size={18} /> }
      ]
    },
    {
      category: 'Python Programming',
      icon: <Terminal size={42} className="text-yellow-500" />,
      colorClass: 'from-yellow-500 to-orange-500',
      items: [
        { name: 'Python Core', level: 80, icon: <Code2 size={18} /> },
        { name: 'Automation Scripts', level: 65, icon: <Terminal size={18} /> },
        { name: 'Data Analysis', level: 60, icon: <Layers size={18} /> }
      ]
    },
    {
      category: 'Design & UI/UX',
      icon: <Palette size={42} className="text-pink-500" />,
      colorClass: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Figma UI Design', level: 85, icon: <Monitor size={18} /> },
        { name: 'Adobe Photoshop', level: 75, icon: <Layers size={18} /> },
        { name: 'Graphic Design', level: 80, icon: <Palette size={18} /> }
      ]
    },
    {
      category: 'Systems & Cloud',
      icon: <Cloud size={42} className="text-green-400" />,
      colorClass: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Git & GitHub', level: 90, icon: <Github size={18} /> },
        { name: 'Cloud Hosting', level: 65, icon: <Cloud size={18} /> },
        { name: 'App Distribution', level: 60, icon: <Smartphone size={18} /> }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      onMouseMove={handleMouseMove}
      className="py-24 px-4 bg-transparent relative overflow-hidden"
    >
      
      {/* --- LIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Parallax Floating Particles */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute inset-0"
        >
          <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-pulse"></div>
          <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-cyan-400 rounded-full blur-[4px] animate-bounce-slow"></div>
          <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-purple-500 rounded-full blur-[2px] animate-pulse"></div>
          <div className="absolute top-[60%] left-[5%] opacity-10"><Code2 size={60} className="text-blue-500" /></div>
          <div className="absolute bottom-[10%] right-[10%] opacity-10"><Terminal size={50} className="text-cyan-500" /></div>
        </motion.div>

        {/* Static Background Glows */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Animation (Original) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Cards Grid (Original Layout & Animations) */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-slate-800/20 border border-white/5 backdrop-blur-md hover:bg-slate-800/40 transition-all duration-700 shadow-2xl"
            >
              <div className="flex items-center gap-6 mb-12">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full"></div>
                  {group.icon}
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                    {group.category}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent mt-3 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              <div className="space-y-8">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group/item">
                    <div className="flex justify-between items-center text-gray-400 mb-3 font-bold">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 group-hover/item:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="group-hover/item:text-white uppercase text-xs tracking-widest transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-black">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${group.colorClass} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;