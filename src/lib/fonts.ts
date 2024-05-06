import localFont from 'next/font/local'

export const editorialNew = localFont({
  src: [
    {
      path: '../../public/fonts/editorialNew/PPEditorialNew-Ultralight-BF644b21500d0c0.otf',
      style: 'normal',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/editorialNew/PPEditorialNew-UltralightItalic-BF644b214ff1e9b.otf',
      style: 'italic',
      weight: 'normal',
    },
  ],
  variable: '--editorial-new',
})

export const ttNorms = localFont({
  src: [
    {
      path: '../../public/fonts/ttNorms/TT-Norms-Pro-Serif-Trial-Bold-BF64a61d0d42644.ttf',
      style: 'normal',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/ttNorms/TT-Norms-Pro-Serif-Trial-Medium-BF64a61d0d4a7d5.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/ttNorms/TT-Norms-Pro-Serif-Trial-Regular-BF64a61d0d482a0.ttf',
      style: 'normal',
      weight: 'normal',
    },
  ],
  variable: '--tt-norms',
})
