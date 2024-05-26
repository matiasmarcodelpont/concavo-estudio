import { render } from '@testing-library/react'

import { Footer } from '../Footer'
import { productosRepository } from '@/controllers'
import { Producto } from '@/data/types'

jest.mock('@/controllers', () => ({
  productosRepository: {
    getProductosInAmbiente: jest.fn(),
  },
}))

describe('Footer', () => {
  type GetProductosInAmbiente = (slug: string) => Producto[]
  ;(productosRepository.getProductosInAmbiente as jest.MockedFunction<GetProductosInAmbiente>).mockImplementation(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (slug) => {
      return [
        { name: `Producto 1 in ${slug}`, slug: `producto-1-${slug}` },
        { name: `Producto 2 in ${slug}`, slug: `producto-2-${slug}` },
      ]
    },
  )

  const ambientes = [
    { name: 'Ambiente 1', slug: 'ambiente-1' },
    { name: 'Ambiente 2', slug: 'ambiente-2' },
  ]

  it('matches snapshot', () => {
    const { getByRole } = render(<Footer ambientes={ambientes} />)
    const component = getByRole('contentinfo')

    expect(component).toMatchSnapshot()
  })

  it('has the home links', () => {
    const { getByRole } = render(<Footer ambientes={ambientes} />)

    const anchor1 = getByRole('link', { name: 'Cóncavo' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/$/)

    const anchor2 = getByRole('link', { name: 'Productos Cóncavo' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/#productos-concavo$/)

    const anchor3 = getByRole('link', { name: 'Casa Cóncavo' }) as HTMLAnchorElement
    expect(anchor3.href).toMatch(/^https?:\/\/[^/]+\/casa$/)
  })

  it('has the ambiente links', () => {
    const { getByRole } = render(<Footer ambientes={ambientes} />)

    const anchor1 = getByRole('link', { name: 'Ambiente 1' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/casa\/ambiente-1$/)

    const anchor2 = getByRole('link', { name: 'Ambiente 2' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/casa\/ambiente-2$/)
  })

  it('has the producto links', () => {
    const { getByRole } = render(<Footer ambientes={ambientes} />)

    const anchor1 = getByRole('link', { name: 'Producto 1 in ambiente-1' }) as HTMLAnchorElement
    expect(anchor1.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-1-ambiente-1$/)

    const anchor2 = getByRole('link', { name: 'Producto 2 in ambiente-1' }) as HTMLAnchorElement
    expect(anchor2.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-2-ambiente-1$/)

    const anchor3 = getByRole('link', { name: 'Producto 1 in ambiente-2' }) as HTMLAnchorElement
    expect(anchor3.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-1-ambiente-2$/)

    const anchor4 = getByRole('link', { name: 'Producto 2 in ambiente-2' }) as HTMLAnchorElement
    expect(anchor4.href).toMatch(/^https?:\/\/[^/]+\/productos\/producto-2-ambiente-2$/)
  })

  it('has Concavo logo', () => {
    const { getByAltText } = render(<Footer ambientes={ambientes} />)
    getByAltText('Logo Cóncavo')
  })

  it('has social media links', () => {
    const { getByLabelText } = render(<Footer ambientes={ambientes} />)

    const instagramAnchor = getByLabelText('instagram') as HTMLAnchorElement
    expect(instagramAnchor.href).toBe('https://www.instagram.com/concavoestudio/')

    const mailAmchor = getByLabelText('email') as HTMLAnchorElement
    expect(mailAmchor.href).toBe('mailto:ventas@concavoestudio.com')
  })
})
