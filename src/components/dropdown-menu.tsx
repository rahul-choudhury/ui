"use client"

/**
 * DropdownMenu
 *
 * Action menu triggered by a button, backed by Base UI Menu.
 *
 * @parts DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
 *        DropdownMenuItem, DropdownMenuSeparator
 *
 * @accessibility
 * - Keyboard: Arrow keys to navigate items, Enter to activate, Escape to close.
 * - Focus is trapped inside the menu when open.
 * - Items are announced as menu items by screen readers.
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenuTrigger
 *     render={<Button variant="ghost" size="icon" aria-label="Actions" />}
 *   >
 *     <DotsThreeIcon />
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem onClick={() => edit()}>Edit</DropdownMenuItem>
 *     <DropdownMenuItem onClick={() => duplicate()}>Duplicate</DropdownMenuItem>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuItem onClick={() => remove()}>Delete</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */

import { Menu as BaseMenu } from "@base-ui/react/menu"
import { cn } from "../lib/utils"

/* ----- Root ----- */

const DropdownMenu = BaseMenu.Root

/* ----- Trigger ----- */

const DropdownMenuTrigger = BaseMenu.Trigger

/* ----- Content (Portal + Positioner + Popup) ----- */

type DropdownMenuContentProps = {
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
} & React.ComponentProps<typeof BaseMenu.Popup>

function DropdownMenuContent({
  side = "bottom",
  align = "start",
  sideOffset = 4,
  className,
  children,
  ...props
}: DropdownMenuContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        className="z-(--z-dropdown)"
      >
        <BaseMenu.Popup
          className={cn(
            "min-w-40 py-1 rounded-md border border-border bg-surface shadow-md",
            "transition-[opacity,scale] duration-200",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "data-ending-style:scale-95 data-ending-style:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

/* ----- Item ----- */

type DropdownMenuItemProps = React.ComponentProps<typeof BaseMenu.Item>

function DropdownMenuItem({ className, ...props }: DropdownMenuItemProps) {
  return (
    <BaseMenu.Item
      className={cn(
        "px-3 py-1.5 text-sm flex w-full cursor-pointer items-center text-text transition-colors outline-none",
        "data-highlighted:bg-surface-soft",
        className
      )}
      {...props}
    />
  )
}

/* ----- Separator ----- */

type DropdownMenuSeparatorProps = React.ComponentProps<"hr">

function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <hr
      className={cn("my-1 h-px border-none bg-border", className)}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
