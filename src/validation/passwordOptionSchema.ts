import { z } from 'zod';

export const passwordOptionSchema = z
  .object({
    length: z.number().min(1).max(128).optional().default(8),
    uppercase: z.boolean().optional().default(false),
    lowercase: z.boolean().optional().default(false),
    numbers: z.boolean().optional().default(false),
    specialChars: z.boolean().optional().default(false),
    excludeSimilar: z.boolean().optional().default(false),
  })
  .refine((data) => data.uppercase || data.lowercase || data.numbers || data.specialChars, {
    message: 'At least one character type must be selected (uppercase, lowercase, numbers, special characters).',
    path: ['characterTypes'],
  });

export default passwordOptionSchema;
