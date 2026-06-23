import markdownContent from './content.md?raw';
import type { ContactDetails, HomeServiceCard, ServicePageContent } from '../types/siteContent';

// ─── Image assets ─────────────────────────────────────────────────────────────
import gnssImg from '../assets/GNSS.jpg';
import gnss2Img from '../assets/GNSS 2.jpg';
import indoorMappingImg from '../assets/Indoor mapping.jpg';
import lidarImg from '../assets/LIDAR.jpg';
import cartographyImg from '../assets/Mapping Cartography.jpg';
import matriceImg from '../assets/Matrice DJI 300.jpg';
import photogrammetryImg from '../assets/PHOTOGRAMMETRY.jpg';
import cadDeliverablesImg from '../assets/CAD Deliverables.jpg';
import constructionPointCloudImg from '../assets/Construction As-Built Point Cloud.jpg';
import webgisImg from '../assets/WebGIS Development.jpg';
import geospatialAnalysisImg from '../assets/Geospatial Analysis.jpg';
import spatialDataImg from '../assets/Spatial Data Management.jpg';
import surveyingServicesImg from '../assets/Surveying Services.jpg';
import systemIntegrationImg from '../assets/System Integration.jpg';
import topographicImg from '../assets/Topographic-Survey.jpg';
import zenmuseImg from '../assets/Zenmuse L2 Lidar.jpg';
import gisSolutionsImg from '../assets/GIS Solutions.jpg';

// ─── Markdown parser utilities ────────────────────────────────────────────────

