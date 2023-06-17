import type { Config } from 'tailwindcss';

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#352938',
        'main-purple': '#453248',
        'main-golden': '#b9a889',
        'main-beige': '#feeae3',
        'light-beige': '#fef2ee',
        'pale-beige': '#e5dfe1',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config

