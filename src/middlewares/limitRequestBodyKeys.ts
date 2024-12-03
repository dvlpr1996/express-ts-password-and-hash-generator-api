import { NextFunction, Request, Response } from 'express';

const limitRequestBodyKeys = (maxKeys: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const bodyKeysCount = Object.keys(req.body).length;
    if (bodyKeysCount > maxKeys) {
      res.status(400).json({
        errors: true,
        message: `Request body contains too many keys. Maximum allowed is ${maxKeys}`,
      });
      return;
    }
    next();
  };
};

export default limitRequestBodyKeys;
