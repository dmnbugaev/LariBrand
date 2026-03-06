import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#222222',
        'brand-red': '#891D1A',
        'brand-bg': '#E1DCD8',
      },
      fontFamily: {
        forum: ['var(--font-forum)', 'Georgia', 'Times New Roman', 'serif'],
        canelope: ['var(--font-canelope)', 'Palatino Linotype', 'Palatino', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
