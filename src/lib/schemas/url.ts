import { z } from 'zod'

export const urlSchema = z.object({
  url: z.string().url({ message: 'Invalid URL format' }),
  slug: z
    .string()
    .min(3, { message: 'Slug must be at least 3 characters long' })
    .max(20, { message: 'Slug must be at most 20 characters long' })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: 'Slug can only contain letters, numbers, underscores and hyphens',
    })
    .optional(),
})

export type UrlInput = z.infer<typeof urlSchema>
