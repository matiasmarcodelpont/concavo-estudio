import '@testing-library/jest-dom'

import { isProductoConcavo, isMainColaborador } from './types'

describe('isConcavoProducto', () => {
  it('returns true if producto has no colaborador', () => {
    const result = isProductoConcavo({ name: 'Test producto', slug: 'test', colaborador: null })
    expect(result).toBe(true)
  })

  it('returns false if producto has a colaborador', () => {
    const result = isProductoConcavo({ name: 'Test producto', slug: 'test', colaborador: { slug: 'test-colaborador' } })
    expect(result).toBe(false)
  })
})

describe('isMainColaborador', () => {
  it('returns true if the colaborador has the key isMain as true', () => {
    const result = isMainColaborador({
      slug: 'colaborador',
      name: 'Test colaborador',
      imageUrl: '/path/to/image',
      website: '',
      isMain: true,
      description: 'test description',
      email: 'test email',
      address: 'test address',
    })

    expect(result).toBe(true)
  })

  it('returns false if the colaborador has the key isMain as false', () => {
    const result = isMainColaborador({
      slug: 'colaborador',
      name: 'Test colaborador',
      imageUrl: '/path/to/image',
      website: '',
      isMain: false,
      description: 'test description',
      email: null,
      address: 'test address',
    })

    expect(result).toBe(false)
  })
})
