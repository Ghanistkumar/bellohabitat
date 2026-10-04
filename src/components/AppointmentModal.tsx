import React from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProjectType?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledProjectType
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#181614] border border-[#C09758]/50 w-full max-w-4xl max-h-[92vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#FAF8F5] hover:text-[#C09758] bg-[#221F1B] border border-[#3E362C] transition-colors cursor-pointer"
          aria-label="Close Appointment Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <AppointmentSection
            prefilledProjectType={prefilledProjectType}
            isModalMode={true}
            onCloseModal={onClose}
          />
        </div>
      </div>
    </div>
  );
};
