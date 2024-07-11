import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Ambiente from '@/app/casa-concavo/[slug]/page'
import { DataSet } from '@/data/types'

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

jest.mock(
  '@/data/data.tsx',
  () =>
    ({
      ambientes: [
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          productos: [],
          images: [],
        },
        {
          slug: 'cocina',
          name: 'Cocina',
          productos: [
            {
              slug: 'azulejos-guardados',
            },
            {
              slug: 'luz-led',
            },
          ],
          images: [
            {
              src: '',
              width: 800,
              height: 600,
              puntitos: [{ productoSlug: 'azulejos-guardados', coordinates: { x: 400, y: 300 } }],
            },
          ],
        },
      ],
      productos: [
        {
          slug: 'azulejos-guardados',
          name: 'Azulejos Guardados',
          description: '',
          link: '',
          colaborador: {
            slug: 'cocina-design',
          },
        },
        {
          slug: 'sofa-carlos',
          name: 'Sofá Carlos V',
          description: '',
          link: '',
          colaborador: {
            slug: 'muebles-arte',
          },
        },
        {
          slug: 'luz-led',
          name: 'Luz Led',
          description: '',
          link: '',
          colaborador: {
            slug: 'luz-viva',
          },
        },
        {
          slug: 'bacha-8080',
          name: 'Bacha 8080',
          description: '',
          link: '',
          colaborador: null,
        },
      ],
      colaboradores: [
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          level: 'black',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          level: 'black',
        },
        {
          slug: 'elegance',
          name: 'Elegance',
          level: 'black',
        },
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          level: 'black',
        },
      ],
    }) satisfies DataSet,
)

describe('Ambiente', () => {
  it('renders Ambiente unchanged', () => {
    const { container } = render(
      <Ambiente
        params={{
          slug: 'cocina',
        }}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Ambiente name', () => {
    render(
      <Ambiente
        params={{
          slug: 'cocina',
        }}
      />,
    )

    const heading = screen.getByRole('heading', { level: 1, name: 'Cocina' })
    expect(heading).toBeInTheDocument()
  })

  it('renders Ambiente productos', () => {
    render(
      <Ambiente
        params={{
          slug: 'cocina',
        }}
      />,
    )

    const productosList = screen.getByRole('list', { name: 'Productos' })
    expect(productosList).toBeInTheDocument()

    const productos = within(productosList).getAllByRole('listitem')
    expect(productos).toHaveLength(2)

    expect(productos[0]).toBeInTheDocument()
    const link0 = within(productos[0]).getByRole<HTMLAnchorElement>('link', { name: 'Azulejos Guardados' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/azulejos-guardados$/)

    expect(productos[1]).toBeInTheDocument()
    const link1 = within(productos[1]).getByRole<HTMLAnchorElement>('link', { name: 'Luz Led' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/productos\/luz-led$/)
  })

  it("renders ambiente's Colaboradores", () => {
    render(
      <Ambiente
        params={{
          slug: 'cocina',
        }}
      />,
    )

    const ambienteColaboradoresList = screen.getByRole('list', {
      name: 'Colaboradores',
    })
    expect(ambienteColaboradoresList).toBeInTheDocument()

    const ambienteColaboradores = within(ambienteColaboradoresList).getAllByRole('listitem')
    expect(ambienteColaboradores).toHaveLength(2)

    expect(ambienteColaboradores[0]).toBeInTheDocument()
    within(ambienteColaboradores[0]).getByRole('img', { name: 'Luz Viva' })
  })

  it('shows the 404 page if producto is not found', () => {
    expect(() => {
      render(<Ambiente params={{ slug: 'cuarto-inexistente' }} />)
    }).toThrow('NEXT_NOT_FOUND')
  })
})
