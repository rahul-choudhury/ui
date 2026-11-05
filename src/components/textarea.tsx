"use client"

/**
 * Textarea
 *
 * Multi-line text input built on Base UI `FieldControl` with
 * `render={<textarea />}`.
 *
 * @sizes sm | md | lg (controls padding and text size, not rows)
 * @states default, hover, focus-visible, disabled, invalid
 *
 * @accessibility Works standalone, and integrates with `FieldRoot` for
 * labeling, validity, and description/error relationships (like `Input`).
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
import { cn } from "../lib/utils"

const sizeStyles = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-3.5 py-2.5 text-base",
}

type TextareaProps = {
  size?: "sm" | "md" | "lg"
} & React.ComponentProps<"textarea">

export function Textarea({ size = "md", className, ...props }: TextareaProps) {
  return (
    <BaseField.Control
      render={<textarea />}
      className={cn(
        "w-full resize-y rounded-md border border-border bg-surface text-text transition-[border-color,box-shadow]",
        "placeholder:text-text-muted",
        "hover:border-border-strong",
        "focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/15 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-danger aria-invalid:focus-visible:border-danger aria-invalid:focus-visible:ring-danger/15",
        sizeStyles[size],
        className
      )}
      // Field.Control's props are typed for <input>; at runtime they're
      // forwarded to the rendered <textarea>, so the public props stay
      // correctly typed as textarea props.
      {...(props as React.ComponentProps<typeof BaseField.Control>)}
    />
  )
}
