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
        'primary-dark': 'var(--primary-dark)',
        'accent': 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'text': 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
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
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary-sm': '0 1px 2px 0 var(--primary)',
        'primary': '0 4px 6px -1px var(--primary)',
        'primary-md': '0 6px 8px -2px var(--primary)',
        'primary-lg': '0 8px 12px -3px var(--primary)',
        'accent-sm': '0 1px 2px 0 var(--accent)',
        'accent': '0 4px 6px -1px var(--accent)',
        'accent-md': '0 6px 8px -2px var(--accent)',
        'accent-lg': '0 8px 12px -3px var(--accent)',
        'none': 'none',
      }
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      const opacityValues = theme('opacity', {});
      const colors = theme('colors', {});
      
      const opacityComponents = {};
      
      Object.entries(colors).forEach(([colorName, color]) => {
        Object.entries(opacityValues).forEach(([opacityKey, opacityValue]) => {
          opacityComponents[`.bg-${colorName}\\/${opacityKey}`] = {
            backgroundColor: `rgba(var(--${colorName}-rgb), ${opacityValue})`
          };
          opacityComponents[`.border-${colorName}\\/${opacityKey}`] = {
            borderColor: `rgba(var(--${colorName}-rgb), ${opacityValue})`
          };
          opacityComponents[`.text-${colorName}\\/${opacityKey}`] = {
            color: `rgba(var(--${colorName}-rgb), ${opacityValue})`
          };
        });
      });
      
      addComponents(opacityComponents);
    }
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'from-primary',
    'to-primary',
    'via-accent-light',
    'shadow-primary',
    'shadow-accent',
    'shadow-primary-sm',
    'shadow-primary-md',
    'shadow-primary-lg',
    'shadow-accent-sm',
    'shadow-accent-md',
    'shadow-accent-lg',
    {
      pattern: /bg-(primary|primary-dark|accent|accent-light|background|surface|text|text-secondary)\/[0-9]+/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /border-(primary|primary-dark|accent|accent-light|background|surface|text|text-secondary)\/[0-9]+/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /text-(primary|primary-dark|accent|accent-light|background|surface|text|text-secondary)\/[0-9]+/,
      variants: ['hover', 'focus', 'active'],
    }
  ],
}

