import { primaryColors } from '../source/primary-colors';

export const backgroundColor = {
  'bg-primary': primaryColors['white'],
  'bg-primary-alt': primaryColors['white'],
  'bg-primary-hover': primaryColors['gray-50'],
  'bg-primary-solid': primaryColors['gray-950'],

  'bg-secondary': primaryColors['gray-50'],
  'bg-secondary-alt': primaryColors['gray-50'],
  'bg-secondary-hover': primaryColors['gray-100'],
  'bg-secondary-subtle': primaryColors['gray-25'],
  'bg-secondary-solid': primaryColors['gray-600'],

  'bg-tertiary': primaryColors['gray-100'],
  'bg-quaternary': primaryColors['gray-200'],

  'bg-active': primaryColors['gray-50'],

  'bg-disabled': primaryColors['gray-100'],
  'bg-disabled-subtle': primaryColors['gray-50'],

  'bg-overlay': primaryColors['gray-950'],

  'bg-brand-primary': primaryColors['brand-50'],
  'bg-brand-primary-alt': primaryColors['brand-50'],
  'bg-brand-secondary': primaryColors['brand-100'],
  'bg-brand-solid': primaryColors['brand-600'],
  'bg-brand-solid-hover': primaryColors['brand-700'],
  'bg-brand-section': primaryColors['brand-800'],
  'bg-brand-section-subtle': primaryColors['brand-700'],

  'bg-error-primary': primaryColors['error-50'],
  'bg-error-secondary': primaryColors['error-100'],
  'bg-error-solid': primaryColors['error-600'],

  'bg-warning-primary': primaryColors['warning-600'],
  'bg-warning-secondary': primaryColors['warning-600'],
  'bg-warning-solid': primaryColors['warning-600'],

  'bg-success-primary': primaryColors['success-600'],
  'bg-success-secondary': primaryColors['success-600'],
  'bg-success-solid': primaryColors['success-600'],

  'bg-primary-dark': primaryColors['gray-dark-950'],
  'bg-primary-alt-dark': primaryColors['gray-dark-900'],
  'bg-primary-hover-dark': primaryColors['gray-dark-800'],
  'bg-primary-solid-dark': primaryColors['gray-dark-900'],

  'bg-secondary-dark': primaryColors['gray-dark-900'],
  'bg-secondary-alt-dark': primaryColors['gray-dark-950'],
  'bg-secondary-hover-dark': primaryColors['gray-dark-800'],
  'bg-secondary-subtle-dark': primaryColors['gray-dark-900'],
  'bg-secondary-solid-dark': primaryColors['gray-dark-600'],

  'bg-tertiary-dark': primaryColors['gray-dark-800'],
  'bg-quaternary-dark': primaryColors['gray-dark-700'],

  'bg-active-dark': primaryColors['gray-dark-800'],

  'bg-disabled-dark': primaryColors['gray-dark-800'],
  'bg-disabled-subtle-dark': primaryColors['gray-dark-900'],

  'bg-overlay-dark': primaryColors['gray-dark-800'],

  'bg-brand-primary-dark': primaryColors['brand-500'],
  'bg-brand-primary-alt-dark': primaryColors['gray-dark-800'],
  'bg-brand-secondary-dark': primaryColors['brand-600'],
  'bg-brand-solid-dark': primaryColors['brand-600'],
  'bg-brand-solid-hover-dark': primaryColors['brand-500'],
  'bg-brand-section-dark': primaryColors['gray-dark-800'],
  'bg-brand-section-subtle-dark': primaryColors['gray-dark-950'],

  'bg-error-primary-dark': primaryColors['error-500'],
  'bg-error-secondary-dark': primaryColors['error-600'],
  'bg-error-solid-dark': primaryColors['error-600'],

  'bg-warning-primary-dark': primaryColors['warning-500'],
  'bg-warning-secondary-dark': primaryColors['warning-600'],
  'bg-warning-solid-dark': primaryColors['warning-600'],

  'bg-success-primary-dark': primaryColors['success-500'],
  'bg-success-secondary-dark': primaryColors['success-600'],
  'bg-success-solid-dark': primaryColors['success-600'],
} as const;
