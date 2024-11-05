module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],  // Default sans-serif font
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],          // For using Roboto
        lora: ['Lora', 'serif'],  
        firaSansCondensed: ['Fira Sans Condensed', 'sans-serif'], 
        playfairDisplay: ['Playfair Display', 'serif'],            // For using Lora
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out forwards',
        pulse: 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
