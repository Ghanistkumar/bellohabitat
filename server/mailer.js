import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and returns a Nodemailer transporter.
 * Prioritizes custom SMTP configuration from environment variables.
 */
export function createMailTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    });
  }

  // If specific service is defined (e.g., 'gmail')
  if (process.env.SMTP_SERVICE && user && pass) {
    return nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user,
        pass,
      },
    });
  }

  return null;
}

/**
 * Generates an executive, branded HTML email for Himanshu
 */
export function generateAdminEmailHtml(data) {
  const cleanPhone = (data.phone || '').replace(/[^0-9+]/g, '');
  const waPhone = cleanPhone.replace(/^\+/, '');
  const submissionTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Inquiry - ${data.bookingRef}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F7FCFA;
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      color: #0A2E28;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 640px;
      margin: 20px auto;
      background-color: #FFFFFF;
      border: 1px solid #D4F0E8;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 126, 112, 0.08);
    }
    .header {
      background: linear-gradient(135deg, #007E70 0%, #005A50 100%);
      color: #FFFFFF;
      padding: 32px 28px;
      border-bottom: 4px solid #02AE88;
    }
    .badge {
      display: inline-block;
      background-color: #02AE88;
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 12px;
    }
    .header h1 {
      margin: 0 0 6px 0;
      font-size: 22px;
      letter-spacing: -0.02em;
      font-weight: 700;
      color: #FFFFFF;
    }
    .header p {
      margin: 0;
      font-size: 13px;
      color: #B8E6DB;
      font-weight: 400;
    }
    .content {
      padding: 28px;
    }
    .ref-card {
      background-color: #EDF9F6;
      border: 1px solid #B8E6DB;
      border-left: 4px solid #02AE88;
      padding: 14px 18px;
      margin-bottom: 24px;
      border-radius: 4px;
    }
    .ref-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #007E70;
      font-weight: 700;
    }
    .ref-val {
      font-size: 17px;
      font-weight: 700;
      color: #0A2E28;
      margin-top: 2px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .data-table tr {
      border-bottom: 1px solid #EDF9F6;
    }
    .data-table td {
      padding: 12px 6px;
      font-size: 13.5px;
      vertical-align: top;
    }
    .label-col {
      width: 36%;
      font-weight: 600;
      color: #007E70;
      text-transform: uppercase;
      font-size: 11.5px;
      letter-spacing: 0.05em;
    }
    .val-col {
      color: #0A2E28;
      font-weight: 500;
    }
    .val-highlight {
      color: #007E70;
      font-weight: 700;
    }
    .message-box {
      background-color: #F7FCFA;
      border: 1px solid #D4F0E8;
      border-radius: 4px;
      padding: 16px;
      margin-bottom: 28px;
    }
    .message-title {
      font-size: 11.5px;
      text-transform: uppercase;
      font-weight: 700;
      color: #007E70;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .message-body {
      font-size: 13.5px;
      line-height: 1.6;
      color: #1C4039;
      white-space: pre-wrap;
      margin: 0;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
      padding-top: 10px;
      border-top: 1px solid #D4F0E8;
    }
    .btn {
      display: inline-block;
      padding: 11px 18px;
      font-size: 12px;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 3px;
      text-align: center;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    .btn-call {
      background-color: #007E70;
      color: #FFFFFF !important;
    }
    .btn-wa {
      background-color: #25D366;
      color: #FFFFFF !important;
    }
    .btn-email {
      background-color: #02AE88;
      color: #FFFFFF !important;
    }
    .footer {
      background-color: #F7FCFA;
      border-top: 1px solid #D4F0E8;
      padding: 20px 28px;
      font-size: 11.5px;
      color: #4D756E;
      line-height: 1.6;
    }
    .footer-brand {
      font-weight: 700;
      color: #007E70;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">New Consultation Inquiry</div>
      <h1>Bello Habitat & Vastukala</h1>
      <p>Direct website inquiry logged from client consultation booking portal</p>
    </div>

    <div class="content">
      <div class="ref-card">
        <div class="ref-title">Booking Reference Code</div>
        <div class="ref-val">${data.bookingRef}</div>
      </div>

      <table class="data-table">
        <tr>
          <td class="label-col">Patron Name</td>
          <td class="val-col"><strong style="font-size: 15px;">${data.fullName}</strong></td>
        </tr>
        <tr>
          <td class="label-col">Phone Number</td>
          <td class="val-col">
            <a href="tel:${cleanPhone}" style="color: #007E70; font-weight: 700; text-decoration: none;">${data.phone}</a>
          </td>
        </tr>
        <tr>
          <td class="label-col">Email Address</td>
          <td class="val-col">
            <a href="mailto:${data.email}" style="color: #007E70; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td class="label-col">Project Category</td>
          <td class="val-col val-highlight">${data.projectType}</td>
        </tr>
        <tr>
          <td class="label-col">Location / City</td>
          <td class="val-col">${data.location}</td>
        </tr>
        <tr>
          <td class="label-col">Approx. Budget</td>
          <td class="val-col">${data.approximateBudget || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label-col">Preferred Date</td>
          <td class="val-col"><strong style="color: #007E70;">${data.preferredDate}</strong></td>
        </tr>
        <tr>
          <td class="label-col">Preferred Slot</td>
          <td class="val-col">${data.preferredTime}</td>
        </tr>
      </table>

      ${
        data.message
          ? `
      <div class="message-box">
        <div class="message-title">Project Scope & Vision Notes</div>
        <p class="message-body">${data.message}</p>
      </div>
      `
          : ''
      }

      <div style="margin-bottom: 12px; font-size: 12px; font-weight: 700; color: #007E70; text-transform: uppercase; letter-spacing: 0.08em;">
        Quick Patron Actions:
      </div>
      <div class="actions">
        <a href="tel:${cleanPhone}" class="btn btn-call">📞 Call ${data.fullName.split(' ')[0]}</a>
        ${
          waPhone
            ? `<a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(
                data.fullName
              )}%2C%20thank%20you%20for%20contacting%20Bello%20Habitat%20Consultancy%20regarding%20your%20${encodeURIComponent(
                data.projectType
              )}%20inquiry%20(Ref%3A%20${encodeURIComponent(
                data.bookingRef
              )})." class="btn btn-wa">💬 WhatsApp Chat</a>`
            : ''
        }
        <a href="mailto:${data.email}?subject=Consultation%20Follow-up%3A%20${encodeURIComponent(
    data.projectType
  )}%20%5B${encodeURIComponent(data.bookingRef)}%5D" class="btn btn-email">✉️ Reply Email</a>
      </div>
    </div>

    <div class="footer">
      <div class="footer-brand">Bello Habitat Consultancy & Vastukala Atelier</div>
      <div>Studio: 306, Ishaan Square, Tapovan Circle to Visat Circle Road, Chandkheda, Ahmedabad – 382424</div>
      <div>Atelier: 89, Sankalp Industrial Park, Opp. Ekta Industrial Park, Nana Chiloda, Ahmedabad</div>
      <div style="margin-top: 8px; color: #7A9E97; font-size: 11px;">
        Received on ${submissionTime} • Automated Notification via Nodemailer Service
      </div>
    </div>
  </div>
</body>
</html>
`;
}

/**
 * Generates an optional client receipt / confirmation email
 */
export function generateClientConfirmationHtml(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Inquiry Confirmed - Bello Habitat</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F7FCFA; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; color: #0A2E28;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border: 1px solid #D4F0E8; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 126, 112, 0.08);">
    <div style="background: linear-gradient(135deg, #007E70 0%, #005A50 100%); color: #FFFFFF; padding: 28px 24px; border-bottom: 4px solid #02AE88;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #3DCBA8; font-weight: 700; margin-bottom: 6px;">Consultation Request Received</div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Bello Habitat Consultancy</h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #B8E6DB;">Where generations of Indian craftsmanship meet contemporary architecture</p>
    </div>

    <div style="padding: 28px 24px;">
      <p style="font-size: 15px; margin-top: 0; color: #0A2E28;">Dear <strong>${data.fullName}</strong>,</p>
      
      <p style="font-size: 13.5px; line-height: 1.6; color: #2D5A50;">
        Thank you for reaching out to Bello Habitat Consultancy and our traditional craftsmanship division, Vastukala. We have received your consultation inquiry for <strong>${data.projectType}</strong>.
      </p>

      <div style="background-color: #EDF9F6; border: 1px solid #B8E6DB; border-radius: 4px; padding: 16px; margin: 20px 0;">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #007E70;">Inquiry Reference</div>
        <div style="font-size: 18px; font-weight: 700; color: #0A2E28; margin: 4px 0 10px 0;">${data.bookingRef}</div>
        <div style="font-size: 12.5px; color: #1C4039; line-height: 1.5;">
          • <strong>Category:</strong> ${data.projectType}<br/>
          • <strong>Location:</strong> ${data.location}<br/>
          • <strong>Requested Date:</strong> ${data.preferredDate} (${data.preferredTime})
        </div>
      </div>

      <p style="font-size: 13.5px; line-height: 1.6; color: #2D5A50;">
        Our principal architect, <strong>Himanshu</strong>, and our design team will review your requirements and reach out via phone (${data.phone}) within 24 business hours to confirm your consultation schedule.
      </p>

      <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #D4F0E8; font-size: 12px; color: #4D756E; line-height: 1.6;">
        <strong>Need immediate assistance?</strong><br/>
        Phone: +91 81281 94663 / +91 93165 35404<br/>
        Email: <a href="mailto:himanshu@bellohc.com" style="color: #007E70; text-decoration: none;">himanshu@bellohc.com</a><br/>
        Studio: 306, Ishaan Square, Tapovan Circle, Chandkheda, Ahmedabad
      </div>
    </div>
  </div>
</body>
</html>
`;
}

/**
 * Main Service Function: sends consultation emails
 */
export async function sendConsultationMail(data) {
  const recipient = process.env.MAIL_TO || 'himanshu@bellohc.com';
  const transporter = createMailTransporter();

  // If no SMTP credentials are configured, handle gracefully in development
  if (!transporter) {
    console.log('\n======================================================');
    console.log('📌 [BELLO HABITAT MAILER SERVICE - DEV MODE]');
    console.log('------------------------------------------------------');
    console.log(`To: ${recipient}`);
    console.log(`From Client: ${data.fullName} <${data.email}>`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Project: ${data.projectType} (${data.location})`);
    console.log(`Preferred Date: ${data.preferredDate} - ${data.preferredTime}`);
    console.log(`Budget: ${data.approximateBudget}`);
    console.log(`Ref: ${data.bookingRef}`);
    if (data.message) {
      console.log(`Notes: ${data.message}`);
    }
    console.log('------------------------------------------------------');
    console.log('ℹ️ NOTICE: Real SMTP credentials not configured in .env.');
    console.log('To send live emails to himanshu@bellohc.com, configure:');
    console.log('SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env file.');
    console.log('======================================================\n');

    return {
      success: true,
      delivered: false,
      mode: 'dev-simulation',
      bookingRef: data.bookingRef,
      message: 'Consultation request logged. To send live emails, configure SMTP credentials in .env.',
    };
  }

  // 1. Send Main Notification to Himanshu
  const mailOptions = {
    from: process.env.MAIL_FROM || `"Bello Habitat Consultations" <${process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: `"${data.fullName}" <${data.email}>`,
    subject: `[New Inquiry - ${data.bookingRef}] ${data.projectType} consultation for ${data.fullName}`,
    html: generateAdminEmailHtml(data),
    text: `
NEW CONSULTATION INQUIRY - BELLO HABITAT & VASTUKALA
Reference: ${data.bookingRef}

Patron: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Project Type: ${data.projectType}
Location: ${data.location}
Budget: ${data.approximateBudget}
Preferred Date: ${data.preferredDate} (${data.preferredTime})

Notes:
${data.message || 'No additional notes provided.'}

Studio: 306, Ishaan Square, Tapovan Circle, Chandkheda, Ahmedabad
    `.trim(),
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`✅ [MAILER] Consultation email dispatched to ${recipient}: Message ID ${info.messageId}`);

  // 2. Optional: Send Client Receipt if configured or valid email
  if (data.email && process.env.SEND_CLIENT_CONFIRMATION !== 'false') {
    try {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || `"Bello Habitat Consultancy" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `Consultation Request Received [${data.bookingRef}] - Bello Habitat & Vastukala`,
        html: generateClientConfirmationHtml(data),
      });
      console.log(`✅ [MAILER] Confirmation copy sent to client: ${data.email}`);
    } catch (clientMailErr) {
      console.warn('⚠️ [MAILER] Failed to send client confirmation copy:', clientMailErr.message);
    }
  }

  return {
    success: true,
    delivered: true,
    bookingRef: data.bookingRef,
    messageId: info.messageId,
  };
}

