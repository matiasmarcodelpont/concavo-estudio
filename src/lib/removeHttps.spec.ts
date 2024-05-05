import removeHttps from './removeHttps'

describe('removeHttps', () => {
  test('removes https protocol from URL', () => {
    const url = 'https://www.example.com'
    const expected = 'www.example.com'

    const result = removeHttps(url)
    expect(result).toBe(expected)
  })

  test('removes http protocol from URL', () => {
    const url = 'http://example.org'
    const expected = 'example.org'

    const result = removeHttps(url)
    expect(result).toBe(expected)
  })

  test('returns the same string if no protocol is present', () => {
    const url = 'example.com'
    const expected = 'example.com'

    const result = removeHttps(url)
    expect(result).toBe(expected)
  })

  test('handles URLs with subdomains and paths', () => {
    const url = 'https://subdomain.example.com/path/to/resource'
    const expected = 'subdomain.example.com/path/to/resource'

    const result = removeHttps(url)
    expect(result).toBe(expected)
  })
})
