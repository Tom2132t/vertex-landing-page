import { MediaBlock } from './MediaBlock';

interface ServicePageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  mediaAlt: string;
  mediaUrl?: string;
}

export const ServicePageHero = ({ eyebrow, title, subtitle, mediaAlt, mediaUrl = '' }: ServicePageHeroProps) => {
  return (
    <section className="bg-vertex-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 animate-fadeUp">
            <div className="eyebrow">{eyebrow}</div>
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
  );
};
