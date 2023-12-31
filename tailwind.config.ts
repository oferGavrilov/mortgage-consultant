import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans-hebrew': ['"Open Sans Hebrew"', 'sans-serif'],
      },
      colors: {
        'title': '#0582ca',
        'secondary-bg': '#ced0ce',
        'whatsapp':'#25D366',
        'facebook':'#4267B2',
      }
    },
  },
  plugins: [],
}
export default config
