import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { MainColaborador, StandardColaborador } from './colaborador'

const mainColaborador = {
  slug: 'elegance',
  name: 'Elegancee',
  imageUrl: '/colaboradores/elegance.png',
  website: 'https://www.pisoselegance.es',
  isMain: true,
  description:
    'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
  email: 'info@pisoselegance.com',
  address: 'Avenida del Diseño 123, Ciudad Elegante, España',
}

describe('MainColaborador', () => {
  it('matches snapshot', () => {
    const { container } = render(<MainColaborador {...mainColaborador} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the colaborador image with the alt text', () => {
    const { getByAltText } = render(<MainColaborador {...mainColaborador} />)

    const image = getByAltText(mainColaborador.name)
    expect(image).toBeInTheDocument()
  })

  it('should render the colaborador description', () => {
    const { getByText } = render(<MainColaborador {...mainColaborador} />)

    const descriptionElement = getByText(mainColaborador.description)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should render the colaborador address', () => {
    const { getByText } = render(<MainColaborador {...mainColaborador} />)

    const addressElement = getByText(mainColaborador.address)
    expect(addressElement).toBeInTheDocument()
  })

  it('should render the colaborador email and website links', () => {
    const { getByRole } = render(<MainColaborador {...mainColaborador} />)

    const emailLink = getByRole('link', { name: mainColaborador.email })
    expect(emailLink).toHaveAttribute('href', `mailto:${mainColaborador.email}`)

    const websiteLink = getByRole('link', { name: 'www.pisoselegance.es' })
    expect(websiteLink).toHaveAttribute('href', mainColaborador.website)
  })
})

const standardColaborador = {
  slug: 'muebles-arte',
  name: 'Muebles de Arte',
  imageUrl: '/colaboradores/muebles_arte.png',
  website: 'https://www.mueblesdearte.com',
}

describe('StandardColaborador', () => {
  it('matches snapshot', () => {
    const { container } = render(<StandardColaborador {...standardColaborador} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the colaborador image with the alt text', () => {
    const { getByAltText } = render(<StandardColaborador {...standardColaborador} />)

    const image = getByAltText(standardColaborador.name)
    expect(image).toBeInTheDocument()
  })
})
