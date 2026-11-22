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
 * @styles card.css (`.ui-card`, keyed on `data-variant`)
 *
 * @accessibility Renders a `<div>`. Add role="region" and aria-label
 * when the card represents a distinct landmark.
 *
 * @example
 * ```tsx
 * <Card className={styles.card}>
 *   <h3>Title</h3>
 *   <p>Content</p>
 * </Card>
 * ```
 */

import { mergeClassName } from "../lib/utils"

type CardProps = {
  variant?: "bordered" | "plain" | "elevated"
} & React.ComponentProps<"div">

export function Card({ variant = "bordered", className, ...props }: CardProps) {
  return (
    <div
      className={mergeClassName("ui-card", className)}
      data-variant={variant}
      {...props}
    />
  )
}
