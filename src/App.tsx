import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/10 selection:text-indigo-500">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
}
