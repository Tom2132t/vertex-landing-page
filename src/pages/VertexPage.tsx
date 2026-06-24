import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { vertexPageContent, whyVertexContent } from '../data/siteContent';

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
            <a href="#features" className="btn-secondary">
              Explore the Platform
            </a>
          </div>
        </div>
        {mediaUrl && (
          <div className="pb-12 md:pb-16">
            <img src={mediaUrl} alt={mediaAlt} className="mx-auto block h-auto w-full max-w-[220px]" />
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

      {/* ── Why Vertex ───────────────────────────────────────────────────── */}
      <section className="bg-vertex-dark">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                {whyVertexContent.title}
              </h2>
              <div className="space-y-3">
                <p className="text-base leading-relaxed text-white/70 md:text-lg">
                  {whyVertexContent.intro}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/90 md:text-base">
                  {whyVertexContent.chain.map((step, index) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
                        {step}
                      </span>
                      {index < whyVertexContent.chain.length - 1 && (
                        <span className="text-white/40">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                {whyVertexContent.outcome}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 lg:items-end">
              {whyVertexContent.highlights.map((line) => (
                <div key={line} className="text-2xl font-semibold text-vertex-accent md:text-3xl">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
