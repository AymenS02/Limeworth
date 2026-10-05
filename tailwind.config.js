/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the Limeworth logo; 700+ meet WCAG AA with white text.
        brand: {
          50: '#f2f8ef',
          100: '#e2f0dc',
          200: '#c4e1b8',
          500: '#5aac47',
          600: '#44933a',
          700: '#357a29',
          800: '#2b6322',
          900: '#21491b',
        },
        accent: {
          50: '#eef8fc',
          100: '#d6eef7',
          500: '#1f9fc7',
          700: '#11698a',
          800: '#0e5670',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
