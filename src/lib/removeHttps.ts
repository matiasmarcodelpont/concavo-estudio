function removeHttps(url: string) {
  const parsedUrl = new URL(url)

  let path = parsedUrl.pathname
  if (path.endsWith('/')) {
    path = path.slice(0, -1)
  }

  return parsedUrl.host + path
}

export default removeHttps
