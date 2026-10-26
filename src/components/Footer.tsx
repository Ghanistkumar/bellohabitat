import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!isHomePage) {
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#007E70] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-15 pointer-events-none"></div>

      {/* Compact CTA Strip */}
      <div className="border-b border-[#006B5F] py-8 sm:py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Ready to create something timeless?
            </h2>
            <p className="text-xs text-[#B8E6DB] mt-1">
              Architecture • Interiors • Vastu • Handcrafted Woodwork
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#02AE88] hover:bg-white text-white hover:text-[#007E70] font-bold text-xs tracking-[0.18em] uppercase transition-all shadow-md cursor-pointer shrink-0"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Content — Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-[#02AE88] bg-[#00665B] flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Bello Habitat Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-wider text-white block leading-tight">BELLO HABITAT</span>
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#3DCBA8] font-bold">CONSULTANCY • VASTUKALA</span>
              </div>
            </div>
            <p className="text-[11px] text-[#D4F0E8] leading-relaxed">
              Architecture, interiors & handcrafted woodwork consultancy in Ahmedabad with 45+ years of craft heritage*.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3DCBA8] font-bold block mb-3">QUICK LINKS</span>
            <ul className="space-y-1.5 text-[11px] text-[#E0F5F0]">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-[#3DCBA8] transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => scrollToSection(e, 'journey')} className="hover:text-[#3DCBA8] transition-colors cursor-pointer">
                  Our Journey
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#3DCBA8] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="hover:text-[#3DCBA8] transition-colors">Craftsmanship</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#3DCBA8] transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3DCBA8] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3DCBA8] font-bold block mb-3">CONTACT</span>
            <div className="space-y-1.5 text-[11px] text-[#D4F0E8]">
              <div>
                <a href="tel:+918128194663" className="text-[#3DCBA8] font-bold hover:underline">+91 81281 94663</a>
                {' / '}
                <a href="tel:+919316535404" className="text-[#3DCBA8] font-bold hover:underline">+91 93165 35404</a>
              </div>
              <div>
                <a href="mailto:himanshu@bellohc.com" className="text-[#3DCBA8] font-bold hover:underline">himanshu@bellohc.com</a>
              </div>
              <div className="text-[#B8E6DB] pt-1">Mon – Sat: 10 AM – 7 PM</div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3DCBA8] font-bold block mb-3">LOCATIONS</span>
            <div className="space-y-2 text-[11px] text-[#D4F0E8]">
              <div>
                <span className="font-semibold text-white text-[10px]">Studio:</span>{' '}
                306, Ishaan Square, Chandkheda, Ahmedabad
              </div>
              <div>
                <span className="font-semibold text-white text-[10px]">Atelier:</span>{' '}
                89, Sankalp Industrial Park, Nana Chiloda, Ahmedabad
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 pt-5 border-t border-[#006B5F] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#B8E6DB]">
          <div>
            © {new Date().getFullYear()} Bello Habitat Consultancy & Vastukala. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
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

        <div className="mt-2 text-center text-[9px] text-[#7EBFB4] font-mono">
          * 45+ years refers to generational family woodworking heritage in Gujarat.
        </div>
      </div>

      {/* Legal Modal */}
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
                    All architectural concepts, custom woodworking designs, technical blueprints, and website content are proprietary to Bello Habitat Consultancy and the Vastukala craft atelier.
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
