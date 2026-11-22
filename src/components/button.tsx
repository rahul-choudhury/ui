"use client"

/**
 * Button
 *
 * Primary interactive element for triggering actions.
 *
 * @variants primary | secondary | ghost | destructive
 * @sizes sm (32px) | md (36px) | lg (40px) | icon (36px square)
 * @states default, hover, focus-visible, active, disabled
 *
 * @styles button.css (`.ui-button`, keyed on `data-variant` and `data-size`)
 *
 * @accessibility Renders native `<button>`. Focus ring on :focus-visible only.
 *
 * @example
 * ```tsx
 * <Button variant="primary">Save</Button>
 * <Button variant="ghost" size="icon"><Icon /></Button>
 * ```
 */

import { Button as BaseButton } from "@base-ui/react/button"
import { mergeClassName } from "../lib/utils"

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg" | "icon"
} & React.ComponentProps<typeof BaseButton>

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={mergeClassName("ui-button", className)}
      data-variant={variant}
      data-size={size}
      {...props}
    />
  )
}
