import express, { Request, Response } from 'express';
import test_controller from 'src/controllers/test_controller';
const passwordRouter = express.Router();

passwordRouter.get('/password-test', test_controller.index);

export default passwordRouter;