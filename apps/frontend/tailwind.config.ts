import type { Config } from 'tailwindcss';
import { colors } from './tailwind/colors';
import { plugins } from './tailwind/plugins';
import { animations } from './tailwind/animations';
import { typography } from './tailwind/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'shadow-orange-drop',
    'shadow-violet-drop',
    'shadow-green-drop',
    'hover:shadow-orange-drop',
    'hover:shadow-violet-drop',
    'hover:shadow-green-drop',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      ...colors,
      ...animations,
      ...typography,
      boxShadow: {
        'base': '10px 25px 40px 0 rgba(0, 0, 0, 0.07)',
        'purple-drop': '10px 14px 40px 0 #833DD92B',
        'blue-drop':   '10px 14px 40px 0 #2D7AFF2B',
        'pink-drop':   '10px 14px 40px 0 #D13DD92B',
        'orange-drop': '0 4px 114px 0 #FE7733',
        'violet-drop': '0 4px 114px 0 #FBADFF',
        'green-drop': '0 4px 114px 0 #66FF99',
      },
      borderRadius: {
        base: '10px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        cBlack: '#000 ',
        cWhite: '#fff',
        cLavender: '#B2A1FF',
				cSun: '#FF7833',
        cYellow: "#FFEE52",
				cLime: '#B2FA63',
				cGreenForrest: '#243838',
        cGray: '#D9D9D9',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
    aspectRatio: {
      '169': '16 / 9',
      auto: 'auto',
      square: '1 / 1',
    },
  },
  ...plugins,
  plugins: [require('tailwindcss-animate')],
};

export default config;
