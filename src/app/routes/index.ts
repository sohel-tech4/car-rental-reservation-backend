import { Router } from 'express';
import { carRoutes } from '../module/Car/car.route';
import { bookingRoutes } from '../module/Booking/booking.route';
import { authRouter } from '../module/Auth/auth.route';

const router = Router();

const moduleRoute = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/cars',
    route: carRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
