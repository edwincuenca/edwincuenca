import React from 'react';
import { BrutalistSection, TerminalPrompt } from '../components/CyberComponents';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <BrutalistSection title="SKILLS" id="skills" accentColor="green">
      <div className="bg-cyber-black border-2 border-cyber-green p-8 font-mono relative overflow-hidden">
        <div className="absolute top-2 right-4 text-[8px] text-cyber-green opacity-30">DIAGNOSTIC_RUN_0x882</div>
        <h3 className="text-cyber-green mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyber-green" /> 
          SYSTEMS_CAPABILITIES
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">
          <div>
            {portfolioData.skills.frontend.map((skill, i) => (
              <TerminalPrompt key={i} label={skill.label} value={skill.skills} />
            ))}
          </div>
          <div>
            {portfolioData.skills.backend.map((skill, i) => (
              <TerminalPrompt key={i} label={skill.label} value={skill.skills} />
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <div className="text-xs text-cyber-green mb-2 uppercase font-bold">Current Neural Load:</div>
          <div className="w-full h-8 brutalist-border border-cyber-green p-1 flex gap-1">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className={`h-full ${i < 7 ? 'bg-cyber-green/80' : i < 9 ? 'bg-cyber-green/20' : 'bg-cyber-green/10'}`} 
                style={{ width: '10%' }} 
              />
            ))}
          </div>
        </div>
      </div>
    </BrutalistSection>
  );
};
