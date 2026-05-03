import React from 'react';
import { BrutalistSection } from '../components/CyberComponents';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <BrutalistSection title="ABOUT" id="about" accentColor="magenta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-3xl mb-8 leading-tight">
            LOW-LEVEL OPTIMIZATION<br />
            HIGH-LEVEL THINKING
          </h2>
          {portfolioData.bio.map((para, i) => (
            <p key={i} className={`font-mono text-lg text-cyber-white/70 leading-relaxed ${i === 0 ? 'mb-6' : ''}`}>
              {para}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {portfolioData.stats.map((stat, i) => {
            const borderClass = stat.color === 'magenta' ? 'border-cyber-magenta' : stat.color === 'blue' ? 'border-cyber-blue' : '';
            return (
              <div key={i} className={`brutalist-border p-4 aspect-square flex flex-col justify-between ${borderClass}`}>
                <span className="text-[10px] text-cyber-white/40 font-mono">{stat.label}</span>
                <span className={`text-4xl font-bold ${stat.label === 'LOCATION' ? 'text-2xl' : ''}`}>{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </BrutalistSection>
  );
};
