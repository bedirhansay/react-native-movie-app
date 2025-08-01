/**
 * Static Color System
 * All colors from source files as static JavaScript objects
 * Ready for React Native and Tailwind integration
 */

import { primaryColors } from './primary-colors-static';
import { secondaryColors } from './secondary-colors-static';

// Merge all colors into a single object
export const allColors = {
  ...primaryColors,
  ...secondaryColors,
} as const;

// Export individual color families for granular control
export { primaryColors, secondaryColors };

// Export for Tailwind config (rest operator ready)
export const tailwindColors = allColors;

// Type definitions
export type ColorKey = keyof typeof allColors;
export type ColorValue = (typeof allColors)[ColorKey];

// Utility function to get color by key
export const getColor = (key: ColorKey): ColorValue => allColors[key];

// Export default for easy importing
export default allColors;
