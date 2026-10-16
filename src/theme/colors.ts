/**
 * ============================================================
 * BELLO HABITAT & VASTUKALA — BRAND COLOR TOKENS
 * Primary Theme Colors:
 *   - Primary Vibrant Teal: #02AE88
 *   - Primary Deep Teal:    #007E70
 * ============================================================
 */

export const THEME_COLORS = {
  // Brand Core Hex Codes
  primary: '#02AE88',      // Vibrant Teal / Mint Emerald (Elements, accents, primary buttons)
  primaryDark: '#007E70',  // Deep Forest Teal (Main brand theme, headers, key backgrounds)
  primaryHover: '#006B5F', // Deep hover state
  primaryLight: '#3DCBA8', // Light teal accent
  primaryMuted: '#5BD4B2', // Soft teal tone
  
  // Light Theme Backgrounds & Surfaces
  bgLight: '#F7FCFA',       // Main page background (crisp, light, airy with subtle teal warmth)
  bgPure: '#FFFFFF',        // Pure white cards & containers
  bgSurface: '#EDF9F6',     // Tinted light teal surface for cards & highlights
  bgSurfaceSubtle: '#F0FAF7',
  bgSurfaceHover: '#E0F5F0',
  
  // Borders
  borderLight: '#D4F0E8',   // Soft mint border
  borderMedium: '#B8E6DB',  // Mid-tone border
  borderPrimary: '#02AE88', // Highlight border
  borderDark: '#007E70',    // Structured border

  // Text Hierarchy (Optimized for high contrast and elegance on light theme)
  textPrimary: '#0A2E28',   // Deepest forest tone for primary headings
  textSecondary: '#1C4039', // Rich body text
  textMuted: '#4D756E',     // Muted labels and secondary descriptions
  textLight: '#7A9E97',     // Soft micro-labels
  textOnDark: '#FFFFFF',    // White text on #007E70 or #02AE88 backgrounds
  textOnTeal: '#FFFFFF',

  // Accent highlights & utilities
  accentGlow: 'rgba(2, 174, 136, 0.15)',
  accentGlowDark: 'rgba(0, 126, 112, 0.2)',
  whatsapp: '#25D366',
  error: '#DC2626',
} as const;

export type ThemeColors = typeof THEME_COLORS;
