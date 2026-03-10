/**
 * Centralized site configuration
 * Update these values for each new client project
 */
export const siteConfig = {
  name: 'FastWeb',
  defaultLang: 'es' as const,
  /** Production URL - also set via SITE_URL env variable */
  url: import.meta.env.SITE_URL || 'https://fastweb.example.com',
  /** Google Tag Manager ID - set via PUBLIC_GTM_ID env variable */
  gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  /** Default OG image path (relative to /public) */
  defaultImage: '/og-image.png',
  /** Default meta keywords */
  defaultKeywords: 'Astro, TailwindCSS, TypeScript, Web Development',
} as const;
