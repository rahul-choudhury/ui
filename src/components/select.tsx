"use client"

/**
 * Select
 *
 * True listbox/select component backed by Base UI Select.
 * Not a combobox - searchable selection is out of scope for v1.
 *
 * @sizes sm (32px) | md (36px) | lg (40px) - set on Select; applies to the
 *        trigger and the items
 * @variants (on SelectTrigger)
 * - `default`: bordered field, matches `Input`
 * - `ghost`: no border or background until hovered or open, matches the
 *   ghost `Button`; for quiet inline pickers
 * @states default, hover, focus-visible, disabled, invalid (on trigger)
 *
 * @styles select.css (`.ui-select-trigger`, `.ui-select-popup`, `.ui-select-item`),
 *         popup.css (popup surface and open/close motion)
 *
 * @accessibility
 * - Keyboard navigation: arrow keys to highlight, Enter to select, Escape to close.
 * - Selected item announced via aria-selected.
 * - Trigger associated with label via Field context when used inside a Field.
 *
 * @example
 * ```tsx
 * <Select defaultValue="serif" size="md">
 *   <SelectTrigger>
 *     <SelectValue placeholder="Choose a font..." />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="sans">Sans-serif</SelectItem>
 *     <SelectItem value="serif">Serif</SelectItem>
 *     <SelectItem value="mono">Monospace</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 */

import { Select as BaseSelect } from "@base-ui/react/select"
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react"
import { createContext, useContext } from "react"
import { mergeClassName } from "../lib/utils"

type SelectSize = "sm" | "md" | "lg"

const SelectSizeContext = createContext<SelectSize>("md")

/* ----- Root (no HTML rendered) ----- */

// The size lives on the root so it reaches both the trigger and the items,
// which render in a portal outside the trigger's subtree.
type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = BaseSelect.Root.Props<Value, Multiple> & {
  size?: SelectSize
}

function Select<Value, Multiple extends boolean | undefined = false>({
  size = "md",
  ...props
}: SelectProps<Value, Multiple>) {
  return (
    <SelectSizeContext value={size}>
      <BaseSelect.Root {...props} />
    </SelectSizeContext>
  )
}

/* ----- Trigger ----- */

type SelectTriggerProps = {
  variant?: "default" | "ghost"
} & React.ComponentProps<typeof BaseSelect.Trigger>

function SelectTrigger({
  variant = "default",
  className,
  children,
  ...props
}: SelectTriggerProps) {
  const size = useContext(SelectSizeContext)

  return (
    <BaseSelect.Trigger
      className={mergeClassName("ui-select-trigger", className)}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {children}
      <BaseSelect.Icon className="ui-select-icon">
        <CaretUpDownIcon size={14} />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

/* ----- Value ----- */

const SelectValue = BaseSelect.Value

/* ----- Content (Portal + Positioner + Popup) ----- */

type SelectContentProps = {
  side?: "top" | "bottom"
  /**
   * How the popup lines up with the trigger along `side`. Only matters when
   * the popup is wider than the trigger. Defaults to Base UI's "center".
   */
  align?: "start" | "center" | "end"
  sideOffset?: number
  /**
   * When true (Base UI default), the popup overlaps the trigger so the
   * selected item sits on top of it, and `side`/`sideOffset` are ignored.
   */
  alignItemWithTrigger?: boolean
} & React.ComponentProps<typeof BaseSelect.Popup>

function SelectContent({
  side = "bottom",
  align,
  sideOffset = 4,
  alignItemWithTrigger,
  className,
  children,
  ...props
}: SelectContentProps) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="ui-select-positioner"
      >
        <BaseSelect.Popup
          className={mergeClassName("ui-select-popup", className)}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

/* ----- Item ----- */

type SelectItemProps = React.ComponentProps<typeof BaseSelect.Item>

function SelectItem({ className, children, ...props }: SelectItemProps) {
  const size = useContext(SelectSizeContext)

  return (
    <BaseSelect.Item
      className={mergeClassName("ui-select-item", className)}
      data-size={size}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator>
        <CheckIcon size={14} />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }
