import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Product from '@/app/productos/[productSlug]/page'

jest.mock('../data/data.json', () => ({
  rooms: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      products: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
      contributors: [],
    },
    {
      slug: 'escritorio',
      name: 'Escritorio',
      products: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
      contributors: [],
    },
    {
      slug: 'cuarto-principal',
      name: 'Cuarto principal',
      products: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'sofa-carlos',
        },
      ],
      contributors: [],
    },
  ],
  products: [
    {
      slug: 'piso-madera',
      name: 'Piso simil Madera',
      contributor: {
        slug: 'elegance',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de diseño con detalles de Hierro',
      contributor: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      contributor: {
        slug: 'muebles-arte',
      },
    },
  ],
  contributors: [],
}))

describe('Product', () => {
  it('renders product page unchanged', () => {
    const { container } = render(<Product params={{ productSlug: 'lampara-hierro' }} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Product name', () => {
    render(<Product params={{ productSlug: 'lampara-hierro' }} />)

    const heading = screen.getByRole('heading', { level: 1, name: 'Lámpara de diseño con detalles de Hierro' })
    expect(heading).toBeInTheDocument()
  })

  it('renders related products', () => {
    render(<Product params={{ productSlug: 'lampara-hierro' }} />)

    const productsList = screen.getByRole('list', { name: 'Lista de productos relacionados' })
    expect(productsList).toBeInTheDocument()

    const products = within(productsList).getAllByRole('listitem')
    expect(products).toHaveLength(2)

    expect(products[0]).toBeInTheDocument()
    const link0 = within(products[0]).getByRole<HTMLAnchorElement>('link', { name: 'Piso simil Madera' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/piso-madera$/)

    expect(products[1]).toBeInTheDocument()
    const link1 = within(products[1]).getByRole<HTMLAnchorElement>('link', { name: 'Sofá Carlos V' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/productos\/sofa-carlos$/)
  })

  it('shows the 404 page if product is not found', () => {
    expect(() => {
      render(<Product params={{ productSlug: 'producto-inexistente' }} />)
    }).toThrow('NEXT_NOT_FOUND')
  })
})
