import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { BrandDuality } from './components/BrandDuality';
// import { ServicesSection } from './components/ServicesSection';
// import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { DesignPhilosophy } from './components/DesignPhilosophy';
// import { ProjectsGrid } from './components/ProjectsGrid';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
// import { AppointmentSection } from './components/AppointmentSection';
// import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';
import type { ProjectItem } from './data/siteData';


export function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [prefilledServiceOrProject, setPrefilledServiceOrProject] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenConsultation = (prefillType?: string) => {
    if (prefillType) {
      setPrefilledServiceOrProject(prefillType);
      setIsConsultationModalOpen(true);
    } else {
      // Smooth scroll to consultation section if on page
      const consultationEl = document.getElementById('consultation');
      if (consultationEl) {
        const offset = 80;
        const pos = consultationEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      } else {
        setIsConsultationModalOpen(true);
      }
    }
  };

  const handleExploreJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  // const handleSelectServiceForConsultation = (serviceName: string) => {
  //   setPrefilledServiceOrProject(serviceName);
  //   setIsConsultationModalOpen(true);
  // };

  const handleStartProjectWithUs = (projectTitle: string) => {
    setPrefilledServiceOrProject(`Commission Inquiry: ${projectTitle}`);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22201D] font-sans antialiased selection:bg-[#C09758]/25 selection:text-[#181614] pb-16 sm:pb-0">
      {/* 1. STICKY PREMIUM NAVIGATION */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. CINEMATIC HERO */}
      <Hero
        onOpenConsultation={() => handleOpenConsultation()}
        onExploreJourney={handleExploreJourney}
      />

      {/* 3. INTRODUCTION SECTION */}
      <IntroSection
        onOpenConsultation={() => handleOpenConsultation()}
        onExploreServices={handleExploreServices}
      />

      {/* 4. OUR JOURNEY / LEGACY FEATURE */}
      <JourneyTimeline />

      {/* 5. BELLO HABITAT + Vaastukalaa DUALITY */}
      <BrandDuality />

      {/* 6. SERVICES (WHAT WE CREATE) */}
      {/* <ServicesSection
        onSelectServiceForConsultation={handleSelectServiceForConsultation}
      /> */}

      {/* 7. CRAFTSMANSHIP (THE ART OF MAKING) */}
      {/* <CraftsmanshipSection /> */}

      {/* 8. DESIGN PHILOSOPHY */}
      <DesignPhilosophy />

      {/* 9. FEATURED PROJECTS / PORTFOLIO */}
      {/* <ProjectsGrid
        onSelectProject={(project) => setSelectedProject(project)}
      /> */}

      {/* 10. ARCHITECTURAL PROCESS */}
      <ProcessSection />

      {/* 11. WHY BELLO HABITAT */}
      <WhyUsSection />

      {/* 12. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 13. BOOK A CONSULTATION APPOINTMENT SECTION */}
      {/* <AppointmentSection
        prefilledProjectType={prefilledServiceOrProject}
      /> */}

      {/* 14. CONTACT SECTION */}
      {/* <ContactSection
        onOpenConsultation={() => handleOpenConsultation()}
      /> */}

      {/* 15. FOOTER */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* PROJECT DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleStartProjectWithUs}
      />

      {/* FLOATING CONSULTATION MODAL */}
      <AppointmentModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        prefilledProjectType={prefilledServiceOrProject}
      />

      {/* MOBILE STICKY CONVERSION BAR */}
      <MobileStickyBar
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}

export default App;
