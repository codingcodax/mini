/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        swing: {
          '15%': { transform: 'translateX(5px)' },
          '30%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(3px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        grow: {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.3)' },
        },
        wobble: {
          '0%': { transform: 'translateX(0rem)' },
          '50%': { transform: 'translateX(2rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
      },
      animation: {
        swing: 'swing 1s ease 1',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
