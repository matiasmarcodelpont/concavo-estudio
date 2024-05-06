import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    /* https://drive.google.com/drive/folders/19bB4pKolAMLZXp2lQSfvys5W3QaJYBOa */
    colors: {
      black: '#2D1A18',
      bone: '#EBE5DF',
      mustard: '#D1A24C',
      darkGray: '#005850',
      lightGray: '#005850',
      blackGreen: '#1B2722',
      brown1: '#664B30',
      terracotta: '#924E41',
      blue: '#19507E',
      pink: '#005850',
      bubblegumPink: '#005850',
      mintGreen: '#6E9483',
      oliveGreen: '#1E4730',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      /* https://befonts.com/editorial-new-font-family.html */
      /* https://befonts.com/tt-norms-pro-serif-font.html */
      fontFamily: {
        'editorial-new': ['var(--editorial-new)'],
        'tt-norms': ['var(--tt-norms)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
