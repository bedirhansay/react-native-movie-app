/**
 * Theme System Types
 * Supports nested color structures with light/dark mode variants
 */

export interface ColorScale {
  25?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
}

export interface NamedColors {
  white?: string;
  black?: string;
  transparent?: string;
  [key: string]: string | undefined;
}

// More flexible structure to handle complex nested colors
export interface FlexibleColorStructure {
  [key: string]: string | FlexibleColorStructure;
}

export interface ThemeColors {
  light: FlexibleColorStructure;
  dark?: FlexibleColorStructure;
}

export interface Effects {
  shadows: Record<string, string>;
  spacing: Record<string, string>;
  fontSize: Record<string, string>;
  borderRadius: Record<string, string>;
  width: Record<string, string>;
}

export interface FlattenedColors {
  [key: string]: string;
}
