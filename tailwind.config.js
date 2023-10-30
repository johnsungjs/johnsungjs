/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // primary: '#14b8a5',
        // secondary: '#64748b',
        primary: '#007BB6',
        secondary: '#61DAFB',
        accent: '#FDCB58',
        bgC: '#F5F5F5',
        textC: '#333333',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

