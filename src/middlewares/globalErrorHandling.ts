import { Request, Response, NextFunction } from 'express';

const globalErrorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};

export default globalErrorHandling;
