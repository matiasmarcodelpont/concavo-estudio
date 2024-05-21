import { render } from '@testing-library/react'

import Heading from './Heading'

describe('Heading', () => {
  it('matches snapshot', () => {
    const { getByRole } = render(<Heading>Título</Heading>)
    const component = getByRole('heading')

    expect(component).toMatchSnapshot()
  })
})
