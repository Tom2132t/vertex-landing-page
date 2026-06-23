import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { contactDetails } from '../data/siteContent';
import { submitContactRequest } from '../services/contactService';
import type { ContactPayload } from '../types/contact';

const emptyForm: ContactPayload = { name: '', email: '', company: '', message: '' };

export const ContactPage = () => {
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      await submitContactRequest(form);
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <PageLayout>
      <section className="bg-vertex-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10 space-y-3 animate-fadeUp">
            <div className="eyebrow">Get in touch</div>
            <h1 className="text-4xl font-semibold text-vertex-text md:text-5xl">Contact Us</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
              For surveying, GIS solutions, photogrammetry, LiDAR processing, or CAD-ready
              deliverables, contact us and we can discuss the right next steps for your project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">

            {/* Contact info */}
            <div className="space-y-7">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-vertex-text">Contact details</h2>
                <p className="text-base leading-7 text-slate-600">
                  Reach out directly using the information below, or fill in the form and
                  we'll get back to you.
                </p>
              </div>

              <div className="surface-card space-y-5 p-6 text-slate-600 md:p-7">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
                    Company
                  </div>
                  <div className="mt-2 text-lg font-medium text-vertex-text">
                    {contactDetails.company}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-vertex-text">Email</div>
                  <div className="mt-1">
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="transition hover:text-vertex-primary"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-vertex-text">Phone</div>
                  {contactDetails.phones.map((phone) => (
                    <div key={phone} className="mt-1">
                      {phone}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-vertex-text">Address</div>
                  <div className="mt-1">{contactDetails.address}</div>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="surface-card p-6 md:p-8">
              <div className="mb-6 space-y-2">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
                  Enquiry
                </div>
                <h3 className="text-2xl font-semibold text-vertex-text">Start a project</h3>
                <p className="text-base leading-7 text-slate-600">
                  Tell us about your project and we'll get back to you with the right approach.
                </p>
              </div>

              {status === 'success' ? (
                <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                  <div className="mb-2 text-lg font-semibold text-green-800">Message sent</div>
                  <p className="text-sm leading-7 text-green-700">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-sm font-medium text-vertex-primary transition hover:text-vertex-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-medium text-vertex-text">
                        Name <span className="text-vertex-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-md border border-vertex-border bg-white px-4 py-2.5 text-sm text-vertex-text placeholder:text-slate-400 outline-none transition focus:border-vertex-primary focus:ring-2 focus:ring-vertex-primary/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-vertex-text">
                        Email <span className="text-vertex-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-md border border-vertex-border bg-white px-4 py-2.5 text-sm text-vertex-text placeholder:text-slate-400 outline-none transition focus:border-vertex-primary focus:ring-2 focus:ring-vertex-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-sm font-medium text-vertex-text">
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-md border border-vertex-border bg-white px-4 py-2.5 text-sm text-vertex-text placeholder:text-slate-400 outline-none transition focus:border-vertex-primary focus:ring-2 focus:ring-vertex-primary/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-medium text-vertex-text">
                      Message <span className="text-vertex-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project or what you need help with…"
                      className="w-full resize-none rounded-md border border-vertex-border bg-white px-4 py-2.5 text-sm text-vertex-text placeholder:text-slate-400 outline-none transition focus:border-vertex-primary focus:ring-2 focus:ring-vertex-primary/20"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 rounded-md bg-vertex-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-vertex-dark disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
