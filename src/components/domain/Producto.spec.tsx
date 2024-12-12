import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Producto } from './Producto'

const producto = {
  slug: 'piso-madera',
  name: 'Piso simil Madera',
  description: '',
  link: null,
}

const productoConcavo = {
  slug: 'super-bacha',
  name: 'Super bacha',
  description: '',
  link: null,
  dimensions: 'AA X LL X HH',
}

describe('Producto', () => {
  it('matches snapshot', () => {
    const { container } = render(<Producto {...producto} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the producto image with the alt text', () => {
    const component = render(<Producto {...producto} />)
    component.getByAltText(producto.name)
  })

  it('should render the product as a link to the product page', () => {
    const component = render(<Producto {...producto} />)
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', `/productos/${producto.slug}`)
  })

  it('should render the producto name', () => {
    const component = render(<Producto {...producto} />)
    component.getByText(producto.name)
  })

  it('should not render the dimensions if the producto is from concavo', () => {
    const component = render(<Producto {...producto} />)
    const dimensions = component.queryByRole('paragraph', { name: 'dimensions' })

    expect(dimensions).not.toBeInTheDocument()
  })

  it('should render the dimensions if the producto is from concavo', () => {
    const component = render(<Producto {...productoConcavo} concavo />)
    const dimensions = component.getByRole('paragraph', { name: 'dimensions' })

    expect(dimensions).toBeInTheDocument()
  })
})
