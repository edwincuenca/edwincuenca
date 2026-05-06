import React from 'react';
import { BrutalistSection, TerminalPrompt } from '../components/CyberComponents';

export const Contact: React.FC = () => {
  return (
    <BrutalistSection title="CONTACT" id="contact" accentColor="blue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <p className="font-mono text-xl mb-10 text-cyber-white/80">
            WANT TO INITIATE A SECURE CHANNEL? SEND A DATA PACKET OR USE THE TERMINAL.
          </p>
          <div className="space-y-6">
            <a href="mailto:edwin@node-01.io" className="block text-2xl hover:text-cyber-blue transition-colors underline underline-offset-8">
              edwin@node-01.io
            </a>
            <div className="flex gap-6">
              {['Github', 'LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="https://www.edwincuenca.dev/" target="_blank" rel="noopener noreferrer" className={`text-xs border-2 border-cyber-white px-4 py-2 uppercase font-bold transition-all ${
                  social === 'Github' ? 'hover:bg-cyber-blue hover:border-cyber-blue' : 
                  social === 'LinkedIn' ? 'hover:bg-cyber-magenta hover:border-cyber-magenta' : 
                  'hover:bg-cyber-green hover:border-cyber-green'
                } hover:text-cyber-black`}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-black/60 p-6 brutalist-border border-cyber-blue font-mono">
          <div className="text-[10px] mb-4 text-cyber-blue/50 flex justify-between">
            <span>TERMINAL_MSG_v1.0</span>
            <span>SECURE_MODE: ON</span>
          </div>
          <TerminalPrompt label="NAME:" value="Type your identifier..." isInput />
          <TerminalPrompt label="EMAIL:" value="" isInput />
          <TerminalPrompt label="MESSAGE:" value="" isInput />
          <button className="mt-6 w-full bg-cyber-blue text-cyber-black py-4 font-bold uppercase text-sm hover:brightness-110">
            Transmit Data
          </button>
        </div>
      </div>
    </BrutalistSection>
  );
};
