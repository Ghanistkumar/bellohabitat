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
    <section id="services" className="py-24 sm:py-32 bg-[#F7FCFA] text-[#0A2E28] relative border-b border-[#D4F0E8]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#02AE88]"></span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
                OUR PRACTICES & ATELIER DISCIPLINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight">
              WHAT WE CREATE
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="inline-flex p-1 bg-[#EDF9F6] border border-[#B8E6DB] self-start md:self-auto overflow-x-auto max-w-full shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#007E70] text-white shadow-sm'
                  : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              All Disciplines ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('bello')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'bello'
                  ? 'bg-[#007E70] text-white shadow-sm'
                  : 'text-[#1C4039] hover:text-[#007E70]'
              }`}
            >
              Bello Habitat (Architecture)
            </button>
            <button
              onClick={() => setActiveCategory('vastukala')}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'vastukala'
                  ? 'bg-[#007E70] text-white shadow-sm'
                  : 'text-[#1C4039] hover:text-[#007E70]'
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
                      ? 'bg-[#EDF9F6] border-2 border-[#02AE88] shadow-md translate-x-1.5'
                      : 'bg-white border-[#D4F0E8] hover:border-[#02AE88] shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#02AE88] font-bold">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#007E70]">
                        {service.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9.5px] uppercase font-mono px-2 py-0.5 font-bold ${
                          service.division === 'bello'
                            ? 'bg-[#E0F5F0] text-[#007E70]'
                            : 'bg-[#02AE88] text-white'
                        }`}
                      >
                        {service.division === 'bello' ? 'Architecture' : 'Vastukala Craft'}
                      </span>
                      <Eye className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#02AE88]' : 'text-[#B8E6DB]'}`} />
                    </div>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#1C4039] font-normal line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Visual & Specification Inspector */}
          <div id="service-inspector" className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-white text-[#0A2E28] border-2 border-[#D4F0E8] p-5 sm:p-8 shadow-xl relative">
              {/* Active Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EDF9F6] border border-[#D4F0E8] mb-6">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  key={activeService.id}
                  className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs">
                  <span className="bg-[#007E70] text-white font-mono text-[10px] uppercase px-2.5 py-1 font-bold shadow-sm">
                    {activeService.divisionLabel}
                  </span>
                  <span className="text-[#02AE88] font-mono text-[10.5px] font-bold bg-white/95 px-2 py-0.5">
                    {activeService.accentNote}
                  </span>
                </div>
              </div>

              {/* Service Meta & Description */}
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#02AE88] font-bold block mb-1">
                  DISCIPLINE OVERVIEW
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#007E70] mb-2">
                  {activeService.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#02AE88] italic font-semibold mb-4">
                  "{activeService.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-[#1C4039] font-normal leading-relaxed mb-6">
                  {activeService.description}
                </p>

                {/* Scope & Deliverables */}
                <div className="mb-6 pt-4 border-t border-[#D4F0E8]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#4D756E] font-bold block mb-2.5">
                    DELIVERABLES & SCOPE OF PRACTICE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map(del => (
                      <div key={del} className="flex items-center gap-2 text-xs text-[#0A2E28] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#02AE88] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Craft Details / Architectural Note */}
                <div className="p-3.5 bg-[#EDF9F6] border-l-4 border-[#02AE88] mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#007E70] font-bold block mb-1">
                    CRAFT & MATERIAL INTEGRATION:
                  </span>
                  <p className="text-xs text-[#1C4039] italic font-medium">
                    {activeService.craftDetails}
                  </p>
                </div>

                {/* Action CTA for this service */}
                <button
                  onClick={() => onSelectServiceForConsultation(activeService.name)}
                  className="w-full py-3.5 bg-[#02AE88] hover:bg-[#007E70] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>INQUIRE ABOUT {activeService.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
