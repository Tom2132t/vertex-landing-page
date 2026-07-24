import { WorkerMailer } from 'worker-mailer';

interface Env {
  SMTP_HOST: string;
  SMTP_PORT?: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const json = (status: number, body: { success: boolean; message: string }) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  const { request, env } = context;

  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    console.error('[contact] SMTP_HOST/SMTP_USER/SMTP_PASS are not configured.');
    return json(500, { success: false, message: 'Email service is not configured.' });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { success: false, message: 'Invalid request body.' });
  }

  const { name, email, company, message } = payload ?? {};
  if (!name || !email || !message) {
    return json(400, { success: false, message: 'Name, email, and message are required.' });
  }

  const port = env.SMTP_PORT ? Number(env.SMTP_PORT) : 587;

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST,
        port,
        // Port 465 uses implicit TLS; 587 upgrades via STARTTLS.
        secure: port === 465,
        startTls: port !== 465,
        credentials: { username: env.SMTP_USER, password: env.SMTP_PASS },
        authType: ['plain', 'login']
      },
      {
        from: env.CONTACT_FROM_EMAIL || env.SMTP_USER,
        to: env.CONTACT_TO_EMAIL || env.SMTP_USER,
        reply: email,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\n${message}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `
      }
    );
    return json(200, { success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('[contact] Failed to send email:', error);
    return json(502, { success: false, message: 'Failed to send message. Please try again later.' });
  }
};
