/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        pinyon: ['Pinyon Script', 'cursive'],
      },
      colors: {
        gold: {
          light: '#e9d498',
          DEFAULT: '#d4af37',
          dark: '#b08f26',
        },
        clinic: {
          bg: '#faf8f6',
          secondary: '#f5e9dc',
          accent: '#7a5e46',
          highlight: '#c4b0a0',
        },
        lounge: {
          bg: '#f9f5f1',
          secondary: '#e7d9ea',
          accent: '#694d85',
          highlight: '#a890c4',
          green: '#c8d6cf',
        },
        beige: {
          light: '#faf8f6',
          DEFAULT: '#f5e9dc',
          dark: '#e6d5c1',
        },
      },
      backgroundImage: {
        'clinic-gradient': 'linear-gradient(135deg, #faf8f6 0%, #f5e9dc 100%)',
        'lounge-gradient': 'linear-gradient(135deg, #f9f5f1 0%, #e7d9ea 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #b08f26 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'luxury': '0 10px 30px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};