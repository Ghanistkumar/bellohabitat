import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';


interface AppointmentSectionProps {
  prefilledProjectType?: string;
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  prefilledProjectType = '',
  isModalMode = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: prefilledProjectType || 'Architecture',
    location: '',
    approximateBudget: '₹50L - ₹1 Cr',
    preferredDate: '',
    preferredTime: 'Morning (10:30 AM - 1:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const projectTypes = [
    'Architecture',
    'Interior Design',
    'Renovation',
    'Commercial Interior',
    'Traditional Woodwork',
    'Temple / Home Temple',
    'Custom Furniture',
    'Vastu Consultancy',
    'Other'
  ];

  const budgetTiers = [
    'Under ₹25 Lakhs',
    '₹25 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1 Crore',
    '₹1 Crore – ₹3 Crores',
    '₹3 Crores+'
  ];

  const timeSlots = [
    'Morning (10:30 AM - 1:00 PM)',
    'Afternoon (2:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 7:30 PM)'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+ -]{8,16}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Project city/location is required (e.g., Ahmedabad).';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred consultation date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      const ref = `BHC-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bello Habitat Consultancy//Consultation Booking//EN
BEGIN:VEVENT
UID:${bookingRef}@bellohc.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${formData.preferredDate.replace(/-/g, '')}T050000Z
DTEND:${formData.preferredDate.replace(/-/g, '')}T060000Z
SUMMARY:Consultation: Bello Habitat & Vastukala (${formData.projectType})
DESCRIPTION:Consultation with Bello Habitat Consultancy for ${formData.fullName} (${formData.projectType}). Reference: ${bookingRef}
LOCATION:306, Ishaan Square, Tapovan Circle, Chandkheda, Ahmedabad
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `BelloHabitat-Consultation-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="consultation"
      className={`${isModalMode ? 'py-6' : 'py-24 sm:py-32'} bg-[#181614] text-[#FAF8F5] relative border-b border-[#2C2720] overflow-hidden`}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#C09758]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#DFC493] font-mono">
              APPOINTMENT & SPATIAL DIALOGUE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF8F5] tracking-tight leading-[1.1] mb-4">
            LET'S CREATE SOMETHING TIMELESS.
          </h2>
          <p className="text-sm sm:text-base text-[#B3AAA0] font-light leading-relaxed font-sans-ui">
            Schedule a private architectural consultation at our Chandkheda design studio or arrange an artisan walkthrough at our Nana Chiloda woodcraft atelier.
          </p>
        </div>

        {/* Confirmation State */}
        {isSubmitted ? (
          <div className="bg-[#211E1A] border border-[#C09758] p-8 sm:p-12 max-w-3xl shadow-2xl animate-fade-in">
            <div className="w-14 h-14 bg-[#C09758] text-[#181614] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#DFC493]">
                CONSULTATION REQUEST LOGGED
              </span>
              <span className="text-xs font-mono px-2 py-0.5 bg-[#181614] border border-[#C09758] text-[#DFC493]">
                REF: {bookingRef}
              </span>
            </div>

            <h3 className="font-serif text-3xl text-[#FAF8F5] mb-4">
              Thank you, {formData.fullName}.
            </h3>

            <p className="text-sm text-[#CDC3B3] leading-relaxed mb-6 font-sans-ui">
              We have recorded your consultation request for <strong className="text-white">{formData.projectType}</strong> on <strong className="text-white">{formData.preferredDate}</strong> ({formData.preferredTime}).
            </p>

            {/* Recap Box */}
            <div className="p-4 bg-[#181614] border border-[#3A3328] space-y-2 text-xs font-mono text-[#B8AF9F] mb-6">
              <div><span className="text-[#8E8373]">PATRON:</span> {formData.fullName} ({formData.phone})</div>
              <div><span className="text-[#8E8373]">LOCATION:</span> {formData.location}</div>
              <div><span className="text-[#8E8373]">BUDGET TIER:</span> {formData.approximateBudget}</div>
              <div><span className="text-[#8E8373]">STUDIO VENUE:</span> 306, Ishaan Square, Chandkheda, Ahmedabad</div>
            </div>

            <div className="p-4 bg-[#2A241D] border-l-2 border-[#C09758] text-xs text-[#DFC493] mb-8 italic">
              * Note: This request is formatted for production CRM / email dispatch. Our principal architect Himanshu will review your brief and call within 24 business hours to confirm your calendar slot.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownloadCalendar}
                className="px-6 py-3 bg-[#C09758] hover:bg-[#D4AF37] text-[#181614] text-xs font-bold tracking-[0.18em] uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#181614]" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  if (onCloseModal) onCloseModal();
                }}
                className="px-6 py-3 bg-transparent border border-[#52483B] hover:border-white text-[#FAF8F5] text-xs font-medium tracking-wider uppercase transition-all cursor-pointer"
              >
                {isModalMode ? 'Close Window' : 'Submit Another Inquiry'}
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form onSubmit={handleSubmit} noValidate className="max-w-4xl bg-[#201D1A] border border-[#383126] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g., Rajeshbhai Patel"
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#665D4F] outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-[#E57373] font-mono">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#665D4F] outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-[#E57373] font-mono">{errors.phone}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#665D4F] outline-none transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#E57373] font-mono">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] outline-none transition-colors"
                >
                  {projectTypes.map(t => (
                    <option key={t} value={t} className="bg-[#181614] text-[#FAF8F5]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Project Location / City *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Ahmedabad (Bopal / SG Highway / Chandkheda)"
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#665D4F] outline-none transition-colors"
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-[#E57373] font-mono">{errors.location}</p>
                )}
              </div>

              {/* Approximate Project Budget */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Approximate Budget
                </label>
                <select
                  value={formData.approximateBudget}
                  onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] outline-none transition-colors"
                >
                  {budgetTiers.map(b => (
                    <option key={b} value={b} className="bg-[#181614] text-[#FAF8F5]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Consultation Date */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] outline-none transition-colors"
                />
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-[#E57373] font-mono">{errors.preferredDate}</p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] px-4 py-3 text-sm text-[#FAF8F5] outline-none transition-colors"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot} className="bg-[#181614] text-[#FAF8F5]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Brief / Message */}
              <div className="md:col-span-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C09758] mb-2">
                  Project Vision & Scope Notes (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your plot area, family requirements, architectural style preference, or custom temple/woodcraft requirements..."
                  className="w-full bg-[#181614] border border-[#3E362C] focus:border-[#C09758] p-4 text-sm text-[#FAF8F5] placeholder-[#665D4F] outline-none transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Note regarding backend readiness */}
            <div className="mt-6 pt-4 border-t border-[#312B23] flex items-center justify-between text-xs text-[#8A8072]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C09758]" />
                <span>Frontend validated & ready for CRM / Email / Google Calendar sync.</span>
              </div>
              <span className="hidden sm:inline font-mono">Chandkheda Studio • Nana Chiloda Atelier</span>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#C09758] hover:bg-[#D4AF37] text-[#181614] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <span>SCHEDULING...</span>
                ) : (
                  <>
                    <span>SCHEDULE A CONSULTATION</span>
                    <ArrowUpRight className="w-4 h-4 text-[#181614]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
