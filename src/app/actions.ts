'use server'

import { nanoid } from 'nanoid'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function shortenUrl(formData: FormData) {
  const originalUrl = formData.get('url') as string

  if (!originalUrl) {
    return { error: 'URL is required' }
  }

  try {
    // Basic URL validation
    new URL(originalUrl)
  } catch {
    return { error: 'Invalid URL format' }
  }

  const supabase = await createClient()
  const shortCode = nanoid(6) // Generate a 6-character code

  const { data, error } = await supabase
    .from('links')
    .insert([
      {
        original_url: originalUrl,
        short_code: shortCode,
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error shortening URL:', error)
    return { error: 'Failed to shorten URL' }
  }

  revalidatePath('/')
  return { data }
}
