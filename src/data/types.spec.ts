import '@testing-library/jest-dom'
import { isConcavoProduct } from './types'

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
