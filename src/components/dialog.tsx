"use client"

/**
 * Dialog
 *
 * Modal dialog backed by Base UI Dialog. Includes backdrop overlay,
 * focus trap, and Escape-to-close behavior.
 *
 * @parts Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose
 *
 * @styles dialog.css (`.ui-dialog` and its parts), popup.css (open/close motion)
 *
 * @accessibility
 * - Focus is trapped inside the dialog when open.
 * - Escape key closes the dialog.
 * - Page scroll is locked when open.
 * - DialogTitle is required for screen readers (renders as h2).
 * - Clicking the backdrop closes the dialog (AlertDialog does not).
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger render={<Button variant="secondary" />}>
 *     Edit profile
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogTitle>Edit profile</DialogTitle>
 *     <DialogDescription>Changes are visible to everyone.</DialogDescription>
 *     <ProfileForm />
 *   </DialogContent>
 * </Dialog>
 *
 * // For "are you sure?" confirmations, use AlertDialog instead.
 * ```
 */

import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { mergeClassName } from "../lib/utils"

/* ----- Root ----- */

const Dialog = BaseDialog.Root

/* ----- Trigger ----- */

const DialogTrigger = BaseDialog.Trigger

/* ----- Content (Portal + Backdrop + Popup) ----- */

type DialogContentProps = React.ComponentProps<typeof BaseDialog.Popup>

function DialogContent({ className, children, ...props }: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="ui-dialog-backdrop" />
      <BaseDialog.Popup
        className={mergeClassName("ui-dialog", className)}
        {...props}
      >
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}

/* ----- Title ----- */

type DialogTitleProps = React.ComponentProps<typeof BaseDialog.Title>

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <BaseDialog.Title
      className={mergeClassName("ui-dialog-title", className)}
      {...props}
    />
  )
}

/* ----- Description ----- */

type DialogDescriptionProps = React.ComponentProps<
  typeof BaseDialog.Description
>

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <BaseDialog.Description
      className={mergeClassName("ui-dialog-description", className)}
      {...props}
    />
  )
}

/* ----- Close ----- */

const DialogClose = BaseDialog.Close

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
}
