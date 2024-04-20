import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Equipo from '@/app/equipo/page'

describe('Equipo', () => {
  it('renders equipo unchanged', () => {
    const { container } = render(<Equipo />)
    expect(container).toMatchSnapshot()
  })
})
