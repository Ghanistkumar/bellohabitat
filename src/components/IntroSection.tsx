import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';


interface IntroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-b border-[#EBE3D5]">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#C09758]"></span>
          <span className="text-xs uppercase tracking-[0.26em] text-[#8E5832] font-semibold">
            EDITORIAL INTRODUCTION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] leading-[1.12] mb-8 tracking-tight">
              BUILT ON CRAFT.
              <br />
              <span className="italic font-light text-[#8E5832]">EVOLVED THROUGH DESIGN.</span>
            </h2>

            <div className="space-y-6 text-[#4A443C] text-base sm:text-lg leading-relaxed font-sans-ui font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#181614] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Bello Habitat Consultancy is the modern architectural consultancy carrying forward the generational experience, woodworking discipline, and cultural heritage of <strong className="font-semibold text-[#181614]">Vaastukalaa</strong>.
              </p>
              <p>
                Rooted in Ahmedabad, Gujarat, our practice bridges the historic divide between sacred Indian artisans and contemporary architectural masters. We believe that true luxury is not found in sterile mass-produced finishes, but in the tactile depth of seasoned teak, the spatial harmony of Vastu Shastra, and the unyielding precision of modern project management.
              </p>
              <p className="text-sm sm:text-base text-[#6E6457]">
                Today, our practice provides comprehensive <span className="text-[#181614] font-medium">Architecture Consultancy</span>, <span className="text-[#181614] font-medium">Interior Design</span>, <span className="text-[#181614] font-medium">Landscape Design</span>, <span className="text-[#181614] font-medium">Vastu Consultancy</span>, and end-to-end <span className="text-[#181614] font-medium">Project Management Consultancy (PMC)</span>, complemented by our dedicated Vaastukalaa woodworking atelier.
              </p>
            </div>

            {/* Heritage Badge Box */}
            <div className="mt-8 p-5 sm:p-6 bg-[#F3ECE0] border border-[#DFCBB0] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-[#181614] text-[#D8B57D] flex items-center justify-center font-serif text-xl border border-[#C09758]">
                    45+
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#181614] block">
                      45+ YEARS OF CRAFTSMANSHIP*
                    </span>
                    <span className="text-[12px] text-[#786D5F]">
                      Traditional woodworking & handcrafted wood carving lineage
                    </span>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-[#DFCBB0] sm:pl-6">
                  <span className="text-[11px] font-mono text-[#8E5832] uppercase tracking-wider block">
                    ATELIER ORIGIN
                  </span>
                  <span className="text-xs font-semibold text-[#181614]">Nana Chiloda, Ahmedabad</span>
                </div>
              </div>

              {/* Explicit Asterisk Note */}
              <p className="mt-3 pt-3 border-t border-[#DFCBB0]/60 text-[11px] text-[#7E7467] italic">
                * Note: Bello Habitat Consultancy honors four decades of family woodworking, classical temple carving, and sangeda joinery heritage in Gujarat.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E5832] mt-0.5 shrink-0" />
                <span className="text-xs text-[#332E27] font-medium leading-snug">
                  Integrated Wood Atelier & Design Studio
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E5832] mt-0.5 shrink-0" />
                <span className="text-xs text-[#332E27] font-medium leading-snug">
                  Scientific Vastu & Spatial Orientation
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E5832] mt-0.5 shrink-0" />
                <span className="text-xs text-[#332E27] font-medium leading-snug">
                  Turnkey Execution & PMC Accountability
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#181614] hover:bg-[#8E5832] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8B57D]" />
              </button>
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 bg-transparent hover:bg-[#EAE1D3] text-[#181614] border border-[#CDC1B0] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer"
              >
                DISCOVER OUR SERVICES
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Spatial Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with architectural border offset */}
              <div className="relative border border-[#D5C9B7] p-3 bg-white shadow-xl">
                <div className="aspect-[4/5] overflow-hidden bg-[#24211D]">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    alt="Bello Habitat architectural dialogue and woodcraft harmony"
                    className="w-full h-full object-cover editorial-image-warmth transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Editorial Photo Caption */}
                <div className="pt-3 px-1 flex justify-between items-baseline text-[11px] text-[#7A7063]">
                  <span className="font-mono uppercase tracking-wider">Fig. 01 — Architectural Synthesis</span>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>

              {/* Floating Overlay Badge: Wood Grain Detail */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#181614] text-[#FAF8F5] p-4 sm:p-5 border border-[#C09758] shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-2 text-[#DFC493] text-[10px] tracking-widest uppercase mb-1 font-mono">
                  <Sparkles className="w-3 h-3 text-[#C09758]" />
                  <span>CRAFT HARMONY</span>
                </div>
                <p className="text-xs text-[#E3DDD4] font-serif italic leading-snug">
                  "Where generational Indian craftsmanship meets contemporary architecture."
                </p>
              </div>

              {/* Decorative stamp watermark */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-[#C09758]/50 flex items-center justify-center text-[8px] uppercase tracking-tighter text-[#8E5832] font-mono rotate-12 bg-[#FAF8F5]/90">
                <span>ESTD. CRAFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
