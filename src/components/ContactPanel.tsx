import { contactDetails } from '../data/siteContent';

export const ContactPanel = () => {
  return (
    <section id="contact" className="section-shell scroll-mt-56 pt-10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="space-y-7">
          <div className="eyebrow">Contact</div>
          <div className="space-y-4">
            <h2 className="section-title">Start a project with us</h2>
            <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Tell us about your GIS or surveying needs and we&apos;ll get back to you with
              the right next steps.
            </p>
          </div>
          <div className="surface-card space-y-5 p-6 text-slate-600 md:p-7">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
                Company
              </div>
              <div className="mt-2 text-lg font-medium text-vertex-text">{contactDetails.company}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-vertex-text">Email</div>
              <div>{contactDetails.email}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-vertex-text">Phone</div>
              <div>{contactDetails.phone}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-vertex-text">Address</div>
              <div>{contactDetails.address}</div>
            </div>
          </div>
        </div>

        <div className="surface-card space-y-6 p-6 md:p-8">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
              Enquiry Panel
            </div>
            <h3 className="text-2xl font-semibold text-vertex-text">
              Share your project requirements
            </h3>
            <p className="text-base leading-8 text-slate-600">
              This area can later hold a proper enquiry form or consultation request flow.
              For now, it acts as a clear call-to-action area for new business enquiries.
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-vertex-border bg-slate-50 p-6">
            <div className="text-sm font-medium text-slate-700">Future enquiry options</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Project enquiry form</li>
              <li>Schedule a consultation</li>
              <li>Embedded service area map</li>
              <li>Company response time or office hours</li>
            </ul>
          </div>

          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex rounded-md bg-vertex-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-vertex-dark"
          >
            Start your enquiry
          </a>
        </div>
      </div>
    </section>
  );
};
