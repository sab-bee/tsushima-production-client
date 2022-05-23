module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#635bff',
        primaryBlur: '#F7F8FE',
        secondary: '#9575CD',
        secondaryDark: '#7e61b0',
        warning: '#FDD835',
        dangerBlur: '#FFEBEE',
        'primary-800': '#2034CA',
        warningBlur: '#FEFDEB',
        error: '#E53935',
        accent: '#f6f9fc',
      },
    },
  },
  daisyui: {
    themes: [],
    // false means it won't apply daisy ui theme
  },
  plugins: [require('daisyui')],
}
