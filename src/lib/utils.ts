type ClassName<State> = string | ((state: State) => string | undefined)

/**
 * Adds a component's own class to a consumer `className`.
 *
 * Base UI accepts `className` as a string or as a function of the
 * component's state, so this returns the same form it was given.
 */
export function mergeClassName(base: string, className?: string): string
export function mergeClassName<State>(
  base: string,
  className?: ClassName<State>
): string | ((state: State) => string)
export function mergeClassName<State>(
  base: string,
  className?: ClassName<State>
): string | ((state: State) => string) {
  const join = (extra?: string) => (extra ? `${base} ${extra}` : base)

  return typeof className === "function"
    ? (state: State) => join(className(state))
    : join(className)
}
