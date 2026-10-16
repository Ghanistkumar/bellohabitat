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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#007E70]/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 lg:p-10 animate-fade-in">
      <div className="bg-[#F7FCFA] text-[#0A2E28] w-full max-w-5xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto shadow-2xl border-2 border-[#02AE88] relative">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#F7FCFA]/95 backdrop-blur-md border-b border-[#D4F0E8] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#02AE88] rounded-full"></span>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#007E70] font-bold truncate max-w-[240px] sm:max-w-none">
              {project.categoryLabel} • {project.division}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-[#007E70] hover:text-white bg-white hover:bg-[#02AE88] border border-[#D4F0E8] transition-colors cursor-pointer shadow-sm"
            aria-label="Close Project Detail Modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-4 sm:p-10 lg:p-12 space-y-8 sm:space-y-10">
          {/* Project Title & Metadata Bar */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-[#406860] mb-2 sm:mb-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#02AE88]" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#02AE88]" />
                Year {project.year}
              </span>
              {project.dimensionsOrArea && (
                <>
                  <span>•</span>
                  <span>{project.dimensionsOrArea}</span>
                </>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#007E70] font-bold tracking-tight mb-4">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#2D5A50] font-normal leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Large Hero / Interactive Gallery Frame */}
          <div className="relative border-2 border-[#D4F0E8] p-2 bg-white">
            <div className="aspect-[16/9] overflow-hidden bg-[#EDF9F6] relative">
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
                    className="p-2.5 bg-[#007E70]/80 hover:bg-[#007E70] text-white pointer-events-auto transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-2.5 bg-[#007E70]/80 hover:bg-[#007E70] text-white pointer-events-auto transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-[#007E70]/90 text-white text-[10px] font-mono px-2.5 py-1">
                Image {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2 pt-2 border-t border-[#D4F0E8]">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#02AE88] ring-2 ring-[#02AE88]/40' : 'border-transparent opacity-60 hover:opacity-100'
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
            <div className="p-6 bg-white border-2 border-[#D4F0E8] shadow-sm">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#02AE88] block mb-2 font-bold">
                01 • THE IDEA
              </span>
              <h3 className="text-xl font-bold text-[#007E70] mb-3">Client Vision & Context</h3>
              <p className="text-xs sm:text-sm text-[#2D5A50] leading-relaxed">
                {project.idea}
              </p>
            </div>

            {/* Design Approach */}
            <div className="p-6 bg-white border-2 border-[#D4F0E8] shadow-sm">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#02AE88] block mb-2 font-bold">
                02 • DESIGN APPROACH
              </span>
              <h3 className="text-xl font-bold text-[#007E70] mb-3">Architecture & Geometry</h3>
              <p className="text-xs sm:text-sm text-[#2D5A50] leading-relaxed">
                {project.designApproach}
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="p-6 bg-white border-2 border-[#D4F0E8] shadow-sm">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#02AE88] block mb-2 font-bold">
                03 • CRAFTSMANSHIP
              </span>
              <h3 className="text-xl font-bold text-[#007E70] mb-3">Atelier & Wood Detailing</h3>
              <p className="text-xs sm:text-sm text-[#2D5A50] leading-relaxed">
                {project.craftsmanship}
              </p>
            </div>
          </div>

          {/* Materials & Palette Used */}
          <div className="p-6 bg-[#EDF9F6] border border-[#A3E0D2]">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#007E70] block mb-3 font-bold">
              SPECIFIED MATERIALITY & TACTILE PALETTE:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.materials.map(mat => (
                <span
                  key={mat}
                  className="px-3 py-1 bg-white border border-[#A3E0D2] text-xs font-mono text-[#007E70] font-semibold"
                >
                  ✓ {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Conversion CTA Footer Banner */}
          <div className="p-8 bg-[#007E70] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#A3E0D2] block mb-1 font-bold">
                START A PROJECT WITH US
              </span>
              <h4 className="text-2xl text-white font-bold leading-snug">
                Envision a similar architectural or woodworking masterpiece?
              </h4>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartProject(project.title);
              }}
              className="px-6 py-3.5 bg-[#02AE88] hover:bg-white text-white hover:text-[#007E70] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 text-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
