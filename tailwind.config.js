/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem'
      },
    },
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        forum: ["var(--font-forum)"],
      },
      colors: {
       currentBlue:'#00274D',
        currentBlack:'#444444',
        bgSocial:'#D9D9D9'
      },
      boxShadow: {
        'inner': '[-1px_3px_5px_0px_rgba(0,0,0,0.75)]',
      }
    },
  },
  plugins: [],
};
