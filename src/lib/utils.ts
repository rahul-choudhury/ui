import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// tailwind-merge only knows Tailwind's default theme. Without this, custom
// values from src/styles/tokens.css are not recognised as conflicting with
// the built-in ones (e.g. `shadow-overlay` vs `shadow-md`), so both classes
// survive and an override may not win. Keep in sync with tokens.css.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      shadow: ["overlay"],
      ease: [
        "in-quad",
        "in-cubic",
        "in-quart",
        "in-quint",
        "in-expo",
        "in-circ",
        "out-quad",
        "out-cubic",
        "out-quart",
        "out-quint",
        "out-expo",
        "out-circ",
        "in-out-quad",
        "in-out-cubic",
        "in-out-quart",
        "in-out-quint",
        "in-out-expo",
        "in-out-circ",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
