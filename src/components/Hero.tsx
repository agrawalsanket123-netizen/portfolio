import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-6 tracking-tight">
            Hi, I'm Sanket <span className="inline-block animate-bounce">👋</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-indigo-500 mb-8">
            Full-Stack Developer & AI Tools Builder
          </h2>
          
          <p className="max-w-2xl text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10">
            I'm an ICT student from Ahmedabad who builds fast, practical web apps and AI-powered tools for businesses. I turn ideas into live products — quickly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-charcoal font-semibold rounded-xl border border-black/10 hover:border-indigo-500/50 transition-all flex items-center justify-center"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
