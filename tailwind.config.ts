import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-white)',
      accent: 'rgb(var(--color-main))',
      accentDarker: 'rgb(var(--color-footer))',
      none: 'var(--color-none)',
    },
    extend: {
      backgroundImage: {
        'hero-small': "url('/assets/img/hero-small.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
