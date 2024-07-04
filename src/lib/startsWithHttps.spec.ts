import { startsWithHttps } from './startsWithHttps'

describe('startsWithHttps', () => {
  test('returns true for URL starting with https', () => {
    const url = 'https://example.com'
    const result = startsWithHttps(url)
    expect(result).toBe(true)
  })

  test('returns false for URL starting with http', () => {
    const url = 'http://example.com'
    const result = startsWithHttps(url)
    expect(result).toBe(false)
  })

  test('returns false for URL without scheme', () => {
    const url = 'example.com'
    const result = startsWithHttps(url)
    expect(result).toBe(false)
  })

  test('returns false for URL starting with ftp', () => {
    const url = 'ftp://example.com'
    const result = startsWithHttps(url)
    expect(result).toBe(false)
  })

  test('returns true for URL with https and path', () => {
    const url = 'https://example.com/path?query=string'
    const result = startsWithHttps(url)
    expect(result).toBe(true)
  })

  test('returns false for URL with http and path', () => {
    const url = 'http://example.com/path?query=string'
    const result = startsWithHttps(url)
    expect(result).toBe(false)
  })
})
