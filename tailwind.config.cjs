module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        electric: '#0ee7ff',
        cyan: '#00d1ff',
        'qentra-dark': '#071023'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg,#0ea5e9 0%,#6610f2 100%)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
}
