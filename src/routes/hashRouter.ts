import express, { Request, Response } from 'express';
import test_controller from 'src/controllers/test_controller';
const hashRouter = express.Router();

hashRouter.get('/hash-test', test_controller.index);

export default hashRouter;
