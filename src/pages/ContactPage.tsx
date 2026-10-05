import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactSection } from '../components/ContactSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { Footer } from '../components/Footer';
import { AppointmentModal } from '../components/AppointmentModal';
import { MobileStickyBar } from '../components/MobileStickyBar';

export function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefill, setPrefill] = useState('');

  const handleOpenConsultation = (projectType?: string) => {
    setPrefill(projectType ?? '');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22201D] font-sans antialiased selection:bg-[#C09758]/25 selection:text-[#181614] pb-16 sm:pb-0">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Appointment / consultation booking section */}
      <AppointmentSection prefilledProjectType={prefill} />

      {/* Contact details, map, social links */}
      <ContactSection onOpenConsultation={() => handleOpenConsultation()} />

      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledProjectType={prefill}
      />

      <MobileStickyBar onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
