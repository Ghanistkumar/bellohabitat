import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative border-b border-[#EBE3D5]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.28em] text-[#8E5832]">
            <Quote className="w-3.5 h-3.5 text-[#C09758]" />
            <span>PATRON VOICES & REFLECTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] tracking-tight leading-[1.1] mb-6">
            EDITORIAL TESTIMONIALS
          </h2>
          <p className="text-sm sm:text-base text-[#6E6457] font-light max-w-xl mx-auto font-sans-ui">
            Reflections from homeowners, estate patrons, and commercial partners who have entrusted their spaces and heirloom woodwork to our practice.
          </p>
        </div>

        {/* 3 Editorial Quote Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (

            <div
              key={item.id}
              className="p-8 sm:p-10 bg-white border border-[#DDD5C7] shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <span className="font-serif text-6xl text-[#E8DFC9] leading-none block select-none mb-3">
                  “
                </span>

                <blockquote className="text-sm sm:text-base text-[#38332C] font-serif italic leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#EFE8DE]">
                <div className="text-xs font-bold text-[#181614] uppercase tracking-wider mb-1">
                  {item.clientLabel}
                </div>
                <div className="text-xs text-[#8E5832] font-medium mb-1">
                  {item.projectType}
                </div>
                <div className="text-[11px] text-[#8A8072] font-mono">
                  {item.location}
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-[#E5DCD0] text-[10px] text-[#A69C8E] italic">
                  * {item.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
