import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

const test_controller = {
  index: expressAsyncHandler(async (req: Request, res: Response) => {
    res.send('All tests');
  }),
};

export default test_controller;
