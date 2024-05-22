import localFont from 'next/font/local'

export const editorialNew = localFont({
  src: [
    {
      path: '../../public/fonts/editorialNew/PPEditorialNew-Ultralight-BF644b21500d0c0.otf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../../public/fonts/editorialNew/PPEditorialNew-UltralightItalic-BF644b214ff1e9b.otf',
      style: 'italic',
      weight: '200',
    },
  ],
  variable: '--editorial-new',
})

export const ttNorms = localFont({
  src: [
    {
      path: '../../public/fonts/ttNorms/TTNorms-Bold.otf',
      style: 'normal',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/ttNorms/TTNorms-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/ttNorms/TTNorms-Regular.otf',
      style: 'normal',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/ttNorms/TTNorms-Light.otf',
      style: 'normal',
      weight: '200',
    },
  ],
  variable: '--tt-norms',
})
