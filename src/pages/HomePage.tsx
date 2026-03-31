import { Link } from 'react-router-dom';
import { MediaBlock } from '../components/MediaBlock';
import { PageLayout } from '../components/PageLayout';
import { homeHero, homeServices } from '../data/siteContent';

export const HomePage = () => {
  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-vertex-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-7 animate-fadeUp">
              <div className="eyebrow">TVS Studio</div>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold leading-tight text-vertex-text md:text-6xl">
                  {homeHero.tagline}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                  {homeHero.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  to={homeHero.ctaHref}
                  className="inline-flex rounded-md bg-vertex-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-vertex-dark"
                >
                  {homeHero.ctaLabel}
                </Link>
                <Link
                  to={homeHero.secondaryCtaHref}
                  className="inline-flex rounded-md border border-vertex-border bg-white px-5 py-3 text-sm font-medium text-vertex-text transition hover:border-vertex-primary hover:text-vertex-primary"
                >
                  {homeHero.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <MediaBlock
              mediaType="image"
              mediaUrl={homeHero.mediaUrl ?? ''}
              mediaAlt={homeHero.mediaAlt}
              large
            />
          </div>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-12 space-y-3">
            <div className="eyebrow">Our Services</div>
            <h2 className="section-title">What we do</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service) => (
              <div
                key={service.id}
                className="surface-card flex flex-col gap-5 p-6"
              >
                {/* Card image */}
                <div className="overflow-hidden rounded-xl border border-vertex-border">
                  {service.mediaUrl ? (
                    <img
                      src={service.mediaUrl}
                      alt={service.mediaAlt}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center bg-slate-50 text-center">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-vertex-primary">
                          Image Placeholder
                        </div>
                        <div className="mt-1 text-sm text-slate-400">{service.mediaAlt}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-lg font-semibold text-vertex-text">{service.label}</h3>
                  <p className="flex-1 text-sm leading-7 text-slate-600">{service.description}</p>

                  {service.capabilities.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-vertex-primary/70" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to={service.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-vertex-primary transition hover:text-vertex-dark"
                  >
                    Learn more
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────────────── */}
      <section className="bg-vertex-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-vertex-border bg-white px-8 py-10 shadow-soft md:flex-row md:items-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-vertex-text md:text-3xl">
                Ready to start a project?
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                For surveying, GIS solutions, photogrammetry, LiDAR processing, or CAD-ready
                deliverables, get in touch and we'll discuss the right next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex rounded-md bg-vertex-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-vertex-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
