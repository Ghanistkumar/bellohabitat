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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#007E70]/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 animate-fade-in">
      <div className="bg-[#F7FCFA] border-2 border-[#02AE88] w-full max-w-4xl max-h-[96vh] sm:max-h-[92vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 text-[#007E70] hover:text-white bg-white hover:bg-[#02AE88] border border-[#D4F0E8] transition-colors cursor-pointer shadow-sm"
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
