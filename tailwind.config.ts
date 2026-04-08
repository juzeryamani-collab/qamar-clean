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
        brand: {
          bg:         '#1a1a1a',
          surface:    '#242424',
          'surface-2':'#2e2e2e',
          border:     '#3a3a3a',
          gold:       '#c9a84c',
          'gold-hover':'#e2c26e',
          'gold-dim': '#8a7030',
          navy:       '#1b2a4a',
          text:       '#f0f0f0',
          muted:      '#9ca3af',
        },
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        lato:   ['var(--font-lato)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
