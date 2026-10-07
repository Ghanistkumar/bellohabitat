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
    <section id="journey" className="py-24 sm:py-32 bg-[#181614] text-[#FAF8F5] relative overflow-hidden border-b border-[#2C2720]">
      {/* Background Architectural Grid & Subtle Amber Glow */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C09758]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8E5832]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#C09758]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#D8B57D] font-mono">
              THE CHRONICLE OF EVOLUTION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF8F5] tracking-tight leading-[1.1] mb-6">
            FROM TRADITIONAL ROOTS
            <br />
            <span className="italic font-light text-[#DFC493]">TO ARCHITECTURAL HABITATS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#B0A79A] font-light leading-relaxed font-sans-ui">
            Our story is not a standard corporate timeline. It is an authentic living chronicle of how decades of traditional Gujarati woodcarving and temple sanctum architecture evolved into a multidisciplinary design and project management consultancy.
          </p>
        </div>

        {/* Narrative Flow Bar: CRAFT → LEGACY → EVOLUTION → DESIGN → CRAFTSMANSHIP → PROJECTS → FUTURE */}
        <div className="mb-8 sm:mb-10 p-2 sm:p-4 bg-[#201D1A] border border-[#332D24] overflow-x-auto scrollbar-none">
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
                    ? 'bg-[#C09758] text-[#181614] font-bold'
                    : 'text-[#968E82] hover:text-[#DFC493]'
                }`}
              >
                <span>{label}</span>
                {idx < 6 && <span className="text-[#4E463A] ml-2">→</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Steps Connector Bar */}
        <div className="relative mb-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#332D24] -translate-y-1/2 z-0"></div>
          {/* Active progress bar indicator */}
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#C09758] to-[#DFC493] -translate-y-1/2 z-0 transition-all duration-500"
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
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-none flex items-center justify-center font-mono text-xs transition-all duration-300 border ${
                      isActive
                        ? 'bg-[#C09758] border-[#DFC493] text-[#181614] font-bold shadow-lg scale-110'
                        : isPast
                        ? 'bg-[#2A251F] border-[#C09758]/50 text-[#DFC493]'
                        : 'bg-[#1E1C19] border-[#332D24] text-[#82786A] group-hover:border-[#C09758]'
                    }`}
                  >
                    {milestone.step}
                  </div>
                  <span
                    className={`mt-2 text-[10px] tracking-wider uppercase transition-colors duration-200 ${
                      isActive ? 'text-[#DFC493] font-bold' : 'text-[#7A7163] group-hover:text-[#B0A79A]'
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
        <div className="bg-[#201D1A] border border-[#3A3328] p-6 sm:p-10 lg:p-12 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Milestone Visual with Archival Framing */}
            <div className="lg:col-span-6 relative">
              <div className="relative border border-[#4A4133] p-3 bg-[#181614] shadow-inner">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-[#2A251F]">
                  <img
                    src={currentMilestone.image}
                    alt={currentMilestone.title}
                    key={currentMilestone.step}
                    className="w-full h-full object-cover editorial-image-warmth transition-all duration-700 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10.5px] font-mono text-[#D8B57D] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                      <MapPin className="w-3 h-3 text-[#C09758]" />
                      {currentMilestone.locationTag}
                    </span>
                    <span className="bg-[#C09758] text-[#181614] px-2 py-0.5 font-bold">
                      {currentMilestone.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step indicator watermark */}
              <div className="absolute -top-4 -left-3 font-serif text-7xl font-bold text-white/5 select-none pointer-events-none">
                {currentMilestone.step}
              </div>
            </div>

            {/* Right: Milestone Story & Craftsmanship Nuances */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-[#332D24] pb-3 mb-4">
                  <span className="text-[11px] font-mono tracking-[0.24em] text-[#C09758] uppercase">
                    MILESTONE {currentMilestone.step} OF 07 • {currentMilestone.era}
                  </span>
                  <span className="text-xs text-[#8A8072] font-mono">
                    CHRONICLE ARCHIVE
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF8F5] font-normal tracking-tight mb-2">
                  {currentMilestone.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#DFC493] mb-5 font-sans-ui uppercase">
                  {currentMilestone.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-[#D0C7B8] font-light leading-relaxed mb-4">
                  {currentMilestone.description}
                </p>

                <p className="text-xs sm:text-sm text-[#A09585] leading-relaxed border-l-2 border-[#C09758] pl-4 py-1 italic bg-black/20">
                  "{currentMilestone.detailedStory}"
                </p>
              </div>

              {/* Craft Focus Highlights */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8A8072] block mb-2.5">
                  CORE CRAFT & SPATIAL PILLARS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentMilestone.craftFocus.map(item => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-[#181614] border border-[#40382C] text-[#E0D8CB] font-mono"
                    >
                      • {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#332D24]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={activeStepIndex === 0}
                    className={`p-3 border transition-colors flex items-center gap-2 text-xs uppercase tracking-wider ${
                      activeStepIndex === 0
                        ? 'border-[#2C2720] text-[#554E44] cursor-not-allowed'
                        : 'border-[#4A4133] hover:border-[#C09758] text-[#E0D8CB] hover:text-[#C09758] cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">PREVIOUS</span>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeStepIndex === JOURNEY_MILESTONES.length - 1}
                    className={`p-3 border transition-colors flex items-center gap-2 text-xs uppercase tracking-wider ${
                      activeStepIndex === JOURNEY_MILESTONES.length - 1
                        ? 'border-[#2C2720] text-[#554E44] cursor-not-allowed'
                        : 'border-[#4A4133] hover:border-[#C09758] text-[#E0D8CB] hover:text-[#C09758] cursor-pointer'
                    }`}
                  >
                    <span className="hidden sm:inline">NEXT MILESTONE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right text-xs font-mono text-[#8C8274]">
                  <span className="text-[#DFC493] font-bold">{currentMilestone.step}</span> / 07
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
