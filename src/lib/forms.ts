import {z} from 'zod';

export const formSchema = z.object({
  type: z.string().min(2),
  locale: z.enum(['ru', 'en', 'kk']),
  source: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  position: z.string().optional(),
  phone: z.string().optional(),
  topic: z.string().optional(),
  priority: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(Boolean)
});

export type FormPayload = z.infer<typeof formSchema>;
