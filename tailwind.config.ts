import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf6f1',
          100: '#f1e7d8',
          200: '#e2cdb0',
          300: '#caa782',
          400: '#b08358',
          500: '#946741',
          600: '#785235',
          700: '#5b3e29',
          800: '#3e2a1c',
          900: '#231710',
        },
        cream: {
          50: '#fdfaf5',
          100: '#f8efe1',
          200: '#efdcc0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(62, 42, 28, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out both',
        'fade-up': 'fadeUp 500ms ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
