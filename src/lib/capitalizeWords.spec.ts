import { capitalizeWords } from './capitalizeWords'

describe('capitalizeWords', () => {
  test('capitalizes the first character of each word', () => {
    const input = 'capitalize the first character of each word'
    const expected = 'Capitalize The First Character Of Each Word'

    const result = capitalizeWords(input)
    expect(result).toBe(expected)
  })

  test('handles mixed case strings', () => {
    const input = 'hELlo wOrld'
    const expected = 'HELlo WOrld'

    const result = capitalizeWords(input)
    expect(result).toBe(expected)
  })

  test('handles strings with numbers', () => {
    const input = '123 numbers 456'
    const expected = '123 Numbers 456'

    const result = capitalizeWords(input)
    expect(result).toBe(expected)
  })

  test('preserves strings with leading/trailing spaces', () => {
    const input = '  leading and trailing spaces  '
    const expected = '  Leading And Trailing Spaces  '

    const result = capitalizeWords(input)
    expect(result).toBe(expected)
  })

  test('returns empty string for empty input', () => {
    const input = ''
    const expected = ''

    const result = capitalizeWords(input)
    expect(result).toBe(expected)
  })
})
