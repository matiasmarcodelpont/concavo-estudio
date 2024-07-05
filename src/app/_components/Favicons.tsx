'use client'

import { usePathname } from 'next/navigation'

const Favicons = () => {
  const pathname = usePathname()

  if (!pathname.includes('casa')) {
    return (
      <>
        <link rel='icon' href='/manifest/favicon_concavo.ico' sizes='any' />
        <link rel='icon' href='/manifest/icon_concavo?<generated>' type='image/<generated>' sizes='<generated>' />
        <link
          rel='apple-touch-icon'
          href='/manifest/apple-icon_concavo?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </>
    )
  }

  return (
    <>
      <link rel='icon' href='/manifest/favicon_casa.ico' sizes='any' />
      <link rel='icon' href='/manifest/icon_casa?<generated>' type='image/<generated>' sizes='<generated>' />
      <link
        rel='apple-touch-icon'
        href='/manifest/apple-icon_casa?<generated>'
        type='image/<generated>'
        sizes='<generated>'
      />
    </>
  )
}

export default Favicons
