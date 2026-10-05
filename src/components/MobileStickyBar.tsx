import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
      className="fixed bottom-0 inset-x-0 z-40 bg-[#181614]/95 backdrop-blur-md border-t border-[#312B23] p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl"
    >
      {/* Direct Phone Call */}
      <a
        href="tel:+918128194663"
        className="flex-1 py-2.5 px-2 bg-[#221F1B] border border-[#3E362C] text-[#FAF8F5] text-[10.5px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#C09758] active:text-[#181614] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#C09758]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Message */}
      <a
        href="https://wa.me/918128194663?text=Hello%20Bello%20Habitat%2C%20I%20would%20like%20to%20inquire%20about%20architectural%20and%20woodcraft%20services."
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 px-2 bg-[#221F1B] border border-[#3E362C] text-[#FAF8F5] text-[10.5px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#25D366] active:text-white transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
        <span>WhatsApp</span>
      </a>

      {/* Primary Consultation Action */}
      <button
        onClick={onOpenConsultation}
        className="flex-[1.8] py-2.5 px-2 bg-[#C09758] text-[#181614] text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1 shadow-md cursor-pointer"
      >
        <span>Consultation</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
