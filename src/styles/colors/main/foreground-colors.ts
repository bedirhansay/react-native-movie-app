import { primaryColors } from '../source/primary-colors.cjs';

export const foregroundColors = {
  'fg-primary': primaryColors['gray-900'],

  'fg-secondary': primaryColors['gray-700'],
  'fg-secondary-hover': primaryColors['gray-800'],

  'fg-tertiary': primaryColors['gray-600'],
  'fg-tertiary-hover': primaryColors['gray-700'],

  'fg-quaternary': primaryColors['gray-500'],
  'fg-quaternary-hover': primaryColors['gray-600'],

  'fg-quinary': primaryColors['gray-400'],
  'fg-quinary-hover': primaryColors['gray-500'],

  'fg-senary': primaryColors['gray-300'],
  'fg-white': primaryColors['white'],

  'fg-disabled': primaryColors['gray-400'],
  'fg-disabled-subtle': primaryColors['gray-300'],

  'fg-brand-primary': primaryColors['brand-600'],
  'fg-brand-primary-alt': primaryColors['brand-600'],

  'fg-brand-secondary': primaryColors['brand-500'],

  'fg-error-primary': primaryColors['error-600'],
  'fg-error-secondary': primaryColors['error-500'],

  'fg-warning-primary': primaryColors['warning-600'],
  'fg-warning-secondary': primaryColors['warning-500'],

  'fg-success-primary': primaryColors['success-600'],
  'fg-success-secondary': primaryColors['success-500'],

  // Dark Mode Foreground Colors
  'fg-primary-dark': primaryColors['white'],

  'fg-secondary-dark': primaryColors['gray-dark-300'],
  'fg-secondary-hover-dark': primaryColors['gray-dark-200'],

  'fg-tertiary-dark': primaryColors['gray-dark-400'],
  'fg-tertiary-hover-dark': primaryColors['gray-dark-300'],

  'fg-quaternary-dark': primaryColors['gray-dark-400'],
  'fg-quaternary-hover-dark': primaryColors['gray-dark-300'],

  'fg-quinary-dark': primaryColors['gray-dark-500'],
  'fg-quinary-hover-dark': primaryColors['gray-dark-400'],

  'fg-senary-dark': primaryColors['gray-dark-600'],
  'fg-white-dark': primaryColors['white'],

  'fg-disabled-dark': primaryColors['gray-dark-500'],
  'fg-disabled-subtle-dark': primaryColors['gray-dark-600'],

  'fg-brand-primary-dark': primaryColors['brand-500'],
  'fg-brand-primary-alt-dark': primaryColors['brand-500'],

  'fg-brand-secondary-dark': primaryColors['brand-500'],

  'fg-error-primary-dark': primaryColors['error-500'],
  'fg-error-secondary-dark': primaryColors['error-400'],

  'fg-warning-primary-dark': primaryColors['warning-500'],
  'fg-warning-secondary-dark': primaryColors['warning-400'],

  'fg-success-primary-dark': primaryColors['success-500'],
  'fg-success-secondary-dark': primaryColors['success-400'],
} as const;
