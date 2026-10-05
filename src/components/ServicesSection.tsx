import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../data/siteData';


interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bello' | 'vastukala'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const filteredServices = SERVICES_DATA.filter(service => {
    if (activeCategory === 'all') return true;
    return service.division === activeCategory;
  });

  const activeService: ServiceItem = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const el = document.getElementById('service-inspector');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F2EB] text-[#181614] relative border-b border-[#E5DDD0]">
      {/* Background Subtle Paper Texture */}
      <div className="absolute inset-0 bg-parchment-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#8E5832]"></span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#8E5832] font-mono font-semibold">
                OUR PRACTICES & ATELIER DISCIPLINES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] tracking-tight">
              WHAT WE CREATE
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="inline-flex p-1 bg-[#EAE2D4] border border-[#D3C8B7] self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#181614] text-[#FAF8F5]'
                  : 'text-[#61584C] hover:text-[#181614]'
              }`}
            >
              All Disciplines ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('bello')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'bello'
                  ? 'bg-[#181614] text-[#FAF8F5]'
                  : 'text-[#61584C] hover:text-[#181614]'
              }`}
            >
              Bello Habitat (Architecture)
            </button>
            <button
              onClick={() => setActiveCategory('vastukala')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'vastukala'
                  ? 'bg-[#181614] text-[#FAF8F5]'
                  : 'text-[#61584C] hover:text-[#181614]'
              }`}
            >
              Vastukala (Woodcraft)
            </button>
          </div>
        </div>

        {/* Dynamic Editorial Layout: Left Interactive Service Catalog + Right Active Feature Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service List */}
          <div className="lg:col-span-6 space-y-3 max-h-[500px] sm:max-h-[600px] lg:max-h-[750px] overflow-y-auto pr-1">
            {filteredServices.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setSelectedServiceId(service.id)}
                  onClick={() => handleServiceClick(service.id)}
                  className={`p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#181614] shadow-md translate-x-1.5'
                      : 'bg-[#FAF8F5]/80 border-[#E2D8C9] hover:bg-white hover:border-[#C09758]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#8E5832] font-semibold">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#181614]">
                        {service.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9.5px] uppercase font-mono px-2 py-0.5 ${
                          service.division === 'bello'
                            ? 'bg-[#EAE2D4] text-[#554D41]'
                            : 'bg-[#C09758]/20 text-[#8E5832] font-bold'
                        }`}
                      >
                        {service.division === 'bello' ? 'Architecture' : 'Vastukala Craft'}
                      </span>
                      <Eye className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#8E5832]' : 'text-[#AFA699]'}`} />
                    </div>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#675F53] font-light line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Visual & Specification Inspector */}
          <div id="service-inspector" className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-[#181614] text-[#FAF8F5] border border-[#2F2922] p-5 sm:p-8 shadow-2xl relative">
              {/* Active Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#24201B] border border-[#3E362C] mb-6">

                <img
                  src={activeService.image}
                  alt={activeService.name}
                  key={activeService.id}
                  className="w-full h-full object-cover editorial-image-warmth transition-all duration-700 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs">
                  <span className="bg-[#C09758] text-[#181614] font-mono text-[10px] uppercase px-2.5 py-1 font-bold">
                    {activeService.divisionLabel}
                  </span>
                  <span className="text-[#D8B57D] font-mono text-[10.5px]">
                    {activeService.accentNote}
                  </span>
                </div>
              </div>

              {/* Service Meta & Description */}
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#C09758] block mb-1">
                  DISCIPLINE OVERVIEW
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF8F5] mb-2">
                  {activeService.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#DFC493] italic font-serif mb-4">
                  "{activeService.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-[#CCC2B2] font-light leading-relaxed mb-6 font-sans-ui">
                  {activeService.description}
                </p>

                {/* Scope & Deliverables */}
                <div className="mb-6 pt-4 border-t border-[#312B23]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C9181] block mb-2.5">
                    DELIVERABLES & SCOPE OF PRACTICE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map(del => (
                      <div key={del} className="flex items-center gap-2 text-xs text-[#E5DCD0]">
                        <Check className="w-3.5 h-3.5 text-[#C09758] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Craft Details / Architectural Note */}
                <div className="p-3.5 bg-[#221E19] border-l-2 border-[#C09758] mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C09758] block mb-1">
                    CRAFT & MATERIAL INTEGRATION:
                  </span>
                  <p className="text-xs text-[#BCB2A2] italic">
                    {activeService.craftDetails}
                  </p>
                </div>

                {/* Action CTA for this service */}
                <button
                  onClick={() => onSelectServiceForConsultation(activeService.name)}
                  className="w-full py-3.5 bg-[#C09758] hover:bg-[#D4AF37] text-[#181614] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>INQUIRE ABOUT {activeService.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#181614]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
