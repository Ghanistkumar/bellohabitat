import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { PROCESS_STEPS } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F6F2EB] text-[#181614] relative border-b border-[#E5DDD0]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-parchment-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#8E5832]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#8E5832] font-mono font-semibold">
              METHODOLOGY & EXECUTION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] tracking-tight leading-[1.1] mb-6">
            THE ARCHITECTURAL PROCESS
          </h2>
          <p className="text-sm sm:text-base text-[#665D50] font-light leading-relaxed font-sans-ui">
            From early spiritual and spatial dialogues to final on-site woodcraft joinery, every commission moves through a disciplined, transparent six-stage workflow.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isHovered = activeStep === idx;
            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                  isHovered
                    ? 'bg-white border-[#181614] shadow-lg -translate-y-1'
                    : 'bg-[#FAF8F5] border-[#E1D7C9] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#EFE8DE] pb-4 mb-6">
                    <span className="font-mono text-xl text-[#8E5832] font-bold">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9C9182]">
                      STAGE {step.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#181614] font-medium mb-1">
                    {step.name}
                  </h3>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E5832] mb-4">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5D5548] font-light leading-relaxed font-sans-ui">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFE8DE] flex items-center justify-between text-xs text-[#8E8373]">
                  <span>Step {idx + 1} of 06</span>
                  <CheckCircle2 className={`w-4 h-4 transition-colors ${isHovered ? 'text-[#8E5832]' : 'text-[#D0C5B5]'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
