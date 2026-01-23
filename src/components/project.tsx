import { ExternalLink, Github, Globe2, Terminal, Code2, Database, Smartphone } from 'lucide-react';

const myProjects = [
  {
    title: "E-Commerce System",
    description: "PHP සහ MySQL පාවිච්චි කරලා හදපු සම්පූර්ණ වෙළඳ වෙබ් අඩවියක්. මේකේ order management සහ admin dashboard එකක් තියෙනවා.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "#",
    github: "#",
    icon: <Globe2 size={36} className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" />
  },
  {
    title: "Python Data Bot",
    description: "වෙබ් අඩවි වලින් දත්ත ස්වයංක්‍රීයව ලබාගන්න (Scraping) හදපු Python script එකක්. මේක වැඩ පහසු කරන්න උදව් වෙනවා.",
    tech: ["Python", "BeautifulSoup", "Automation"],
    link: "#",
    github: "#",
    icon: <Terminal size={36} className="text-yellow-500 group-hover:scale-110 transition-transform duration-500" />
  },
  {
    title: "Student Management",
    description: "ශිෂ්‍ය දත්ත පාලනය කරන්න හදපු system එකක්. මේකේ දත්ත ඇතුළත් කිරීම, සෙවීම සහ වාර්තා ලබාගැනීම කරන්න පුළුවන්.",
    tech: ["Java", "SQL", "Swing"],
    link: "#",
    github: "#",
    icon: <Database size={36} className="text-green-500 group-hover:-translate-y-2 transition-transform duration-500" />
  },
  {
    title: "Inventory Control",
    description: "කඩයක හෝ ආයතනයක බඩු තොග පාලනය (Stock management) කිරීම සඳහා විශේෂයෙන් නිර්මාණය කළ මෘදුකාංගයකි.",
    tech: ["C#", "SQL Server", "Material UI"],
    link: "#",
    github: "#",
    icon: <Code2 size={36} className="text-red-400 group-hover:rotate-[-12deg] transition-transform duration-500" />
  },
  {
    title: "Simple Task App",
    description: "වැඩ කටයුතු පිළිවෙළකට මතක තබා ගැනීමට සහ කළමනාකරණය කිරීමට හදපු සරල සහ වේගවත් වෙබ් ඇප් එකක්.",
    tech: ["React", "LocalStorage", "Tailwind"],
    link: "#",
    github: "#",
    icon: <Smartphone size={36} className="text-purple-400 group-hover:scale-125 transition-transform duration-500" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2rem] bg-slate-800/20 border border-white/5 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Card Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/15 transition-all"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10 uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg">
                    <span>View Demo</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}