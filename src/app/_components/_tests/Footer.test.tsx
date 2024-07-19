import { render } from '@testing-library/react'

import { Footer } from '../Footer'

jest.mock('@/controllers', () => ({
  productosRepository: {
    getProductosConcavo: jest.fn().mockReturnValue([
      { name: `Producto 1`, slug: `producto-1` },
      { name: `Producto 2`, slug: `producto-2` },
    ]),
  },
  ambientesRepository: {
    getAmbientes: jest.fn().mockReturnValue([
      { name: 'Ambiente 1', slug: 'ambiente-1' },
      { name: 'Ambiente 2', slug: 'ambiente-2' },
    ]),
  },
}))

jest.mock('@/components/ui/qr', () => ({
  Qr: ({ value, onClick }: { value: string; onClick: React.MouseEventHandler<HTMLDivElement> }) => (
    <div data-testid='mock-qr' onClick={onClick}>
      Mock QR Code: {value}
    </div>
  ),
}))

describe('Footer', () => {
  it('matches snapshot', () => {
    const { getByRole } = render(<Footer />)
    const component = getByRole('contentinfo')

    expect(component).toMatchSnapshot()
  })

  it('has the home links', () => {
    const { getByRole } = render(<Footer />)

    const anchor1 = getByRole('link', { name: 'Cóncavo' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/$/)

    const anchor2 = getByRole('link', { name: 'Productos Cóncavo' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/#productos-concavo$/)

    const anchor3 = getByRole('link', { name: 'Casa Cóncavo' }) as HTMLAnchorElement
    expect(anchor3.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo$/)
  })

  it('has the ambiente links', () => {
    const { getByRole } = render(<Footer />)

    const anchor1 = getByRole('link', { name: 'Ambiente 1' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/ambiente-1$/)

    const anchor2 = getByRole('link', { name: 'Ambiente 2' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/ambiente-2$/)
  })

  it('has the producto links', () => {
    const { getByRole } = render(<Footer />)

    const anchor1 = getByRole('link', { name: 'Producto 1' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-1$/)

    const anchor2 = getByRole('link', { name: 'Producto 2' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-2$/)
  })

  it('has Concavo logo', () => {
    const { getByAltText } = render(<Footer />)
    getByAltText('Logo Cóncavo')
  })

  it('has social media links', () => {
    const { getByLabelText } = render(<Footer />)

    const instagramAnchor = getByLabelText('instagram') as HTMLAnchorElement
    expect(instagramAnchor.href).toBe('https://www.instagram.com/concavoestudio/')

    const mailAmchor = getByLabelText('email') as HTMLAnchorElement
    expect(mailAmchor.href).toBe('mailto:ventas@concavoestudio.com')
  })
})
