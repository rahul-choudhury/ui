"use client"

/**
 * AlertDialog
 *
 * Confirmation dialog for actions that need an explicit answer, backed by
 * Base UI AlertDialog. Unlike `Dialog`, clicking the backdrop does not close
 * it: the user has to pick one of the actions.
 *
 * @parts AlertDialog, AlertDialogTrigger, AlertDialogContent,
 *        AlertDialogTitle, AlertDialogDescription, AlertDialogClose
 *
 * @styles dialog.css, popup.css (shares `.ui-dialog` and its parts with `Dialog`)
 *
 * @accessibility
 * - Renders `role="alertdialog"`.
 * - Focus is trapped inside the dialog when open; Escape closes it.
 * - AlertDialogTitle and AlertDialogDescription are announced when it opens.
 *
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger render={<Button variant="destructive" />}>
 *     Delete
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogTitle>Delete this post?</AlertDialogTitle>
 *     <AlertDialogDescription>This can't be undone.</AlertDialogDescription>
 *     <div className={styles.actions}>
 *       <AlertDialogClose render={<Button variant="ghost" />}>
 *         Cancel
 *       </AlertDialogClose>
 *       <Button variant="destructive" onClick={deletePost}>
 *         Delete
 *       </Button>
 *     </div>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./dialog"

// Only the root and trigger differ from Dialog. Base UI's AlertDialog reuses
// Dialog's Portal, Backdrop, Popup, Title, Description and Close parts, so
// the Dialog wrappers (and their styles) work here unchanged.
const AlertDialog = BaseAlertDialog.Root
const AlertDialogTrigger = BaseAlertDialog.Trigger

export {
  AlertDialog,
  DialogClose as AlertDialogClose,
  DialogContent as AlertDialogContent,
  DialogDescription as AlertDialogDescription,
  DialogTitle as AlertDialogTitle,
  AlertDialogTrigger,
}
