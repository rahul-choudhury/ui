import { useSyncExternalStore } from "react"

const reducedMotionQuery = "(prefers-reduced-motion: reduce)"

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery)
  mediaQuery.addEventListener("change", callback)

  return () => mediaQuery.removeEventListener("change", callback)
}

function getSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches
}

function getServerSnapshot() {
  return false
}

/**
 * Detects if the user prefers reduced motion.
 * Returns true if the user has enabled prefers-reduced-motion in their system settings.
 * Updates automatically if the preference changes.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
