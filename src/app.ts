import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/user/user.route';
import { StudentRoutes } from './modules/student/student.route';
// import globalErrorHandller from './modules/middleware/globalErrorhandller';
import notFound from './modules/middleware/notFound';
import { AcademicSemesterRoutes } from './modules/AcademicSemester/AcademicSemester.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

// app.use(globalErrorHandller);

app.use(notFound);
app.get('/', getAController);

export default app;
