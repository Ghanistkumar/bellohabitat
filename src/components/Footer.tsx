import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';


interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#007E70] text-white relative border-t border-[#006B5F] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none"></div>

      {/* Top Banner Tagline */}
      <div className="border-b border-[#006B5F] py-14 sm:py-20 relative z-10 bg-[#00665B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#3DCBA8] block mb-3 font-bold">
            THE LIVING PRINCIPLE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            “WE DESIGN YOUR LIFESTYLE IN BETTER WAYS.”
          </h2>
          <p className="text-xs sm:text-sm text-[#E0F5F0] italic mt-4">
            Where generations of Indian craftsmanship meet contemporary architecture.
          </p>
          <div className="mt-8">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#02AE88] hover:bg-white text-white hover:text-[#007E70] font-bold text-xs tracking-[0.22em] uppercase transition-all shadow-xl cursor-pointer"
            >
              <span>COMMISSION A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#02AE88] bg-[#00665B] flex items-center justify-center text-white font-bold text-2xl">
                B
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider text-white block">
                  BELLO HABITAT
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3DCBA8] font-bold">
                  CONSULTANCY • VASTUKALA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E0F5F0] font-normal leading-relaxed pr-4">
              Modern architecture, interior design, landscape, Vastu and turnkey project management consultancy based in Ahmedabad, Gujarat, carrying forward 45+ years of traditional woodworking mastery.
            </p>

            <div className="pt-2 text-xs text-[#D4F0E8] space-y-1">
              <div>• Studio: 306, Ishaan Square, Chandkheda, Ahmedabad</div>
              <div>• Atelier: 89, Sankalp Industrial Park, Nana Chiloda, Ahmedabad</div>
              <div>• Inquiries: <a href="tel:+918128194663" className="text-[#3DCBA8] font-bold hover:underline">+91 81281 94663</a> / <a href="tel:+919316535404" className="text-[#3DCBA8] font-bold hover:underline">+91 93165 35404</a></div>
              <div>• Email: <a href="mailto:himanshu@bellohc.com" className="text-[#3DCBA8] font-bold hover:underline">himanshu@bellohc.com</a></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#3DCBA8] font-bold block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs text-[#E0F5F0]">
              <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-[#3DCBA8] transition-colors">Home</a></li>
              <li><a href="#journey" onClick={(e) => scrollToSection(e, 'journey')} className="hover:text-[#3DCBA8] transition-colors">Our Journey</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#3DCBA8] transition-colors">Services</a></li>
              <li><a href="#craftsmanship" onClick={(e) => scrollToSection(e, 'craftsmanship')} className="hover:text-[#3DCBA8] transition-colors">Craftsmanship</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-[#3DCBA8] transition-colors">Projects</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#3DCBA8] transition-colors">About Us</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#3DCBA8] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Architectural Services */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#3DCBA8] font-bold block mb-4">
              BELLO HABITAT DISCIPLINES
            </span>
            <ul className="space-y-2.5 text-xs text-[#E0F5F0]">
              <li>Architecture Consultancy</li>
              <li>Luxury Interior Design</li>
              <li>Landscape Architecture</li>
              <li>Vastu Shastra Planning</li>
              <li>Project Management Consultancy (PMC)</li>
              <li>Commercial Interior Architecture</li>
              <li>Renovation & Structural Retrofit</li>
            </ul>
          </div>

          {/* Vaastukalaa manufacturing Division */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#3DCBA8] font-bold block mb-4">
              VASTUKALA ATELIER
            </span>
            <ul className="space-y-2.5 text-xs text-[#E0F5F0]">
              <li>Traditional Temples & Mandirs</li>
              <li>Heirloom Wooden Swings (Jhula)</li>
              <li>Carved Gujarati Jharokhas</li>
              <li>Sangeda Rotational Woodturning</li>
              <li>Bespoke Handcrafted Furniture</li>
              <li>Traditional Chariots (Rath)</li>
              <li>Custom Architectural Wood Carving</li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-[#006B5F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4F0E8]">
          <div>
            © {new Date().getFullYear()} Bello Habitat Consultancy & Vaastukalaa. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen('privacy')}
              className="hover:text-[#3DCBA8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalOpen('terms')}
              className="hover:text-[#3DCBA8] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-[10px] text-[#A8EDE0] font-mono">
          * Note: 45+ years of craft legacy refers to generational family woodworking and traditional wood carving heritage in Gujarat.
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#007E70]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#0A2E28] max-w-xl w-full p-8 border-2 border-[#02AE88] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalOpen(null)}
              className="absolute top-4 right-4 text-[#007E70] hover:text-[#02AE88] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#02AE88] font-bold block mb-1">
              LEGAL NOTICE
            </span>
            <h3 className="text-2xl font-bold mb-4 text-[#007E70]">
              {legalModalOpen === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs text-[#1C4039] space-y-3 leading-relaxed">
              {legalModalOpen === 'privacy' ? (
                <>
                  <p>
                    Bello Habitat Consultancy respects the confidentiality of all client data, architectural drawings, property coordinates, and consultation details. Information gathered through our consultation form is utilized strictly for scheduling architectural meetings and preparing spatial project proposals.
                  </p>
                  <p>
                    We never sell, rent, or disclose client information to third-party marketing entities. For privacy inquiries, please contact himanshu@bellohc.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All architectural concepts, custom woodworking designs, technical blueprints, and website content are proprietary to Bello Habitat Consultancy and the Vaastukalaa craft atelier.
                  </p>
                  <p>
                    All architectural commissions and bespoke woodworking orders are governed by written contracts, project milestone schedules, and PMC agreements executed directly between Bello Habitat Consultancy and the commissioning patron.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4F0E8]">
              <button
                onClick={() => setLegalModalOpen(null)}
                className="px-5 py-2 bg-[#007E70] hover:bg-[#02AE88] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
