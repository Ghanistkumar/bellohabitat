import { sendConsultationMail } from '../server/mailer.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  try {
    const {
      fullName,
      phone,
      email,
      projectType,
      location,
      approximateBudget,
      preferredDate,
      preferredTime,
      message,
      bookingRef,
    } = req.body;

    if (!fullName || !phone || !email || !location || !preferredDate) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields (fullName, phone, email, location, preferredDate)',
      });
    }

    const ref = bookingRef || `BHC-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = await sendConsultationMail({
      fullName,
      phone,
      email,
      projectType: projectType || 'Architecture',
      location,
      approximateBudget: approximateBudget || 'Not specified',
      preferredDate,
      preferredTime: preferredTime || 'Morning (10:30 AM - 1:00 PM)',
      message: message || '',
      bookingRef: ref,
    });

    return res.status(200).json({
      success: true,
      bookingRef: ref,
      delivered: result.delivered,
      mode: result.mode,
      message: 'Consultation request received and mailed to himanshu@bellohc.com',
    });
  } catch (err) {
    console.error('❌ [VERCEL API ERROR]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to process consultation request.',
      details: err.message,
    });
  }
}

