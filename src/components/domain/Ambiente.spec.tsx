import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Ambiente } from './Ambiente'

const ambiente = {
  slug: 'elegance',
  name: 'Elegancee',
}

describe('Ambiente', () => {
  it('matches snapshot', () => {
    const { container } = render(<Ambiente {...ambiente} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the ambiente name', () => {
    const { getByText } = render(<Ambiente {...ambiente} />)

    const descriptionElement = getByText(ambiente.name)
    expect(descriptionElement).toBeInTheDocument()
  })
})
