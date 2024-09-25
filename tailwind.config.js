

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
           "./src/**/*.{js,ts,jsx,tsx}",
          ],
           
  theme: {
    extend: {
      fontFamily: {
        'opensans': ["Open Sans"," sans-serif"],
        'titiliumweb': ["Titillium Web"," sans-serif"]
      },
      animation: {
        marquee: 'marquee 25s linear infinite',

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
    },
    },
  },
  plugins: [],
}

