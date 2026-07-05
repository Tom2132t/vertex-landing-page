import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { vertexPageContent, vertexPlansContent, whyVertexContent } from '../data/siteContent';

const benefitIcons: Record<string, JSX.Element> = {
  'Save time': (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Reduce costs': (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" strokeLinecap="round" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" strokeLinecap="round" />
    </svg>
  ),
  'Work anywhere': (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  )
};

const planIcons: Record<string, JSX.Element> = {
  Basic: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 3 3 10.5l7.5 3L13.5 21 21 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Standard: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 13 9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Enterprise: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6l-8-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

const CheckIcon = ({ className = 'h-4 w-4 text-vertex-primary' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="m5 12 5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LayeredMapIllustration = () => (
  <svg viewBox="0 0 200 190" className="h-48 w-48 md:h-56 md:w-56">
    <polygon points="100,148 22,118 100,88 178,118" fill="#083539" />
    <polygon points="100,132 22,102 100,72 178,102" fill="#0F6C74" />
    <polygon points="100,116 22,86 100,56 178,86" fill="#1DA7B8" />
    <polygon points="100,100 22,70 100,40 178,70" fill="#4FC3CF" />
    <polygon points="100,84 22,54 100,24 178,54" fill="#E8F8FA" />
    <circle cx="100" cy="20" r="7" fill="#0F6C74" />
    <path d="M100 27v10" stroke="#0F6C74" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const VertexPage = () => {
  const { subtitle, mediaAlt, mediaUrl, services } = vertexPageContent;

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-vertex-background">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-24">
          <div className="eyebrow">Vertex Map · The Platform</div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-vertex-text md:text-6xl">
            Turn Spatial Data Into Decisions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Request a Demo
            </Link>
            <a
              href="https://map.vertexmaps.cc/#/map"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Explore the Platform
            </a>
          </div>
        </div>
        {mediaUrl && (
          <div className="pb-12 md:pb-16">
            <img src={mediaUrl} alt={mediaAlt} className="mx-auto block h-auto w-full max-w-[320px]" />
          </div>
        )}
      </section>

      {/* ── Feature grid ─────────────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="eyebrow">What We Built</div>
            <h2 className="section-title mt-3">Everything in one platform</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.id} className="surface-card flex flex-col gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vertex-primary/10 text-sm font-semibold text-vertex-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-vertex-text">{service.title}</h3>

                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}

                <ul className="space-y-1.5 pt-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-vertex-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Vertex + Plans ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-vertex-dark">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 12% 8%, rgba(79,195,207,0.16), transparent 42%), ' +
              'radial-gradient(circle at 88% 92%, rgba(29,167,184,0.18), transparent 45%)'
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Why Vertex */}
            <div className="space-y-10 lg:col-span-3">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  {whyVertexContent.title}
                </h2>
                <p className="text-base leading-relaxed text-white/70">{whyVertexContent.intro}</p>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm font-medium text-white/90">
                  {whyVertexContent.chain.map((step, index) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm transition hover:border-vertex-accent/50 hover:bg-white/10">
                        {step}
                      </span>
                      {index < whyVertexContent.chain.length - 1 && (
                        <span className="text-vertex-accent/60">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {whyVertexContent.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vertex-accent/15 text-vertex-accent">
                      {benefitIcons[benefit.title]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{benefit.title}</div>
                      <div className="text-sm text-white/60">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plans */}
            <div className="lg:col-span-6">
              <div className="mx-auto mb-12 max-w-xl text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-vertex-accent">
                  Pricing
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  {vertexPlansContent.title}
                </h3>
                <p className="mt-2 text-white/70">{vertexPlansContent.subtitle}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
                {vertexPlansContent.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-2xl bg-white p-6 ${
                      plan.highlighted ? 'shadow-lift ring-2 ring-vertex-accent' : 'shadow-soft'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-vertex-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                        {plan.badge}
                      </span>
                    )}

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-vertex-primary/10 text-vertex-primary">
                      {planIcons[plan.name]}
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-vertex-text">{plan.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{plan.description}</p>

                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-vertex-border pt-5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckIcon className="mt-0.5 h-4 w-4 text-vertex-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`mt-6 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} w-full`}
                    >
                      Get a Quote
                    </Link>
                  </div>
                ))}
              </div>

              <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-white/60">
                <CheckIcon className="h-4 w-4 text-vertex-accent" />
                {vertexPlansContent.footnote}
              </p>
            </div>

            {/* Highlight + illustration */}
            <div className="flex flex-col items-center justify-center gap-8 text-center lg:col-span-3 lg:h-full lg:items-end lg:text-right">
              {whyVertexContent.highlights.map((line) => (
                <div key={line} className="text-2xl font-semibold text-vertex-accent md:text-3xl">
                  {line}
                </div>
              ))}
              <div className="relative flex items-center justify-center py-4">
                <div className="absolute h-56 w-56 rounded-full bg-vertex-accent/25 blur-2xl md:h-64 md:w-64" />
                <LayeredMapIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
