import { backgroundColor } from './colors/main/background-color';
import { borderColors } from './colors/main/border-colors';
import { foregroundColors } from './colors/main/foreground-colors';
import { textColors } from './colors/main/text-colors';
import { primaryColors } from './colors/source';
import { secondaryColors } from './colors/source/secondary-colors';
import { blueUtilityColors } from './colors/utilities/blue';
import { brandUtilityColors } from './colors/utilities/brand';
import { grayUtilityColors } from './colors/utilities/gray';
import { orangeUtilityColors } from './colors/utilities/orange';
import { secondaryUtilityColors } from './colors/utilities/secondary';
import { stateUtilityColors } from './colors/utilities/state';
import { fontSizes, fontWeights, typography } from './effect/font-size';
import { borderRadius } from './effect/radius';
import { shadows, shadowsRN } from './effect/shadows';
import { spacing } from './effect/spacing';
import { width } from './effect/width';

// Export individual color systems
export { primaryColors } from './colors/source';
export { secondaryColors } from './colors/source/secondary-colors';

export { backgroundColor } from './colors/main/background-color';
export { borderColors } from './colors/main/border-colors';
export { foregroundColors } from './colors/main/foreground-colors';
export { textColors } from './colors/main/text-colors';

export { blueUtilityColors } from './colors/utilities/blue';
export { brandUtilityColors } from './colors/utilities/brand';
export { grayUtilityColors } from './colors/utilities/gray';
export { orangeUtilityColors } from './colors/utilities/orange';
export { secondaryUtilityColors } from './colors/utilities/secondary';
export { stateUtilityColors } from './colors/utilities/state';

export { fontSizes, fontWeights, typography } from './effect/font-size';
export { borderRadius } from './effect/radius';
export { shadows, shadowsRN } from './effect/shadows';
export { spacing } from './effect/spacing';
export { width } from './effect/width';

export const allColors = {
  // Source
  ...primaryColors,
  ...secondaryColors,

  // Main
  ...backgroundColor,
  ...borderColors,
  ...foregroundColors,
  ...textColors,

  // Utilities
  ...blueUtilityColors,
  ...brandUtilityColors,
  ...grayUtilityColors,
  ...orangeUtilityColors,
  ...secondaryUtilityColors,
  ...stateUtilityColors,
} as const;

export const allEffects = {
  fonts: {
    sizes: fontSizes,
    weights: fontWeights,
  },
  radius: borderRadius,
  shadows: shadows,
  shadowsRN: shadowsRN,
  spacing: spacing,
  width: width,
} as const;

// Complete design system
export const designSystem = {
  colors: allColors,
  effects: allEffects,
  typography,
} as const;
