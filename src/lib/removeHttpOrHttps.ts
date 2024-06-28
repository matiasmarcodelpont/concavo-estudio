export function removeHttpOrHttps(url: string) {
  return url.replace(/^https?:\/\//, '')
}
