import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

import { COMPANY_INFO } from '../data/siteData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreJourney }) => {
  const [activeVisualMode, setActiveVisualMode] = useState<'architecture' | 'woodcraft'>('architecture');

  const heroModes = {
    architecture: {
      tag: "CONTEMPORARY HABITAT",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      caption: "Modern monolithic architecture in Gujarat balanced with climate-responsive light and natural stone.",
      focus: "Spatial Flow • Minimalist Form • Vastu Geometry"
    },
    woodcraft: {
      tag: "VASTUKALA HAND-CARVED WOODCRAFT",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
      caption: "Seasoned CP Teakwood hand-carved in our Nana Chiloda atelier using 45+ years of traditional Gujarati woodcraft lineage.",
      focus: "Aged Teak • Classical Chisels • Sangeda Woodturning"
    }
  };

  const currentMode = heroModes[activeVisualMode];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between bg-[#151412] text-[#FAF8F5] overflow-hidden">
      {/* Background Cinematic Visual with smooth crossfade */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentMode.image}
          alt={currentMode.tag}
          className="w-full h-full object-cover object-center transition-all duration-1000 transform scale-105 ease-out"
        />
        {/* Editorial Gradients & Architectural Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-[#151412]/60 to-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#151412]/80 via-transparent to-[#151412]/40"></div>
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none"></div>
      </div>

      {/* Top Heritage Badges & Visual Mode Switcher */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#C09758] rounded-full"></span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#DFC493] font-semibold">
              BELLO HABITAT & VASTUKALA • AHMEDABAD
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-[11px] text-[#A69E92] tracking-wider">
              {COMPANY_INFO.legacyYears} Years Woodworking Lineage*
            </span>
          </div>

          {/* Interactive Duality Switcher right in the Hero */}
          <div className="flex w-full sm:w-auto p-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-none text-xs">
            <button
              onClick={() => setActiveVisualMode('architecture')}
              className={`flex-1 sm:flex-none justify-center px-2.5 sm:px-3 py-1.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] sm:text-[10.5px] tracking-wider uppercase ${
                activeVisualMode === 'architecture'
                  ? 'bg-[#C09758] text-[#151412] font-bold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Contemporary Architecture</span>
            </button>
            <button
              onClick={() => setActiveVisualMode('woodcraft')}
              className={`flex-1 sm:flex-none justify-center px-2.5 sm:px-3 py-1.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[10px] sm:text-[10.5px] tracking-wider uppercase ${
                activeVisualMode === 'woodcraft'
                  ? 'bg-[#C09758] text-[#151412] font-bold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Vastukala Woodcraft</span>
            </button>
          </div>
        </div>
      </div>

      {/* Center Cinematic Main Headline & Story Opening */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Subtle category eyebrow */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 px-2.5 sm:px-3 py-1 bg-[#181614]/80 backdrop-blur-md border border-[#C09758]/40 text-[#DFC493] text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.28em] uppercase font-mono">
            <span>{currentMode.tag}</span>
            <span className="text-[#C09758]">•</span>
            <span className="text-white/80">{currentMode.focus}</span>
          </div>

          {/* Core Headline */}
          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-[#FAF8F5] mb-6 sm:mb-8">
            CRAFTING SPACES.
            <br />
            <span className="italic font-light text-[#DFC493]">PRESERVING LEGACY.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-xl md:text-2xl text-[#D8D0C2] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 font-sans-ui">
            Where traditional Indian craftsmanship meets contemporary architecture, interiors and thoughtful design.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C09758] hover:bg-[#D4AF37] text-[#151412] font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase transition-all duration-300 shadow-lg shadow-black/40 group cursor-pointer w-full sm:w-auto"
            >

              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreJourney}
              className="inline-flex items-center justify-center px-7 py-4 bg-black/40 hover:bg-black/60 text-[#FAF8F5] hover:text-[#DFC493] border border-white/30 hover:border-[#C09758] backdrop-blur-sm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>EXPLORE OUR JOURNEY</span>
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform text-[#DFC493]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/20 pt-6">
          <div className="md:col-span-5 text-xs text-[#A69E92] leading-relaxed">
            <span className="text-[#DFC493] font-semibold block mb-0.5 tracking-wider uppercase text-[10px]">
              Active Visual Context
            </span>
            <p className="text-[12.5px] italic text-[#E2DDD5]">
              "{currentMode.caption}"
            </p>
          </div>

          <div className="md:col-span-4 flex items-center gap-6 text-xs text-[#C5BEB3]">
            <div className="border-l border-[#C09758]/50 pl-3">
              <span className="block font-serif text-lg text-white font-medium">45+ Years</span>
              <span className="text-[10px] tracking-widest uppercase text-[#968E82]">Woodworking Heritage*</span>
            </div>
            <div className="border-l border-[#C09758]/50 pl-3">
              <span className="block font-serif text-lg text-white font-medium">Ahmedabad</span>
              <span className="text-[10px] tracking-widest uppercase text-[#968E82]">Studio & Atelier</span>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end items-center">
            <button
              onClick={onExploreJourney}
              className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.24em] uppercase text-[#DFC493] hover:text-white transition-colors cursor-pointer"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
