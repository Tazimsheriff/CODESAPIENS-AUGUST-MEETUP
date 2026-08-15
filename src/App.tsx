/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const Stars = () => {
  return (
    <div className="stars-container">
      {[...Array(100)].map((_, i) => (
        <div 
          key={i} 
          className="star" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`, 
            width: `${Math.random() * 2 + 1}px`, 
            height: `${Math.random() * 2 + 1}px`,
            '--duration': `${Math.random() * 3 + 2}s`
          } as any} 
        />
      ))}
    </div>
  );
};

interface Volunteer {
  name: string;
  role: string;
  img: string;
  linkedin: string;
}

const VOLUNTEERS: Volunteer[] = [
  { 
    name: "R TAZIM SHERIFF", 
    role: "Event Lead", 
    img: "https://i.ibb.co/ZzrDNtSm/tazzz.jpg", 
    linkedin: "https://www.linkedin.com/in/tazim-sheriff-r-15a355230/" 
  },
  { 
    name: "HARSHA VARDHINI R", 
    role: "Event Lead", 
    img: "https://i.ibb.co/5X3G6ZR9/harsha.jpg", 
    linkedin: "https://www.linkedin.com/in/harsha-vardhini-05783036a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
  },
  { 
    name: "J.MUKESHWAR RAUDRA (P r o f e s s o r)", 
    role: "Co-Lead", 
    img: "https://i.ibb.co/1GjL7ssp/proffesor.jpg", 
    linkedin: "https://www.linkedin.com/in/mukeshwar-raudra" 
  },
  { 
    name: "GIRIPRASAD K", 
    role: "Co-Lead", 
    img: "https://i.ibb.co/Txt7xt4P/giri.jpg", 
    linkedin: "https://www.linkedin.com/in/girii73?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
  },
  { 
    name: "JAYASRI S", 
    role: "Documentation Lead", 
    img: "https://i.ibb.co/rKkFTNT2/jayasree.jpg", 
    linkedin: "https://www.linkedin.com/in/jayasri-s-ai" 
  },
  { 
    name: "PRINCE KEVIN KARTHIK I", 
    role: "Event Speaker Manager", 
    img: "https://i.ibb.co/VWrj4T7M/prince.jpg", 
    linkedin: "https://www.linkedin.com/in/princek6" 
  },
  { 
    name: "PRIYANGA RADHAKRISHNAN", 
    role: "Design Team", 
    img: "https://i.ibb.co/KxVT5jXm/Priyanga.jpg", 
    linkedin: "https://www.linkedin.com/in/priyanga-radhakrishnan-53b505380?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
  },
  { 
    name: "SARVESH S", 
    role: "Event Speaker Manager", 
    img: "https://i.ibb.co/r2QMFLZk/sarvesh-s.jpg", 
    linkedin: "https://www.linkedin.com/in/sarvesh-sivasankaran?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden font-sans flex flex-col justify-between">
      <Stars />

      {/* Navigation Header */}
      <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 flex justify-between items-center bg-brand-black/40 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co/Wv8FVTGQ/codesapiens-logo.jpg" 
            alt="CSF Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain" 
            referrerPolicy="no-referrer" 
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl md:text-3xl tracking-tighter leading-none text-white uppercase italic glow-text-sm">
              CODESAPIENS
            </span>
            <span className="text-[8px] md:text-[10px] font-mono text-brand-green tracking-[0.4em] font-bold uppercase">
              SUMMER FEST '26
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="px-3 py-1 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest bg-brand-green/10 border border-brand-green/30 text-brand-green rounded">
            // THE NEXUS
          </span>
        </div>
      </nav>

      {/* The Nexus Section */}
      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <section id="nexus" className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="monospace-label mb-2 uppercase tracking-[0.3em]">
              // Core Contributors // The Nexus
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white">
              THE <span className="text-brand-green italic glow-neon">NEXUS</span>
            </h1>
            <p className="text-white/40 font-mono text-xs md:text-sm uppercase tracking-widest mt-4 max-w-xl">
              Meet the core organizers, leaders, and contributors powering the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {VOLUNTEERS.map((volunteer, i) => (
              <motion.div 
                key={volunteer.name}
                id={`contributor-${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/[0.02] border border-white/10 p-4 rounded-xl hover:border-brand-green/50 transition-all duration-500"
              >
                <div className="aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-700 relative rounded-lg">
                  <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  
                  {volunteer.linkedin ? (
                    <a 
                      href={volunteer.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full h-full"
                      title={`View ${volunteer.name}'s LinkedIn`}
                    >
                      <img 
                        src={volunteer.img} 
                        alt={volunteer.name} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700 cursor-pointer" 
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  ) : (
                    <img 
                      src={volunteer.img} 
                      alt={volunteer.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                <div className="flex justify-between items-end gap-2">
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display font-bold text-base md:text-lg leading-tight uppercase text-white group-hover:text-brand-green transition-colors truncate">
                      {volunteer.name}
                    </h2>
                    <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase mt-1">
                      {volunteer.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    {volunteer.linkedin && (
                      <a 
                        href={volunteer.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-brand-green transition-colors p-1"
                        aria-label={`${volunteer.name}'s LinkedIn`}
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    <span className="text-[10px] font-mono text-white/15 font-black">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="main-footer" className="py-10 px-6 border-t border-white/5 bg-brand-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-mono tracking-widest uppercase text-white/40">
          <div className="flex items-center gap-4">
            <img 
              src="https://i.ibb.co/Wv8FVTGQ/codesapiens-logo.jpg" 
              alt="CodeSapiens" 
              className="w-7 h-7 object-contain opacity-80" 
              referrerPolicy="no-referrer" 
            />
            <span className="text-brand-green font-bold">Terminal_v2.5</span>
            <span>// Codesapiens System Execution (c) 2026</span>
          </div>
          
          <div className="flex gap-8">
            <a href="https://www.codesapiens.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              Official_Website
            </a>
            <a href="https://discord.gg/BEUfEjp6X" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              Discord_Server
            </a>
            <a href="https://github.com/Tazimsheriff/CodeSapiens-Summer-Fest" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              Github_Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
