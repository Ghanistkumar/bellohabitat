import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Compass, Building2, Hammer, ExternalLink } from 'lucide-react';


interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [activeVenue, setActiveVenue] = useState<'office' | 'workshop'>('office');

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] relative border-b border-[#EBE3D5]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#8E5832]"></span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#8E5832] font-mono font-semibold">
                LOCATIONS & DIALOGUE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181614] tracking-tight">
              START A CONVERSATION.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#181614] hover:bg-[#8E5832] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 text-[#D8B57D]" />
          </button>
        </div>

        {/* 2 Locations & Contact Details Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Studio Office Details */}
          <div className="lg:col-span-6 bg-white border border-[#DDD5C7] p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-[#EFE8DE] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#181614] text-[#FAF8F5] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#C09758]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E5832]">
                      DESIGN & PMC OFFICE
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#181614]">
                      Bello Habitat Consultancy
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#8C8274]">CHANDKHEDA</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#4E473F] font-sans-ui">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8E5832] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181614] font-medium mb-0.5">Office Address:</strong>
                    <p className="leading-relaxed">
                      306, Ishaan Square, Near Tapovan Circle,<br />
                      Tapovan Circle to Visat Circle Road,<br />
                      Chandkheda, Ahmedabad – 382424, Gujarat, India.
                    </p>
                    <span className="text-[11px] text-[#8C8274] font-mono mt-1 block">
                      Landmark: Between Tapovan Circle & Visat Circle
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#F2ECE2]">
                  <Phone className="w-4 h-4 text-[#8E5832] shrink-0" />
                  <div>
                    <span className="text-[#181614] font-medium">Direct Inquiries: </span>
                    <a href="tel:+918128194663" className="hover:text-[#8E5832] transition-colors font-mono">
                      +91 81281 94663
                    </a>
                    <span className="mx-2 text-[#DDD5C7]">|</span>
                    <a href="tel:+919316535404" className="hover:text-[#8E5832] transition-colors font-mono">
                      +91 93165 35404
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-4 h-4 text-[#8E5832] shrink-0" />
                  <div>
                    <span className="text-[#181614] font-medium">Email: </span>
                    <a href="mailto:himanshu@bellohc.com" className="hover:text-[#8E5832] transition-colors font-mono">
                      himanshu@bellohc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Globe className="w-4 h-4 text-[#8E5832] shrink-0" />
                  <div>
                    <span className="text-[#181614] font-medium">Digital Atelier: </span>
                    <a href="https://bellohc.com" className="hover:text-[#8E5832] transition-colors font-mono">
                      bellohc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EFE8DE] flex justify-between items-center text-xs">
              <span className="text-[#7A7164]">Mon – Sat: 10:00 AM – 7:00 PM</span>
              <a
                href="https://maps.google.com/?q=Ishaan+Square+Chandkheda+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="text-[#8E5832] font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Workshop / Atelier Details */}
          <div className="lg:col-span-6 bg-[#201D1A] text-[#FAF8F5] border border-[#3A3329] p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-[#363026] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C09758] text-[#181614] flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-[#181614]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFC493]">
                      WOODWORKING ATELIER
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                      Vaastukalaa Craft Atelier
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#D8B57D]">NANA CHILODA</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#D1C9BC] font-sans-ui">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C09758] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Workshop Address:</strong>
                    <p className="leading-relaxed">
                      89, Sankalp Industrial Park,<br />
                      Opposite Ekta Industrial Park,<br />
                      Nana Chiloda, Ahmedabad, Gujarat, India.
                    </p>
                    <span className="text-[11px] text-[#A69C8E] font-mono mt-1 block">
                      Location: Nana Chiloda Industrial Woodcraft Zone
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#312B22]">
                  <Phone className="w-4 h-4 text-[#C09758] shrink-0" />
                  <div>
                    <span className="text-white font-medium">Atelier Desk: </span>
                    <a href="tel:+919316535404" className="hover:text-[#DFC493] transition-colors font-mono">
                      +91 93165 35404
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Compass className="w-4 h-4 text-[#C09758] shrink-0" />
                  <div>
                    <span className="text-white font-medium">Atelier Lineage: </span>
                    <span className="text-[#C4BCB0] font-serif italic">
                      Traditional Temples, Swings (Jhula), Jharokhas & Carved Wooden Elements
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#181614] border border-[#3C352A] text-xs text-[#DFC493] mt-2">
                  * Note: Workshop walkthroughs for timber selection and hand-carving inspection are welcome by prior appointment.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#363026] flex justify-between items-center text-xs text-[#9E9485]">
              <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
              <a
                href="https://maps.google.com/?q=Sankalp+Industrial+Park+Nana+Chiloda+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="text-[#DFC493] font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Map Visual Integration Placeholder */}
        <div className="border border-[#DDD5C7] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#EFE8DE] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#8E5832]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#181614] font-semibold">
                AHMEDABAD SPATIAL LOCATIONS MAP
              </span>
            </div>

            <div className="inline-flex p-0.5 bg-[#EAE2D5] border border-[#D5C9B8] text-xs font-mono">
              <button
                onClick={() => setActiveVenue('office')}
                className={`px-3 py-1 cursor-pointer transition-all ${
                  activeVenue === 'office' ? 'bg-[#181614] text-white font-bold' : 'text-[#62594D]'
                }`}
              >
                Chandkheda Office
              </button>
              <button
                onClick={() => setActiveVenue('workshop')}
                className={`px-3 py-1 cursor-pointer transition-all ${
                  activeVenue === 'workshop' ? 'bg-[#181614] text-white font-bold' : 'text-[#62594D]'
                }`}
              >
                Nana Chiloda Workshop
              </button>
            </div>
          </div>

          {/* Map Styled Container */}
          <div className="aspect-[21/9] sm:aspect-[24/8] bg-[#F2ECE0] relative flex items-center justify-center overflow-hidden border border-[#E3D9CC]">
            <div className="absolute inset-0 opacity-40 bg-light-grid"></div>

            <div className="text-center z-10 p-6 max-w-lg bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#D5C9B8]">
              <MapPin className="w-6 h-6 text-[#8E5832] mx-auto mb-2" />
              <h4 className="font-serif text-xl text-[#181614] mb-1">
                {activeVenue === 'office' ? '306, Ishaan Square, Chandkheda' : '89, Sankalp Industrial Park, Nana Chiloda'}
              </h4>
              <p className="text-xs text-[#635B4E] font-sans-ui mb-3">
                {activeVenue === 'office'
                  ? 'Tapovan Circle to Visat Circle Road, Chandkheda, Ahmedabad 382424'
                  : 'Opposite Ekta Industrial Park, Nana Chiloda, Ahmedabad'}
              </p>
              <a
                href={
                  activeVenue === 'office'
                    ? 'https://maps.google.com/?q=Ishaan+Square+Chandkheda+Ahmedabad'
                    : 'https://maps.google.com/?q=Sankalp+Industrial+Park+Nana+Chiloda+Ahmedabad'
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#181614] text-white text-[11px] font-mono uppercase tracking-wider hover:bg-[#8E5832] transition-colors"
              >
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
