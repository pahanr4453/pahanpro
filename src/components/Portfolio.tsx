import { ExternalLink } from 'lucide-react';

function Portfolio() {
  const projects = [
    {
      title: "Project One",
      desc: "This is my first website.",
      link: "https://remarkable-alpaca-f70c56.netlify.app/",
      image: "paha.jpg" // ඔයාගෙ image path එක දාන්න
    },
    {
      title: "Project Two",
      desc: "Stay tuned for updates!",
      link: "#",
      image: "paha.jpg"
    },
    {
      title: "Project Three",
      desc: "Stay tuned for updates!",
      link: "#",
      image: "paha.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="gradient-text">My Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;