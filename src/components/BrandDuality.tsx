import React, { useState } from 'react';
import { ArrowLeftRight, Compass, Building2, Hammer } from 'lucide-react';


export const BrandDuality: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'both' | 'bello' | 'Vaastukalaa'>('both');

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative border-b border-[#EBE3D5] overflow-hidden">
      {/* Background subtle watermark & architectural grid */}
      <div className="absolute inset-0 bg-light-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-[#8E5832]">
            <Compass className="w-3.5 h-3.5 text-[#C09758]" />
            <span>THE CREATIVE DUALITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] tracking-tight leading-[1.1] mb-6">
            TWO IDENTITIES.
            <br />
            <span className="italic font-light text-[#8E5832]">ONE PHILOSOPHY.</span>
          </h2>
          <div className="inline-block p-4 bg-[#F2ECE0] border border-[#DFCBB0] text-sm sm:text-base text-[#4A433A] font-serif italic max-w-xl mx-auto">
            "Design gives a space its vision. Craftsmanship gives it its soul."
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#EAE2D5] border border-[#D5C9B8]">
            <button
              onClick={() => setActiveSide('both')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeSide === 'both' ? 'bg-[#181614] text-[#FAF8F5]' : 'text-[#62594D] hover:text-[#181614]'
              }`}
            >
              Unified Synergy
            </button>
            <button
              onClick={() => setActiveSide('bello')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeSide === 'bello' ? 'bg-[#181614] text-[#FAF8F5]' : 'text-[#62594D] hover:text-[#181614]'
              }`}
            >
              Bello Habitat (Architecture)
            </button>
            <button
              onClick={() => setActiveSide('Vaastukalaa')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeSide === 'Vaastukalaa' ? 'bg-[#181614] text-[#FAF8F5]' : 'text-[#62594D] hover:text-[#181614]'
              }`}
            >
              Vaastukalaa (Woodcraft Atelier)
            </button>
          </div>
        </div>

        {/* Side-by-Side Dual Identity Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          {/* LEFT: Bello Habitat Consultancy */}
          <div
            className={`lg:col-span-6 bg-white border border-[#DDD5C7] p-8 sm:p-10 flex flex-col justify-between shadow-md transition-all duration-500 ${
              activeSide === 'Vaastukalaa' ? 'opacity-40 grayscale-[40%]' : 'opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#EBE3D5] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#181614] text-[#FAF8F5] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#C09758]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E5832] block">
                      CONTEMPORARY PRACTICE
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#181614]">
                      BELLO HABITAT CONSULTANCY
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#8C8274]">STUDIO</span>
              </div>

              <p className="text-sm font-serif italic text-[#8E5832] mb-4">
                "Contemporary spaces, architecture and design."
              </p>

              <p className="text-sm text-[#4E473F] leading-relaxed mb-6 font-sans-ui">
                The modern architectural practice orchestrating spatial masterplanning, structural envelopes, natural daylighting, interior layouts, landscape, and turnkey project management consultancy (PMC).
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#F0E9DF]">
                {[
                  "Full-Scale Architecture & Masterplanning",
                  "Luxury Interior Spatial Architecture",
                  "Vastu Shastra & Cardinal Flow Integration",
                  "Landscape & Biophilic Outdoor Envelopes",
                  "Rigorous On-Site PMC & Quality Control"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-[#38332C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#181614]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EBE3D5] flex items-center justify-between text-xs text-[#7A7164]">
              <span>Studio: Chandkheda, Ahmedabad</span>
              <span className="font-mono text-[#181614] font-semibold">DESIGN VISION</span>
            </div>
          </div>

          {/* Center Bridge Pin on Large Screens */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 rounded-full bg-[#181614] text-[#FAF8F5] border-4 border-[#FAF8F5] flex flex-col items-center justify-center shadow-xl">
              <ArrowLeftRight className="w-5 h-5 text-[#C09758]" />
              <span className="text-[8px] font-mono tracking-tighter text-[#D8B57D] uppercase mt-0.5">SYNTHESIS</span>
            </div>
          </div>

          {/* RIGHT: Vaastukalaa */}
          <div
            className={`lg:col-span-6 bg-[#211E1A] text-[#FAF8F5] border border-[#3A3329] p-8 sm:p-10 flex flex-col justify-between shadow-md transition-all duration-500 ${
              activeSide === 'bello' ? 'opacity-40 grayscale-[40%]' : 'opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#363026] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C09758] text-[#181614] flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-[#181614]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFC493] block">
                      CRAFT DIVISION & ATELIER
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                      Vaastukalaa
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#D8B57D]">ATELIER</span>
              </div>

              <p className="text-sm font-serif italic text-[#DFC493] mb-4">
                "Traditional craftsmanship, woodwork and heritage."
              </p>

              <p className="text-sm text-[#D1C8BC] leading-relaxed mb-6 font-sans-ui">
                Carrying 45+ years of traditional woodworking mastery, crafting sacred mandir sanctums, suspended teak jhulas, classical sangeda turnings, and hand-carved architectural details.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#363026]">
                {[
                  "Sacred Shilpa Shastra Traditional Temples",
                  "Solid Teakwood Swings (Jhula) with Brass Casts",
                  "Turned Sangeda Columns & Lathe Artistry",
                  "Carved Jharokhas & Pol House Balconies",
                  "Custom Heirloom Woodworking & Restoration"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-[#EAE2D5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C09758]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#363026] flex items-center justify-between text-xs text-[#9E9485]">
              <span>Atelier: Nana Chiloda, Ahmedabad</span>
              <span className="font-mono text-[#DFC493] font-semibold">CRAFT SOUL</span>
            </div>
          </div>
        </div>

        {/* Synergy Highlight Card */}
        <div className="mt-10 p-6 sm:p-8 bg-[#F4EFE5] border border-[#D8CEBE] text-center">
          <p className="font-serif text-lg sm:text-2xl text-[#181614] leading-snug">
            "When modern architecture is grounded by the weight of authentic hand-carved wood, a house ceases to be just an address—it becomes an enduring ancestral home."
          </p>
          <span className="text-xs uppercase tracking-[0.22em] text-[#8E5832] font-mono mt-3 inline-block">
            — Bello Habitat & Vaastukalaa Atelier Philosophy
          </span>
        </div>
      </div>
    </section>
  );
};
