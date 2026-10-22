import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

import { COMPANY_INFO } from '../data/siteData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreJourney }) => {
  const [activeVisualMode, setActiveVisualMode] = useState<'architecture' | 'manufacturing'>('architecture');

  const heroModes = {
    architecture: {
      tag: "CONTEMPORARY HABITAT",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      caption: "Modern monolithic architecture in Gujarat balanced with climate-responsive light and natural stone.",
      focus: "Spatial Flow • Minimalist Form • Vastu Geometry"
    },
    manufacturing: {
      tag: "Vaastukalaa HAND-CARVED manufacturing",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
      caption: "Seasoned CP Teakwood hand-carved in our Nana Chiloda atelier using 45+ years of traditional Gujarati manufacturing lineage.",
      focus: "Aged Teak • Classical Chisels • Sangeda Woodturning"
    }
  };

  const currentMode = heroModes[activeVisualMode];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between bg-[#F7FCFA] text-[#0A2E28] overflow-hidden">
      {/* Background Cinematic Visual with luminous light theme overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentMode.image}
          alt={currentMode.tag}
          className="w-full h-full object-cover object-center transition-all duration-1000 transform scale-105 ease-out opacity-20 sm:opacity-25"
        />
        {/* Editorial Gradients & Architectural Vignette (Light Theme) */}
        <div className="absolute inset-0 bg-linear-to-t from-[#F7FCFA] via-[#F7FCFA]/85 to-[#F7FCFA]/50"></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#F7FCFA] via-[#F7FCFA]/80 to-transparent"></div>
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>
      </div>

      {/* Top Heritage Badges & Visual Mode Switcher */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D4F0E8] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#02AE88] rounded-full animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#007E70] font-bold">
              BELLO HABITAT & VASTUKALA • AHMEDABAD
            </span>
            <span className="hidden md:inline text-[#B8E6DB]">|</span>
            <span className="hidden md:inline text-[11px] text-[#4D756E] tracking-wider font-medium">
              {COMPANY_INFO.legacyYears} Years Woodworking Lineage*
            </span>
          </div>

          {/* Interactive Duality Switcher right in the Hero */}
          <div className="flex w-full sm:w-auto p-1 bg-white/95 backdrop-blur-md border border-[#D4F0E8] rounded-none text-xs shadow-sm">
            <button
              onClick={() => setActiveVisualMode('architecture')}
              className={`flex-1 sm:flex-none justify-center px-2.5 sm:px-3 py-1.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] sm:text-[10.5px] tracking-wider uppercase font-bold ${
                activeVisualMode === 'architecture'
                  ? 'bg-[#007E70] text-white shadow-sm'
                  : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              <Layers className="w-3 h-3 text-[#02AE88]" />
              <span>Contemporary Architecture</span>
            </button>
            <button
              onClick={() => setActiveVisualMode('manufacturing')}
              className={`flex-1 sm:flex-none justify-center px-2.5 sm:px-3 py-1.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] sm:text-[10.5px] tracking-wider uppercase font-bold ${
                activeVisualMode === 'manufacturing'
                  ? 'bg-[#007E70] text-white shadow-sm'
                  : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#02AE88]" />
              <span>Vastukala manufacturing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Center Cinematic Main Headline & Story Opening */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Category eyebrow */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 px-3 py-1 bg-[#EDF9F6] border border-[#02AE88] text-[#007E70] text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.28em] uppercase font-bold shadow-sm">
            <span>{currentMode.tag}</span>
            <span className="text-[#02AE88]">•</span>
            <span className="text-[#1C4039]">{currentMode.focus}</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight text-[#007E70] mb-6 sm:mb-8">
            CRAFTING SPACES.
            <br />
            <span className="italic font-light text-[#02AE88]">PRESERVING LEGACY.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-xl md:text-2xl text-[#1C4039] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Where traditional Indian craftsmanship meets contemporary architecture, interiors and thoughtful design.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#02AE88] hover:bg-[#007E70] text-white font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase transition-all duration-300 shadow-md shadow-[#02AE88]/20 group cursor-pointer w-full sm:w-auto"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreJourney}
              className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-[#EDF9F6] text-[#007E70] hover:text-[#02AE88] border-2 border-[#007E70] hover:border-[#02AE88] backdrop-blur-sm text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>EXPLORE OUR JOURNEY</span>
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform text-[#02AE88]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-[#D4F0E8] pt-6">
          <div className="md:col-span-5 text-xs text-[#4D756E] leading-relaxed">
            <span className="text-[#007E70] font-bold block mb-0.5 tracking-wider uppercase text-[10px]">
              Active Visual Context
            </span>
            <p className="text-[12.5px] italic text-[#1C4039]">
              "{currentMode.caption}"
            </p>
          </div>

          <div className="md:col-span-4 flex items-center gap-6 text-xs text-[#1C4039]">
            <div className="border-l-2 border-[#02AE88] pl-3">
              <span className="block text-lg text-[#007E70] font-bold">45+ Years</span>
              <span className="text-[10px] tracking-widest uppercase text-[#4D756E]">Woodworking Heritage*</span>
            </div>
            <div className="border-l-2 border-[#02AE88] pl-3">
              <span className="block text-lg text-[#007E70] font-bold">Ahmedabad</span>
              <span className="text-[10px] tracking-widest uppercase text-[#4D756E]">Studio & Atelier</span>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end items-center">
            <button
              onClick={onExploreJourney}
              className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.24em] uppercase text-[#007E70] hover:text-[#02AE88] font-bold transition-colors cursor-pointer"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#02AE88]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
