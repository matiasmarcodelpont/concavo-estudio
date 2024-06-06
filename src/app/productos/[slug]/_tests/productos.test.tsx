import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Producto from '../page'

jest.mock('@/data/data.ts', () => ({
  ambientes: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      productos: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
      colaboradores: [],
    },
    {
      slug: 'escritorio',
      name: 'Escritorio',
      productos: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
      colaboradores: [],
    },
    {
      slug: 'cuarto-principal',
      name: 'Cuarto principal',
      productos: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'sofa-carlos',
        },
      ],
      colaboradores: [],
    },
  ],
  productos: [
    {
      slug: 'piso-madera',
      name: 'Piso simil Madera',
      colaborador: {
        slug: 'elegance',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de diseño con detalles de Hierro',
      colaborador: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      colaborador: {
        slug: 'muebles-arte',
      },
    },
  ],
  colaboradores: [],
}))

// Mocks needed for carousel component not to fail.
// See https://github.com/shadcn-ui/ui/issues/2823

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  })),
})

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
})

describe('Producto', () => {
  it('renders producto page unchanged', () => {
    const { container } = render(<Producto params={{ slug: 'lampara-hierro' }} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Producto name', () => {
    render(<Producto params={{ slug: 'lampara-hierro' }} />)

    const heading = screen.getAllByRole('heading', { level: 1, name: 'Lámpara de diseño con detalles de Hierro' })
    expect(heading[0]).toBeInTheDocument()
  })

  it('renders related productos', () => {
    render(<Producto params={{ slug: 'lampara-hierro' }} />)

    const productosList = screen.getByRole('list', { name: 'Productos relacionados' })
    expect(productosList).toBeInTheDocument()

    const productos = within(productosList).getAllByRole('listitem')
    expect(productos).toHaveLength(2)

    expect(productos[0]).toBeInTheDocument()
    const link0 = within(productos[0]).getByRole<HTMLAnchorElement>('link', { name: 'Piso simil Madera' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/piso-madera$/)

    expect(productos[1]).toBeInTheDocument()
    const link1 = within(productos[1]).getByRole<HTMLAnchorElement>('link', { name: 'Sofá Carlos V' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/productos\/sofa-carlos$/)
  })

  it('shows the 404 page if producto is not found', () => {
    expect(() => {
      render(<Producto params={{ slug: 'producto-inexistente' }} />)
    }).toThrow('NEXT_NOT_FOUND')
  })
})
