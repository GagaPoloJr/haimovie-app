import { routes } from '@/routes/route';
import { matchRoutes, useLocation } from 'react-router-dom';

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};
