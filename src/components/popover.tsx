"use client"

/**
 * Popover
 *
 * Floating content panel anchored to a trigger, backed by Base UI Popover.
 *
 * @parts Popover, PopoverTrigger, PopoverContent, PopoverClose
 *
 * @styles popover.css (`.ui-popover`), popup.css (surface and open/close motion)
 *
 * @accessibility
 * - Focus moves into popover when opened.
 * - Escape key closes the popover.
 * - Arrow keys navigate focusable elements inside.
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger
 *     render={<Button variant="ghost" size="icon" aria-label="Info" />}
 *   >
 *     <InfoIcon />
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>Additional information here.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */

import { Popover as BasePopover } from "@base-ui/react/popover"
import { mergeClassName } from "../lib/utils"

/* ----- Root ----- */

const Popover = BasePopover.Root

/* ----- Trigger ----- */

const PopoverTrigger = BasePopover.Trigger

/* ----- Content (Portal + Positioner + Popup) ----- */

type PopoverContentProps = {
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
} & React.ComponentProps<typeof BasePopover.Popup>

function PopoverContent({
  side = "bottom",
  align = "start",
  sideOffset = 4,
  className,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        className="ui-popover-positioner"
      >
        <BasePopover.Popup
          className={mergeClassName("ui-popover", className)}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}

/* ----- Close ----- */

const PopoverClose = BasePopover.Close

export { Popover, PopoverClose, PopoverContent, PopoverTrigger }
