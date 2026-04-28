import { shortenUrl } from '../actions'
import { createClient } from '../../lib/supabase/server'
import { revalidatePath } from 'next/cache'

jest.mock('../../lib/supabase/server')
jest.mock('next/cache')
jest.mock('nanoid', () => ({
  nanoid: () => 'abc123',
}))

describe('actions', () => {
  const mockSupabase = {
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({ data: { short_code: 'abc123' }, error: null }),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(createClient as jest.Mock).mockResolvedValue(mockSupabase)
  })

  it('shortens a valid URL', async () => {
    const formData = new FormData()
    formData.append('url', 'https://example.com')

    const result = await shortenUrl(formData)

    expect(result.data).toEqual({ short_code: 'abc123' })
    expect(revalidatePath).toHaveBeenCalledWith('/')
    expect(mockSupabase.from).toHaveBeenCalledWith('links')
  })

  it('returns error for missing URL', async () => {
    const formData = new FormData()

    const result = await shortenUrl(formData)

    expect(result.error).toBe('URL is required')
  })

  it('returns error for invalid URL format', async () => {
    const formData = new FormData()
    formData.append('url', 'invalid-url')

    const result = await shortenUrl(formData)

    expect(result.error).toBe('Invalid URL format')
  })

  it('returns error when database insert fails', async () => {
    mockSupabase.single.mockResolvedValueOnce({ data: null, error: { message: 'DB Error' } })
    const formData = new FormData()
    formData.append('url', 'https://example.com')

    const result = await shortenUrl(formData)

    expect(result.error).toBe('Failed to shorten URL')
  })
})
