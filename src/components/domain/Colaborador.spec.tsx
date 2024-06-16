import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Colaborador } from './Colaborador'

const colaborador = {
  slug: 'elegance',
  name: 'Elegance',
  contact: 'contact@contact.com',
}

describe('Colaborador', () => {
  it('matches snapshot', () => {
    const { container } = render(<Colaborador {...colaborador} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the colaborador image with the alt text', () => {
    const { getByAltText } = render(<Colaborador {...colaborador} />)

    const image = getByAltText(colaborador.name)
    expect(image).toBeInTheDocument()
  })
})
