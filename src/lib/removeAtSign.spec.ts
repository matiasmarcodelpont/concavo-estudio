import { removeAtSign } from './removeAtSign'

describe('removeAtSign', () => {
  test('removes @ from the beginning of the string', () => {
    const str = '@username'
    const expected = 'username'

    const result = removeAtSign(str)
    expect(result).toBe(expected)
  })

  test('does not modify string if @ is not at the beginning', () => {
    const str = 'user@name'
    const expected = 'user@name'

    const result = removeAtSign(str)
    expect(result).toBe(expected)
  })

  test('returns the same string if @ is not present', () => {
    const str = 'username'
    const expected = 'username'

    const result = removeAtSign(str)
    expect(result).toBe(expected)
  })

  test('returns an empty string if input is @', () => {
    const str = '@'
    const expected = ''

    const result = removeAtSign(str)
    expect(result).toBe(expected)
  })

  test('returns an empty string if input is an empty string', () => {
    const str = ''
    const expected = ''

    const result = removeAtSign(str)
    expect(result).toBe(expected)
  })
})
