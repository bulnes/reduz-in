import { render } from '@testing-library/react'
import BootstrapClient from '../index'

describe('BootstrapClient', () => {
  it('renders without crashing', () => {
    const { container } = render(<BootstrapClient />)
    expect(container).toBeEmptyDOMElement()
  })
})
