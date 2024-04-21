import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'

import CasaConcavo from '@/app/casa/page'

jest.mock('../data/data.json', () => ({
  rooms: [
    {
      slug: 'cocina',
      name: 'Cocina',
    },
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
    },
  ],
}))

describe('Casa Cóncavo', () => {
  it('renders Casa Cóncavo unchanged', () => {
    const { container } = render(<CasaConcavo />)
    expect(container).toMatchSnapshot()
  })

  it('renders Casa Cóncavo rooms', () => {
    render(<CasaConcavo />)

    const roomsList = screen.getByRole('list')
    expect(roomsList).toBeInTheDocument()

    const rooms = within(roomsList).getAllByRole('listitem')
    expect(rooms).toHaveLength(2)

    expect(rooms[0]).toBeInTheDocument()
    const link0 = within(rooms[0]).getByRole('link', { name: 'Cocina' }) as HTMLAnchorElement
    expect(link0).toBeInTheDocument()
    expect(link0.href).toMatch(/^https?:\/\/[^/]+\/ambientes\/cocina$/)

    expect(rooms[1]).toBeInTheDocument()
    const link1 = within(rooms[1]).getByRole('link', { name: 'Living/Comedor' }) as HTMLAnchorElement
    expect(link1).toBeInTheDocument()
    expect(link1.href).toMatch(/^https?:\/\/[^/]+\/ambientes\/living-comedor$/)
  })
})
