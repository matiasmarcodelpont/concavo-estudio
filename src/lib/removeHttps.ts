function removeHttps(url: string) {
  let formattedUrl = url

  // Prepend http:// if no protocol is present
  if (!/^https?:\/\//i.test(url)) {
    formattedUrl = 'http://' + url
  }

  const parsedUrl = new URL(formattedUrl)

  // Remove the protocol if it's https
  if (parsedUrl.protocol === 'https:') {
    return parsedUrl.host + parsedUrl.pathname.replace(/\/$/, '')
  }

  // Return the URL without modifications if it's not https
  return parsedUrl.host + parsedUrl.pathname.replace(/\/$/, '')
}

export default removeHttps
