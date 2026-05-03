import React from 'react';
import { GlitchText } from '../components/CyberComponents';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center mb-40 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="mb-6 inline-block border-2 border-cyber-magenta px-3 py-1 text-[10px] uppercase font-bold text-cyber-magenta">
            [ STATUS: ACTIVE ]
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 leading-none tracking-tighter">
            <GlitchText text={portfolioData.name} className="block" /><br />
            <span className="text-cyber-blue">{portfolioData.surname}</span>
          </h1>
          <p className="text-lg md:text-2xl font-mono text-cyber-white/60 mb-10 max-w-xl">
            SYSTEMS ARCHITECT / SOFTWARE DEV / H4CK3R.<br />
            <span className="text-cyber-white uppercase font-bold italic">{portfolioData.tagline}</span>
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="bg-cyber-blue text-cyber-black px-8 py-4 font-bold uppercase text-sm hover:translate-x-2 transition-transform">
              Access Projects
            </a>
            <a href="#contact" className="border-2 border-cyber-white px-8 py-4 font-bold uppercase text-sm hover:bg-cyber-white hover:text-cyber-black transition-all">
              Initialize Link
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-cyber-blue/10 blur-3xl rounded-full" />
          <div className="brutalist-border-blue relative overflow-hidden group">
            <img
              src="/hero-bg.png"
              alt="Cyberpunk Schematic"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-cyber-blue uppercase">
              OBJECT: SCHEMATIC_0x1A<br />
              COORD: 34.0522° N, 118.2437° W
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-l-4 border-cyber-magenta pl-6 max-w-2xl italic text-sm text-cyber-magenta font-mono">
        "The net is vast and infinite, but our systems are rigid. We build in the gaps where others fear to look."
      </div>
    </section>
  );
};
