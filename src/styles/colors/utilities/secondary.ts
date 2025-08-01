import { secondaryColors } from '../source/secondary-colors';

export const secondaryUtilityColors = {
  // Light Mode Utility Fuchsia Colors
  'utility-fuchsia-50': secondaryColors['fuchsia-50'],
  'utility-fuchsia-100': secondaryColors['fuchsia-100'],
  'utility-fuchsia-200': secondaryColors['fuchsia-200'],
  'utility-fuchsia-300': secondaryColors['fuchsia-300'],
  'utility-fuchsia-400': secondaryColors['fuchsia-400'],
  'utility-fuchsia-500': secondaryColors['fuchsia-500'],
  'utility-fuchsia-600': secondaryColors['fuchsia-600'],
  'utility-fuchsia-700': secondaryColors['fuchsia-700'],

  // Light Mode Utility Pink Colors
  'utility-pink-50': secondaryColors['pink-50'],
  'utility-pink-100': secondaryColors['pink-100'],
  'utility-pink-200': secondaryColors['pink-200'],
  'utility-pink-300': secondaryColors['pink-300'],
  'utility-pink-400': secondaryColors['pink-400'],
  'utility-pink-500': secondaryColors['pink-500'],
  'utility-pink-600': secondaryColors['pink-600'],
  'utility-pink-700': secondaryColors['pink-700'],

  // Light Mode Utility Indigo Colors
  'utility-indigo-300': secondaryColors['indigo-300'],
  'utility-indigo-400': secondaryColors['indigo-400'],
  'utility-indigo-500': secondaryColors['indigo-500'],
  'utility-indigo-600': secondaryColors['indigo-600'],
  'utility-indigo-700': secondaryColors['indigo-700'],

  // Light Mode Utility Purple Colors
  'utility-purple-50': secondaryColors['purple-50'],
  'utility-purple-100': secondaryColors['purple-100'],
  'utility-purple-200': secondaryColors['purple-200'],
  'utility-purple-300': secondaryColors['purple-300'],
  'utility-purple-400': secondaryColors['purple-400'],
  'utility-purple-500': secondaryColors['purple-500'],
  'utility-purple-600': secondaryColors['purple-600'],
  'utility-purple-700': secondaryColors['purple-700'],

  // Dark Mode Utility Fuchsia Colors (inverted)
  'utility-fuchsia-50-dark': secondaryColors['fuchsia-900'], // var(--fuchsia-950) -> fuchsia-900 (950 yok)
  'utility-fuchsia-100-dark': secondaryColors['fuchsia-900'],
  'utility-fuchsia-200-dark': secondaryColors['fuchsia-800'],
  'utility-fuchsia-300-dark': secondaryColors['fuchsia-700'],
  'utility-fuchsia-400-dark': secondaryColors['fuchsia-600'],
  'utility-fuchsia-500-dark': secondaryColors['fuchsia-500'],
  'utility-fuchsia-600-dark': secondaryColors['fuchsia-400'],
  'utility-fuchsia-700-dark': secondaryColors['fuchsia-300'],

  // Dark Mode Utility Pink Colors (inverted)
  'utility-pink-50-dark': secondaryColors['pink-900'], // var(--pink-950) -> pink-900 (950 yok)
  'utility-pink-100-dark': secondaryColors['pink-900'],
  'utility-pink-200-dark': secondaryColors['pink-800'],
  'utility-pink-300-dark': secondaryColors['pink-700'],
  'utility-pink-400-dark': secondaryColors['pink-600'],
  'utility-pink-500-dark': secondaryColors['pink-500'],
  'utility-pink-600-dark': secondaryColors['pink-400'],
  'utility-pink-700-dark': secondaryColors['pink-300'],

  // Dark Mode Utility Indigo Colors (inverted)
  'utility-indigo-300-dark': secondaryColors['indigo-700'],
  'utility-indigo-400-dark': secondaryColors['indigo-600'],
  'utility-indigo-500-dark': secondaryColors['indigo-500'],
  'utility-indigo-600-dark': secondaryColors['indigo-400'],
  'utility-indigo-700-dark': secondaryColors['indigo-300'],

  // Dark Mode Utility Purple Colors (inverted)
  'utility-purple-50-dark': secondaryColors['purple-900'], // var(--purple-950) -> purple-900 (950 yok)
  'utility-purple-100-dark': secondaryColors['purple-900'],
  'utility-purple-200-dark': secondaryColors['purple-800'],
  'utility-purple-300-dark': secondaryColors['purple-700'],
  'utility-purple-400-dark': secondaryColors['purple-600'],
  'utility-purple-500-dark': secondaryColors['purple-500'],
  'utility-purple-600-dark': secondaryColors['purple-400'],
  'utility-purple-700-dark': secondaryColors['purple-300'],
} as const;
