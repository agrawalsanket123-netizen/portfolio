import { motion } from 'motion/react';
import { Rocket, Code, Cpu } from 'lucide-react';

const stats = [
  {
    icon: <Rocket className="text-indigo-500" size={24} />,
    title: "3+ Live Projects",
    desc: "Deployed & functional"
  },
  {
    icon: <Code className="text-indigo-500" size={24} />,
    title: "Full-Stack Developer",
    desc: "End-to-end solutions"
  },
  {
    icon: <Cpu className="text-indigo-500" size={24} />,
    title: "AI Integration",
    desc: "LLMs & Smart Tools"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
              About Me
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              I'm in my final semester of ICT and have spent the last year building real products — from AI interview systems to task management PWAs. I love combining modern web tech with AI to solve real business problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-indigo-500/20 transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-charcoal">{stat.title}</h3>
                  <p className="text-sm text-charcoal/60">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
