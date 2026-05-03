import React, { useState, useEffect } from 'react';

export const ScanlineOverlay: React.FC = () => (
  <>
    <div className="scanline" />
    <div className="fixed inset-0 pointer-events-none z-50 opacity-5" 
         style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
  </>
);

export const GlitchText: React.FC<{ text: string, className?: string }> = ({ text, className = "" }) => (
  <span className={`glitch ${className}`} data-text={text}>
    {text}
  </span>
);

export const TerminalBoot: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "> INITIALIZING SYSTEM BOOT...",
    "> LOADING KERNEL 0.4.2-STABLE",
    "> CHECKING PERIPHERALS...",
    "> OK.",
    "> ESTABLISHING NEURAL LINK...",
    "> ENCRYPTING CONNECTION...",
    "> ACCESS GRANTED.",
    "> WELCOME, USER 0x7FF",
    "> LOADING PORTFOLIO_V2.SYS..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-cyber-black z-[100] p-10 flex flex-col justify-start font-mono text-cyber-green overflow-hidden">
      <div className="max-w-2xl mx-auto w-full">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">{line}</div>
        ))}
        <div className="terminal-cursor"></div>
      </div>
    </div>
  );
};

export const BrutalistSection: React.FC<{ 
  title: string, 
  children: React.ReactNode, 
  id?: string,
  accentColor?: 'blue' | 'magenta' | 'green' 
}> = ({ title, children, id, accentColor = 'blue' }) => {
  const borderClass = accentColor === 'blue' ? 'border-cyber-blue' : accentColor === 'magenta' ? 'border-cyber-magenta' : 'border-cyber-green';
  const textClass = accentColor === 'blue' ? 'text-cyber-blue' : accentColor === 'magenta' ? 'text-cyber-magenta' : 'text-cyber-green';

  return (
    <section id={id} className={`w-full border-t-2 border-b-2 ${borderClass} mb-20 relative`}>
      <div className={`absolute -top-4 left-4 md:left-10 bg-cyber-black px-4 ${textClass} font-bold text-xl uppercase tracking-tighter`}>
        <GlitchText text={`[ ${title} ]`} />
      </div>
      <div className="p-6 md:p-10 lg:p-20">
        {children}
      </div>
    </section>
  );
};

export const NeonCard: React.FC<{ 
  title: string, 
  description: string, 
  tags: string[],
  link?: string 
}> = ({ title, description, tags, link }) => {
  return (
    <div className="brutalist-border p-6 hover:border-cyber-blue transition-colors group relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl mb-4 group-hover:text-cyber-blue transition-colors uppercase font-bold">{title}</h3>
      <p className="text-sm text-cyber-white/70 mb-6 font-mono leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] border border-cyber-white/20 px-2 py-1 uppercase">{tag}</span>
        ))}
      </div>
      {link && (
        <a href={link} className="inline-block text-xs border-2 border-cyber-white px-4 py-2 hover:bg-cyber-white hover:text-cyber-black transition-all font-bold uppercase">
          Open Protocol
        </a>
      )}
    </div>
  );
};

export const TerminalPrompt: React.FC<{ 
  label: string, 
  value: string, 
  isInput?: boolean 
}> = ({ label, value, isInput = false }) => (
  <div className="flex flex-col sm:flex-row sm:gap-4 mb-4 font-mono text-sm">
    <span className="text-cyber-green shrink-0">{label}</span>
    {isInput ? (
      <div className="flex gap-1 items-center">
        <span className="text-cyber-white">{value}</span>
        <span className="w-2 h-4 bg-cyber-green animate-pulse" />
      </div>
    ) : (
      <span className="text-cyber-white break-all">{value}</span>
    )}
  </div>
);
