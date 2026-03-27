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
  phone: string;
  address: string;
}

export interface SurveyingDetailItem {
  title: string;
  description: string;
}
