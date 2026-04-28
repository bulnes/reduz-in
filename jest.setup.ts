import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Polyfill for Web APIs that JSDOM is missing
if (typeof global.Request === 'undefined') {
  global.Request = globalThis.Request
  global.Response = globalThis.Response
  global.Headers = globalThis.Headers
  global.fetch = globalThis.fetch
}

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

jest.mock('nanoid', () => ({
  nanoid: () => 'abc123',
}))
