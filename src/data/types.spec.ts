import '@testing-library/jest-dom'
import { isConcavoProduct } from './types'

describe('isConcavoProduct', () => {
  it('returns true if product has no sponsor', () => {
    const result = isConcavoProduct({ name: 'Test product', slug: 'test', sponsor: null });
    expect(result).toBe(true)
  })

  it('returns false if product has a sponsor', () => {
    const result = isConcavoProduct({ name: 'Test product', slug: 'test', sponsor: { slug: 'test-sponsor' } });
    expect(result).toBe(false)
  })
})
