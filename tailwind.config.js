/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            maxWidth: '65ch',
            '[class~="lead"]': {
              color: theme('colors.slate.600'),
            },
            a: {
              color: theme('colors.amber.700'),
              '&:hover': {
                color: theme('colors.amber.600'),
              },
            },
            h1: {
              fontFamily: 'var(--font-serif)',
            },
            h2: {
              fontFamily: 'var(--font-serif)',
            },
            h3: {
              fontFamily: 'var(--font-serif)',
            },
            h4: {
              fontFamily: 'var(--font-serif)',
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}