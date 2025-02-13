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

export interface CustomError extends Error {
  name: string;
  statusCode?: number;
  message: string;
  stack?: string;
  errors?: string[]; // For validation errors or custom error details
  code?: string | number; // Custom error code
  isOperational?: boolean;
  details?: string | object; // Optional additional details
}