import { PageLayout } from '../components/PageLayout';
import { ServiceDetailSection } from '../components/ServiceDetailSection';
import { ServicePageHero } from '../components/ServicePageHero';
import { photogrammetryPageContent } from '../data/siteContent';

export const PhotogrammetryPage = () => {
  const { title, subtitle, mediaAlt, services } = photogrammetryPageContent;

  return (
    <PageLayout>
      <ServicePageHero
        eyebrow="Our Services"
        title={title}
        subtitle={subtitle}
        mediaAlt={mediaAlt}
        mediaUrl={photogrammetryPageContent.mediaUrl}
      />

      {services.map((service, index) => (
        <ServiceDetailSection key={service.id} item={service} index={index} />
      ))}
    </PageLayout>
  );
};
