import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendConsultationMail } from './server/mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Bello Habitat Consultancy Mailer Service',
    time: new Date().toISOString(),
  });
});

// Consultation Booking API Endpoint
app.post('/api/consultation', async (req, res) => {
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

    // Validation
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
    console.error('❌ [API ERROR /api/consultation]:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to dispatch consultation email. Please try again or contact directly via phone/WhatsApp.',
      details: process.env.NODE_ENV !== 'production' ? err.message : undefined,
    });
  }
});

// Production Static Serving
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Catch-all SPA fallback for Express 5
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🏛️ Bello Habitat Consultancy Server running on port ${PORT}`);
  console.log(`📧 Mailer endpoint: http://localhost:${PORT}/api/consultation`);
  console.log(`🎯 Recipient email: ${process.env.MAIL_TO || 'himanshu@bellohc.com'}`);
  console.log(`======================================================\n`);
});
