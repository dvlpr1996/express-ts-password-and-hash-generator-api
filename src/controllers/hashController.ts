import { Request, Response } from 'express';
import { AlgorithmKey } from '../types/type';
import { errorMessageBag } from '../utils/utils';
import { algorithms } from '../config/algorithmsConfig';
import expressAsyncHandler from 'express-async-handler';
import HashRequestSchema, { HashRequestType } from '../validation/hashRequestSchema';
import CryptoJS from 'crypto-js';

const hashController = {
  generateHash: expressAsyncHandler(async (req: Request, res: Response) => {
    const validationResult = HashRequestSchema.safeParse(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        error: true,
        message: 'Validation error',
        errors: errorMessageBag(validationResult),
      });
      return;
    }

    const { algorithm, text }: HashRequestType = validationResult.data as HashRequestType;

    const algoMethod = algorithms[algorithm.toLowerCase() as AlgorithmKey];

    if (!algoMethod) {
      res
        .status(400)
        .json({ error: true, statusCode: 400, message: `Unsupported algorithm ${algorithm}` });
      return;
    }

    const hashAlgoMethod = algoMethod(text);
    // Convert hash to a hex string
    const hash = hashAlgoMethod.toString(CryptoJS.enc.Hex);

    res.status(200).json({
      status: 'success',
      message: 'Hash generated successfully',
      data: { algorithm, hash },
    });
    return;
  }),
};

export default hashController;
