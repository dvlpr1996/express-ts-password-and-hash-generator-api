import { ValidationError, ValidationErrorResult } from 'src/types/type';
import { ZodIssue } from 'zod';

export const errorMessageBag = (validationResult: ValidationErrorResult): ValidationError[] => {
  return validationResult.error.errors.map((err: ZodIssue) => ({
    field: err.path[0],
    message: err.message,
  }));
};
