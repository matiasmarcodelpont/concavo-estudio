import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Page from '../app/page'

jest.mock('../data/data.json', () => ({
  products: [
    {
      slug: 'azulejos-los-peores',
      name: 'Azulejos los peores',
      sponsor: {
        slug: 'facu',
      },
    },
    {
      slug: 'azulejos-verdes',
      name: 'Azulejos verdes',
      sponsor: null,
    },
    {
      slug: 'azulejos-los-mejores',
      name: 'Azulejos los mejores',
      sponsor: {
        slug: 'mati',
      },
    },
    {
      slug: 'azulejos-azules',
      name: 'Azulejos azules',
      sponsor: null,
    },
  ],
}))

describe('Page', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })

  it('renders concavo products', () => {
    render(<Page />)

    const productsList = screen.getByRole('list')
    expect(productsList).toBeInTheDocument()

    const products = within(productsList).getAllByRole('listitem')
    expect(products).toHaveLength(2)

    expect(products[0]).toBeInTheDocument()
    const link0 = within(products[0]).getByRole('link', { name: 'Azulejos verdes' }) as HTMLAnchorElement
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/products\/azulejos-verdes$/)

    expect(products[1]).toBeInTheDocument()
    const link1 = within(products[1]).getByRole('link', { name: 'Azulejos azules' }) as HTMLAnchorElement
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/products\/azulejos-azules$/)
  })
})