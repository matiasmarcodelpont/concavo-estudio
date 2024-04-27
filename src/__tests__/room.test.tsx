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
        {
          slug: 'luz-led',
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
      slug: 'luz-led',
      name: 'Luz Led',
      contributor: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'bacha-8080',
      name: 'Bacha 8080',
      contributor: null,
    },
  ],
  contributors: [
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

    const productsList = screen.getByRole('list', { name: 'Lista de Productos' })
    expect(productsList).toBeInTheDocument()

    const products = within(productsList).getAllByRole('listitem')
    expect(products).toHaveLength(2)

    expect(products[0]).toBeInTheDocument()
    const link0 = within(products[0]).getByRole<HTMLAnchorElement>('link', { name: 'Azulejos Guardados' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/productos\/azulejos-guardados$/)

    expect(products[1]).toBeInTheDocument()
    const link1 = within(products[1]).getByRole<HTMLAnchorElement>('link', { name: 'Luz Led' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/productos\/luz-led$/)
  })

  it("renders room's main Contributors", () => {
    render(
      <Room
        params={{
          roomSlug: 'cocina',
        }}
      />,
    )

    const roomMainContributorsList = screen.getByRole('list', {
      name: 'Lista de los principales Colaboradores del Ambiente',
    })
    expect(roomMainContributorsList).toBeInTheDocument()

    const roomMainContributors = within(roomMainContributorsList).getAllByRole('listitem')
    expect(roomMainContributors).toHaveLength(1)

    expect(roomMainContributors[0]).toBeInTheDocument()
    expect(roomMainContributors[0]).toHaveTextContent('Luz Viva')
  })

  it("renders room's standard Contributors", () => {
    render(
      <Room
        params={{
          roomSlug: 'cocina',
        }}
      />,
    )

    const roomStandardContributorsList = screen.getByRole('list', {
      name: 'Lista del resto de los Colaboradores del Ambiente',
    })
    expect(roomStandardContributorsList).toBeInTheDocument()

    const roomStandardContributors = within(roomStandardContributorsList).getAllByRole('listitem')
    expect(roomStandardContributors).toHaveLength(1)

    expect(roomStandardContributors[0]).toBeInTheDocument()
    expect(roomStandardContributors[0]).toHaveTextContent('Cocina Design')
  })

  it('shows the 404 page if product is not found', () => {
    expect(() => {
      render(<Room params={{ roomSlug: 'cuarto-inexistente' }} />)
    }).toThrow('NEXT_NOT_FOUND')
  })
})
