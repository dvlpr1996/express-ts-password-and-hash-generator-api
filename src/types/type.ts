import { ZodIssue } from "zod";

export type PasswordOptionType = {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  specialChars?: boolean;
  excludeSimilar?: boolean;
};

export interface ValidationErrorResult {
  error: { errors: ZodIssue[] };
}

export interface ValidationError {
  field: string | number;
  message: string;
}
