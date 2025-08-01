/**
 * Advanced CSS Color Token Extractor
 * Extracts and flattens colors from CSS source files
 */

import fs from 'fs';
import path from 'path';

interface ColorTokens {
  [key: string]: string;
}

/**
 * Extracts CSS custom properties from text content
 */
function extractCSSCustomProperties(cssContent: string): ColorTokens {
  const tokens: ColorTokens = {};

  // Match CSS custom properties: --property-name: value;
  const cssVarRegex = /--([^:]+):\s*([^;]+);/g;

  let match;
  while ((match = cssVarRegex.exec(cssContent)) !== null) {
    const [, property, value] = match;
    const cleanProperty = property.trim();
    const cleanValue = value.trim();

    // Skip CSS variables that reference other variables (like var(--other-color))
    if (!cleanValue.includes('var(')) {
      tokens[cleanProperty] = cleanValue;
    }
  }

  return tokens;
}

/**
 * Extracts dark mode overrides from .dark class
 */
function extractDarkModeOverrides(cssContent: string): ColorTokens {
  const darkTokens: ColorTokens = {};

  // Match .dark class block
  const darkClassRegex = /\.dark\s*\{([^}]*)\}/g;
  const darkMatch = darkClassRegex.exec(cssContent);

  if (darkMatch) {
    const darkContent = darkMatch[1];
    const cssVarRegex = /--([^:]+):\s*([^;]+);/g;

    let match;
    while ((match = cssVarRegex.exec(darkContent)) !== null) {
      const [, property, value] = match;
      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      // Skip variables that reference other variables
      if (!cleanValue.includes('var(')) {
        darkTokens[cleanProperty] = cleanValue;
      }
    }
  }

  return darkTokens;
}

/**
 * Processes color files and extracts flattened color tokens
 */
function processColorFiles(): ColorTokens {
  const sourceDir = path.join(process.cwd(), 'src/styles/colors/source');
  const colors: ColorTokens = {};

  try {
    // Process primary colors
    const primaryPath = path.join(sourceDir, 'primary.colors.css');
    if (fs.existsSync(primaryPath)) {
      const primaryContent = fs.readFileSync(primaryPath, 'utf-8');
      const primaryTokens = extractCSSCustomProperties(primaryContent);
      const primaryDarkTokens = extractDarkModeOverrides(primaryContent);

      // Add primary tokens
      Object.assign(colors, primaryTokens);

      // Add dark mode tokens with -dark suffix
      Object.entries(primaryDarkTokens).forEach(([key, value]) => {
        colors[`${key}-dark`] = value;
      });
    }

    // Process secondary colors
    const secondaryPath = path.join(sourceDir, 'secondary-colors.css');
    if (fs.existsSync(secondaryPath)) {
      const secondaryContent = fs.readFileSync(secondaryPath, 'utf-8');
      const secondaryTokens = extractCSSCustomProperties(secondaryContent);
      const secondaryDarkTokens = extractDarkModeOverrides(secondaryContent);

      // Add secondary tokens
      Object.assign(colors, secondaryTokens);

      // Add dark mode tokens with -dark suffix
      Object.entries(secondaryDarkTokens).forEach(([key, value]) => {
        colors[`${key}-dark`] = value;
      });
    }
  } catch (error) {
    console.error('Error processing color files:', error);
  }

  return colors;
}

// Generate the flattened colors
const flattenedColors = processColorFiles();

export const sourceColors: ColorTokens = flattenedColors;

// Export for easy inspection
export default sourceColors;
