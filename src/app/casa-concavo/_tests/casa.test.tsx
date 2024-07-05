import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import CasaConcavo from '@/app/casa-concavo/page'

jest.mock('@/data/data.ts', () => ({
  ambientes: [
    {
      slug: 'cocina',
      name: 'Cocina',
    },
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
    },
  ],
  colaboradores: [
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
      slug: 'muebles-arte',
      name: 'Muebles de Arte',
      website: 'www.mueblesdearte.com',
      isMain: false,
      description: null,
      email: null,
      address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
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
  ],
}))

describe('Casa Cóncavo', () => {
  it('renders Casa Cóncavo unchanged', () => {
    const { container } = render(<CasaConcavo />)
    expect(container).toMatchSnapshot()
  })

  it('renders Casa Cóncavo ambientes', () => {
    render(<CasaConcavo />)

    const ambientesList = screen.getByRole('list', { name: 'Lista de Ambientes' })
    expect(ambientesList).toBeInTheDocument()

    const ambientes = within(ambientesList).getAllByRole('listitem')
    expect(ambientes).toHaveLength(2)

    expect(ambientes[0]).toBeInTheDocument()
    const link0 = within(ambientes[0]).getByRole<HTMLAnchorElement>('link', { name: 'Cocina' })
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/casa\/cocina$/)

    expect(ambientes[1]).toBeInTheDocument()
    const link1 = within(ambientes[1]).getByRole<HTMLAnchorElement>('link', { name: 'Living/Comedor' })
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/casa\/living-comedor$/)
  })
})
