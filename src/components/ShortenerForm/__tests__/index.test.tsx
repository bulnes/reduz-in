import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import ShortenerForm from '../index'
import * as actions from '../../../app/actions'

// Mock the shortenUrl action
jest.mock('../../../app/actions', () => ({
  shortenUrl: jest.fn(),
}))

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  },
})

describe('ShortenerForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
    ;(actions.shortenUrl as jest.Mock).mockResolvedValue({
      data: { short_code: 'abc123' },
    })
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders correctly', () => {
    render(<ShortenerForm />)
    expect(screen.getByPlaceholderText(/Cole sua URL longa aqui/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Reduzir/i })).toBeInTheDocument()
  })

  it('updates input value on change', () => {
    render(<ShortenerForm />)
    const input = screen.getByPlaceholderText(/Cole sua URL longa aqui/i) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'https://example.com' } })
    expect(input.value).toBe('https://example.com')
  })

  it('shows loading state and result after submission', async () => {
    render(<ShortenerForm />)
    const input = screen.getByPlaceholderText(/Cole sua URL longa aqui/i)
    const button = screen.getByRole('button', { name: /Reduzir/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    // Check loading state (Branch on line 51)
    expect(button).toHaveTextContent('...')
    expect(button).toBeDisabled()

    // Fast-forward timers for the simulation
    act(() => {
      jest.advanceTimersByTime(600)
    })

    // Check result (Branch on line 56)
    await waitFor(() => {
      expect(screen.getByText(/Seu link encurtado:/i)).toBeInTheDocument()
    })

    expect(screen.getByText(/localhost\/abc123/i)).toBeInTheDocument()
    expect(button).toHaveTextContent('Reduzir')
    expect(button).not.toBeDisabled()
  })

  it('copies shortened URL to clipboard', async () => {
    render(<ShortenerForm />)
    const input = screen.getByPlaceholderText(/Cole sua URL longa aqui/i)
    const button = screen.getByRole('button', { name: /Reduzir/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    act(() => {
      jest.advanceTimersByTime(600)
    })

    const copyBtn = await screen.findByRole('button', { name: /Copiar/i })

    // Initial state (Branch on line 67)
    expect(copyBtn).toHaveClass('btn-dark')

    fireEvent.click(copyBtn)

    expect(navigator.clipboard.writeText).toHaveBeenCalled()
    // Copied state (Branch on line 67)
    await waitFor(() => {
      expect(copyBtn).toHaveClass('btn-success')
      expect(copyBtn).toHaveTextContent(/Copiado!/i)
    })

    // Wait for the text to revert
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(copyBtn).toHaveTextContent(/Copiar/i)
  })
})
