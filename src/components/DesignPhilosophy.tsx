import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/siteData';

export const DesignPhilosophy: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative border-b border-[#EBE3D5] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#8E5832]"></span>
          <span className="text-xs uppercase tracking-[0.28em] text-[#8E5832] font-mono font-semibold">
            THE SPATIAL MANIFESTO
          </span>
        </div>

        {/* Major Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal text-[#181614] leading-[1.08] tracking-tight mb-8">
            WE DON'T JUST DESIGN SPACES.
            <br />
            <span className="italic font-light text-[#8E5832]">WE DESIGN HOW THEY ARE REMEMBERED.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#595147] font-light leading-relaxed font-sans-ui max-w-2xl">
            A space is not merely four walls and a roof; it is the physical stage where family memories, sacred traditions, and quiet contemplation unfold over generations.
          </p>
        </div>

        {/* 6 Foundational Pillars Grid — Typography & Architecture Focused, No Cheap Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 bg-white border border-[#E0D8CB] hover:border-[#181614] transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-baseline justify-between border-b border-[#EFE8DE] pb-4 mb-6">
                <span className="font-mono text-xs text-[#8E5832] tracking-widest font-bold">
                  PILLAR {pillar.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E0D8CB] group-hover:bg-[#8E5832] transition-colors"></span>
              </div>

              <h3 className="font-serif text-2xl text-[#181614] font-medium mb-3 group-hover:text-[#8E5832] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#61594E] font-light leading-relaxed font-sans-ui">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F2ECE0] border border-[#DFCBB0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#8E5832] font-semibold block mb-1">
              REGIONAL ARCHITECTURAL CONTEXT
            </span>
            <p className="text-xs sm:text-sm text-[#4E473F] font-serif italic">
              "Honoring the passive shading wisdom of Gujarati Pols, stepwells, and havelis within contemporary climate envelopes."
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-xs font-mono text-[#181614] font-bold block">
              AHMEDABAD, GUJARAT
            </span>
            <span className="text-[11px] text-[#7A7163]">Latitude 23.0225° N</span>
          </div>
        </div>
      </div>
    </section>
  );
};
