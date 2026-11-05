"use client"

/**
 * Field
 *
 * Thin design-system wrappers around Base UI Field primitives.
 *
 * @parts FieldRoot, FieldLabel, FieldDescription, FieldControl, FieldItem, FieldError, FieldValidity
 *
 * @usage
 * - Use `FieldRoot` to scope labels, descriptions, errors, and controls.
 * - Use `FieldControl` directly for custom controls, or pair `FieldRoot`
 *   with field-aware primitives like `Input`, `Textarea`, `Select`, `Checkbox`,
 *   `Radio`, and `Switch`.
 * - Use `FieldItem` for nested field items, such as radio groups.
 *
 * @example
 * ```tsx
 * <FieldRoot invalid>
 *   <FieldLabel required>Email</FieldLabel>
 *   <Input type="email" placeholder="you@example.com" />
 *   <FieldError>Email is required.</FieldError>
 * </FieldRoot>
 * ```
 */

import { Field as BaseField } from "@base-ui/react/field"
import { cn } from "../lib/utils"

const FieldControl = BaseField.Control
const FieldValidity = BaseField.Validity

type FieldRootProps = React.ComponentProps<typeof BaseField.Root>

function FieldRoot({ className, ...props }: FieldRootProps) {
  return (
    <BaseField.Root
      className={cn("gap-1.5 flex flex-col", className)}
      {...props}
    />
  )
}

type FieldLabelProps = React.ComponentProps<typeof BaseField.Label> & {
  required?: boolean
}

// `required` is a presentational affordance for the label marker.
function FieldLabel({
  required,
  className,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <BaseField.Label
      className={cn(
        "text-sm font-medium text-text data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-danger" aria-hidden="true">
          *
        </span>
      )}
    </BaseField.Label>
  )
}

type FieldDescriptionProps = React.ComponentProps<typeof BaseField.Description>

function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <BaseField.Description
      className={cn("text-sm text-text-muted", className)}
      {...props}
    />
  )
}

type FieldItemProps = React.ComponentProps<typeof BaseField.Item>

function FieldItem({ className, ...props }: FieldItemProps) {
  return (
    <BaseField.Item
      className={cn("gap-1.5 flex flex-col", className)}
      {...props}
    />
  )
}

type FieldErrorProps = React.ComponentProps<typeof BaseField.Error>

function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <BaseField.Error
      role="alert"
      className={cn("text-sm text-danger", className)}
      {...props}
    />
  )
}

export {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
}
