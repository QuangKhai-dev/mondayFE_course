/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        title: '#323338',
        content: '#676879',
      },
    },
  },
  plugins: [],
};
