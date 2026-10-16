import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7FCFA] relative border-b border-[#D4F0E8]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.28em] text-[#007E70] font-bold">
            <Quote className="w-3.5 h-3.5 text-[#02AE88]" />
            <span>PATRON VOICES & REFLECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            EDITORIAL TESTIMONIALS
          </h2>
          <p className="text-sm sm:text-base text-[#1C4039] font-normal max-w-xl mx-auto">
            Reflections from homeowners, estate patrons, and commercial partners who have entrusted their spaces and heirloom woodwork to our practice.
          </p>
        </div>

        {/* 3 Editorial Quote Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 bg-white border border-[#D4F0E8] shadow-sm hover:border-[#02AE88] transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <span className="text-6xl text-[#B8E6DB] leading-none block select-none mb-3 font-bold">
                  “
                </span>

                <blockquote className="text-sm sm:text-base text-[#1C4039] italic font-medium leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#D4F0E8]">
                <div className="text-xs font-bold text-[#007E70] uppercase tracking-wider mb-1">
                  {item.clientLabel}
                </div>
                <div className="text-xs text-[#02AE88] font-bold mb-1">
                  {item.projectType}
                </div>
                <div className="text-[11px] text-[#4D756E] font-mono">
                  {item.location}
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-[#D4F0E8] text-[10px] text-[#4D756E] italic">
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
