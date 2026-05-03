import React from 'react';
import { BrutalistSection, NeonCard } from '../components/CyberComponents';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <BrutalistSection title="PROJECTS" id="projects" accentColor="blue">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, i) => (
          <NeonCard 
            key={i}
            title={project.title} 
            description={project.description} 
            tags={project.tags}
            link={project.link}
          />
        ))}
        <div className="brutalist-border p-6 border-dashed border-cyber-white/20 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="text-cyber-white/20 text-4xl mb-4 uppercase font-bold">Incoming...</div>
            <div className="w-full h-1 bg-cyber-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-cyber-blue animate-[loading_2s_infinite]" style={{ width: '40%' }} />
            </div>
          </div>
        </div>
      </div>
    </BrutalistSection>
  );
};
