import { CustomThemeConfig } from 'tailwindcss/types/config';

export const typography: CustomThemeConfig['extend'] = {
  
  fontSize: {
    tiny: [
      '8px',
      { lineHeight: '9.68px' },
    ],
    small: [
      '12px',
      { lineHeight: '12.8px' },
    ],
    smallLarge: [
      '12px',
      { lineHeight: '14.52px' },
    ],
    regular: [
      '14px',
      { lineHeight: '16.94px' },
    ],
    regularLarge: [
      '14px',
      { lineHeight: '18.23px' },
    ],
    regularHuge: [
      '14px',
      { lineHeight: '21px' },
    ],
    normal: [
      '16px',
      { lineHeight: '20.57px' },
    ],
    normalLarge: [
      '16px',
      { lineHeight: '24px' },
    ],
    mediumCompact: [
      '17px',
      { lineHeight: '12.8px' },
    ],
    medium: [
      '17px',
      { lineHeight: '20.57px' },
    ],
    mediumLarge: [
      '18px',
      { lineHeight: '27px' },
    ],
    large: [
      '20px',
      { lineHeight: '24px' },
    ],
    huge: [
      '25px',
      { lineHeight: '24px' },
    ],
    hugeLarge: [
      '28px',
      { lineHeight: '33.89px' },
    ],
    biggest: [
      '33px',
      { lineHeight: '24px' },
    ],

  },
  lineHeight: {
    'xxs': '9.68px',
    'xs': '12.8px',
    'sm': '14.52px',
    'md': '16.94px',
    'mdLg': '18.23px',
    'lg': '20.57px',
    'xl': '24px',
    'xxl': '33.89px',
  },
  letterSpacing: {
    m01: '-0.01em',
    m02: '-0.02em',
    m03: '-0.03em',
    normal: '0',
    p01: '0.01em',
    p02: '0.01em',
    p03: '0.01em',
  },
  fontFamily: {
    base: ['Inter', "sans-serif"],
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};
