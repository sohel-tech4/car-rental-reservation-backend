import { Router } from 'express';
import { AuthRouter } from '../module/Auth/auth.route';
import { CarRoutes } from '../module/Car/car.route';

const router = Router();

const moduleRoute = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/cars',
    route: CarRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
