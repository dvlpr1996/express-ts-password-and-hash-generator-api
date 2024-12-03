import { ZodIssue } from "zod";
import { algorithms } from "../config/algorithmsConfig";

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

export type AlgorithmKey = keyof typeof algorithms;
