import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Academics from '../pages/Academics';
import Departments from '../pages/Departments';
import Faculty from '../pages/Faculty';
import Research from '../pages/Research';
import NewsEvents from '../pages/NewsEvents';
import AboutUs from '../pages/AboutUs';
import CampusLife from '../pages/CampusLife';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/academics',
    element: <Academics />,
  },
  {
    path: '/departments',
    element: <Departments />,
  },
  {
    path: '/faculty',
    element: <Faculty />,
  },
  {
    path: '/research',
    element: <Research />,
  },
  {
    path: '/news-events',
    element: <NewsEvents />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/campus-life',
    element: <CampusLife />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;