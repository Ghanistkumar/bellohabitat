import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';


interface IntroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-b border-[#D4F0E8]">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-[#02AE88]"></span>
          <span className="text-xs uppercase tracking-[0.26em] text-[#007E70] font-bold">
            EDITORIAL INTRODUCTION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] leading-[1.12] mb-8 tracking-tight">
              BUILT ON CRAFT.
              <br />
              <span className="italic font-light text-[#02AE88]">EVOLVED THROUGH DESIGN.</span>
            </h2>

            <div className="space-y-6 text-[#1C4039] text-base sm:text-lg leading-relaxed font-normal">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#007E70] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Bello Habitat Consultancy is the modern architectural consultancy carrying forward the generational experience, woodworking discipline, and cultural heritage of <strong className="font-bold text-[#007E70]">Vastukala</strong>.
              </p>
              <p>
                Rooted in Ahmedabad, Gujarat, our practice bridges the historic divide between sacred Indian artisans and contemporary architectural masters. We believe that true luxury is not found in sterile mass-produced finishes, but in the tactile depth of seasoned teak, the spatial harmony of Vastu Shastra, and the unyielding precision of modern project management.
              </p>
              <p className="text-sm sm:text-base text-[#4D756E]">
                Today, our practice provides comprehensive <span className="text-[#007E70] font-bold">Architecture Consultancy</span>, <span className="text-[#007E70] font-bold">Interior Design</span>, <span className="text-[#007E70] font-bold">Landscape Design</span>, <span className="text-[#007E70] font-bold">Vastu Consultancy</span>, and end-to-end <span className="text-[#007E70] font-bold">Project Management Consultancy (PMC)</span>, complemented by our dedicated Vastukala woodworking atelier.
              </p>
            </div>

            {/* Heritage Badge Box */}
            <div className="mt-8 p-5 sm:p-6 bg-[#EDF9F6] border border-[#B8E6DB] relative shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-[#007E70] text-white flex items-center justify-center font-bold text-xl border-2 border-[#02AE88] shadow-sm">
                    45+
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#007E70] block">
                      45+ YEARS OF CRAFTSMANSHIP*
                    </span>
                    <span className="text-[12px] text-[#4D756E]">
                      Traditional woodworking & handcrafted wood carving lineage
                    </span>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-[#B8E6DB] sm:pl-6">
                  <span className="text-[11px] font-mono text-[#02AE88] uppercase tracking-wider font-bold block">
                    ATELIER ORIGIN
                  </span>
                  <span className="text-xs font-bold text-[#007E70]">Nana Chiloda, Ahmedabad</span>
                </div>
              </div>

              {/* Explicit Asterisk Note */}
              <p className="mt-3 pt-3 border-t border-[#B8E6DB]/60 text-[11px] text-[#4D756E] italic">
                * Note: Bello Habitat Consultancy honors four decades of family woodworking, classical temple carving, and sangeda joinery heritage in Gujarat.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02AE88] mt-0.5 shrink-0" />
                <span className="text-xs text-[#1C4039] font-semibold leading-snug">
                  Integrated Wood Atelier & Design Studio
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02AE88] mt-0.5 shrink-0" />
                <span className="text-xs text-[#1C4039] font-semibold leading-snug">
                  Scientific Vastu & Spatial Orientation
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02AE88] mt-0.5 shrink-0" />
                <span className="text-xs text-[#1C4039] font-semibold leading-snug">
                  Turnkey Execution & PMC Accountability
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#02AE88] hover:bg-[#007E70] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 bg-transparent hover:bg-[#EDF9F6] text-[#007E70] border-2 border-[#007E70] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer"
              >
                DISCOVER OUR SERVICES
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Spatial Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with architectural border offset */}
              <div className="relative border border-[#D4F0E8] p-3 bg-white shadow-xl">
                <div className="aspect-4/5 overflow-hidden bg-[#EDF9F6]">
                  <img
                    src="/intro.jpeg"
                    alt="Bello Habitat architectural dialogue and manufacturing harmony"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Editorial Photo Caption */}
                <div className="pt-3 px-1 flex justify-between items-baseline text-[11px] text-[#4D756E]">
                  <span className="font-mono uppercase tracking-wider font-semibold">Fig. 01 — Architectural </span>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>

              {/* Floating Overlay Badge: Wood Grain Detail */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#007E70] text-white p-4 sm:p-5 border-2 border-[#02AE88] shadow-2xl max-w-65">
                <div className="flex items-center gap-2 text-[#3DCBA8] text-[10px] tracking-widest uppercase mb-1 font-mono font-bold">
                  <Sparkles className="w-3 h-3 text-[#02AE88]" />
                  <span>CRAFT HARMONY</span>
                </div>
                <p className="text-xs text-[#E0F5F0] italic leading-snug">
                  "Where generational Indian craftsmanship meets contemporary architecture."
                </p>
              </div>

              {/* Decorative stamp watermark */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-[#02AE88] flex items-center justify-center text-[8px] uppercase tracking-tighter text-[#007E70] font-bold rotate-12 bg-white shadow-sm">
                <span>ESTD. CRAFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
