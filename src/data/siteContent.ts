import companyLogo from '../assets/tvs-logo.jpeg';
import gisVisual from '../assets/gis-visual.svg';
import surveyingVisual from '../assets/surveying-visual.svg';
import type { ContactDetails, SiteSection, SurveyingDetailItem } from '../types/siteContent';

export const aboutContent: SiteSection = {
  id: 'about-us',
  label: 'About Us',
  title: 'TVS Studio',
  subtitle: 'A clear company profile for GIS, mapping, and surveying services.',
  paragraphs: [
    'TVS Studio is a company presentation website for TerraView Surveying Studio, focused on communicating who we are, what we do, and how we support GIS and surveying projects with clarity.',
    'Our work combines practical field knowledge, geospatial thinking, and modern digital workflows to deliver dependable results for land, infrastructure, and mapping-related operations.',
    'This website is structured to keep company information easy to maintain, so text, media, and technology lists can be updated quickly as services evolve.'
  ],
  mediaType: 'image',
  mediaUrl: companyLogo,
  mediaAlt: 'TVS Studio company logo',
  ctaLabel: 'Contact Us',
  ctaHref: '#contact',
  secondaryCtaLabel: 'View Services',
  secondaryCtaHref: '#gis-solutions'
};

export const serviceSections: SiteSection[] = [
  {
    id: 'gis-solutions',
    label: 'GIS Solutions',
    title: 'Vertex GIS Solutions',
    subtitle: 'Spatial information, monitoring, and mapping workflows presented in a practical way.',
    paragraphs: [
      'Vertex represents the GIS-focused side of our company presentation, where mapping, monitoring, and data interpretation come together in a clean operational workflow.',
      'We build GIS solutions that help teams organize spatial information, view activity on interactive maps, and turn location-based data into usable decisions.',
      'Our approach supports both internal operations and client-facing map experiences, with a focus on clarity, accessibility, and long-term maintainability.',
      'Whether the need is project visualization, asset oversight, or spatial reporting, the platform is presented as a practical toolset rather than a marketing-heavy product pitch.'
    ],
    mediaType: 'image',
    mediaUrl: gisVisual,
    mediaAlt: 'Illustration representing GIS mapping and monitoring',
    technologies: [
      'GIS Mapping',
      'Spatial Analysis',
      'Web GIS',
      'GeoServer',
      'Leaflet / Mapbox',
      'Data Visualization'
    ]
  },
  {
    id: 'surveying',
    label: 'Surveying',
    title: 'Surveying Services',
    subtitle: 'Field accuracy, terrain understanding, and efficient digital delivery.',
    paragraphs: [
      'Our surveying section presents the field and measurement side of the company, with a straightforward overview of methods, outputs, and supporting technologies.',
      'We support land surveying workflows that depend on accuracy, reliable data capture, and efficient movement from field collection to digital delivery.',
      'Drone-assisted surveying, GNSS workflows, and terrain modeling help us extend field visibility while maintaining practical integration with downstream design and planning tools.',
      'The presentation is intentionally simple so additional capabilities or case-specific content can be added later without changing the layout.'
    ],
    mediaType: 'image',
    mediaUrl: surveyingVisual,
    mediaAlt: 'Illustration representing surveying and terrain workflows',
    technologies: [
      'Land Surveying',
      'GPS / GNSS',
      'Drone Surveying',
      'CAD Integration',
      'Terrain Modeling'
    ]
  }
];

export const contactDetails: ContactDetails = {
  company: 'TerraView Surveying Studio',
  email: 'info@tvsstudio.example',
  phone: '+355 69 000 0000',
  address: 'Tirane, Albania'
};

export const surveyingDetails: SurveyingDetailItem[] = [
  {
    title: 'Field Preparation',
    description:
      'We begin with practical planning for access, site conditions, control points, and expected deliverables so field teams can work efficiently.'
  },
  {
    title: 'Measurement & Capture',
    description:
      'Survey data can be collected through GNSS, total station, and drone-supported workflows depending on terrain, scale, and project precision requirements.'
  },
  {
    title: 'Processing & Output',
    description:
      'Captured information is organized into usable outputs such as terrain models, CAD-ready files, and clearly structured survey documentation.'
  }
];

export const navigationItems = [aboutContent, ...serviceSections].map(({ id, label }) => ({
  id,
  label
}));
