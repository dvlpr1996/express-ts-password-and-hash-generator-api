import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import {
  LOWERCASE_CHARS,
  NUMERIC_CHARS,
  SIMILAR_CHARS,
  SPECIAL_CHARS,
  UPPERCASE_CHARS,
} from 'src/config/constant/constants';
import { PasswordOptionType } from 'src/types/type';
import { errorMessageBag } from 'src/utils/utils';
import passwordOptionSchema from 'src/validation/PasswordOptionSchema';

const passwordController = {
  generatePassword: expressAsyncHandler(async (req: Request, res: Response): Promise<void> => {
    const validationFields = passwordOptionSchema.safeParse(req.body);

    if (!validationFields.success) {
      res.status(400).json({
        error: true,
        message: 'Validation error',
        errors: errorMessageBag(validationFields),
      });
      return;
    }

    const {
      length,
      uppercase = false,
      lowercase = false,
      numbers = false,
      specialChars = false,
      excludeSimilar = false,
    }: PasswordOptionType = validationFields.data;

    let allChars: string = '';
    if (uppercase) allChars += UPPERCASE_CHARS;
    if (lowercase) allChars += LOWERCASE_CHARS;
    if (numbers) allChars += NUMERIC_CHARS;
    if (specialChars) allChars += SPECIAL_CHARS;

    if (excludeSimilar) {
      allChars = allChars.replace(SIMILAR_CHARS, '');
    }

    if (!allChars) {
      throw new Error('At least one character type must be selected.');
    }

    let password: string = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    res.status(200).json({
      status: 'success',
      message: 'password generated successfully',
      data: [password],
    });
    return;
  }),
};

export default passwordController;
