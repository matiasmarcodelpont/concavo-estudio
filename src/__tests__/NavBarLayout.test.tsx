import { render } from '@testing-library/react'
import { NavBarLayout } from '@/components/NavBarLayout'

describe('NavBarLayour', () => {
  it('renders links to all pages and to each room', () => {
    const { getByRole } = render(
      <NavBarLayout
        opened
        rooms={[
          { name: 'Room 1', slug: 'room-1' },
          { name: 'Room 2', slug: 'room-2' },
          { name: 'Room 3', slug: 'room-3' },
        ]}
      />,
    )

    expect(getByRole('navigation')).toMatchSnapshot()

    const homeLink = getByRole('link', { name: 'Cóncavo' }) as HTMLAnchorElement
    expect(homeLink.href).toMatch(/^https?:\/\/[^/]+\/$/)

    const concavoProductsLink = getByRole('link', { name: 'Productos Cóncavo' }) as HTMLAnchorElement
    expect(concavoProductsLink.href).toMatch(/^https?:\/\/[^/]+\/#productos_concavo$/)

    const concavoHomeLink = getByRole('link', { name: 'Casa Cóncavo' }) as HTMLAnchorElement
    expect(concavoHomeLink.href).toMatch(/^https?:\/\/[^/]+\/casa$/)

    const room1Link = getByRole('link', { name: 'Room 1' }) as HTMLAnchorElement
    expect(room1Link.href).toMatch(/^https?:\/\/[^/]+\/casa\/room-1$/)

    const room2Link = getByRole('link', { name: 'Room 2' }) as HTMLAnchorElement
    expect(room2Link.href).toMatch(/^https?:\/\/[^/]+\/casa\/room-2$/)

    const room3Link = getByRole('link', { name: 'Room 3' }) as HTMLAnchorElement
    expect(room3Link.href).toMatch(/^https?:\/\/[^/]+\/casa\/room-3$/)

    const aboutLink = getByRole('link', { name: 'Nosotros' }) as HTMLAnchorElement
    expect(aboutLink.href).toMatch(/^https?:\/\/[^/]+\/nosotros$/)
  })
})
