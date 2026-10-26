import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'consultation-api-middleware',
      configureServer(server) {
        server.middlewares.use('/api/consultation', async (req, res) => {
          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', chunk => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              try {
                const body = JSON.parse(bodyStr || '{}');
                const ref = body.bookingRef || `BHC-${Math.floor(100000 + Math.random() * 900000)}`;
                const { sendConsultationMail } = await import('./server/mailer.js');
                const result = await sendConsultationMail({ ...body, bookingRef: ref });

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    success: true,
                    bookingRef: ref,
                    delivered: result.delivered,
                    mode: result.mode,
                    message: 'Consultation request received and mailed to himanshu@bellohc.com',
                  })
                );
              } catch (err: unknown) {
                console.error('❌ [DEV API ERROR]:', err);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                const message = err instanceof Error ? err.message : 'Unknown error';
                res.end(JSON.stringify({ success: false, error: message }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
          }
        });
      },
    },
  ],
  server: {
    port: 5173,
  },
});
