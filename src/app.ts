import express, { Request, Response } from 'express';
import router from './app/routes';
import cors from 'cors';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Car Rental Reservation');
});

app.use('/api', router);

app.use(globalErrorHandler);

app.use(notFound);
export default app;
