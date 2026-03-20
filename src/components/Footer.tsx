import { Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-charcoal font-display font-bold">Sanket Agrawal</p>
          <p className="text-sm text-charcoal/50">Designed & Built by Sanket Agrawal</p>
        </div>
        
        <div className="flex items-center gap-6">
          <p className="text-sm text-charcoal/50">© {currentYear}</p>
          <a 
            href="https://github.com/agrawalsanket123-netizen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-indigo-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
