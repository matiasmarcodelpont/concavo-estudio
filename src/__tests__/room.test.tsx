import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Room from '@/app/casa/[roomSlug]/page'

jest.mock('../data/data.json', () => ({
  rooms: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      products: [],
      contributors: [],
    },
    {
      slug: 'cocina',
      name: 'Cocina',
      products: [
        {
          slug: 'azulejos-guardados',
        },
      ],
      contributors: [],
    },
  ],
  products: [
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      contributor: {
        slug: 'cocina-design',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      contributor: {
        slug: 'muebles-arte',
      },
    },
    {
      slug: 'bacha-8080',
      name: 'Bacha 8080',
      contributor: null,
    },
  ],
}))

describe('Room', () => {
  it('renders Room unchanged', () => {
    const { container } = render(
      <Room
        params={{
          roomSlug: 'cocina',
        }}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Room name', () => {
    render(
      <Room
        params={{
          roomSlug: 'cocina',
        }}
      />,
    )

    const heading = screen.getByRole('heading', { level: 1, name: 'Cocina' })
    expect(heading).toBeInTheDocument()
  })

  it('renders Room products', () => {
    render(
      <Room
        params={{
          roomSlug: 'cocina',
        }}
      />,
    )

    const productsList = screen.getByRole('list')
    expect(productsList).toBeInTheDocument()

    const products = within(productsList).getAllByRole('listitem')
    expect(products).toHaveLength(1)

    expect(products[0]).toBeInTheDocument()
    const link0 = within(products[0]).getByRole('link', { name: 'Azulejos Guardados' }) as HTMLAnchorElement
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/azulejos-guardados$/)
  })
})
