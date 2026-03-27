import { ContentSection } from '../components/ContentSection';
import { ContactPanel } from '../components/ContactPanel';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { SurveyingDetails } from '../components/SurveyingDetails';
import { aboutContent, navigationItems, serviceSections } from '../data/siteContent';
import { theme } from '../theme';

export const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-vertex-background"
      style={{ backgroundColor: theme.colors.background }}
    >
      <SiteHeader items={navigationItems} />
      <main className="pb-16">
        <section className="bg-vertex-background">
          <ContentSection section={aboutContent} variant="hero" />
        </section>

        {serviceSections.map((section, index) => (
          <div key={section.id} className={index % 2 === 0 ? 'bg-white' : 'bg-vertex-background'}>
            <ContentSection section={section} />
            {section.id === 'surveying' ? <SurveyingDetails /> : null}
          </div>
        ))}

        <div className="bg-vertex-background">
          <ContactPanel />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
