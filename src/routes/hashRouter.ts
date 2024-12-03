import express from 'express';
import hashController from '../controllers/hashController';
import limitRequestBodyKeys from '../middlewares/limitRequestBodyKeys';

const hashRouter = express.Router();

hashRouter.use(limitRequestBodyKeys(2))
hashRouter.post('/hash-password', hashController.generateHash);

export default hashRouter;
