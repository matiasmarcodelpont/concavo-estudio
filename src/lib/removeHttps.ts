function removeHttps(url: string) {
  return url.replace(/^https?:\/\//, '')
}

export default removeHttps
