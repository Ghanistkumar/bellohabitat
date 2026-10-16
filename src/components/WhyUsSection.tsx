import React from 'react';
import { WHY_US_PILLARS } from '../data/siteData';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0A2E28] relative border-b border-[#D4F0E8] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#02AE88]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
              THE DISTINCTIVE ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            WHY BELLO HABITAT
          </h2>
          <p className="text-sm sm:text-base text-[#1C4039] font-normal leading-relaxed">
            We are not a generic design office that specifies finishes from catalogues. We are an integrated studio practice with our own woodworking heritage and seasoned site engineers.
          </p>
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_PILLARS.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 bg-[#F7FCFA] border border-[#D4F0E8] hover:border-[#02AE88] transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#D4F0E8] pb-4 mb-6">
                  <span className="font-mono text-xs text-[#02AE88] tracking-widest uppercase font-bold">
                    0{idx + 1} // STRENGTH
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#EDF9F6] text-[#007E70] border border-[#B8E6DB] font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl text-[#007E70] font-bold mb-3 group-hover:text-[#02AE88] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C4039] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D4F0E8] flex items-center justify-between text-[11px] text-[#4D756E] font-mono font-medium">
                <span>VERIFIED STANDARD</span>
                <span className="w-2 h-2 rounded-full bg-[#02AE88]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
