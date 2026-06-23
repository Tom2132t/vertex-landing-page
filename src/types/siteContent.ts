export type MediaType = 'image' | 'video';

export interface SiteSection {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  mediaType: MediaType;
  mediaUrl: string;
  mediaAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  technologies?: string[];
}

export interface ContactDetails {
  company: string;
  email: string;
  phones: string[];
  address: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  mediaAlt: string;
  mediaUrl?: string;
}

export interface ServicePageContent {
  title: string;
  subtitle: string;
  mediaAlt: string;
  mediaUrl?: string;
  services: ServiceItem[];
}

export interface HomeServiceCard {
  id: string;
  label: string;
  href: string;
  description: string;
  capabilities: string[];
  mediaAlt: string;
  mediaUrl?: string;
}
