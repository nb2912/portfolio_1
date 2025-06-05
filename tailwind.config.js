/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'text': 'var(--text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      }
    },
  },
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'from-primary',
    'to-primary',
    {
      pattern: /bg-(primary|accent|background|text)\/[0-9]+/,
      variants: ['hover'],
    },
    {
      pattern: /border-(primary|accent|background|text)\/[0-9]+/,
      variants: ['hover'],
    },
    {
      pattern: /text-(primary|accent|background|text)\/[0-9]+/,
      variants: ['hover'],
    },
  ],
  plugins: [],
}

