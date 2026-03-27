import logo from '../assets/tvs-logo.jpeg';
import { contactDetails, navigationItems } from '../data/siteContent';

export const SiteFooter = () => {
  return (
    <footer className="border-t border-vertex-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="TVS Studio" className="h-14 w-auto object-contain" />
              <div>
                <div className="text-lg font-semibold text-vertex-text">TVS Studio</div>
                <div className="text-sm text-slate-500">
                  GIS solutions and surveying services
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              TVS Studio presents practical GIS and surveying capabilities with a clean,
              professional company profile focused on clarity, delivery, and project support.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {navigationItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="transition hover:text-vertex-primary">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="transition hover:text-vertex-primary">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
              Contact
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <div>{contactDetails.company}</div>
              <div>{contactDetails.email}</div>
              <div>{contactDetails.phone}</div>
              <div>{contactDetails.address}</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-vertex-border pt-6 text-sm text-slate-500">
          © 2026 TVS Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
