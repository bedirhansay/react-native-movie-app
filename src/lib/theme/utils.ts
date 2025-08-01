import type { FlattenedColors, FlexibleColorStructure, ThemeColors } from './types';

/**
 * Recursively flattens nested color objects into a flat structure for Tailwind
 *
 * @param obj - The nested color object
 * @param prefix - Prefix for the flattened keys
 * @param separator - Separator between key parts
 * @returns Flattened color object
 */
function flattenObject(obj: FlexibleColorStructure, prefix: string = '', separator: string = '-'): FlattenedColors {
  const flat: FlattenedColors = {};

  Object.entries(obj).forEach(([key, value]) => {
    const newKey = prefix ? `${prefix}${separator}${key}` : key;

    if (typeof value === 'string') {
      flat[newKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(flat, flattenObject(value, newKey, separator));
    }
  });

  return flat;
}

/**
 * Flattens nested color objects with light/dark mode support
 *
 * @param colorObj - The nested color object
 * @param prefix - Prefix for the flattened keys (e.g., 'primary-', 'utility-blue-')
 * @param options - Configuration options
 * @returns Flattened color object
 */
export function flattenColors(
  colorObj: ThemeColors,
  prefix: string = '',
  options: {
    darkSuffix?: string;
    separator?: string;
  } = {}
): FlattenedColors {
  const { darkSuffix = '-dark', separator = '-' } = options;
  const flat: FlattenedColors = {};

  // Flatten light colors
  if (colorObj.light) {
    Object.assign(flat, flattenObject(colorObj.light, prefix.slice(0, -1), separator));
  }

  // Flatten dark colors with suffix
  if (colorObj.dark) {
    const darkColors = flattenObject(colorObj.dark, prefix.slice(0, -1), separator);
    Object.entries(darkColors).forEach(([key, value]) => {
      flat[`${key}${darkSuffix}`] = value;
    });
  }

  return flat;
}

/**
 * Flattens simple color scale objects (no light/dark nesting)
 */
export function flattenColorScale(colorScale: FlexibleColorStructure, prefix: string = ''): FlattenedColors {
  return flattenObject(colorScale, prefix.slice(0, -1));
}

/**
 * Converts CSS custom properties to flat color object
 */
export function extractCSSColors(cssText: string, prefix: string = ''): FlattenedColors {
  const colors: FlattenedColors = {};
  const cssVarRegex = /--([^:]+):\s*([^;]+);/g;

  let match;
  while ((match = cssVarRegex.exec(cssText)) !== null) {
    const [, property, value] = match;
    const cleanProperty = property.trim();
    const cleanValue = value.trim();

    // Convert kebab-case to camelCase and add prefix
    const camelCaseProperty = cleanProperty.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    colors[`${prefix}${camelCaseProperty}`] = cleanValue;
  }

  return colors;
}

/**
 * Merges multiple flattened color objects
 */
export function mergeColors(...colorObjects: FlattenedColors[]): FlattenedColors {
  return colorObjects.reduce((acc, colors) => ({ ...acc, ...colors }), {});
}
