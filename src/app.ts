import express, { Application, Request, Response, NextFunction } from 'express';
import rateLimitConfig from './config/rateLimitConfig';
import bodyParser from 'body-parser';
import timeout from 'connect-timeout';
import compression from 'compression';
import helmet from 'helmet';
import passwordRouter from './routes/passwordRouter';
import hashRouter from './routes/hashRouter';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFoundErrorHandler from './middlewares/notFoundErrorHandler';
import ApiError from './errors/apiError';

const app: Application = express();

app.use(timeout('20s'));
app.use((req: Request, _res: Response, next: NextFunction) => {
  if (!req.timedout) next();
});

app.use(compression());
app.use(helmet());

app.use(
  bodyParser.json({
    inflate: true,
    limit: '10KB',
    strict: true,
    type: 'application/json',
  })
);

app.use(
  bodyParser.urlencoded({
    inflate: true,
    extended: false,
    limit: '10KB',
    parameterLimit: 1,
    type: 'application/x-www-form-urlencoded',
  })
);

app.use(rateLimitConfig);

app.use('/api/v1', passwordRouter);
app.use('/api/v1', hashRouter);

app.all('*', (req: Request, _res: Response, _next: NextFunction) => {
  throw new ApiError(`The Route '${req.originalUrl}' Does Not Exist`, 404, [], 'NOT_FOUND');
});

app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

export default app;
