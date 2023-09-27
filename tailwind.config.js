/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '22': 'repeat(2, minmax(1.2fr, .8fr))',
      },
      keyframes: {
        fly: {
          '100%':{top: '0', left: '90%', opacity: '0', maxWidth: '50px', maxHeight: '50px'}
        }
      },
      animation: {
        'fly': 'fly 1s'
      }
    },
  },
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss'),
  ],
}
