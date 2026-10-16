import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { JOURNEY_MILESTONES, type JourneyMilestone } from '../data/siteData';


export const JourneyTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentMilestone: JourneyMilestone = JOURNEY_MILESTONES[activeStepIndex];

  const handleNext = () => {
    if (activeStepIndex < JOURNEY_MILESTONES.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#F7FCFA] text-[#0A2E28] relative overflow-hidden border-b border-[#D4F0E8]">
      {/* Background Architectural Grid & Subtle Teal Glow */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#02AE88]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#007E70]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#02AE88]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-bold">
              THE CHRONICLE OF EVOLUTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            FROM TRADITIONAL ROOTS
            <br />
            <span className="italic font-light text-[#02AE88]">TO ARCHITECTURAL HABITATS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1C4039] font-normal leading-relaxed">
            Our story is not a standard corporate timeline. It is an authentic living chronicle of how decades of traditional Gujarati woodcarving and temple sanctum architecture evolved into a multidisciplinary design and project management consultancy.
          </p>
        </div>

        {/* Narrative Flow Bar: CRAFT → LEGACY → EVOLUTION → DESIGN → CRAFTSMANSHIP → PROJECTS → FUTURE */}
        <div className="mb-8 sm:mb-10 p-2 sm:p-4 bg-[#EDF9F6] border border-[#B8E6DB] overflow-x-auto scrollbar-none shadow-sm">
          <div className="flex items-center justify-between min-w-[640px] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em]">
            {[
              "01 CRAFT",
              "02 LEGACY",
              "03 Vaastukalaa",
              "04 EVOLUTION",
              "05 BELLO HABITAT",
              "06 TODAY",
              "07 FUTURE"
            ].map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 transition-all duration-300 cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-[#007E70] text-white font-bold shadow-sm'
                    : 'text-[#1C4039] hover:text-[#007E70] font-semibold'
                }`}
              >
                <span>{label}</span>
                {idx < 6 && <span className="text-[#02AE88] ml-2">→</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Steps Connector Bar */}
        <div className="relative mb-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D4F0E8] -translate-y-1/2 z-0"></div>
          {/* Active progress bar indicator */}
          <div
            className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-[#007E70] to-[#02AE88] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / (JOURNEY_MILESTONES.length - 1)) * 100}%` }}
          ></div>

          <div className="relative z-10 flex justify-between items-center">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;
              return (
                <button
                  key={milestone.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-none flex items-center justify-center font-mono text-xs transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-[#02AE88] border-[#007E70] text-white font-bold shadow-lg scale-110'
                        : isPast
                        ? 'bg-[#EDF9F6] border-[#02AE88] text-[#007E70] font-bold'
                        : 'bg-white border-[#D4F0E8] text-[#4D756E] group-hover:border-[#02AE88]'
                    }`}
                  >
                    {milestone.step}
                  </div>
                  <span
                    className={`mt-2 text-[10px] tracking-wider uppercase transition-colors duration-200 ${
                      isActive ? 'text-[#007E70] font-bold' : 'text-[#4D756E] group-hover:text-[#007E70]'
                    }`}
                  >
                    {milestone.era}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Milestone Feature Showcase */}
        <div className="bg-white border-2 border-[#D4F0E8] p-6 sm:p-10 lg:p-12 relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Milestone Visual with Archival Framing */}
            <div className="lg:col-span-6 relative">
              <div className="relative border border-[#D4F0E8] p-3 bg-[#F7FCFA] shadow-inner">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-[#EDF9F6]">
                  <img
                    src={currentMilestone.image}
                    alt={currentMilestone.title}
                    key={currentMilestone.step}
                    className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10.5px] font-mono text-white uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-white/95 text-[#007E70] px-2.5 py-1 backdrop-blur-sm border border-[#D4F0E8] font-bold shadow-sm">
                      <MapPin className="w-3 h-3 text-[#02AE88]" />
                      {currentMilestone.locationTag}
                    </span>
                    <span className="bg-[#007E70] text-white px-2 py-0.5 font-bold shadow-sm">
                      {currentMilestone.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step indicator watermark */}
              <div className="absolute -top-4 -left-3 text-7xl font-bold text-[#007E70]/5 select-none pointer-events-none">
                {currentMilestone.step}
              </div>
            </div>

            {/* Right: Milestone Story & Craftsmanship Nuances */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-[#D4F0E8] pb-3 mb-4">
                  <span className="text-[11px] font-mono tracking-[0.24em] text-[#02AE88] uppercase font-bold">
                    MILESTONE {currentMilestone.step} OF 07 • {currentMilestone.era}
                  </span>
                  <span className="text-xs text-[#4D756E] font-mono font-medium">
                    CHRONICLE ARCHIVE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl text-[#007E70] font-bold tracking-tight mb-2">
                  {currentMilestone.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-bold tracking-wide text-[#02AE88] mb-5 uppercase">
                  {currentMilestone.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-[#1C4039] font-normal leading-relaxed mb-4">
                  {currentMilestone.description}
                </p>

                <p className="text-xs sm:text-sm text-[#0A2E28] leading-relaxed border-l-4 border-[#02AE88] pl-4 py-2 italic bg-[#EDF9F6] font-medium">
                  "{currentMilestone.detailedStory}"
                </p>
              </div>

              {/* Craft Focus Highlights */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#4D756E] font-bold block mb-2.5">
                  CORE CRAFT & SPATIAL PILLARS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentMilestone.craftFocus.map(item => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-[#EDF9F6] border border-[#B8E6DB] text-[#007E70] font-mono font-bold"
                    >
                      • {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#D4F0E8]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={activeStepIndex === 0}
                    className={`p-3 border transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-bold ${
                      activeStepIndex === 0
                        ? 'border-[#D4F0E8] text-[#B8E6DB] cursor-not-allowed'
                        : 'border-[#007E70] hover:bg-[#007E70] text-[#007E70] hover:text-white cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">PREVIOUS</span>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeStepIndex === JOURNEY_MILESTONES.length - 1}
                    className={`p-3 border transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-bold ${
                      activeStepIndex === JOURNEY_MILESTONES.length - 1
                        ? 'border-[#D4F0E8] text-[#B8E6DB] cursor-not-allowed'
                        : 'border-[#007E70] hover:bg-[#007E70] text-[#007E70] hover:text-white cursor-pointer'
                    }`}
                  >
                    <span className="hidden sm:inline">NEXT MILESTONE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right text-xs font-mono text-[#4D756E]">
                  <span className="text-[#007E70] font-bold text-sm">{currentMilestone.step}</span> / 07
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
