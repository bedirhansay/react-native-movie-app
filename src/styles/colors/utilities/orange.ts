import { secondaryColors } from '../source/secondary-colors';

export const orangeUtilityColors = {
  // Light Mode Utility Orange Colors
  'utility-orange-50': secondaryColors['orange-50'],
  'utility-orange-100': secondaryColors['orange-100'],
  'utility-orange-200': secondaryColors['orange-200'],
  'utility-orange-300': secondaryColors['orange-300'],
  'utility-orange-400': secondaryColors['orange-400'],
  'utility-orange-500': secondaryColors['orange-500'],
  'utility-orange-600': secondaryColors['orange-600'],
  'utility-orange-700': secondaryColors['orange-700'],

  // Light Mode Utility Orange Dark Colors
  'utility-orange-dark-50': secondaryColors['orange-dark-50'],
  'utility-orange-dark-100': secondaryColors['orange-dark-100'],
  'utility-orange-dark-200': secondaryColors['orange-dark-200'],
  'utility-orange-dark-300': secondaryColors['orange-dark-300'],
  'utility-orange-dark-400': secondaryColors['orange-dark-400'],
  'utility-orange-dark-500': secondaryColors['orange-dark-500'],
  'utility-orange-dark-600': secondaryColors['orange-dark-600'],
  'utility-orange-dark-700': secondaryColors['orange-dark-700'],

  // Dark Mode Utility Orange Colors (inverted)
  'utility-orange-50-dark': secondaryColors['orange-900'], // var(--orange-950) -> orange-900 (950 yok secondary'de)
  'utility-orange-100-dark': secondaryColors['orange-900'],
  'utility-orange-200-dark': secondaryColors['orange-800'],
  'utility-orange-300-dark': secondaryColors['orange-700'],
  'utility-orange-400-dark': secondaryColors['orange-600'],
  'utility-orange-500-dark': secondaryColors['orange-500'],
  'utility-orange-600-dark': secondaryColors['orange-400'],
  'utility-orange-700-dark': secondaryColors['orange-300'],

  // Dark Mode Utility Orange Dark Colors (inverted)
  'utility-orange-dark-50-dark': secondaryColors['orange-dark-900'], // var(--orange-dark-950) -> orange-dark-900 (950 yok)
  'utility-orange-dark-100-dark': secondaryColors['orange-dark-900'],
  'utility-orange-dark-200-dark': secondaryColors['orange-dark-800'],
  'utility-orange-dark-300-dark': secondaryColors['orange-dark-700'],
  'utility-orange-dark-400-dark': secondaryColors['orange-dark-600'],
  'utility-orange-dark-500-dark': secondaryColors['orange-dark-500'],
  'utility-orange-dark-600-dark': secondaryColors['orange-dark-400'],
  'utility-orange-dark-700-dark': secondaryColors['orange-dark-300'],
} as const;
