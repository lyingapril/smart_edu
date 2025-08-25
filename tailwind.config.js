/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36BFFA',
        accent: '#FF7D00',
        success: '#00B42A',
        warning: '#FF7D00',
        danger: '#F53F3F',
        dark: '#1D2129',
        light: '#F2F3F5'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}