export interface ConsultationMailData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  approximateBudget?: string;
  preferredDate: string;
  preferredTime?: string;
  message?: string;
  bookingRef: string;
}

export function createMailTransporter(): any;
export function generateAdminEmailHtml(data: ConsultationMailData): string;
export function generateClientConfirmationHtml(data: ConsultationMailData): string;

export function sendConsultationMail(data: ConsultationMailData): Promise<{
  success: boolean;
  delivered: boolean;
  mode?: string;
  bookingRef: string;
  messageId?: string;
  message?: string;
}>;

