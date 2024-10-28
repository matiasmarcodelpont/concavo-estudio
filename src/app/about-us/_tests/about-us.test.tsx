import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import AboutUs from '@/app/about-us/page'

describe('About Us', () => {
  it('renders About Us unchanged', () => {
    const { container } = render(<AboutUs />)
    expect(container).toMatchSnapshot()
  })
})
