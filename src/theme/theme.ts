/**
 * ============================================================
 * BELLO HABITAT & VASTUKALA — COMPLETE THEME FILE
 * Theme Color Palette:
 *   - Primary Emerald / Teal: #02AE88
 *   - Deep Forest Teal:       #007E70
 * Typography:
 *   - Universal Font: "Segoe UI", system-ui, -apple-system, sans-serif
 * Mode:
 *   - Overall Light Theme
 * ============================================================
 */

import { THEME_COLORS } from './colors';

export const THEME_FONTS = {
  primary: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif",
  heading: "'Segoe UI', system-ui, -apple-system, sans-serif",
  body: "'Segoe UI', system-ui, -apple-system, sans-serif",
  mono: "'Segoe UI', monospace",
} as const;

export const theme = {
  colors: THEME_COLORS,
  fonts: THEME_FONTS,
  shadows: {
    sm: '0 1px 3px rgba(0, 126, 112, 0.08)',
    md: '0 4px 12px rgba(0, 126, 112, 0.1)',
    lg: '0 10px 25px rgba(0, 126, 112, 0.12)',
    xl: '0 20px 35px rgba(0, 126, 112, 0.15)',
    glow: '0 0 20px rgba(2, 174, 136, 0.25)',
  },
  radii: {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    full: '9999px',
  },
  buttons: {
    primary: {
      backgroundColor: THEME_COLORS.primary,
      color: THEME_COLORS.textOnDark,
      hoverBg: THEME_COLORS.primaryDark,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: THEME_COLORS.primaryDark,
      borderColor: THEME_COLORS.primaryDark,
      hoverBg: THEME_COLORS.bgSurface,
    },
    deep: {
      backgroundColor: THEME_COLORS.primaryDark,
      color: THEME_COLORS.textOnDark,
      hoverBg: THEME_COLORS.primary,
    },
  },
} as const;

export { THEME_COLORS };
export default theme;
