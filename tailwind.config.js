module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    margin: {
      sm: '8px',
       md: '16px',
       lg: '24px',
       xl: '48px',
       xxl: '430px',
      },
    extend: {
      spacing: {
                 '72': '18rem',
                 '84': '21rem',
                 '96': '43rem',
                }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
