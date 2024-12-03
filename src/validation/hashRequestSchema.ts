import { z } from 'zod';
import { algorithms } from '../config/algorithmsConfig';

const HashRequestSchema = z.object({
  algorithm: z
    .string()
    .refine(
      (val) =>
        Object.keys(algorithms).includes(
          val.toLowerCase()
        ),
      {
        message:
          `Unsupported algorithm. ${Object.keys(algorithms).join(', ')}`,
      }
    ),
  text: z.string().min(1, 'Text must not be empty.').max(150),
});

export type HashRequestType = z.infer<typeof HashRequestSchema>;

export default HashRequestSchema;
