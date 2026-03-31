import { MediaBlock } from './MediaBlock';
import type { ServiceItem } from '../types/siteContent';

interface ServiceDetailSectionProps {
  item: ServiceItem;
  index: number;
  background?: 'white' | 'tinted';
}

export const ServiceDetailSection = ({
  item,
  index,
  background = index % 2 === 0 ? 'white' : 'tinted'
}: ServiceDetailSectionProps) => {
  const isReversed = index % 2 !== 0;
  const bg = background === 'white' ? 'bg-white' : 'bg-vertex-background';

  return (
    <section id={item.id} className={`${bg} scroll-mt-40`}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
            <h3 className="text-2xl font-semibold text-vertex-text md:text-3xl">{item.title}</h3>

            <div className="space-y-4">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-600 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {item.bullets.length > 0 && (
              <ul className="space-y-2 pt-1">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vertex-primary" />
                    <span className="text-sm leading-7 md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={isReversed ? 'lg:order-1' : ''}>
            <MediaBlock
              mediaType="image"
              mediaUrl={item.mediaUrl ?? ''}
              mediaAlt={item.mediaAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
