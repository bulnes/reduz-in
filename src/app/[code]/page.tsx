import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'

interface RedirectPageProps {
  params: Promise<{ code: string }>
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { code } = await params

  const supabase = await createClient()

  // Get the original URL
  const { data, error } = await supabase
    .from('links')
    .select('original_url, clicks')
    .eq('short_code', code)
    .single()

  if (error || !data) {
    notFound()
  }

  // Increment click count (async, we don't necessarily need to wait for it before redirecting)
  // but for reliability in some serverless environments, we might want to wait.
  await supabase
    .from('links')
    .update({ clicks: (data.clicks || 0) + 1 })
    .eq('short_code', code)

  redirect(data.original_url)
}
