import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { CraftsmanshipSection } from '../components/CraftsmanshipSection';
import { Footer } from '../components/Footer';
import { AppointmentModal } from '../components/AppointmentModal';
import { MobileStickyBar } from '../components/MobileStickyBar';

export function CraftsmanshipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefill, setPrefill] = useState('');

  const handleOpenConsultation = (projectType?: string) => {
    setPrefill(projectType ?? '');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FCFA] text-[#0A2E28] font-sans antialiased selection:bg-[#02AE88]/25 selection:text-[#007E70] pb-16 sm:pb-0">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <CraftsmanshipSection />

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
