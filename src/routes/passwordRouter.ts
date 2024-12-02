import express from 'express';
import passwordController from '../controllers/passwordController';

const passwordRouter = express.Router();

passwordRouter.post('/generate-password', passwordController.generatePassword);

export default passwordRouter;