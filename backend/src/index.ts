import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { sendContactEmail } from './mailer.js';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  try {
    const { previewUrl } = await sendContactEmail({ name, email, company: company ?? '', message });
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
      ...(previewUrl ? { previewUrl } : {})
    });
  } catch (error) {
    console.error('[contact] Failed to send email:', error);
    return res.status(502).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
