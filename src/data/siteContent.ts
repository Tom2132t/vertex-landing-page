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
import vertexBrandImg from '../assets/Vertex Brand.png';
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

// ─── Vertex Map page ──────────────────────────────────────────────────────────

export const vertexPageContent: ServicePageContent = {
  title: 'Vertex Map',
  subtitle:
    'Turn Spatial Data Into Decisions. Vertex Map is a modern Web GIS platform built for ' +
    'planners, surveyors, engineers, municipalities, utilities, and spatial data professionals. ' +
    'It combines data visualization, editing, analysis, and decision support into a single web application.',
  mediaAlt: 'Vertex brand mark with tagline "see more than location"',
  mediaUrl: vertexBrandImg,
  services: [
    {
      id: 'interactive-mapping',
      title: 'Interactive Mapping',
      paragraphs: [],
      bullets: [
        'Fast map rendering',
        'WMS, WMTS, Vector Tiles, GeoJSON',
        'Layer management',
        'Basemaps and custom services',
        'Mobile-friendly interface'
      ],
      mediaAlt: 'Screenshot of the main Vertex Map interface'
    },
    {
      id: 'georeferencing',
      title: 'Georeferencing',
      paragraphs: [
        'Transform scanned plans, cadastral maps, engineering drawings, and historical maps into geospatial data.'
      ],
      bullets: ['Absolute coordinates', 'Multiple control points', 'Real-time preview', 'Custom CRS support'],
      mediaAlt: 'Georeferencing tool screenshot'
    },
    {
      id: 'spatial-editing',
      title: 'Spatial Editing & Digitization',
      paragraphs: ['Create and edit spatial data directly in the browser.'],
      bullets: ['Points, lines, polygons', 'Vertex editing', 'Snapping', 'Attribute editing', 'Multi-user workflows'],
      mediaAlt: 'Parcel digitization screenshot'
    },
    {
      id: 'property-parcel',
      title: 'Property & Parcel Analysis',
      paragraphs: ['Analyze parcels and land ownership information.'],
      bullets: [
        'Parcel boundaries',
        'Property information',
        'Area and perimeter calculation',
        'Public cadastral comparison'
      ],
      mediaAlt: 'Cadastral comparison screenshot'
    },
    {
      id: 'planning-zoning',
      title: 'Planning & Zoning',
      paragraphs: ['Understand how a property fits within planning regulations.'],
      bullets: ['General Local Plans', 'Zoning categories', 'Land-use restrictions', 'Development parameters'],
      mediaAlt: 'Planning and zoning (PPV) screenshot'
    },
    {
      id: 'spatial-analysis',
      title: 'Spatial Analysis Tools',
      paragraphs: ['Built-in GIS tools for decision-making.'],
      bullets: [
        'Buffer analysis',
        'Reachability analysis',
        'Site selection',
        'Measurements',
        'Overlay analysis',
        'Proximity analysis'
      ],
      mediaAlt: 'Spatial analysis workflow diagram'
    },
    {
      id: 'data-management',
      title: 'Data Management',
      paragraphs: ['Manage data without desktop GIS software.'],
      bullets: ['Create layers', 'Attribute management', 'CRS management', 'Import and export', 'Metadata support'],
      mediaAlt: 'Layer management screenshot'
    },
    {
      id: 'cartography-symbology',
      title: 'Cartography & Symbology',
      paragraphs: ['Create clear and professional map outputs.'],
      bullets: ['Labels', 'Single styles', 'Categorized styles', 'Graduated styles', 'Print-ready maps'],
      mediaAlt: 'Symbology dialog screenshot'
    },
    {
      id: 'open-standards',
      title: 'Open Standards',
      paragraphs: ['Built on proven open technologies.'],
      bullets: ['OpenLayers', 'GeoServer', 'PostgreSQL', 'PostGIS', 'GDAL', 'GeoExt', 'OGC Standards'],
      mediaAlt: 'Vertex platform architecture diagram'
    }
  ]
};

export const whyVertexContent = {
  title: 'Why Vertex?',
  intro: 'Most GIS workflows require:',
  chain: ['Desktop GIS', 'CAD', 'Planning Documents', 'Cadastral Data', 'Spreadsheets'],
  outcome: 'Vertex brings them together in one platform.',
  highlights: ['Less software.', 'Less duplication.', 'More decisions.']
};
