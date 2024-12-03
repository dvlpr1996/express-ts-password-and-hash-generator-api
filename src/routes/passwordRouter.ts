import express from 'express';
import passwordController from '../controllers/passwordController';
import limitRequestBodyKeys from '../middlewares/limitRequestBodyKeys';

const passwordRouter = express.Router();

passwordRouter.use(limitRequestBodyKeys(6))
passwordRouter.post('/generate-password', passwordController.generatePassword);

export default passwordRouter;