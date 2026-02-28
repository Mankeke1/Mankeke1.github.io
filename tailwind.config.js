/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#000000',     // Absolute black
        brandIndigo: '#312e81', // Deep indigo blob
        brandCyan: '#164e63',   // Dark cyan blob
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'blob-spin': 'blobSpin 30s linear infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        blobSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
