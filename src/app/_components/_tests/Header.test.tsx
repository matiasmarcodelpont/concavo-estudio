import { render, within } from '@testing-library/react'

import { Header } from '../Header'

describe('Header', () => {
  it('matches snapshot', () => {
    const { getByRole } = render(<Header />)
    const component = getByRole('banner')

    expect(component).toMatchSnapshot()
  })

  it('renders the logo', () => {
    const { getByRole } = render(<Header />)

    const logoWrapper = getByRole('link')
    within(logoWrapper).getByRole('img')
  })
})
