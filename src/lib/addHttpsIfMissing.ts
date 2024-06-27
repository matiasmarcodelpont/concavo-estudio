export function addHttpsIfMissing(url: string) {
  try {
    const newUrl = new URL(url)
    return newUrl.href
  } catch (e) {
    return new URL('https://' + url).href
  }
}
