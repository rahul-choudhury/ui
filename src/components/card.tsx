/**
 * Card
 *
 * Surface container for grouping related content.
 *
 * @variants
 * - `bordered` (default): 1px border for visual separation
 * - `plain`: surface only, no border or shadow
 * - `elevated`: subtle shadow for floating/prominent content
 *
 * @accessibility Renders a `<div>`. Add role="region" and aria-label
 * when the card represents a distinct landmark.
 *
 * @example
 * ```tsx
 * <Card className="p-6">
 *   <h3>Title</h3>
 *   <p>Content</p>
 * </Card>
 * ```
 */

import { cn } from "../lib/utils"

type CardProps = {
  variant?: "bordered" | "plain" | "elevated"
} & React.ComponentProps<"div">

export function Card({ variant = "bordered", className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-surface",
        variant === "bordered" && "border border-border",
        variant === "elevated" && "shadow-md",
        className
      )}
      {...props}
    />
  )
}
