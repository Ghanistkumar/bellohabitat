import React, { useState } from 'react';
import { Hammer } from 'lucide-react';
import { CRAFT_STAGES, type CraftStage } from '../data/siteData';


export const CraftsmanshipSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(CRAFT_STAGES[0].id);

  const activeStage: CraftStage = CRAFT_STAGES.find(s => s.id === activeStageId) || CRAFT_STAGES[0];

  return (
    <section id="craftsmanship" className="py-24 sm:py-32 bg-[#F7FCFA] text-[#0A2E28] relative overflow-hidden border-b border-[#D4F0E8]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.28em] text-[#007E70] font-bold">
            <Hammer className="w-3.5 h-3.5 text-[#02AE88]" />
            <span>VASTUKALA manufacturing ATELIER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            THE ART OF MAKING
          </h2>
          <p className="text-lg sm:text-2xl text-[#02AE88] italic font-semibold tracking-wide max-w-2xl mx-auto leading-snug">
            "EVERY PIECE IS MADE WITH PATIENCE, PRECISION AND PURPOSE."
          </p>
          <p className="text-xs sm:text-sm text-[#4D756E] font-normal mt-4 max-w-xl mx-auto leading-relaxed">
            In an era of mass-manufactured synthetic veneers and automated CNC cutters, we preserve the tactile soul of the human artisan.
          </p>
        </div>

        {/* Visual Sequence Flow Bar: RAW WOOD → DESIGN → CARVING → DETAIL → FINISH → SPACE */}
        <div className="mb-14 p-2 sm:p-3 bg-[#EDF9F6] border border-[#B8E6DB] overflow-x-auto scrollbar-none shadow-sm">
          <div className="flex items-center justify-between min-w-175 text-[11px] font-mono tracking-widest uppercase font-bold">
            {CRAFT_STAGES.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex items-center gap-2 px-3 py-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#007E70] text-white font-bold shadow-md'
                      : 'text-[#1C4039] hover:text-[#007E70]'
                  }`}
                >
                  <span className="opacity-70 text-[9px]">{stage.stepNumber}</span>
                  <span>{stage.title}</span>
                  {idx < CRAFT_STAGES.length - 1 && (
                    <span className="text-[#02AE88] ml-2 font-bold">→</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Interactive Showcase */}
        <div className="bg-white border-2 border-[#D4F0E8] p-6 sm:p-10 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-6 relative">
              <div className="border border-[#D4F0E8] p-3 bg-[#F7FCFA]">
                <div className="aspect-4/3 overflow-hidden bg-[#EDF9F6]">
                  <img
                    src={activeStage.image}
                    alt={activeStage.title}
                    key={activeStage.id}
                    className="w-full h-full object-cover transition-all duration-700 animate-fade-in hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-4 text-6xl font-bold text-[#007E70]/5 select-none pointer-events-none">
                {activeStage.stepNumber}
              </div>
            </div>

            {/* Stage Technical Detail & Story */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#02AE88] font-bold block mb-1">
                  STAGE {activeStage.stepNumber} OF 06 IN ATELIER SEQUENCE
                </span>
                <h3 className="text-2xl sm:text-4xl text-[#007E70] mb-2 font-bold">
                  {activeStage.title}
                </h3>
                <p className="text-sm italic text-[#02AE88] font-semibold mb-4">
                  "{activeStage.tagline}"
                </p>
                <p className="text-sm text-[#1C4039] font-normal leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Tooling & Material Specifications */}
              <div className="space-y-3 pt-4 border-t border-[#D4F0E8] text-xs">
                <div className="p-3 bg-[#EDF9F6] border border-[#B8E6DB]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#007E70] font-bold block mb-1">
                    INDIGENOUS TOOLS & TECHNIQUE:
                  </span>
                  <span className="text-[#0A2E28] font-mono font-medium">{activeStage.tooling}</span>
                </div>
                <div className="p-3 bg-[#EDF9F6] border border-[#B8E6DB]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#007E70] font-bold block mb-1">
                    AUTHENTIC MATERIALITY:
                  </span>
                  <span className="text-[#0A2E28] font-mono font-medium">{activeStage.materiality}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Material Species & Joinery Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#D4F0E8] shadow-sm hover:border-[#02AE88] transition-colors">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#02AE88] font-bold block mb-2">
              TIMBER SPECIES
            </span>
            <h4 className="text-xl text-[#007E70] font-bold mb-2">CP Sagwan (Teakwood)</h4>
            <p className="text-xs text-[#1C4039] leading-relaxed">
              Renowned for natural oil content, golden-brown grain, and resistance to Gujarat's extreme climatic shifts.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D4F0E8] shadow-sm hover:border-[#02AE88] transition-colors">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#02AE88] font-bold block mb-2">
              STRUCTURAL INTEGRITY
            </span>
            <h4 className="text-xl text-[#007E70] font-bold mb-2">Mortise & Tenon Joinery</h4>
            <p className="text-xs text-[#1C4039] leading-relaxed">
              Zero dependency on fragile modern adhesives or nails. Wood joints that flex and breathe for over a century.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D4F0E8] shadow-sm hover:border-[#02AE88] transition-colors">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#02AE88] font-bold block mb-2">
              ORGANIC POLISH
            </span>
            <h4 className="text-xl text-[#007E70] font-bold mb-2">Natural Carnauba Wax</h4>
            <p className="text-xs text-[#1C4039] leading-relaxed">
              Breathable, hand-rubbed finishes allowing the natural wood tactile resonance to age into rich amber patina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
