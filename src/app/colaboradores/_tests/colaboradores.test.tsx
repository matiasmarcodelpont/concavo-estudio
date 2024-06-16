import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import Colaboradores from '../page'
import { DataSet } from '@/data/types'

jest.mock(
  '@/data/data.ts',
  () =>
    ({
      ambientes: [],
      productos: [],
      colaboradores: [
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          contact: 'luz-viva@contact.com',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          contact: 'cocina-design@contact.com',
        },
        {
          slug: 'elegance',
          name: 'Elegance',
          contact: 'Elegance',
        },
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          contact: 'muebles-de-arte@contact.com',
        },
      ],
    }) satisfies DataSet,
)

describe('Colaboradores', () => {
  it('renders Colaboradores unchanged', () => {
    const { container } = render(<Colaboradores />)
    expect(container).toMatchSnapshot()
  })

  it('renders Colaboradores name', () => {
    render(<Colaboradores />)

    const heading = screen.getByRole('heading', { name: 'Colaboradores' })
    expect(heading).toBeInTheDocument()
  })

  it('renders all Colaboradores', () => {
    render(<Colaboradores />)

    const ColaboradoresList = screen.getByRole('list')
    expect(ColaboradoresList).toBeInTheDocument()

    const colaboradores = within(ColaboradoresList).getAllByRole('listitem')
    expect(colaboradores).toHaveLength(4)
  })
})
