/**
 * Skeleton
 *
 * Placeholder for content that is loading. Renders a pulsing
 * block sized by the consumer via className or style.
 *
 * @styles skeleton.css (`.ui-skeleton`)
 *
 * @example
 * ```tsx
 * <Skeleton className={styles.titleLine} />
 * <Skeleton style={{ width: "60%", height: 16 }} />
 * ```
 */

import { mergeClassName } from "../lib/utils"

type SkeletonProps = React.ComponentProps<"div">

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={mergeClassName("ui-skeleton", className)}
      aria-hidden="true"
      {...props}
    />
  )
}
