import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/siteData';

export const DesignPhilosophy: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#D4F0E8] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#02AE88]"></span>
          <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
            THE SPATIAL MANIFESTO
          </span>
        </div>

        {/* Major Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#007E70] leading-[1.08] tracking-tight mb-8">
            WE DON'T JUST DESIGN SPACES.
            <br />
            <span className="italic font-light text-[#02AE88]">WE DESIGN HOW THEY ARE REMEMBERED.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#1C4039] font-normal leading-relaxed max-w-2xl">
            A space is not merely four walls and a roof; it is the physical stage where family memories, sacred traditions, and quiet contemplation unfold over generations.
          </p>
        </div>

        {/* 6 Foundational Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 bg-[#F7FCFA] border border-[#D4F0E8] hover:border-[#02AE88] transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-baseline justify-between border-b border-[#D4F0E8] pb-4 mb-6">
                <span className="font-mono text-xs text-[#02AE88] tracking-widest font-bold">
                  PILLAR {pillar.num}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8E6DB] group-hover:bg-[#02AE88] transition-colors"></span>
              </div>

              <h3 className="text-2xl text-[#007E70] font-bold mb-3 group-hover:text-[#02AE88] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#1C4039] font-normal leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#EDF9F6] border border-[#B8E6DB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#02AE88] font-bold block mb-1">
              REGIONAL ARCHITECTURAL CONTEXT
            </span>
            <p className="text-xs sm:text-sm text-[#007E70] italic font-medium">
              "Honoring the passive shading wisdom of Gujarati Pols, stepwells, and havelis within contemporary climate envelopes."
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-xs font-mono text-[#007E70] font-bold block">
              AHMEDABAD, GUJARAT
            </span>
            <span className="text-[11px] text-[#4D756E]">Latitude 23.0225° N</span>
          </div>
        </div>
      </div>
    </section>
  );
};
