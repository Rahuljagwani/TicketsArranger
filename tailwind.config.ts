import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: {
          navbg: '#ffffff',
          mainbg: '#dedcdc',
          text: '#050505'
        },
        dark: {
          navbg: '#212121',
          mainbg: '#0f0d0d',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
export default config
