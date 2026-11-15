"use client"

/**
 * Input
 *
 * Styled text input. Reads Field context for id, disabled, required,
 * invalid, and aria-describedby wiring.
 *
 * @variants
 * - `default`: bordered field with hover, focus and invalid styles
 * - `bare`: no border, background or focus ring, for embedding in a
 *   container that draws its own chrome (e.g. a search bar)
 * @sizes sm (h-8) | md (h-9) | lg (h-10)
 * @states default, hover, focus-visible, disabled, invalid
 *
 * @accessibility
 * - Renders Base UI `Input`, which uses a native `<input>` element.
 * - Automatically integrates with `FieldRoot` for labeling, validity, and
 *   description/error relationships.
 * - The `bare` variant has no focus indicator of its own: show focus on the
 *   surrounding container, e.g. with `focus-within:`.
 *
 * @example
 * ```tsx
 * // Standalone
 * <Input type="search" placeholder="Search..." />
 *
 * // Inside Field
 * <FieldRoot>
 *   <FieldLabel>Name</FieldLabel>
 *   <Input required placeholder="Jane Doe" />
 *   <FieldDescription>Used for your public profile.</FieldDescription>
 * </FieldRoot>
 * ```
 */

import { Input as BaseInput } from "@base-ui/react/input"
import { cn, mergeClassName } from "../lib/utils"

const sizeStyles = {
  sm: "h-8 px-2.5 text-sm",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-3.5 text-base",
}

const variantStyles = {
  default: cn(
    "border border-border bg-surface transition-[border-color,box-shadow]",
    "hover:border-border-strong",
    "focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/15",
    "aria-invalid:border-danger aria-invalid:focus-visible:border-danger aria-invalid:focus-visible:ring-danger/15"
  ),
  bare: "bg-transparent",
}

type InputProps = {
  variant?: "default" | "bare"
  size?: "sm" | "md" | "lg"
} & Omit<React.ComponentProps<typeof BaseInput>, "size">

export function Input({
  variant = "default",
  size = "md",
  className,
  ...props
}: InputProps) {
  return (
    <BaseInput
      className={mergeClassName(
        cn(
          "w-full rounded-md text-text focus-visible:outline-none",
          "placeholder:text-text-muted",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size]
        ),
        className
      )}
      {...props}
    />
  )
}
