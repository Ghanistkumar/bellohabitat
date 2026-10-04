import React from 'react';
import { WHY_US_PILLARS } from '../data/siteData';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#181614] text-[#FAF8F5] relative border-b border-[#2C2720] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C09758]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#DFC493] font-mono">
              THE DISTINCTIVE ADVANTAGE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF8F5] tracking-tight leading-[1.1] mb-6">
            WHY BELLO HABITAT
          </h2>
          <p className="text-sm sm:text-base text-[#B3AAA0] font-light leading-relaxed font-sans-ui">
            We are not a generic design office that specifies finishes from catalogues. We are an integrated studio practice with our own woodworking heritage and seasoned site engineers.
          </p>
        </div>

        {/* 6 Core Strengths Grid — Editorial Typography & Spatial Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_PILLARS.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 bg-[#201D1A] border border-[#383126] hover:border-[#C09758] transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#312B23] pb-4 mb-6">
                  <span className="font-mono text-xs text-[#DFC493] tracking-widest uppercase">
                    0{idx + 1} // STRENGTH
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#2C261F] text-[#C09758] border border-[#40382C]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mb-3 group-hover:text-[#DFC493] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CDC3B3] font-light leading-relaxed font-sans-ui">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#312B23] flex items-center justify-between text-[11px] text-[#7E7465] font-mono">
                <span>VERIFIED STANDARD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C09758]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
