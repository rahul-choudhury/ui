import { useMediaQuery } from "./use-media-query"

/**
 * Detects if the user prefers reduced motion.
 * Returns true if the user has enabled prefers-reduced-motion in their system settings.
 * Updates automatically if the preference changes.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
