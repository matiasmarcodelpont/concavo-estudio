export function removeAtSign(str: string) {
  if (str.startsWith('@')) {
    return str.slice(1)
  }
  return str
}
