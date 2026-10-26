import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowUpRight, Mail, AlertCircle, Loader2 } from 'lucide-react';

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
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [bookingRef, setBookingRef] = useState('');
  const [emailStatusNote, setEmailStatusNote] = useState<string>('Inquiry dispatched directly to himanshu@bellohc.com via Nodemailer');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    const generatedRef = `BHC-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bookingRef: generatedRef,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to dispatch consultation email.');
      }

      setBookingRef(result.bookingRef || generatedRef);
      if (result.message) {
        setEmailStatusNote(result.message);
      }
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error('Consultation mail dispatch error:', err);
      const errMsg =
        err instanceof Error
          ? err.message
          : 'Could not connect to the mailer service. Please try again.';
      setSubmissionError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
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
      className={`${isModalMode ? 'py-6' : 'py-24 sm:py-32'} bg-[#F7FCFA] text-[#0A2E28] relative border-b border-[#D4F0E8] overflow-hidden`}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#02AE88]"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#007E70] font-mono font-bold">
              APPOINTMENT & SPATIAL DIALOGUE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#007E70] tracking-tight leading-[1.1] mb-4">
            LET'S CREATE SOMETHING TIMELESS.
          </h2>
          <p className="text-sm sm:text-base text-[#2D5A50] font-normal leading-relaxed">
            Schedule a private architectural consultation at our Chandkheda design studio or arrange an artisan walkthrough at our Nana Chiloda woodcraft atelier.
          </p>
        </div>

        {/* Confirmation State */}
        {isSubmitted ? (
          <div className="bg-white border-2 border-[#02AE88] p-8 sm:p-12 max-w-3xl shadow-xl animate-fade-in">
            <div className="w-14 h-14 bg-[#02AE88] text-white flex items-center justify-center mb-6 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#007E70] font-bold">
                CONSULTATION REQUEST LOGGED
              </span>
              <span className="text-xs font-mono px-2 py-0.5 bg-[#EDF9F6] border border-[#02AE88] text-[#007E70] font-semibold">
                REF: {bookingRef}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-[#007E70] mb-4">
              Thank you, {formData.fullName}.
            </h3>

            {/* Nodemailer confirmation notification */}
            <div className="flex items-center gap-2.5 p-3.5 bg-[#EDF9F6] border border-[#02AE88] rounded text-xs text-[#007E70] font-medium mb-6">
              <Mail className="w-4 h-4 text-[#02AE88] shrink-0" />
              <span>
                All inquiry details have been sent!!.
              </span>
            </div>

            <p className="text-sm text-[#2D5A50] leading-relaxed mb-6">
              We have recorded your consultation request for <strong className="text-[#007E70] font-bold">{formData.projectType}</strong> on <strong className="text-[#007E70] font-bold">{formData.preferredDate}</strong> ({formData.preferredTime}).
            </p>

            {/* Recap Box */}
            <div className="p-4 bg-[#F7FCFA] border border-[#D4F0E8] space-y-2 text-xs font-mono text-[#1C4039] mb-6">
              <div><span className="text-[#007E70] font-semibold">PATRON:</span> {formData.fullName} ({formData.phone})</div>
              <div><span className="text-[#007E70] font-semibold">EMAIL:</span> {formData.email}</div>
              <div><span className="text-[#007E70] font-semibold">LOCATION:</span> {formData.location}</div>
              <div><span className="text-[#007E70] font-semibold">BUDGET TIER:</span> {formData.approximateBudget}</div>
              <div><span className="text-[#007E70] font-semibold">STUDIO VENUE:</span> 306, Ishaan Square, Chandkheda, Ahmedabad</div>
            </div>

            <div className="p-4 bg-[#EDF9F6] border-l-4 border-[#02AE88] text-xs text-[#007E70] mb-8 font-medium">
              * Note: Our principal architect Himanshu will review your architectural brief and contact you within 24 business hours to confirm your calendar slot.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownloadCalendar}
                className="px-6 py-3 bg-[#02AE88] hover:bg-[#007E70] text-white text-xs font-bold tracking-[0.18em] uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  if (onCloseModal) onCloseModal();
                }}
                className="px-6 py-3 bg-white border border-[#007E70] hover:bg-[#EDF9F6] text-[#007E70] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
              >
                {isModalMode ? 'Close Window' : 'Submit Another Inquiry'}
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form onSubmit={handleSubmit} noValidate className="max-w-4xl bg-white border-2 border-[#D4F0E8] p-6 sm:p-10 lg:p-12 shadow-xl">
            {/* Error Banner */}
            {submissionError && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 text-red-800 rounded text-xs flex items-start gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Mail Delivery Notice:</strong>
                  <span>{submissionError}</span>
                  <div className="mt-2 text-[11px] text-red-700">
                    You can try submitting again, or reach Himanshu directly via Phone: <a href="tel:+918128194663" className="underline font-bold">+91 81281 94663</a> or WhatsApp: <a href="https://wa.me/918128194663" target="_blank" rel="noreferrer" className="underline font-bold">+91 81281 94663</a>.
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g., Rajeshbhai Patel"
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] placeholder-[#7A9E97] outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-[#D32F2F] font-mono">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] placeholder-[#7A9E97] outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-[#D32F2F] font-mono">{errors.phone}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] placeholder-[#7A9E97] outline-none transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#D32F2F] font-mono">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] outline-none transition-colors cursor-pointer"
                >
                  {projectTypes.map(t => (
                    <option key={t} value={t} className="bg-white text-[#0A2E28]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Project Location / City *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Ahmedabad (Bopal / SG Highway / Chandkheda)"
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] placeholder-[#7A9E97] outline-none transition-colors"
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-[#D32F2F] font-mono">{errors.location}</p>
                )}
              </div>

              {/* Approximate Project Budget */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Approximate Budget
                </label>
                <select
                  value={formData.approximateBudget}
                  onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] outline-none transition-colors cursor-pointer"
                >
                  {budgetTiers.map(b => (
                    <option key={b} value={b} className="bg-white text-[#0A2E28]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Consultation Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] outline-none transition-colors cursor-pointer"
                />
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-[#D32F2F] font-mono">{errors.preferredDate}</p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white px-4 py-3 text-sm text-[#0A2E28] outline-none transition-colors cursor-pointer"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot} className="bg-white text-[#0A2E28]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Brief / Message */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#007E70] mb-2">
                  Project Vision & Scope Notes (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your plot area, family requirements, architectural style preference, or custom temple/woodcraft requirements..."
                  className="w-full bg-[#F7FCFA] border border-[#D4F0E8] focus:border-[#02AE88] focus:bg-white p-4 text-sm text-[#0A2E28] placeholder-[#7A9E97] outline-none transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Note regarding mailer delivery */}
            <div className="mt-6 pt-4 border-t border-[#D4F0E8] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#406860] gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#02AE88]" />
                <span>Connected to Nodemailer service • Directly mailed to <strong>himanshu@bellohc.com</strong></span>
              </div>
              <span className="font-mono font-medium">Chandkheda Studio • Nana Chiloda Atelier</span>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#02AE88] hover:bg-[#007E70] text-white font-bold text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>MAILING TO HIMANSHU@BELLOHC.COM...</span>
                  </>
                ) : (
                  <>
                    <span>SCHEDULE A CONSULTATION</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
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
