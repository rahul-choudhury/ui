/**
 * NotFound
 *
 * Full-page 404 placeholder. Renders an error code, heading, optional
 * description, and an optional action (e.g. a back link or Button).
 *
 * @props
 * - `code`: error code label, defaults to "404"
 * - `title`: required heading text
 * - `description`: optional supporting text
 * - `action`: optional CTA (e.g. a Link or Button)
 *
 * @example
 * ```tsx
 * <NotFound
 *   title="Page not found"
 *   description="This page doesn't exist or has been moved."
 *   action={<Link href="/">Go home</Link>}
 * />
 * ```
 */

import { cn } from "../lib/utils"

type NotFoundProps = {
  code?: string
  title?: string
  description?: string
  action?: React.ReactNode
} & Omit<React.ComponentProps<"div">, "title">

export function NotFound({
  code = "404",
  title = "Page not found",
  description = "There is no there there. ~ Gertrude Stein",
  action,
  className,
  ...props
}: NotFoundProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <p className="text-sm font-mono text-text-muted">{code}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl font-serif leading-[1.1] text-text">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-sm text-base text-text-secondary">
          {description}
        </p>
      )}
      {action && <div className="mt-8">{action}</div>}
    </div>
  )
}
