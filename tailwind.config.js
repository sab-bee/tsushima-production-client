module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3c50e0',
        secondary: '#9575CD',
        warning: '#FDD835',
        primaryBlur: '#F7F8FE',
        dangerBlur: '#FFEBEE',
        'primary-800': '#2034CA',
        warningBlur: '#FEFDEB',
        error: '#E53935',
        accent: '#f6f9fc',
      }
    },
  },
  daisyui: {
    themes: false,
    // false means it won't apply daisy ui theme
  },
  plugins: [require('daisyui')],
}