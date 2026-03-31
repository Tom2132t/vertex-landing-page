import { PageLayout } from '../components/PageLayout';
import { ServiceDetailSection } from '../components/ServiceDetailSection';
import { ServicePageHero } from '../components/ServicePageHero';
import { gisPageContent } from '../data/siteContent';

export const GisSolutionsPage = () => {
  const { title, subtitle, mediaAlt, services } = gisPageContent;

  return (
    <PageLayout>
      <ServicePageHero
        eyebrow="Our Services"
        title={title}
        subtitle={subtitle}
        mediaAlt={mediaAlt}
        mediaUrl={gisPageContent.mediaUrl}
      />

      {services.map((service, index) => (
        <ServiceDetailSection key={service.id} item={service} index={index} />
      ))}
    </PageLayout>
  );
};
