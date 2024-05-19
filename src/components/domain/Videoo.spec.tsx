import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Video } from './Videoo'

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

  it('renders an video with the correct src', () => {
    const component = render(<Video {...videoProps} />)

    const video = component.getByTitle('cuchuflito')

    expect(video).toHaveAttribute('src', videoProps.src)
    expect(video).toHaveAttribute('autoPlay')
    // expect(video).toHaveAttribute('muted')
    expect(video).toHaveAttribute('loop')
  })

  it('renders a link if a href prop is passed', () => {
    const component = render(<Video {...videoProps} />)

    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', videoProps.href)
  })
})