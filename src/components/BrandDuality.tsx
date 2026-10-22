import React, { useState } from 'react';
import { ArrowLeftRight, Compass, Building2, Hammer } from 'lucide-react';


export const BrandDuality: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'both' | 'bello' | 'Vaastukalaa'>('both');

  return (
    <section className="py-24 sm:py-32 bg-[#F7FCFA] relative border-b border-[#D4F0E8] overflow-hidden">
      {/* Background subtle watermark & architectural grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-[#007E70] font-bold">
            <Compass className="w-3.5 h-3.5 text-[#02AE88]" />
            <span>THE CREATIVE DUALITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            TWO IDENTITIES.
            <br />
            <span className="italic font-light text-[#02AE88]">ONE PHILOSOPHY.</span>
          </h2>
          <div className="inline-block p-4 bg-[#EDF9F6] border border-[#B8E6DB] text-sm sm:text-base text-[#007E70] italic max-w-xl mx-auto font-medium shadow-sm">
            "Design gives a space its vision. Craftsmanship gives it its soul."
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#EDF9F6] border border-[#B8E6DB] shadow-sm">
            <button
              onClick={() => setActiveSide('both')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeSide === 'both' ? 'bg-[#007E70] text-white shadow-sm' : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              Unified Synergy
            </button>
            <button
              onClick={() => setActiveSide('bello')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeSide === 'bello' ? 'bg-[#007E70] text-white shadow-sm' : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              Bello Habitat (Architecture)
            </button>
            <button
              onClick={() => setActiveSide('Vaastukalaa')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeSide === 'Vaastukalaa' ? 'bg-[#007E70] text-white shadow-sm' : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              Vaastukalaa (manufacturing Atelier)
            </button>
          </div>
        </div>

        {/* Side-by-Side Dual Identity Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          {/* LEFT: Bello Habitat Consultancy */}
          <div
            className={`lg:col-span-6 bg-white border-2 border-[#D4F0E8] p-8 sm:p-10 flex flex-col justify-between shadow-md transition-all duration-500 ${
              activeSide === 'Vaastukalaa' ? 'opacity-40 grayscale-40' : 'opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D4F0E8] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#007E70] text-white flex items-center justify-center border border-[#02AE88] shadow-sm">
                    <Building2 className="w-5 h-5 text-[#02AE88]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#02AE88] font-bold block">
                      CONTEMPORARY PRACTICE
                    </span>
                    <h3 className="text-2xl font-bold text-[#007E70]">
                      BELLO HABITAT CONSULTANCY
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#007E70] font-bold">STUDIO</span>
              </div>

              <p className="text-sm italic text-[#007E70] font-semibold mb-4">
                "Contemporary spaces, architecture and design."
              </p>

              <p className="text-sm text-[#1C4039] leading-relaxed mb-6 font-normal">
                The modern architectural practice orchestrating spatial masterplanning, structural envelopes, natural daylighting, interior layouts, landscape, and turnkey project management consultancy (PMC).
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#D4F0E8]">
                {[
                  "Full-Scale Architecture & Masterplanning",
                  "Luxury Interior Spatial Architecture",
                  "Vastu Shastra & Cardinal Flow Integration",
                  "Landscape & Biophilic Outdoor Envelopes",
                  "Rigorous On-Site PMC & Quality Control"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-[#0A2E28] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#007E70]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D4F0E8] flex items-center justify-between text-xs text-[#4D756E]">
              <span>Studio: Chandkheda, Ahmedabad</span>
              <span className="font-mono text-[#007E70] font-bold">DESIGN VISION</span>
            </div>
          </div>

          {/* Center Bridge Pin on Large Screens */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 rounded-full bg-[#007E70] text-white border-4 border-[#F7FCFA] flex flex-col items-center justify-center shadow-xl">
              <ArrowLeftRight className="w-5 h-5 text-[#02AE88]" />
              <span className="text-[8px] font-mono tracking-tighter text-[#3DCBA8] uppercase font-bold mt-0.5">SYNTHESIS</span>
            </div>
          </div>

          {/* RIGHT: Vaastukalaa (Light Theme Mint Surface) */}
          <div
            className={`lg:col-span-6 bg-[#EDF9F6] text-[#0A2E28] border-2 border-[#B8E6DB] p-8 sm:p-10 flex flex-col justify-between shadow-md transition-all duration-500 ${
              activeSide === 'bello' ? 'opacity-40 grayscale-40' : 'opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#B8E6DB] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#02AE88] text-white flex items-center justify-center border border-[#007E70] shadow-sm">
                    <Hammer className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#007E70] font-bold block">
                      CRAFT DIVISION & ATELIER
                    </span>
                    <h3 className="text-2xl font-bold text-[#007E70]">
                      Vaastukalaa
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#007E70] font-bold">ATELIER</span>
              </div>

              <p className="text-sm italic text-[#007E70] font-semibold mb-4">
                "Traditional craftsmanship, woodwork and heritage."
              </p>

              <p className="text-sm text-[#1C4039] leading-relaxed mb-6 font-normal">
                Carrying 45+ years of traditional woodworking mastery, crafting sacred mandir sanctums, suspended teak jhulas, classical sangeda turnings, and hand-carved architectural details.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#B8E6DB]">
                {[
                  "Sacred Shilpa Shastra Traditional Temples",
                  "Solid Teakwood Swings (Jhula) with Brass Casts",
                  "Turned Sangeda Columns & Lathe Artistry",
                  "Carved Jharokhas & Pol House Balconies",
                  "Custom Heirloom Woodworking & Restoration"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-[#0A2E28] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#02AE88]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#B8E6DB] flex items-center justify-between text-xs text-[#4D756E]">
              <span>Atelier: Nana Chiloda, Ahmedabad</span>
              <span className="font-mono text-[#007E70] font-bold">CRAFT SOUL</span>
            </div>
          </div>
        </div>

        {/* Synergy Highlight Card */}
        <div className="mt-10 p-6 sm:p-8 bg-white border-2 border-[#D4F0E8] text-center shadow-sm">
          <p className="text-lg sm:text-2xl text-[#007E70] font-semibold leading-snug">
            "When modern architecture is grounded by the weight of authentic hand-carved wood, a house ceases to be just an address—it becomes an enduring ancestral home."
          </p>
          <span className="text-xs uppercase tracking-[0.22em] text-[#02AE88] font-mono font-bold mt-3 inline-block">
            — Bello Habitat & Vaastukalaa Atelier Philosophy
          </span>
        </div>
      </div>
    </section>
  );
};
