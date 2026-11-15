import { useCallback, useSyncExternalStore } from "react"

function getServerSnapshot() {
  return false
}

/**
 * Tracks whether a CSS media query currently matches.
 * Updates automatically when the result changes.
 *
 * Returns false on the server and during hydration, so render the
 * non-matching layout by default.
 *
 * @example
 * ```tsx
 * const isWide = useMediaQuery("(min-width: 48rem)")
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener("change", callback)

      return () => mediaQuery.removeEventListener("change", callback)
    },
    [query]
  )

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  )

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
