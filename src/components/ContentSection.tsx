import { MediaBlock } from './MediaBlock';
import { TechnologyList } from './TechnologyList';
import type { SiteSection } from '../types/siteContent';

interface ContentSectionProps {
  section: SiteSection;
  variant?: 'default' | 'hero';
}

export const ContentSection = ({ section, variant = 'default' }: ContentSectionProps) => {
  const isHero = variant === 'hero';

  return (
    <section
      id={section.id}
      className={`scroll-mt-56 ${isHero ? 'mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20' : 'mx-auto max-w-7xl px-6 py-20 md:px-10'}`}
    >
      <div className={`grid items-center ${isHero ? 'gap-10 lg:grid-cols-2 lg:gap-12' : 'gap-12 lg:grid-cols-2'}`}>
        <div className="space-y-7 animate-fadeUp">
          <div className="eyebrow">{section.label}</div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className={isHero ? 'text-4xl font-semibold leading-tight text-vertex-text md:text-6xl' : 'section-title'}>
                {section.title}
              </h2>
              {section.subtitle ? (
                <p className="max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                  {section.subtitle}
                </p>
              ) : null}
            </div>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {isHero && section.ctaLabel && section.ctaHref ? (
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href={section.ctaHref}
                className="inline-flex rounded-md bg-vertex-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-vertex-dark"
              >
                {section.ctaLabel}
              </a>
              {section.secondaryCtaLabel && section.secondaryCtaHref ? (
                <a
                  href={section.secondaryCtaHref}
                  className="inline-flex rounded-md border border-vertex-border bg-white px-5 py-3 text-sm font-medium text-vertex-text transition hover:border-vertex-primary hover:text-vertex-primary"
                >
                  {section.secondaryCtaLabel}
                </a>
              ) : null}
            </div>
          ) : null}
          <TechnologyList items={section.technologies ?? []} />
        </div>

        <MediaBlock
          mediaType={section.mediaType}
          mediaUrl={section.mediaUrl}
          mediaAlt={section.mediaAlt}
          large={isHero}
        />
      </div>
    </section>
  );
};
