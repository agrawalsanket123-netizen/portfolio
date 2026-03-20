import { motion } from 'motion/react';

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Python"]
  },
  {
    title: "AI/ML",
    skills: ["Groq API", "Llama 3.3", "Prompt Engineering"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Render", "Supabase"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Technical Skills
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            My toolkit for building modern web applications and AI-powered solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="p-8 rounded-2xl bg-[#FAFAFA] border border-black/5"
            >
              <h3 className="text-lg font-display font-bold text-indigo-500 mb-6">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white text-charcoal/80 text-sm font-medium rounded-xl shadow-sm border border-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
