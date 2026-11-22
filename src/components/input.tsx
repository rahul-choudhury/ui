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
 * @sizes sm (32px) | md (36px) | lg (40px)
 * @states default, hover, focus-visible, disabled, invalid
 *
 * @styles input.css (`.ui-input`, keyed on `data-variant` and `data-size`;
 *   shares its base and variant styles with `Textarea`)
 *
 * @accessibility
 * - Renders Base UI `Input`, which uses a native `<input>` element.
 * - Automatically integrates with `FieldRoot` for labeling, validity, and
 *   description/error relationships.
 * - The `bare` variant has no focus indicator of its own: show focus on the
 *   surrounding container, e.g. with `:focus-within`.
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
import { mergeClassName } from "../lib/utils"

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
      className={mergeClassName("ui-input", className)}
      data-variant={variant}
      data-size={size}
      {...props}
    />
  )
}
