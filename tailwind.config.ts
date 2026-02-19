import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // włączony dark mode
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // Twój główny kolor
        secondary: '#64748B', // Drugi kolor
      },
    },
  },
  plugins: [],
};

export default config;
