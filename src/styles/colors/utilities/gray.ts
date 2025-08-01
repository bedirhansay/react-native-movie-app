import { primaryColors } from '../source/primary-colors.cjs';

export const grayUtilityColors = {
  // Light Mode Utility Gray Colors
  'utility-gray-50': primaryColors['gray-50'],
  'utility-gray-100': primaryColors['gray-100'],
  'utility-gray-200': primaryColors['gray-200'],
  'utility-gray-300': primaryColors['gray-300'],
  'utility-gray-400': primaryColors['gray-400'],
  'utility-gray-500': primaryColors['gray-500'],
  'utility-gray-600': primaryColors['gray-600'],
  'utility-gray-700': primaryColors['gray-700'],
  'utility-gray-800': primaryColors['gray-800'],
  'utility-gray-900': primaryColors['gray-900'],

  // Dark Mode Utility Gray Colors (inverted)
  'utility-gray-50-dark': primaryColors['gray-900'],
  'utility-gray-100-dark': primaryColors['gray-800'],
  'utility-gray-200-dark': primaryColors['gray-700'],
  'utility-gray-300-dark': primaryColors['gray-700'],
  'utility-gray-400-dark': primaryColors['gray-600'],
  'utility-gray-500-dark': primaryColors['gray-500'],
  'utility-gray-600-dark': primaryColors['gray-400'],
  'utility-gray-700-dark': primaryColors['gray-300'],
  'utility-gray-800-dark': primaryColors['gray-200'],
  'utility-gray-900-dark': primaryColors['gray-100'],
} as const;
