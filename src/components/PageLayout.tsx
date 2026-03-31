import type { ReactNode } from 'react';
import { ScrollToTop } from './ScrollToTop';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-vertex-background">
      <ScrollToTop />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};
