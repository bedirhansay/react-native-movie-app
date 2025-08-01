import { primaryColors } from '../source/primary-colors.cjs';

/**
 * Border Colors - Complete static extraction from border-colors.css
 * Light and dark mode variants with static color values
 */

export const borderColors = {
  // Light Mode Border Colors
  'border-primary': primaryColors['gray-300'],
  'border-secondary': primaryColors['gray-200'],
  'border-tertiary': primaryColors['gray-100'],
  'border-other-gray': primaryColors['other-gray-300'],

  'border-disabled': primaryColors['gray-300'],
  'border-disabled-subtle': primaryColors['gray-200'],

  'border-brand': primaryColors['brand-300'],
  'border-brand-solid': primaryColors['brand-600'],
  'border-brand-solid-alt': primaryColors['brand-600'],

  'border-error': primaryColors['error-300'],
  'border-error-solid': primaryColors['error-600'],

  'border-primary-dark': primaryColors['gray-dark-700'],
  'border-secondary-dark': primaryColors['gray-dark-800'],
  'border-tertiary-dark': primaryColors['gray-dark-800'],

  'border-disabled-dark': primaryColors['gray-dark-700'],
  'border-disabled-subtle-dark': primaryColors['gray-dark-800'],

  'border-brand-dark': primaryColors['brand-400'],
  'border-brand-solid-dark': primaryColors['brand-500'],
  'border-brand-solid-alt-dark': primaryColors['gray-dark-700'],

  'border-error-dark': primaryColors['error-400'],
  'border-error-solid-dark': primaryColors['error-500'],
} as const;
