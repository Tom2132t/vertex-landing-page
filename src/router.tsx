import { createBrowserRouter } from 'react-router-dom';
import { CadPage } from './pages/CadPage';
import { ContactPage } from './pages/ContactPage';
import { GisSolutionsPage } from './pages/GisSolutionsPage';
import { HomePage } from './pages/HomePage';
import { PhotogrammetryPage } from './pages/PhotogrammetryPage';
import { SurveyingPage } from './pages/SurveyingPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/surveying',
      element: <SurveyingPage />
    },
    {
      path: '/gis-solutions',
      element: <GisSolutionsPage />
    },
    {
      path: '/photogrammetry',
      element: <PhotogrammetryPage />
    },
    {
      path: '/cad',
      element: <CadPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);
