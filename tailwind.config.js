/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF7ED',
          100: '#FFE4CC',
          200: '#FFD4A8',
          300: '#FDB363',
          400: '#F59942',
          500: '#ED8936',  // Main brand color
          600: '#DD6B20',
          700: '#C05621',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.5s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.8',
            letterSpacing: '0.01em',
          },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, var(--tw-colors-primary-200) 1px, transparent 0)',
        'grid-pattern': `
          linear-gradient(to right, var(--tw-colors-primary-100) 1px, transparent 1px),
          linear-gradient(to bottom, var(--tw-colors-primary-100) 1px, transparent 1px)
        `,
        'diagonal-pattern': `
          repeating-linear-gradient(
            45deg,
            var(--tw-colors-primary-50) 0,
            var(--tw-colors-primary-50) 1px,
            transparent 0,
            transparent 50%
          )
        `,
      },
    },
  },
  plugins: [],
}