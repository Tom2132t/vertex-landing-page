import { PageLayout } from '../components/PageLayout';
import { ServiceDetailSection } from '../components/ServiceDetailSection';
import { ServicePageHero } from '../components/ServicePageHero';
import { surveyingPageContent } from '../data/siteContent';

export const SurveyingPage = () => {
  const { title, subtitle, mediaAlt, services } = surveyingPageContent;

  return (
    <PageLayout>
      <ServicePageHero
        eyebrow="Our Services"
        title={title}
        subtitle={subtitle}
        mediaAlt={mediaAlt}
        mediaUrl={surveyingPageContent.mediaUrl}
      />

      {services.map((service, index) => (
        <ServiceDetailSection key={service.id} item={service} index={index} />
      ))}
    </PageLayout>
  );
};
