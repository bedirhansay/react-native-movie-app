import { primaryColors } from '../source/primary-colors.cjs';

export const textColors = {
  'text-primary': primaryColors['gray-900'],
  'text-primary-on-brand': primaryColors['white'],

  'text-secondary': primaryColors['gray-700'],
  'text-secondary-hover': primaryColors['gray-800'],
  'text-secondary-on-brand': primaryColors['brand-200'],

  'text-tertiary': primaryColors['gray-600'],
  'text-tertiary-hover': primaryColors['gray-700'],
  'text-tertiary-on-brand': primaryColors['brand-200'],

  'text-quaternary': primaryColors['gray-500'],
  'text-quaternary-on-brand': primaryColors['brand-300'],

  'text-white': primaryColors['white'],
  'text-disabled': primaryColors['gray-500'],

  'text-placeholder': primaryColors['gray-500'],
  'text-placeholder-subtle': primaryColors['gray-300'],

  'text-brand-primary': primaryColors['brand-900'],
  'text-brand-secondary': primaryColors['brand-700'],
  'text-brand-tertiary': primaryColors['brand-600'],
  'text-brand-tertiary-alt': primaryColors['brand-600'],

  'text-error-primary': primaryColors['error-600'],
  'text-warning-primary': primaryColors['warning-600'],
  'text-success-primary': primaryColors['success-600'],

  'text-primary-dark': primaryColors['gray-dark-50'],
  'text-primary-on-brand-dark': primaryColors['gray-dark-50'],

  'text-secondary-dark': primaryColors['gray-dark-300'],
  'text-secondary-hover-dark': primaryColors['gray-dark-200'],
  'text-secondary-on-brand-dark': primaryColors['gray-dark-300'],

  'text-tertiary-dark': primaryColors['gray-dark-400'],
  'text-tertiary-hover-dark': primaryColors['gray-dark-300'],
  'text-tertiary-on-brand-dark': primaryColors['gray-dark-400'],

  'text-quaternary-dark': primaryColors['gray-dark-400'],
  'text-quaternary-on-brand-dark': primaryColors['gray-dark-400'],

  'text-white-dark': primaryColors['white'],

  'text-disabled-dark': primaryColors['gray-dark-500'],
  'text-placeholder-dark': primaryColors['gray-dark-400'],
  'text-placeholder-subtle-dark': primaryColors['gray-dark-700'],

  'text-brand-primary-dark': primaryColors['gray-dark-50'],
  'text-brand-secondary-dark': primaryColors['gray-dark-300'],
  'text-brand-tertiary-dark': primaryColors['gray-dark-400'],
  'text-brand-tertiary-alt-dark': primaryColors['gray-dark-50'],

  'text-error-primary-dark': primaryColors['error-400'],
  'text-warning-primary-dark': primaryColors['warning-400'],
  'text-success-primary-dark': primaryColors['success-400'],
} as const;
