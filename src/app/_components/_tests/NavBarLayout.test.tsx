import { render } from '@testing-library/react'
import { NavBarLayout } from '@/app/_components/NavBarLayout'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  })
})

describe('NavBarLayout', () => {
  it('renders links to all pages and to each ambiente', () => {
    const { getByRole, getByText } = render(
      <NavBarLayout
        opened
        ambientes={[
          { name: 'Ambiente 1', slug: 'ambiente-1' },
          { name: 'Ambiente 2', slug: 'ambiente-2' },
          { name: 'Ambiente 3', slug: 'ambiente-3' },
        ]}
      />,
    )

    expect(getByRole('navigation')).toMatchSnapshot()

    const homeLink = getByRole('link', { name: 'Cóncavo' }) as HTMLAnchorElement
    expect(homeLink.href).toMatch(/^https?:\/\/[^/]+\/$/)

    const concavoProductosLink = getByRole('link', { name: 'Productos' }) as HTMLAnchorElement
    expect(concavoProductosLink.href).toMatch(/^https?:\/\/[^/]+\/#productos-concavo$/)

    getByText('Casa Cóncavo')

    const ambiente1Link = getByRole('link', { name: 'Ambiente 1' }) as HTMLAnchorElement
    expect(ambiente1Link.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/white-haven\/ambiente-1$/)

    const ambiente2Link = getByRole('link', { name: 'Ambiente 2' }) as HTMLAnchorElement
    expect(ambiente2Link.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/white-haven\/ambiente-2$/)

    const ambiente3Link = getByRole('link', { name: 'Ambiente 3' }) as HTMLAnchorElement
    expect(ambiente3Link.href).toMatch(/^https?:\/\/[^/]+\/casa-concavo\/white-haven\/ambiente-3$/)

    const colaboradoresLink = getByRole('link', { name: 'Colaboradores' }) as HTMLAnchorElement
    expect(colaboradoresLink.href).toMatch(/^https?:\/\/[^/]+\/colaboradores$/)

    const aboutLink = getByRole('link', { name: 'Nosotros' }) as HTMLAnchorElement
    expect(aboutLink.href).toMatch(/^https?:\/\/[^/]+\/nosotros$/)
  })
})
