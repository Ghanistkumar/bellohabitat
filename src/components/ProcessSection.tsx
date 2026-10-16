import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { PROCESS_STEPS } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F7FCFA] text-[#0A2E28] relative border-b border-[#D4F0E8]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#02AE88]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
              METHODOLOGY & EXECUTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-6">
            THE ARCHITECTURAL PROCESS
          </h2>
          <p className="text-sm sm:text-base text-[#1C4039] font-normal leading-relaxed">
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
                    ? 'bg-[#EDF9F6] border-2 border-[#02AE88] shadow-lg -translate-y-1'
                    : 'bg-white border-[#D4F0E8] hover:border-[#02AE88] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#D4F0E8] pb-4 mb-6">
                    <span className="font-mono text-xl text-[#02AE88] font-bold">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#4D756E] font-bold">
                      STAGE {step.step}
                    </span>
                  </div>

                  <h3 className="text-2xl text-[#007E70] font-bold mb-1">
                    {step.name}
                  </h3>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#02AE88] font-bold mb-4">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#1C4039] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D4F0E8] flex items-center justify-between text-xs text-[#4D756E]">
                  <span className="font-medium">Step {idx + 1} of 06</span>
                  <CheckCircle2 className={`w-4 h-4 transition-colors ${isHovered ? 'text-[#02AE88]' : 'text-[#B8E6DB]'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
