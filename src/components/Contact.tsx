import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-charcoal/60">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-black/5 text-center"
                >
                  <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal mb-2">Thanks!</h3>
                  <p className="text-charcoal/60">I'll get back to you soon 🙌</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-charcoal/80">Name</label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-charcoal/80">Email</label>
                      <input 
                        required
                        type="email" 
                        id="email" 
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-charcoal/80">Message</label>
                    <textarea 
                      required
                      id="message" 
                      rows={5} 
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="p-8 bg-white rounded-3xl border border-black/5 space-y-6">
                <h3 className="font-display font-bold text-charcoal">Direct Contact</h3>
                
                <a 
                  href="mailto:agrawalsanket123@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#FAFAFA] rounded-xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">Email</p>
                    <p className="text-charcoal/80 font-medium">agrawalsanket123@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/agrawalsanket123-netizen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#FAFAFA] rounded-xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">GitHub</p>
                    <p className="text-charcoal/80 font-medium">agrawalsanket123-netizen</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
