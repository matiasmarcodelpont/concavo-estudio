import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Nosotros from '@/app/nosotros/page'

describe('Nosotros', () => {
  it('renders nosotros unchanged', () => {
    const { container } = render(<Nosotros />)
    expect(container).toMatchSnapshot()
  })
})
