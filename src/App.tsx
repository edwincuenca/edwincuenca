import { useState } from 'react';
import { ScanlineOverlay, TerminalBoot } from './components/CyberComponents';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  const [booting, setBooting] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (booting) {
    return <TerminalBoot onComplete={() => setBooting(false)} />;
  }

  const navLinks = [
    { href: "#about", label: "01_ABOUT" },
    { href: "#projects", label: "02_PROJECTS" },
    { href: "#skills", label: "03_SKILLS" },
    { href: "#contact", label: "04_CONTACT" }
  ];

  return (
    <div className="min-h-screen bg-cyber-black selection:bg-cyber-blue selection:text-cyber-black">
      <ScanlineOverlay />
      
      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-40 border-b-2 border-cyber-white/10 bg-cyber-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-bold">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-cyber-blue block" />
            <span className="uppercase tracking-widest text-sm">PORTFOLIO_V2.SYS</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-cyber-blue transition-colors underline decoration-2 underline-offset-4">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-cyber-blue p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "[ X ]" : "[ MENU ]"}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cyber-black border-b-2 border-cyber-blue p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg font-mono text-cyber-white hover:text-cyber-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t-2 border-cyber-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-[10px] font-mono text-cyber-white/30 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} EDWIN_CUENCA // ALL SYSTEMS OPERATIONAL
          </div>
          <div className="flex gap-4">
            <span className="w-3 h-3 bg-cyber-blue" />
            <span className="w-3 h-3 bg-cyber-magenta" />
            <span className="w-3 h-3 bg-cyber-green" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