const headingPattern = /^(#{2,3})\s+\*\*(.+?)\*\*\s*$/;

const sectionBodies = markdownContent.split('\n').reduce<Record<string, string[]>>((acc, line) => {
  const match = line.match(headingPattern);

  if (match) {
    acc[match[2]] = [];
    acc.__current = [match[2]];
    return acc;
  }

  const current = acc.__current?.[0];

  if (current) {
    acc[current].push(line);
  }

  return acc;
}, {});

delete sectionBodies.__current;

const getSectionBody = (title: string) => {
  return (sectionBodies[title] ?? []).join('\n').trim();
};

const cleanMarkdown = (value: string) => {
  return value
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/`/g, '')
    .replace(/^[""]|[""]$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
};

const getParagraphs = (title: string) => {
  return getSectionBody(title)
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0 && !block.startsWith('*') && block !== '---')
    .map(cleanMarkdown);
};

const getFirstParagraph = (title: string) => {
  return getParagraphs(title)[0] ?? '';
};

/** Returns bullets with the full text (no stripping after –) */
const getBulletsRaw = (title: string) => {
  return getSectionBody(title)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('* '))
    .map((line) => cleanMarkdown(line.replace(/^\*\s+/, '')));
};

/** Returns bullets stripped at – (just the capability name, used for overview badges) */
const getBulletNames = (title: string) => {
  return getBulletsRaw(title).map((line) => line.split(' – ')[0]);
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactDetails: ContactDetails = {
  company: 'TVS Studio',
  email: 'sergiomerdani@gmail.com',
  phones: ['+1 (445) 210-7724', '+355 68 527 4777'],
  address: 'Tirane, Albania'
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navigationItems = [
  { label: 'Surveying', href: '/surveying' },
  { label: 'GIS Solutions', href: '/gis-solutions' },
  { label: 'Photogrammetry & LiDAR', href: '/photogrammetry' },
  { label: 'CAD & Deliverables', href: '/cad' },
  { label: 'Vertex', href: '/vertex' },
  { label: 'Contact', href: '/contact' }
];

// ─── Home page ────────────────────────────────────────────────────────────────

export const homeHero = {
  tagline: 'Precision in the field. Intelligence in every map.',
  company: 'TVS Studio',
  description:
    'We provide high-precision surveying and GIS services that transform spatial data into ' +
    'actionable insights for engineering, construction, and planning projects.',
  ctaLabel: 'Contact Us',
  ctaHref: '/contact',
  secondaryCtaLabel: 'View Services',
  secondaryCtaHref: '/surveying',
  mediaAlt: 'TVS Studio — surveying and GIS overview'
};

export const homeServices: HomeServiceCard[] = [
  {
    id: 'surveying',
    label: 'Surveying Services',
    href: '/surveying',
    description: getFirstParagraph('Surveying Services'),
    capabilities: getBulletNames('Surveying Services'),
    mediaAlt: 'GNSS receiver in the field',
    mediaUrl: gnss2Img
  },
  {
    id: 'gis-solutions',
    label: 'GIS Solutions',
    href: '/gis-solutions',
    description: getFirstParagraph('GIS Solutions'),
    capabilities: getBulletNames('GIS Solutions'),
    mediaAlt: 'GIS solutions overview',
    mediaUrl: gisSolutionsImg
  },
  {
    id: 'photogrammetry',
    label: 'Photogrammetry & LiDAR',
    href: '/photogrammetry',
    description: getFirstParagraph('Photogrammetry & LiDAR Processing'),
    capabilities: getBulletNames('Photogrammetry & LiDAR Processing'),
    mediaAlt: '3D photogrammetry model of a town',
    mediaUrl: photogrammetryImg
  },
  {
    id: 'cad',
    label: 'CAD & Deliverables',
    href: '/cad',
    description: getFirstParagraph('CAD & Deliverables'),
    capabilities: getBulletNames('CAD & Deliverables'),
    mediaAlt: 'CAD drafting workflow from survey data to deliverables',
    mediaUrl: cadDeliverablesImg
  }
];

// ─── Surveying page ───────────────────────────────────────────────────────────

export const surveyingPageContent: ServicePageContent = {
  title: 'Surveying Services',
  subtitle: getFirstParagraph('Surveying Services'),
  mediaAlt: 'Surveying services overview',
  mediaUrl: surveyingServicesImg,
  services: [
    {
      id: 'gnss-gps',
      title: 'GNSS / GPS Surveying',
      paragraphs: getParagraphs('GNSS / GPS Surveying'),
      bullets: getBulletsRaw('GNSS / GPS Surveying'),
      mediaAlt: 'Trimble GNSS receiver mounted in the field',
      mediaUrl: gnss2Img
    },
    {
      id: 'total-station',
      title: 'Total Station Surveying',
      paragraphs: getParagraphs('Total Station Surveying'),
      bullets: getBulletsRaw('Total Station Surveying'),
      mediaAlt: 'Total station set up at a construction site',
      mediaUrl: gnssImg
    },
    {
      id: 'drone-uav',
      title: 'Drone (UAV) Surveys',
      paragraphs: getParagraphs('Drone (UAV) Surveys'),
      bullets: getBulletsRaw('Drone (UAV) Surveys'),
      mediaAlt: 'DJI Matrice 300 drone in flight',
      mediaUrl: matriceImg
    },
    {
      id: 'topographic',
      title: 'Topographic Surveys',
      paragraphs: getParagraphs('Topographic Surveys'),
      bullets: getBulletsRaw('Topographic Surveys'),
      mediaAlt: 'Total station and topographic aerial map with contour lines',
      mediaUrl: topographicImg
    },
    {
      id: 'construction-as-built',
      title: 'Construction & As-Built Surveys',
      paragraphs: getParagraphs('Construction & As-Built Surveys'),
      bullets: getBulletsRaw('Construction & As-Built Surveys'),
      mediaAlt: '3D point cloud scan of a building structural steel frame',
      mediaUrl: constructionPointCloudImg
    }
  ]
};

// ─── GIS Solutions page ───────────────────────────────────────────────────────

export const gisPageContent: ServicePageContent = {
  title: 'GIS Solutions',
  subtitle: getFirstParagraph('GIS Solutions'),
  mediaAlt: 'GIS solutions overview',
  mediaUrl: gisSolutionsImg,
  services: [
    {
      id: 'webgis',
      title: 'WebGIS Development',
      paragraphs: getParagraphs('WebGIS Development'),
      bullets: getBulletsRaw('WebGIS Development'),
      mediaAlt: 'Vertex Platform login screen for the WebGIS application',
      mediaUrl: webgisImg
    },
    {
      id: 'spatial-data',
      title: 'Spatial Data Management',
      paragraphs: getParagraphs('Spatial Data Management'),
      bullets: getBulletsRaw('Spatial Data Management'),
      mediaAlt: 'Spatial data management layered diagram: sources, storage, processing, analysis, visualization, sharing',
      mediaUrl: spatialDataImg
    },
    {
      id: 'cartography',
      title: 'Mapping & Cartography',
      paragraphs: getParagraphs('Mapping & Cartography'),
      bullets: getBulletsRaw('Mapping & Cartography'),
      mediaAlt: 'Colorful cartographic parcel and land-use map of an urban area',
      mediaUrl: cartographyImg
    },
    {
      id: 'geospatial-analysis',
      title: 'Geospatial Analysis',
      paragraphs: getParagraphs('Geospatial Analysis'),
      bullets: getBulletsRaw('Geospatial Analysis'),
      mediaAlt: 'Geospatial analysis heatmap of terrain and elevation data',
      mediaUrl: geospatialAnalysisImg
    },
    {
      id: 'system-integration',
      title: 'System Integration',
      paragraphs: getParagraphs('System Integration'),
      bullets: getBulletsRaw('System Integration'),
      mediaAlt: 'Vertex GIS system integration architecture diagram',
      mediaUrl: systemIntegrationImg
    }
  ]
};

// ─── Photogrammetry & LiDAR page ─────────────────────────────────────────────

export const photogrammetryPageContent: ServicePageContent = {
  title: 'Photogrammetry & LiDAR Processing',
  subtitle: getFirstParagraph('Photogrammetry & LiDAR Processing'),
  mediaAlt: 'DJI Matrice 300 professional survey drone',
  mediaUrl: matriceImg,
  services: [
    {
      id: 'drone-photogrammetry',
      title: 'Drone Image Processing (Photogrammetry)',
      paragraphs: getParagraphs('Drone Image Processing (Photogrammetry)'),
      bullets: getBulletsRaw('Drone Image Processing (Photogrammetry)'),
      mediaAlt: '3D photogrammetry model of a town generated from drone imagery',
      mediaUrl: photogrammetryImg
    },
    {
      id: 'lidar-processing',
      title: 'LiDAR Data Processing',
      paragraphs: getParagraphs('LiDAR Data Processing'),
      bullets: getBulletsRaw('LiDAR Data Processing'),
      mediaAlt: 'Colorized LiDAR point cloud of terrain',
      mediaUrl: lidarImg
    },
    {
      id: 'point-cloud',
      title: 'Point Cloud Processing',
      paragraphs: getParagraphs('Point Cloud Processing'),
      bullets: getBulletsRaw('Point Cloud Processing'),
      mediaAlt: 'Indoor 3D point cloud scan',
      mediaUrl: indoorMappingImg
    },
    {
      id: '3d-modeling',
      title: '3D Modeling & Visualization',
      paragraphs: getParagraphs('3D Modeling & Visualization'),
      bullets: getBulletsRaw('3D Modeling & Visualization'),
      mediaAlt: 'DJI Zenmuse L2 LiDAR sensor used for 3D data capture',
      mediaUrl: zenmuseImg
    }
  ]
};

// ─── CAD & Deliverables page ──────────────────────────────────────────────────

export const cadPageContent = {
  title: 'CAD & Deliverables',
  subtitle: getFirstParagraph('CAD & Deliverables'),
  paragraphs: getParagraphs('CAD & Deliverables'),
  bullets: getBulletsRaw('CAD & Deliverables'),
  mediaAlt: 'CAD drafting workflow from survey data to deliverables',
  mediaUrl: cadDeliverablesImg,
  note:
    'All outputs are structured, accurate, and ready for immediate use in your workflow. ' +
    'We use tools like AutoCAD to ensure deliverables meet project requirements.'
};
