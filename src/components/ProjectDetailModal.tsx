import React, { useState } from 'react';
import { X, ArrowUpRight, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectItem } from '../data/siteData';


interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [project.heroImage, ...project.gallery];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in">
      <div className="bg-[#FAF8F5] text-[#181614] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DFCBB0] relative">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7DFD1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#C09758] rounded-full"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8E5832] font-semibold">
              {project.categoryLabel} • {project.division}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#181614] hover:text-[#8E5832] hover:bg-[#EFE8DC] transition-colors rounded-none cursor-pointer"
            aria-label="Close Project Detail Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-10">
          {/* Project Title & Metadata Bar */}
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7D7365] mb-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C09758]" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C09758]" />
                Year {project.year}
              </span>
              {project.dimensionsOrArea && (
                <>
                  <span>•</span>
                  <span>{project.dimensionsOrArea}</span>
                </>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#181614] font-normal tracking-tight mb-4">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#554D41] font-light leading-relaxed font-sans-ui max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Large Hero / Interactive Gallery Frame */}
          <div className="relative border border-[#DDD5C7] p-2 bg-white">
            <div className="aspect-[16/9] overflow-hidden bg-[#24211D] relative">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Controls */}
              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                  <button
                    onClick={handlePrevImage}
                    className="p-2.5 bg-black/60 hover:bg-black text-white pointer-events-auto transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-2.5 bg-black/60 hover:bg-black text-white pointer-events-auto transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-black/70 text-[#FAF8F5] text-[10px] font-mono px-2.5 py-1">
                Image {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2 pt-2 border-t border-[#EFE8DE]">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#8E5832] ring-2 ring-[#8E5832]/30' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Three Core Editorial Narrative Blocks: THE IDEA, DESIGN APPROACH, CRAFTSMANSHIP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* The Idea */}
            <div className="p-6 bg-white border border-[#E4DCD0]">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#8E5832] block mb-2 font-bold">
                01 • THE IDEA
              </span>
              <h3 className="font-serif text-xl text-[#181614] mb-3">Client Vision & Context</h3>
              <p className="text-xs sm:text-sm text-[#5B5245] leading-relaxed font-sans-ui">
                {project.idea}
              </p>
            </div>

            {/* Design Approach */}
            <div className="p-6 bg-white border border-[#E4DCD0]">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#8E5832] block mb-2 font-bold">
                02 • DESIGN APPROACH
              </span>
              <h3 className="font-serif text-xl text-[#181614] mb-3">Architecture & Geometry</h3>
              <p className="text-xs sm:text-sm text-[#5B5245] leading-relaxed font-sans-ui">
                {project.designApproach}
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="p-6 bg-white border border-[#E4DCD0]">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#8E5832] block mb-2 font-bold">
                03 • CRAFTSMANSHIP
              </span>
              <h3 className="font-serif text-xl text-[#181614] mb-3">Atelier & Wood Detailing</h3>
              <p className="text-xs sm:text-sm text-[#5B5245] leading-relaxed font-sans-ui">
                {project.craftsmanship}
              </p>
            </div>
          </div>

          {/* Materials & Palette Used */}
          <div className="p-6 bg-[#F4EFE5] border border-[#DDD3C2]">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#7A6F60] block mb-3 font-semibold">
              SPECIFIED MATERIALITY & TACTILE PALETTE:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.materials.map(mat => (
                <span
                  key={mat}
                  className="px-3 py-1 bg-white border border-[#D5C9B7] text-xs font-mono text-[#38322A]"
                >
                  ✓ {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Conversion CTA Footer Banner */}
          <div className="p-8 bg-[#181614] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3A3328]">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#C09758] block mb-1">
                START A PROJECT WITH US
              </span>
              <h4 className="font-serif text-2xl text-[#FAF8F5] leading-snug">
                Envision a similar architectural or woodworking masterpiece?
              </h4>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartProject(project.title);
              }}
              className="px-6 py-3.5 bg-[#C09758] hover:bg-[#D4AF37] text-[#181614] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 text-[#181614]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
