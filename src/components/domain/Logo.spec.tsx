import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Logo from './Logo'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  ) => <img {...props} />,
}))

describe('Logo', () => {
  it('matches snapshot', () => {
    const { getByRole } = render(<Logo />)
    const component = getByRole('img')

    expect(component).toMatchSnapshot()
  })

  it('renders the logo', () => {
    const { getByAltText } = render(<Logo />)

    const logo = getByAltText('Cóncavo')

    expect(logo).toHaveAttribute('src', '/logos/concavo_black.png')
  })
})
