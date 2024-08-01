import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Home from '../page'

jest.mock('@/data/data.tsx', () => ({
  productos: [
    {
      slug: 'azulejos-los-peores',
      name: 'Azulejos los peores',
      colaborador: {
        slug: 'facu',
      },
    },
    {
      slug: 'azulejos-verdes',
      name: 'Azulejos verdes',
      colaborador: null,
    },
    {
      slug: 'azulejos-los-mejores',
      name: 'Azulejos los mejores',
      colaborador: {
        slug: 'mati',
      },
    },
    {
      slug: 'azulejos-azules',
      name: 'Azulejos azules',
      colaborador: null,
    },
  ],
}))

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('renders a video with a link', () => {
    const component = render(<Home />)
    const video = component.getByTitle('Casa Cóncavo')

    const link = within(video.parentElement as HTMLElement).getByRole<HTMLAnchorElement>('link')
    expect(link.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/white-haven$/)
  })

  it('renders concavo productos', () => {
    render(<Home />)

    const productosList = screen.getByRole('list', { name: 'Nuestra tienda' })
    expect(productosList).toBeInTheDocument()

    const productos = within(productosList).getAllByRole('listitem')
    expect(productos).toHaveLength(2)
  })
})
