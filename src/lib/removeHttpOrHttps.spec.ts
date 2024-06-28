import { removeHttpOrHttps } from './removeHttpOrHttps'

describe('removeHttpOrHttps', () => {
  test('removes https scheme from URL', () => {
    const url = 'https://example.com'
    const expected = 'example.com'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })

  test('removes http scheme from URL', () => {
    const url = 'http://example.com'
    const expected = 'example.com'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL without scheme', () => {
    const url = 'example.com'
    const expected = 'example.com'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })

  test('does not modify URL with ftp scheme', () => {
    const url = 'ftp://example.com'
    const expected = 'ftp://example.com'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })

  test('removes https scheme from URL with path and query', () => {
    const url = 'https://example.com/path?query=string'
    const expected = 'example.com/path?query=string'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })

  test('removes http scheme from URL with path and query', () => {
    const url = 'http://example.com/path?query=string'
    const expected = 'example.com/path?query=string'
    const result = removeHttpOrHttps(url)
    expect(result).toBe(expected)
  })
})
