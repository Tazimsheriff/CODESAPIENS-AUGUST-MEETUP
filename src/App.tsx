/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import priyaImg from './assets/priya-darshni.jpg';

interface Volunteer {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  accent: 'yellow' | 'lime' | 'blue';
}

const VOLUNTEERS: Volunteer[] = [
  { 
    name: "R TAZIM SHERIFF", 
    role: "Community Lead", 
    img: "https://i.ibb.co/ZzrDNtSm/tazzz.jpg", 
    linkedin: "https://www.linkedin.com/in/tazim-sheriff-r-15a355230/",
    accent: "yellow"
  },
  { 
    name: "HARSHA VARDHINI R", 
    role: "Community Lead", 
    img: "https://i.ibb.co/5X3G6ZR9/harsha.jpg", 
    linkedin: "https://www.linkedin.com/in/harsha-vardhini-05783036a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    accent: "lime"
  },
  { 
    name: "J.MUKESHWAR RAUDRA (P r o f e s s o r)", 
    role: "Co-Lead", 
    img: "https://i.ibb.co/1GjL7ssp/proffesor.jpg", 
    linkedin: "https://www.linkedin.com/in/mukeshwar-raudra",
    accent: "blue"
  },
  { 
    name: "GIRIPRASAD K", 
    role: "Co-Lead", 
    img: "https://i.ibb.co/Txt7xt4P/giri.jpg", 
    linkedin: "https://www.linkedin.com/in/girii73?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    accent: "yellow"
  },
  { 
    name: "JAYASRI S", 
    role: "Documentation Lead", 
    img: "https://i.ibb.co/rKkFTNT2/jayasree.jpg", 
    linkedin: "https://www.linkedin.com/in/jayasri-s-ai",
    accent: "lime"
  },
  { 
    name: "PRINCE KEVIN KARTHIK I", 
    role: "Event Management", 
    img: "https://i.ibb.co/VWrj4T7M/prince.jpg", 
    linkedin: "https://www.linkedin.com/in/princek6",
    accent: "blue"
  },
  { 
    name: "PRIYANGA RADHAKRISHNAN", 
    role: "Design Team", 
    img: "https://i.ibb.co/KxVT5jXm/Priyanga.jpg", 
    linkedin: "https://www.linkedin.com/in/priyanga-radhakrishnan-53b505380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    accent: "yellow"
  },
  { 
    name: "PRIYA DARSHNI S", 
    role: "Event Management", 
    img: priyaImg, 
    linkedin: "https://www.linkedin.com/in/priya-darshni-sivakumarr/",
    accent: "lime"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#feeec3] text-[#0a0a0a] font-sans flex flex-col justify-between selection:bg-[#ffd966] selection:text-[#0a0a0a] relative overflow-x-hidden">
      {/* Neo-Brutalist Dot Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40" 
        style={{
          backgroundImage: 'radial-gradient(#0a0a0a 1.25px, transparent 1.25px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#ffd966] border-b-[3px] border-[#0a0a0a] shadow-[0_4px_0_#0a0a0a]">
        <nav id="main-nav" className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-white border-2 border-[#0a0a0a] rounded p-1 shadow-[2px_2px_0_#0a0a0a] flex items-center justify-center shrink-0">
              <img 
                src="https://i.ibb.co/Wv8FVTGQ/codesapiens-logo.jpg" 
                alt="Sapiens Campus Logo" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl tracking-tight leading-none text-[#0a0a0a] uppercase">
                SAPIENS CAMPUS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="nb-pill bg-[#d2ffb6] text-[#0a0a0a]">
              <span className="w-2 h-2 rounded-full bg-[#0a0a0a] inline-block animate-pulse"></span>
              // THE NEXUS
            </span>
          </div>
        </nav>
      </header>

      {/* The Nexus Section */}
      <main className="flex-1 relative z-10 pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6">
        <section id="nexus" className="max-w-7xl mx-auto">
          {/* Hero Content Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#b6eaff] border-2 border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] rounded mb-5">
              <span className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                // Core Contributors // The Nexus
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-[#0a0a0a] uppercase leading-[0.95]">
              THE{' '}
              <span className="inline-block bg-[#d2ffb6] px-3 sm:px-5 py-1 border-[3px] border-[#0a0a0a] shadow-[5px_5px_0_#0a0a0a] rounded-md text-[#0a0a0a] -rotate-1">
                NEXUS
              </span>
            </h1>

            <div className="mt-6 max-w-xl bg-white border-2 border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] rounded-md px-5 py-3">
              <p className="text-[#0a0a0a] font-sans font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                Meet the core organizers, leaders, and contributors powering the community.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {VOLUNTEERS.map((volunteer, i) => {
              const accentColor = 
                volunteer.accent === 'yellow' ? 'bg-[#ffd966]' :
                volunteer.accent === 'lime' ? 'bg-[#d2ffb6]' : 'bg-[#b6eaff]';

              return (
                <motion.div 
                  key={volunteer.name}
                  id={`contributor-${i + 1}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="group nb-card flex flex-col justify-between p-4"
                >
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-[#0a0a0a]/10">
                    <span className="font-mono text-[11px] font-extrabold px-2 py-0.5 bg-[#0a0a0a] text-[#feeec3] rounded border border-[#0a0a0a]">
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border border-[#0a0a0a] shadow-[1.5px_1.5px_0_#0a0a0a] ${accentColor}`}>
                      CORE
                    </span>
                  </div>

                  {/* Photo Frame */}
                  <div className="aspect-[4/5] bg-[#feeec3] border-2 border-[#0a0a0a] rounded overflow-hidden mb-4 relative shadow-[2px_2px_0_#0a0a0a]">
                    {volunteer.linkedin ? (
                      <a 
                        href={volunteer.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full h-full relative group/img"
                        title={`View ${volunteer.name}'s LinkedIn`}
                      >
                        <img 
                          src={volunteer.img} 
                          alt={volunteer.name} 
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 right-2 bg-white/95 border-2 border-[#0a0a0a] p-1.5 rounded shadow-[2px_2px_0_#0a0a0a] opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <ArrowUpRight size={14} className="text-[#0a0a0a]" />
                        </div>
                      </a>
                    ) : (
                      <img 
                        src={volunteer.img} 
                        alt={volunteer.name} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  {/* Info & Meta */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <h2 className="font-display font-black text-lg md:text-xl uppercase leading-tight text-[#0a0a0a] tracking-tight">
                        {volunteer.name}
                      </h2>
                      <div className="mt-1.5">
                        <span className={`inline-block font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[#0a0a0a] px-2.5 py-0.5 rounded border border-[#0a0a0a] shadow-[1.5px_1.5px_0_#0a0a0a] ${accentColor}`}>
                          {volunteer.role}
                        </span>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 border-t-2 border-[#0a0a0a]/10 flex items-center justify-between">
                      {volunteer.linkedin ? (
                        <a 
                          href={volunteer.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="nb-btn py-1.5 px-3 text-xs bg-[#ffd966] hover:bg-[#feeec3] text-[#0a0a0a] w-full"
                          aria-label={`${volunteer.name}'s LinkedIn Profile`}
                        >
                          <Linkedin size={13} className="stroke-[2.5]" />
                          <span>CONNECT</span>
                          <ArrowUpRight size={13} className="stroke-[2.5]" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-[#0a0a0a]/50">
                          // CONTRIBUTOR
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="main-footer" className="relative z-10 bg-[#0a0a0a] text-[#feeec3] border-t-[3px] border-[#0a0a0a] py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand Identity & Terminal Execution info */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start">
            <div className="w-8 h-8 bg-white border-2 border-[#ffd966] rounded p-1 shadow-[2px_2px_0_#ffd966] flex items-center justify-center">
              <img 
                src="https://i.ibb.co/Wv8FVTGQ/codesapiens-logo.jpg" 
                alt="Sapiens Campus" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="px-2.5 py-0.5 bg-[#d2ffb6] text-[#0a0a0a] font-mono font-bold text-[10px] uppercase rounded border border-[#0a0a0a] shadow-[2px_2px_0_#ffd966]">
              Terminal_v2.5
            </span>
            <span className="text-[#feeec3]/80 font-mono text-[11px] md:text-xs tracking-wider">
              // Sapiens Campus System Execution (c) 2026
            </span>
          </div>
          
          {/* Right: Interactive Neo-Brutalist Destination Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://www.codesapiens.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nb-btn py-1.5 px-3.5 text-xs bg-[#ffd966] text-[#0a0a0a] hover:bg-white"
            >
              <span>Official_Website</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </a>
            <a 
              href="https://whatsapp.com/channel/0029Va9H4ywDTkJyHd85GC0c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nb-btn py-1.5 px-3.5 text-xs bg-[#d2ffb6] text-[#0a0a0a] hover:bg-white"
            >
              <span>Whatsapp_Channel</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </a>
            <a 
              href="https://github.com/CodeSapiens-in/CollegeSapien" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nb-btn py-1.5 px-3.5 text-xs bg-[#b6eaff] text-[#0a0a0a] hover:bg-white"
            >
              <span>Github_Repo</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
