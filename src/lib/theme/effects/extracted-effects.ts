import { extractCSSColors } from '../utils';

// Extract effects from CSS
const shadowsCSS = `
  --shadow-none: 0px;
  --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
  --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  --shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
  --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
`;

const spacingCSS = `
  --spacing-none: 0rem;
  --spacing-xxs: 0.125rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.375rem;
  --spacing-md: 0.5rem;
  --spacing-lg: 0.75rem;
  --spacing-xl: 1rem;
  --spacing-2xl: 1.25rem;
  --spacing-3xl: 1.5rem;
  --spacing-4xl: 2rem;
  --spacing-5xl: 2.5rem;
  --spacing-6xl: 3rem;
  --spacing-7xl: 4rem;
  --spacing-8xl: 5rem;
  --spacing-9xl: 6rem;
  --spacing-10xl: 8rem;
  --spacing-11xl: 10rem;
`;

const borderRadiusCSS = `
  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 20px;
  --radius-4xl: 24px;
  --radius-full: 9999px;
`;

export const extractedEffects = {
  shadows: extractCSSColors(shadowsCSS),
  spacing: extractCSSColors(spacingCSS),
  borderRadius: extractCSSColors(borderRadiusCSS),
};
