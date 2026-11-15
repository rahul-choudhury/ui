import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"
import * as easings from "./easings"

// "easeOutQuint" -> "out-quint", the name used by the `ease-out-quint` utility.
const easeNames = Object.keys(easings).map((name) =>
  name
    .replace(/^ease/, "")
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    .slice(1)
)

// tailwind-merge only knows Tailwind's default theme. Without this, custom
// values from src/styles/tokens.css are not recognised as conflicting with
// the built-in ones (e.g. `shadow-overlay` vs `shadow-md`), so both classes
// survive and an override may not win.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      shadow: ["overlay"],
      ease: easeNames,
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Merges a component's own classes with a consumer `className`.
 *
 * Base UI components accept `className` as a string or as a function of the
 * component's state. `cn` alone would silently drop the function form, so
 * components wrapping a Base UI part use this instead.
 */
export function mergeClassName<State>(
  base: string,
  className: string | ((state: State) => string | undefined) | undefined
): string | ((state: State) => string) {
  if (typeof className === "function") {
    return (state: State) => cn(base, className(state))
  }

  return cn(base, className)
}
