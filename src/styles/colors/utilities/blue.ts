import { secondaryColors } from '../source/secondary-colors';

export const blueUtilityColors = {
  // Light Mode Utility Blue Colors
  'utility-blue-50': secondaryColors['blue-50'],
  'utility-blue-100': secondaryColors['blue-100'],
  'utility-blue-200': secondaryColors['blue-200'],
  'utility-blue-300': secondaryColors['blue-300'],
  'utility-blue-400': secondaryColors['blue-400'],
  'utility-blue-500': secondaryColors['blue-500'],
  'utility-blue-600': secondaryColors['blue-600'],
  'utility-blue-700': secondaryColors['blue-700'],

  // Light Mode Utility Blue Light Colors
  'utility-blue-light-50': secondaryColors['blue-light-50'],
  'utility-blue-light-100': secondaryColors['blue-light-100'],
  'utility-blue-light-200': secondaryColors['blue-light-200'],
  'utility-blue-light-300': secondaryColors['blue-light-300'],
  'utility-blue-light-400': secondaryColors['blue-light-400'],
  'utility-blue-light-500': secondaryColors['blue-light-500'],
  'utility-blue-light-600': secondaryColors['blue-light-600'],
  'utility-blue-light-700': secondaryColors['blue-light-700'],

  // Light Mode Utility Blue Dark Colors
  'utility-blue-dark-50': secondaryColors['blue-dark-50'],
  'utility-blue-dark-100': secondaryColors['blue-dark-100'],
  'utility-blue-dark-200': secondaryColors['blue-dark-200'],
  'utility-blue-dark-300': secondaryColors['blue-dark-300'],
  'utility-blue-dark-400': secondaryColors['blue-dark-400'],
  'utility-blue-dark-500': secondaryColors['blue-dark-500'],
  'utility-blue-dark-600': secondaryColors['blue-dark-600'],
  'utility-blue-dark-700': secondaryColors['blue-dark-700'],

  // Dark Mode Utility Blue Colors (inverted)
  'utility-blue-50-dark': secondaryColors['blue-900'], // var(--blue-950) -> blue-900 (950 yok secondary'de)
  'utility-blue-100-dark': secondaryColors['blue-900'],
  'utility-blue-200-dark': secondaryColors['blue-800'],
  'utility-blue-300-dark': secondaryColors['blue-700'],
  'utility-blue-400-dark': secondaryColors['blue-600'],
  'utility-blue-500-dark': secondaryColors['blue-500'],
  'utility-blue-600-dark': secondaryColors['blue-400'],
  'utility-blue-700-dark': secondaryColors['blue-300'],

  // Dark Mode Utility Blue Light Colors (inverted)
  'utility-blue-light-50-dark': secondaryColors['blue-light-900'], // var(--blue-light-950) -> blue-light-900 (950 yok)
  'utility-blue-light-100-dark': secondaryColors['blue-light-900'],
  'utility-blue-light-200-dark': secondaryColors['blue-light-800'],
  'utility-blue-light-300-dark': secondaryColors['blue-light-700'],
  'utility-blue-light-400-dark': secondaryColors['blue-light-600'],
  'utility-blue-light-500-dark': secondaryColors['blue-light-500'],
  'utility-blue-light-600-dark': secondaryColors['blue-light-400'],
  'utility-blue-light-700-dark': secondaryColors['blue-light-300'],

  // Dark Mode Utility Blue Dark Colors (inverted)
  'utility-blue-dark-50-dark': secondaryColors['blue-dark-900'], // var(--blue-dark-950) -> blue-dark-900 (950 yok)
  'utility-blue-dark-100-dark': secondaryColors['blue-dark-900'],
  'utility-blue-dark-200-dark': secondaryColors['blue-dark-800'],
  'utility-blue-dark-300-dark': secondaryColors['blue-dark-700'],
  'utility-blue-dark-400-dark': secondaryColors['blue-dark-600'],
  'utility-blue-dark-500-dark': secondaryColors['blue-dark-500'],
  'utility-blue-dark-600-dark': secondaryColors['blue-dark-400'],
  'utility-blue-dark-700-dark': secondaryColors['blue-dark-300'],
} as const;
