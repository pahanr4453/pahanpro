import { GraduationCap, Trophy, Award, BookOpen, Star, ArrowRight, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Journey = () => {
  const education = [
    {
      title: "Secondary Education",
      institution: "Mahinda Rajapaksha College, Matara",
      duration: "2016 - 2025",
      description: "Nurturing a strong foundation in technology and academics at one of the leading schools in the south.",
      icon: <GraduationCap className="text-blue-400" />
    },
    {
      title: "Graphic Design & UI/UX",
      institution: "Self-Mastery & Coursework",
      duration: "Skill Acquired",
      description: "Mastered visual storytelling, layout design, and digital aesthetics through intensive course modules.",
      icon: <Palette className="text-emerald-400" />
    },
    {
      title: "Professional Skills Mastery",
      institution: "British Council, Sun Vision English Academy & SNIT",
      duration: "Certified",
      description: "Mastering English communication, professional linguistics, and advanced mathematical shortcuts.",
      icon: <Award className="text-pink-400" />
    },
    {
      title: "Higher Education Aspirations",
      institution: "SLIIT (Expected)",
      duration: "Prospective",
      description: "Targeting a degree in Software Engineering to build next-gen digital solutions.",
      icon: <BookOpen className="text-purple-400" />
    }
  ];

  const sports = [
    { name: "Cricket", icon: "🏏", color: "from-blue-500/20" },
    { name: "Volleyball", icon: "🏐", color: "from-orange-500/20" },
    { name: "Karate Master", icon: "🥋", color: "from-red-500/20" },
    { name: "Footballer", icon: "⚽", color: "from-sky-500/20" },
    { name: "Throwball", icon: "🏐", color: "from-green-500/20" },
    { name: "Chess Master", icon: "♟️", color: "from-purple-500/20" },
  ];

  return (
    <section id="journey" className="py-32 bg-[#020617] relative overflow-hidden">
      
      {/* Dynamic Background Decor */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10" 
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Animated Title Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-400">
              Live: My Evolution
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none uppercase"
          >
            STORY & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent italic">ACHIEVEMENTS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mt-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Education Timeline */}
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-widest">
              <span className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <GraduationCap className="text-blue-500" />
              </span> 
              Academic Path
              <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
            </h3>
            
            <div className="space-y-6 relative ml-5 border-l-2 border-slate-800/50 pl-10">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative pb-10 last:pb-0"
                >
                  <div className="absolute -left-[51px] top-1 w-5 h-5 bg-[#020617] border-2 border-slate-700 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.05] group-hover:border-blue-500/30 transition-all duration-500">
                    <span className="text-blue-400 text-[10px] font-black tracking-widest uppercase">{item.duration}</span>
                    <h4 className="text-xl font-black text-white mt-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-[10px] font-bold mb-3 uppercase tracking-wide">{item.institution}</p>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Sports Excellence */}
          <div className="space-y-12">
             <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-widest">
              <span className="p-3 bg-yellow-500/20 rounded-2xl border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <Trophy className="text-yellow-500" />
              </span> 
              Sports Excellence
              <div className="h-[1px] flex-grow bg-gradient-to-r from-yellow-500/50 to-transparent" />
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sports.map((sport, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`bg-gradient-to-br ${sport.color} to-transparent p-6 rounded-[2rem] border border-white/5 backdrop-blur-md flex flex-col items-center text-center group`}
                >
                  <span className="text-4xl mb-4 group-hover:rotate-12 transition-transform duration-500">{sport.icon}</span>
                  <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">{sport.name}</h4>
                  <div className="w-8 h-0.5 bg-white/10 mt-3 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
                </motion.div>
              ))}
            </div>

            {/* National Merit Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="relative p-10 rounded-[3rem] overflow-hidden bg-slate-900/40 border border-white/10 group shadow-2xl mt-10"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-500/10 blur-3xl group-hover:bg-yellow-500/30 transition-all duration-700" />
              
              <div className="flex flex-col md:flex-row gap-8 relative z-10 items-center">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.4)] border-2 border-white/20">
                  <Star className="text-white fill-white" size={40} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-black text-white italic tracking-tighter leading-none mb-2 uppercase">National Merit Pass</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    Excellence award in Dancing event for <span className="text-yellow-500 font-bold">GUS Lanka</span>.
                  </p>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center md:justify-start gap-2 mt-5 text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] cursor-pointer"
                  >
                    View Achievement <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;