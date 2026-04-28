import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Links curtos, grandes resultados/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the shortener form', () => {
    render(<Home />)
    const input = screen.getByPlaceholderText(/Cole sua URL longa aqui/i)
    expect(input).toBeInTheDocument()
  })
})
