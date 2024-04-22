import '@testing-library/jest-dom'

import { isConcavoProduct, isMainContributor } from './types'

describe('isConcavoProduct', () => {
  it('returns true if product has no contributor', () => {
    const result = isConcavoProduct({ name: 'Test product', slug: 'test', contributor: null })
    expect(result).toBe(true)
  })

  it('returns false if product has a contributor', () => {
    const result = isConcavoProduct({ name: 'Test product', slug: 'test', contributor: { slug: 'test-contributor' } })
    expect(result).toBe(false)
  })
})

describe('isMainContributor', () => {
  it('returns true if the contributor has the key isMain as true', () => {
    const result = isMainContributor({
      name: 'Test contributor',
      slug: 'contributor',
      website: '',
      isMain: true,
      description: 'test description',
      email: 'test email',
      address: 'test address',
    })

    expect(result).toBe(true)
  })

  it('returns false if the contributor has the key isMain as false', () => {
    const result = isMainContributor({
      name: 'Test contributor',
      slug: 'contributor',
      website: '',
      isMain: false,
      description: 'test description',
      email: null,
      address: 'test address',
    })

    expect(result).toBe(false)
  })
})
