import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Ambiente from '@/app/casa/[slug]/page'

jest.mock('@/data/data.ts', () => ({
  ambientes: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      productos: [],
      colaboradores: [],
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
      colaboradores: [],
    },
  ],
  productos: [
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      colaborador: {
        slug: 'cocina-design',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      colaborador: {
        slug: 'muebles-arte',
      },
    },
    {
      slug: 'luz-led',
      name: 'Luz Led',
      colaborador: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'bacha-8080',
      name: 'Bacha 8080',
      colaborador: null,
    },
  ],
  colaboradores: [
    {
      slug: 'luz-viva',
      name: 'Luz Viva',
      website: 'www.luzviva.com',
      isMain: true,
      description:
        'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
      email: 'info@luzviva.com',
      address: 'Calle de la Luz 456, Ciudad Brillante, México',
    },
    {
      slug: 'cocina-design',
      name: 'Cocina Design',
      website: 'www.cocinadesign.com',
      isMain: false,
      description:
        'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
      email: null,
      address: null,
    },
    {
      slug: 'elegance',
      name: 'Elegance',
      website: 'www.pisoselegance.es',
      isMain: true,
      description:
        'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
      email: 'info@pisoselegance.com',
      address: 'Avenida del Diseño 123, Ciudad Elegante, España',
    },
    {
      slug: 'muebles-arte',
      name: 'Muebles de Arte',
      website: 'www.mueblesdearte.com',
      isMain: false,
      description: null,
      email: null,
      address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
    },
  ],
}))

describe('Ambiente', () => {
  it('renders Ambiente unchanged', () => {
    const { container } = render(
      <Ambiente
        params={{
          ambienteSlug: 'cocina',
        }}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Ambiente name', () => {
    render(
      <Ambiente
        params={{
          ambienteSlug: 'cocina',
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
          ambienteSlug: 'cocina',
        }}
      />,
    )

    const productosList = screen.getByRole('list', { name: 'Lista de Productos' })
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

  it("renders ambiente's main Colaboradores", () => {
    render(
      <Ambiente
        params={{
          ambienteSlug: 'cocina',
        }}
      />,
    )

    const ambienteMainColaboradoresList = screen.getByRole('list', {
      name: 'Lista de los principales Colaboradores del Ambiente',
    })
    expect(ambienteMainColaboradoresList).toBeInTheDocument()

    const ambienteMainColaboradores = within(ambienteMainColaboradoresList).getAllByRole('listitem')
    expect(ambienteMainColaboradores).toHaveLength(1)

    expect(ambienteMainColaboradores[0]).toBeInTheDocument()
    expect(ambienteMainColaboradores[0]).toHaveTextContent('Luz Viva')
  })

  it("renders ambiente's standard Colaboradores", () => {
    render(
      <Ambiente
        params={{
          ambienteSlug: 'cocina',
        }}
      />,
    )

    const ambienteStandardColaboradoresList = screen.getByRole('list', {
      name: 'Lista del resto de los Colaboradores del Ambiente',
    })
    expect(ambienteStandardColaboradoresList).toBeInTheDocument()

    const ambienteStandardColaboradores = within(ambienteStandardColaboradoresList).getAllByRole('listitem')
    expect(ambienteStandardColaboradores).toHaveLength(1)

    expect(ambienteStandardColaboradores[0]).toBeInTheDocument()
    expect(ambienteStandardColaboradores[0]).toHaveTextContent('Cocina Design')
  })

  it('shows the 404 page if producto is not found', () => {
    expect(() => {
      render(<Ambiente params={{ ambienteSlug: 'cuarto-inexistente' }} />)
    }).toThrow('NEXT_NOT_FOUND')
  })
})
