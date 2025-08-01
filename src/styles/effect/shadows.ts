/**
 * Shadow Effects - Complete static extraction from shadows.css
 * Static shadow values for React Native compatibility
 */

export const shadows = {
  // Shadow Values (CSS box-shadow format)
  'shadow-none': '0px',
  'shadow-xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
  'shadow-sm': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
  'shadow-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  'shadow-lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  'shadow-xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  'shadow-2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  'shadow-3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
} as const;

// React Native compatible shadow objects
export const shadowsRN = {
  'shadow-none': {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  'shadow-xs': {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  'shadow-sm': {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  'shadow-md': {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  'shadow-lg': {
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  'shadow-xl': {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 12,
  },
  'shadow-2xl': {
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.18,
    shadowRadius: 48,
    elevation: 16,
  },
  'shadow-3xl': {
    shadowOffset: { width: 0, height: 32 },
    shadowOpacity: 0.14,
    shadowRadius: 64,
    elevation: 20,
  },
} as const;
