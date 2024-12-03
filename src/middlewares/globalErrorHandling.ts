import { Request, Response, NextFunction } from 'express';

const globalErrorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
  const environment = process.env.NODE_ENV;

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(environment !== 'production' && { stack: err.stack }),
  });
};

export default globalErrorHandling;
