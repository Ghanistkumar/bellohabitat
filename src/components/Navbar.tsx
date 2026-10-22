import React, { useState } from 'react';
import { Menu, X, Phone, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/siteData';
interface NavbarProps {
  onOpenConsultation: (projectType?: string) => void;
}

// Links that should open as dedicated route pages (in a new tab from homepage)
const PAGE_ROUTES: Record<string, string> = {
  SERVICES: '/services',
  CRAFTSMANSHIP: '/craftsmanship',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  APPOINTMENT: '/appointent'
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 40) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'OUR JOURNEY', href: '#journey' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CRAFTSMANSHIP', href: '#craftsmanship' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const getLinkHref = (label: string, href: string): string => {
    if (PAGE_ROUTES[label]) return PAGE_ROUTES[label];
    return href;
  };

  const getLinkTarget = (label: string): string | undefined => {
    // Open in new tab only from the homepage
    if (PAGE_ROUTES[label] && isHomePage) return '_blank';
    return undefined;
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    setMobileMenuOpen(false);

    // If this is a page-route link, let the browser handle it (new tab or navigation)
    if (PAGE_ROUTES[label]) return;

    // Otherwise it's a hash-scroll link — only works on homepage
    e.preventDefault();
    if (!isHomePage) {
      // Navigate home first, then scroll
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top announcement strip in Theme Deep Teal */}
      <div className="bg-[#007E70] text-white text-[11px] uppercase tracking-[0.22em] py-2 px-4 border-b border-[#006B5F] transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#02AE88] animate-pulse"></span>
            <span>AHMEDABAD, GUJARAT</span>
            <span className="text-[#3DCBA8]">•</span>
            <span className="text-[#E0F5F0] font-normal">ARCHITECTURE & VASTUKALA manufacturing ATELIER</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#E0F5F0] text-[11px] tracking-widest">
            <a href="tel:+918128194663" className="hover:text-[#02AE88] transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#02AE88]" />
              <span>+91 81281 94663</span>
            </a>
            <span className="text-[#3DCBA8]">|</span>
            <span className="text-[#E0F5F0]">{COMPANY_INFO.legacyYears} Years Woodworking Heritage*</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar — Crisp Light Theme */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#FFFFFF]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,126,112,0.06)] border-b border-[#D4F0E8] py-3.5`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Craft Division Mark */}
            <a 
              href={isHomePage ? '#hero' : '/'}
              onClick={(e) => { if (isHomePage) handleLinkClick(e, 'HOME', '#hero'); }}
              className="flex items-center gap-3.5 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none border-2 border-[#02AE88] bg-[#007E70] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <span className="font-bold text-xl sm:text-2xl tracking-wider text-white">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-[0.06em] text-[#007E70] leading-tight group-hover:text-[#02AE88] transition-colors">
                  BELLO HABITAT
                </span>
                <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-[#4D756E] font-medium">
                  <span>CONSULTANCY</span>
                  <span className="text-[#02AE88] font-bold">•</span>
                  <span className="text-[#007E70] font-semibold">VASTUKALA</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={getLinkHref(link.label, link.href)}
                  target={getLinkTarget(link.label)}
                  rel={getLinkTarget(link.label) ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleLinkClick(e, link.label, link.href)}
                  className="text-[12.5px] font-semibold tracking-[0.16em] text-[#1C4039] hover:text-[#007E70] relative py-1 transition-colors group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#02AE88] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Action & Primary CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#02AE88] hover:bg-[#007E70] border border-[#02AE88] hover:border-[#007E70] transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenConsultation()}
                className="sm:hidden text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-2 bg-[#007E70] text-white border border-[#02AE88]"
              >
                CONSULT
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#007E70] hover:text-[#02AE88] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen / Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%)] h-[calc(100vh-100px)] bg-[#F7FCFA] border-b border-[#D4F0E8] z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between shadow-2xl animate-fade-in">
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#007E70] font-bold border-b border-[#D4F0E8] pb-2">
                NAVIGATION • BELLO HABITAT & VASTUKALA
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={getLinkHref(link.label, link.href)}
                    target={getLinkTarget(link.label)}
                    rel={getLinkTarget(link.label) ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleLinkClick(e, link.label, link.href)}
                    className="text-lg font-semibold text-[#0A2E28] hover:text-[#007E70] flex items-center justify-between border-b border-[#D4F0E8] pb-3"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#02AE88] font-bold">0{idx + 1}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 bg-[#02AE88] hover:bg-[#007E70] text-white text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 border border-[#02AE88] transition-colors"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D4F0E8] space-y-3 text-xs text-[#1C4039]">
              <div className="flex items-center gap-2 text-[#007E70] font-bold tracking-wider">
                <Compass className="w-4 h-4 text-[#02AE88]" />
                <span>AHMEDABAD STUDIOS</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#4D756E]">
                Chandkheda Design Studio & Nana Chiloda manufacturing Atelier.
              </p>
              <div className="flex flex-col gap-1 text-[11px]">
                <a href="tel:+918128194663" className="hover:text-[#007E70] font-medium">+91 81281 94663</a>
                <a href="mailto:himanshu@bellohc.com" className="hover:text-[#007E70] font-medium">himanshu@bellohc.com</a>
              </div>
              <div className="flex items-center gap-2 pt-2 text-[10px] text-[#4D756E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#02AE88]" />
                <span>{COMPANY_INFO.legacyYears} Years Woodworking Heritage*</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
