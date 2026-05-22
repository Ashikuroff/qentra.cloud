module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        electric: '#0ee7ff',
        cyan: '#00d1ff',
        'qentra-dark': '#071023',
        navy: '#040617',
        'soft-purple': '#6b21a8'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg,#0ea5e9 0%,#6610f2 100%)',
        'dark-hero': 'radial-gradient(600px 400px at 10% 20%, rgba(14,231,255,0.06), transparent 12%), radial-gradient(400px 300px at 90% 80%, rgba(102,16,242,0.05), transparent 18%)'
      },
      boxShadow: {
        'glow-md': '0 8px 30px rgba(14,231,255,0.06), 0 2px 8px rgba(102,16,242,0.04)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      heading: ['Space Grotesk', 'Sora', 'Inter', 'ui-sans-serif']
    }
  },
  plugins: []
}
