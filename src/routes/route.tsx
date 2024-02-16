import { Route, Routes } from 'react-router-dom';

// import MovieDetails from './MovieDetails';
import Homepage from '@/pages';
import MovieDetails from '@/pages/MovieDetails';
import Latest from '@/pages/Latest';
import Popular from '@/pages/Popular';
import Favorite from '@/pages/Favorite';

export const routes = [
  { path: '/', element: <Homepage /> },
  { path: '/movies', element: <Homepage /> },
  { path: '/latest', element: <Latest /> },
  { path: '/popular', element: <Popular /> },
  { path: '/favorite', element: <Favorite /> },
  { path: '/movies/:movieId', element: <MovieDetails /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
