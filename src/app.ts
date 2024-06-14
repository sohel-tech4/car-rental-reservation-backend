import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/user/user.route';
import { StudentRoutes } from './modules/student/student.route';
import notFound from './modules/middleware/notFound';
import { AcademicSemesterRoutes } from './modules/AcademicSemester/AcademicSemester.route';
import globalErrorHandler from './modules/middleware/globalErrorhandller';
import { AcademicFacultyRoutes } from './modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from './modules/academicDepartment/academicDepartment.route';
import { Server } from 'http';

let server: Server;

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semester', AcademicSemesterRoutes);
app.use('/api/v1/academic-faculty', AcademicFacultyRoutes);
app.use('/api/v1/academic-department', AcademicDepartmentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello PH University');
};

const test = async (req: Request, res: Response) => {};
app.get('/', test);

process.on('unhandledRejection', () => {
  console.log('UnhandledRejection is detected, shutting down');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('uncaughtException is detected, shutting down');
  process.exit(1);
});

app.use(globalErrorHandler);

app.use(notFound);
app.get('/', getAController);

export default app;
