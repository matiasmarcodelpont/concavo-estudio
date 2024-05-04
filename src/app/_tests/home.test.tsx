import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Home from '../page'

jest.mock('@/data/data.ts', () => ({
  products: [
    {
      slug: 'azulejos-los-peores',
      name: 'Azulejos los peores',
      contributor: {
        slug: 'facu',
      },
    },
    {
      slug: 'azulejos-verdes',
      name: 'Azulejos verdes',
      contributor: null,
    },
    {
      slug: 'azulejos-los-mejores',
      name: 'Azulejos los mejores',
      contributor: {
        slug: 'mati',
      },
    },
    {
      slug: 'azulejos-azules',
      name: 'Azulejos azules',
      contributor: null,
    },
  ],
}))

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('renders concavo products', () => {
    render(<Home />)

    const productsList = screen.getByRole('list', { name: 'Productos Cóncavo' })
    expect(productsList).toBeInTheDocument()

    const products = within(productsList).getAllByRole('listitem')
    expect(products).toHaveLength(2)

    expect(products[0]).toBeInTheDocument()
    const link0 = within(products[0]).getByRole<HTMLAnchorElement>('link', { name: 'Azulejos verdes' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/azulejos-verdes$/)

    expect(products[1]).toBeInTheDocument()
    const link1 = within(products[1]).getByRole<HTMLAnchorElement>('link', { name: 'Azulejos azules' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/productos\/azulejos-azules$/)
  })
})
