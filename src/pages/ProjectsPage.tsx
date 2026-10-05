import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { Footer } from '../components/Footer';
import { AppointmentModal } from '../components/AppointmentModal';
import { MobileStickyBar } from '../components/MobileStickyBar';
import type { ProjectItem } from '../data/siteData';

export function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefill, setPrefill] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenConsultation = (projectType?: string) => {
    setPrefill(projectType ?? '');
    setIsModalOpen(true);
  };

  const handleStartProject = (projectTitle: string) => {
    setPrefill(`Commission Inquiry: ${projectTitle}`);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22201D] font-sans antialiased selection:bg-[#C09758]/25 selection:text-[#181614] pb-16 sm:pb-0">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <ProjectsGrid onSelectProject={(p) => setSelectedProject(p)} />

      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleStartProject}
      />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledProjectType={prefill}
      />

      <MobileStickyBar onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
