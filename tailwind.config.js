/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      screens: {
        'short': { 'raw': '(max-height: 600px)' },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};