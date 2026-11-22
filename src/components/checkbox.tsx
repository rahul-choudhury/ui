"use client"

/**
 * Checkbox
 *
 * Toggle control for boolean values, backed by Base UI Checkbox.
 * Renders a hidden `<input type="checkbox">` for form submission.
 *
 * @states default, hover, checked, disabled, indeterminate, invalid
 *
 * @styles checkbox.css (`.ui-checkbox`, `.ui-checkbox-indicator`)
 *
 * @accessibility
 * - Keyboard: Space to toggle.
 * - Pair with `FieldLabel` to provide an accessible name.
 *
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldLabel>
 *     <Checkbox checked={agreed} onCheckedChange={setAgreed} />
 *     I accept the terms
 *   </FieldLabel>
 * </FieldRoot>
 *
 * <Checkbox indeterminate /> // Parent checkbox state
 * ```
 */

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "@phosphor-icons/react"
import { mergeClassName } from "../lib/utils"

type CheckboxProps = React.ComponentProps<typeof BaseCheckbox.Root>

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <BaseCheckbox.Root
      className={mergeClassName("ui-checkbox", className)}
      {...props}
    >
      <BaseCheckbox.Indicator keepMounted className="ui-checkbox-indicator">
        {props.indeterminate ? (
          <MinusIcon size={12} weight="bold" />
        ) : (
          <CheckIcon size={12} weight="bold" />
        )}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}
