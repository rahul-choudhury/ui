"use client"

/**
 * Textarea
 *
 * Multi-line text input built on Base UI `FieldControl` with
 * `render={<textarea />}`.
 *
 * @sizes sm | md | lg (controls padding and text size, not rows)
 * @variants
 * - `default`: bordered field with hover, focus and invalid styles
 * - `bare`: no border, background or focus ring, for embedding in a
 *   container that draws its own chrome (e.g. a chat composer)
 * @states default, hover, focus-visible, disabled, invalid
 *
 * @styles input.css (`.ui-textarea`, keyed on `data-variant` and `data-size`)
 *
 * @accessibility Works standalone, and integrates with `FieldRoot` for
 * labeling, validity, and description/error relationships (like `Input`).
 * The `bare` variant has no focus indicator of its own: show focus on the
 * surrounding container, e.g. with `:focus-within`.
 *
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldLabel>Message</FieldLabel>
 *   <Textarea rows={4} placeholder="Write your message..." />
 *   <FieldDescription>Markdown supported.</FieldDescription>
 * </FieldRoot>
 * ```
 */

import { Field as BaseField } from "@base-ui/react/field"
import { mergeClassName } from "../lib/utils"

type TextareaProps = {
  variant?: "default" | "bare"
  size?: "sm" | "md" | "lg"
} & React.ComponentProps<"textarea">

export function Textarea({
  variant = "default",
  size = "md",
  className,
  ...props
}: TextareaProps) {
  return (
    <BaseField.Control
      render={<textarea />}
      className={mergeClassName("ui-textarea", className)}
      data-variant={variant}
      data-size={size}
      // Field.Control's props are typed for <input>; at runtime they're
      // forwarded to the rendered <textarea>, so the public props stay
      // correctly typed as textarea props.
      {...(props as React.ComponentProps<typeof BaseField.Control>)}
    />
  )
}
