/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ODS Brand Colors - Updated
        loaderColor: '#5A6ACF',
        primary: {
          50: '#f0f2ff',
          100: '#e0e5ff',
          200: '#c7d1ff',
          300: '#a5b5ff',
          400: '#8291ff',
          500: '#5A6ACF',
          600: '#4A5ABF',
          700: '#3B4AA0',
          800: '#2D3A80',
          900: '#1F2A60',
          light: '#7B8BD9',
          DEFAULT: '#5A6ACF',
          dark: '#4A5ABF',
        },
        secondary: {
          50: '#fdf8f3',
          100: '#fbf1e6',
          200: '#f6e1cd',
          300: '#f0d0b3',
          400: '#eac099',
          500: '#E2B785',
          600: '#D4A570',
          700: '#C6935B',
          800: '#B88146',
          900: '#AA6F31',
          light: '#ECC99A',
          DEFAULT: '#E2B785',
          dark: '#D4A570',
        },
        accent: {
          50: '#fdf8f3',
          100: '#fbf1e6',
          200: '#f6e1cd',
          300: '#f0d0b3',
          400: '#eac099',
          500: '#E2B785',
          600: '#D4A570',
          700: '#C6935B',
          800: '#B88146',
          900: '#AA6F31',
        },
        success: {
          50: '#f0fff4',
          100: '#c6f6d5',
          500: '#48bb78',
          600: '#38a169',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
        },
        'custom-blue': 'rgba(59, 130, 246, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.15)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
