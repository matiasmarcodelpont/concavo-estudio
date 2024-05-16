import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Video } from './video'

describe('Video component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Video src='https://www.example.com/video' title='cuchuflito' href='fake-link' />)
    expect(container).toMatchSnapshot()
  })

  it('renders an iframe with the correct src', () => {
    const src = 'https://www.example.com/video'

    const component = render(<Video src={src} title='cuchuflito' />)

    const iframe = component.getByTitle('cuchuflito')
    expect(iframe).toHaveAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write')
  })

  it('renders a link if a href prop is passed', () => {
    const src = 'https://www.example.com/video'
    const href = 'fake-link'

    const component = render(<Video src={src} title='cuchuflito' href={href} />)

    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', href)
  })
})
