/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)'],
        'sans-alt': ['var(--font-barlow)']
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#0500FF'
          }
        }
      },
    },
  },
  plugins: [],
};
