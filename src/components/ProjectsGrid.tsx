import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/siteData';


interface ProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'ARCHITECTURE',
    'INTERIORS',
    'TRADITIONAL CRAFT',
    'WOODWORK',
    'TEMPLES',
    'COMMERCIAL',
    'RESIDENTIAL'
  ];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeCategory === 'ALL') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F7FCFA] relative border-b border-[#D4F0E8]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#02AE88]"></span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
                PORTFOLIO OF SPACES & CRAFT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight">
              FEATURED PROJECTS
            </h2>
            <p className="text-sm sm:text-base text-[#1C4039] font-normal mt-3">
              An editorial gallery of architectural habitations, bespoke interiors, and masterwork temple sanctums crafted in Gujarat.
            </p>
          </div>

          <div className="text-right text-xs font-mono text-[#4D756E]">
            Showing <strong className="text-[#007E70] font-bold">{filteredProjects.length}</strong> Works
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none border-b border-[#D4F0E8]">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#007E70] text-white shadow-sm'
                    : 'bg-white text-[#1C4039] border border-[#D4F0E8] hover:text-[#007E70] hover:bg-[#EDF9F6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Tiles (Varying Grid Rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? 'md:col-span-7 lg:col-span-8' : 'md:col-span-5 lg:col-span-4';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer bg-white border border-[#D4F0E8] hover:border-[#02AE88] transition-all duration-300 shadow-sm flex flex-col justify-between`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#EDF9F6]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-white/95 backdrop-blur-sm text-[#007E70] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold shadow-sm">
                      {project.category}
                    </span>
                    {project.isFeatured && (
                      <span className="bg-[#02AE88] text-white text-[9px] font-mono uppercase tracking-widest px-2 py-1 font-bold shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect Hover Button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#007E70] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#02AE88]" />
                      <span>View Study</span>
                    </span>
                  </div>
                </div>

                {/* Card Editorial Meta */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#4D756E] mb-2.5 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#02AE88]" />
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl text-[#007E70] font-bold tracking-tight mb-3 group-hover:text-[#02AE88] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1C4039] font-normal leading-relaxed line-clamp-3 mb-6">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D4F0E8] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-[#02AE88] uppercase tracking-wider font-bold">
                      {project.division}
                    </span>
                    <span className="text-[#007E70] group-hover:text-[#02AE88] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider">
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#02AE88]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Disclosing Editorial Project Studies */}
        <div className="mt-14 p-5 bg-[#EDF9F6] border border-[#B8E6DB] text-center shadow-sm">
          <p className="text-xs text-[#007E70] italic font-medium">
            * Selected works showcase actual spatial studies, traditional wood carving typologies, and architectural frameworks developed by Bello Habitat Consultancy and the Vastukala craft atelier.
          </p>
        </div>
      </div>
    </section>
  );
};
