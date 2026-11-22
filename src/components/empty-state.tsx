/**
 * EmptyState
 *
 * Centered placeholder shown when a view has no content.
 *
 * @props
 * - `icon`: optional decorative icon (rendered in the muted text colour)
 * - `title`: required heading text
 * - `description`: optional supporting text
 * - `action`: optional CTA (e.g. a Button)
 *
 * @styles empty-state.css (`.ui-empty-state` and its parts)
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon={<FileText size={32} />}
 *   title="No posts yet"
 *   description="Write your first blog post to get started."
 *   action={<Button>New Post</Button>}
 * />
 * ```
 */

import { mergeClassName } from "../lib/utils"

type EmptyStateProps = {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
} & Omit<React.ComponentProps<"div">, "title">

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div className={mergeClassName("ui-empty-state", className)} {...props}>
      {icon && <div className="ui-empty-state-icon">{icon}</div>}
      <p className="ui-empty-state-title">{title}</p>
      {description && (
        <p className="ui-empty-state-description">{description}</p>
      )}
      {action && <div className="ui-empty-state-action">{action}</div>}
    </div>
  )
}
