/**
 * Font Sizes and Weights - Complete static extraction from font-size.css
 * Static values for React Native compatibility
 */

export const fontSizes = {
  // Display Text Sizes
  'text-display-2xl': 72, // 72px / 3.75rem
  'text-display-xl': 60, // 60px / 3rem
  'text-display-lg': 38, // 38px / 2.25rem
  'text-display-md': 36, // 36px / 1.875rem
  'text-display-sm': 30, // 30px / 1.5rem
  'text-display-xs': 24, // 24px / 1.25rem

  // Regular Text Sizes
  'text-xl': 24, // 24px / 1.125rem
  'text-lg': 18, // 18px / 1rem
  'text-md': 16, // 16px / 0.875rem
  'text-sm': 14, // 14px / 0.75rem
  'text-xs': 12, // 12px / 0.625rem
} as const;

export const fontWeights = {
  // Font Weight Values
  thin: 100,
  'extra-light': 200,
  light: 300,
  regular: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900,
} as const;

// Combined export for convenience
export const typography = {
  sizes: fontSizes,
  weights: fontWeights,
} as const;
