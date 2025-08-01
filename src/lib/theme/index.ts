import { extractedSecondaryColors } from './colors/extracted-secondary';
import { extractedEffects } from './effects/extracted-effects';
import { flattenColors, mergeColors } from './utils';

// Import existing color structures
import { primaryColors } from './colors/primary-colors';
import { utilityBlue } from './colors/utility/utility-blue';
import { utilityBrand } from './colors/utility/utility-brand';
import { utilityGray } from './colors/utility/utility-gray';
import { utilityOrange } from './colors/utility/utility-orange';
import { utilitySecondary } from './colors/utility/utility-secondary';
import { utilityState } from './colors/utility/utility-state';

// Flatten all color structures
const flattenedColors = mergeColors(
  // Primary colors (existing structure)
  flattenColors(primaryColors, 'primary-'),

  // Utility colors with proper prefixes
  flattenColors(utilityBlue as any, 'utility-blue-'),
  flattenColors(utilityGray as any, 'utility-gray-'),
  flattenColors(utilityBrand as any, 'utility-brand-'),
  flattenColors(utilityState as any, 'utility-state-'),
  flattenColors(utilitySecondary as any, 'utility-secondary-'),
  flattenColors(utilityOrange as any, 'utility-orange-'),

  // Extracted CSS colors (no prefix needed as they already have semantic names)
  extractedSecondaryColors
);

// Create semantic color aliases for common use cases
const semanticColors = {
  // State colors
  success: flattenedColors['green-500'] || '#17b26a',
  'success-light': flattenedColors['green-100'] || '#dcfae6',
  'success-dark': flattenedColors['green-700'] || '#067647',

  error: flattenedColors['rose-500'] || '#ff3349',
  'error-light': flattenedColors['rose-100'] || '#ffd5d5',
  'error-dark': flattenedColors['rose-700'] || '#a6121d',

  warning: flattenedColors['orange-500'] || '#ff7624',
  'warning-light': flattenedColors['orange-100'] || '#ffe2c3',
  'warning-dark': flattenedColors['orange-700'] || '#c73d02',

  info: flattenedColors['blue-500'] || '#349df9',
  'info-light': flattenedColors['blue-100'] || '#deeefd',
  'info-dark': flattenedColors['blue-700'] || '#0059f1',

  // Surface colors
  surface: '#ffffff',
  'surface-dark': '#000000',
  'surface-secondary': flattenedColors['grayBlue-50'] || '#f8f9fc',
  'surface-secondary-dark': flattenedColors['grayBlue-900'] || '#101323',

  // Border colors
  border: flattenedColors['grayCool-200'] || '#dcdfea',
  'border-dark': flattenedColors['grayCool-700'] || '#474f5c',

  // Text colors
  'text-primary': flattenedColors['grayCool-900'] || '#111727',
  'text-primary-dark': flattenedColors['grayCool-50'] || '#f9fafb',
  'text-secondary': flattenedColors['grayCool-600'] || '#5a6271',
  'text-secondary-dark': flattenedColors['grayCool-400'] || '#9499a9',
};

// Final merged color palette
export const themeColors = mergeColors(flattenedColors, semanticColors);

// Export effects
export const themeEffects = extractedEffects;

// Export for Tailwind config
export const tailwindColors = {
  ...themeColors,
  // Ensure core colors are available
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
};

// Export spacing, shadows, etc. for Tailwind
export const tailwindTheme = {
  colors: tailwindColors,
  boxShadow: themeEffects.shadows,
  spacing: {
    ...themeEffects.spacing,
    // Add custom spacing values
    '18': '4.5rem',
    '88': '22rem',
  },
  borderRadius: themeEffects.borderRadius,
};
