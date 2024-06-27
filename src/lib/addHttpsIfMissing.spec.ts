import { addHttpsIfMissing } from './addHttpsIfMissing'

describe('addHttpsIfMissing', () => {
  test('adds https protocol to URL without scheme', () => {
    const url = 'example.com'
    const expected = 'https://example.com/'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL with http scheme', () => {
    const url = 'http://example.com'
    const expected = 'http://example.com/'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL with https scheme', () => {
    const url = 'https://example.com'
    const expected = 'https://example.com/'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL with ftp scheme', () => {
    const url = 'ftp://example.com'
    const expected = 'ftp://example.com/'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })

  test('adds https protocol to URL with path and query', () => {
    const url = 'example.com/path?query=string'
    const expected = 'https://example.com/path?query=string'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL with http scheme and path', () => {
    const url = 'http://example.com/path?query=string'
    const expected = 'http://example.com/path?query=string'

    const result = addHttpsIfMissing(url)
    expect(result).toBe(expected)
  })
})
