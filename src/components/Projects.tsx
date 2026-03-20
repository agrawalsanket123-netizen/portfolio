import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: "AI Interview System",
    desc: "AI-powered interview platform with voice I/O, aptitude tests, and smart scoring",
    tags: ["React", "FastAPI", "Groq AI", "Vercel"],
    live: "https://ai-interview-system-vert.vercel.app/",
    github: "https://github.com/agrawalsanket123-netizen"
  },
  {
    name: "TaskFlow PWA",
    desc: "Personal productivity PWA with habits, tasks, weight tracker and push notifications",
    tags: ["React", "Supabase", "Firebase FCM", "PWA"],
    live: "https://taskflow-xi-two.vercel.app/",
    github: "https://github.com/agrawalsanket123-netizen/taskflow"
  },
  {
    name: "Business Demo Site",
    desc: "Demo business website with AI chatbot, WhatsApp integration and enquiry form",
    tags: ["React", "Groq AI", "Tailwind CSS", "Vercel"],
    live: "https://business-demo-seven.vercel.app/",
    github: "https://github.com/agrawalsanket123-netizen"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Featured Projects
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            A selection of my recent work, ranging from AI tools to productivity applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-black/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-black/5 transition-all group"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-display font-bold text-charcoal mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#FAFAFA] text-charcoal/60 text-xs font-medium rounded-full border border-black/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex items-center gap-4">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-indigo-500 text-white text-sm font-semibold rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-charcoal border border-black/10 text-sm font-semibold rounded-lg hover:border-indigo-500/50 transition-all flex items-center justify-center"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
