import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { MainColaborador, StandardColaborador } from './Colaborador'

const mainColaborador = {
  slug: 'elegance',
  name: 'Elegancee',
  contact: '',
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
})

const standardColaborador = {
  slug: 'muebles-arte',
  name: 'Muebles de Arte',
  contact: '',
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
