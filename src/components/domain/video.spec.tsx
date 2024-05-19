import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Video } from './video'

describe('Video component', () => {
  const videoProps = {
    src: 'https://www.example.com/video',
    title: 'cuchuflito',
    href: 'fake-link',
  }

  it('matches snapshot', () => {
    const { container } = render(<Video {...videoProps} />)
    expect(container).toMatchSnapshot()
  })

  it('renders an iframe with the correct src', () => {
    const component = render(<Video {...videoProps} />)

    const iframe = component.getByTitle('cuchuflito')
    expect(iframe).toHaveAttribute('src', videoProps.src)
    expect(iframe).toHaveAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write')
  })

  it('renders a link if a href prop is passed', () => {
    const component = render(<Video {...videoProps} />)

    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', videoProps.href)
  })
})
