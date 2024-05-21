import { render, within } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

import { usePathname } from 'next/navigation'
import { Header } from '../Header'
const mockedUsePathname = usePathname as jest.Mock

describe('Header', () => {
  mockedUsePathname.mockReturnValue('/')

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

  // TODO: Testear si se renderiza el logo de Casa Cóncavo o el de Estudio Cóncavo
})
