import nodemailer, { type Transporter } from 'nodemailer';

interface TransporterInfo {
  transporter: Transporter;
  fallbackAddress: string | null;
}

let transporterPromise: Promise<TransporterInfo> | null = null;

const buildTransporter = async (): Promise<TransporterInfo> => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });
    return { transporter, fallbackAddress: null };
  }

  // No SMTP configured: fall back to an Ethereal test account so the
  // contact flow can still be exercised end-to-end in development.
  const testAccount = await nodemailer.createTestAccount();
  console.warn(
    '[mailer] No SMTP_HOST/SMTP_USER/SMTP_PASS set — using a temporary Ethereal test inbox.\n' +
      '  Sent messages will NOT reach a real inbox; check the console for a preview URL.'
  );
  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: { user: testAccount.user, pass: testAccount.pass }
  });
  return { transporter, fallbackAddress: testAccount.user };
};

const getTransporter = (): Promise<TransporterInfo> => {
  if (!transporterPromise) {
    transporterPromise = buildTransporter();
  }
  return transporterPromise;
};

export interface ContactMailInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmail = async ({ name, email, company, message }: ContactMailInput) => {
  const { transporter, fallbackAddress } = await getTransporter();
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER || fallbackAddress;
  const from =
    process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || fallbackAddress || 'no-reply@vertex.local';

  const info = await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `
  });

  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`[mailer] Preview URL: ${previewUrl}`);
  }

  return { messageId: info.messageId, previewUrl: previewUrl || null };
};
