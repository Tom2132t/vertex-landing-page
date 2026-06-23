import { MediaBlock } from '../components/MediaBlock';
import { PageLayout } from '../components/PageLayout';
import cadTechnicalDrawingsImg from '../assets/CAD Technical Drawings.jpg';
import { cadPageContent } from '../data/siteContent';

export const CadPage = () => {
  const { title, subtitle, paragraphs, bullets, mediaAlt, mediaUrl, note } = cadPageContent;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-vertex-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 animate-fadeUp">
              <div className="eyebrow">Our Services</div>
              <h1 className="text-4xl font-semibold leading-tight text-vertex-text md:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                {subtitle}
              </p>
            </div>
            <MediaBlock mediaType="image" mediaUrl={mediaUrl} mediaAlt={mediaAlt} large />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-vertex-text md:text-3xl">
                Professional Drafting & Data Output
              </h2>

              <div className="space-y-4">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-slate-600 md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {bullets.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-vertex-primary">
                    Deliverables include
                  </div>
                  <ul className="space-y-2">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vertex-primary" />
                        <span className="text-base leading-7">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-xl border border-vertex-border bg-slate-50 px-5 py-4">
                <p className="text-sm leading-7 text-slate-600">{note}</p>
              </div>
            </div>

            <MediaBlock
              mediaType="image"
              mediaUrl={cadTechnicalDrawingsImg}
              mediaAlt="CAD technical drawings, site plan, and 3D site model"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
