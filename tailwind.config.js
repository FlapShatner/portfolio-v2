/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
   colors: {
    'bg-primary': '#242a33',
    'bg-secondary': '#2A323D',
    'text-hl': '#65acca',
    'text-hl-hover': '#47bbec',
   },
   fontFamily: {
    primary: ['var(--ps)'],
    secondary: ['var(--fira)'],
   },
  },
 },
 plugins: [],
}
