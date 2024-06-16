import '@testing-library/jest-dom'

import { isProductoConcavo } from './types'

describe('isConcavoProducto', () => {
  it('returns true if producto has no colaborador', () => {
    const result = isProductoConcavo({
      name: 'Test producto',
      slug: 'test',
      link: null,
      description: '',
      colaborador: null,
    })
    expect(result).toBe(true)
  })

  it('returns false if producto has a colaborador', () => {
    const result = isProductoConcavo({
      name: 'Test producto',
      slug: 'test',
      link: null,
      description: '',
      colaborador: { slug: 'test-colaborador' },
    })
    expect(result).toBe(false)
  })
})
