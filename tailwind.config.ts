import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    /* https://drive.google.com/drive/folders/19bB4pKolAMLZXp2lQSfvys5W3QaJYBOa */
    colors: {
      white: '#FFFFFF',
      black: '#2D1A18',
      bone: '#EBE5DF',
      mustard: '#D1A24C',
      'dark-gray': '#464242',
      'light-gray': '#979697',
      'black-green': '#1B2722',
      brown1: '#664B30',
      terracotta: '#924E41',
      blue: '#19507E',
      pink: '#005850',
      'bubblegum-pink': '#005850',
      'mint-green': '#6E9483',
      'olive-green': '#1E4730',
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
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
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
        'navbar-fade-in': {
          from: { top: '-100%' },
          to: { top: '0' },
        },
        'slide-up': {
          from: { transform: 'translateY(100px)', opacity: '0' },
          '50%': { opacity: '0' },
          to: { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'navbar-fade-in': 'navbar-fade-in 2.5s ease-in-out',
        'slide-up': 'slide-up 10s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
