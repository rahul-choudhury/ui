export type CubicBezier = readonly [number, number, number, number]

export const easeInQuad = [0.55, 0.085, 0.68, 0.53] as const satisfies CubicBezier
export const easeInCubic = [
  0.55, 0.055, 0.675, 0.19,
] as const satisfies CubicBezier
export const easeInQuart = [
  0.895, 0.03, 0.685, 0.22,
] as const satisfies CubicBezier
export const easeInQuint = [
  0.755, 0.05, 0.855, 0.06,
] as const satisfies CubicBezier
export const easeInExpo = [
  0.95, 0.05, 0.795, 0.035,
] as const satisfies CubicBezier
export const easeInCirc = [0.6, 0.04, 0.98, 0.335] as const satisfies CubicBezier

export const easeOutQuad = [
  0.25, 0.46, 0.45, 0.94,
] as const satisfies CubicBezier
export const easeOutCubic = [
  0.215, 0.61, 0.355, 1,
] as const satisfies CubicBezier
export const easeOutQuart = [
  0.165, 0.84, 0.44, 1,
] as const satisfies CubicBezier
export const easeOutQuint = [0.23, 1, 0.32, 1] as const satisfies CubicBezier
export const easeOutExpo = [0.19, 1, 0.22, 1] as const satisfies CubicBezier
export const easeOutCirc = [
  0.075, 0.82, 0.165, 1,
] as const satisfies CubicBezier

export const easeInOutQuad = [
  0.455, 0.03, 0.515, 0.955,
] as const satisfies CubicBezier
export const easeInOutCubic = [
  0.645, 0.045, 0.355, 1,
] as const satisfies CubicBezier
export const easeInOutQuart = [
  0.77, 0, 0.175, 1,
] as const satisfies CubicBezier
export const easeInOutQuint = [0.86, 0, 0.07, 1] as const satisfies CubicBezier
export const easeInOutExpo = [1, 0, 0, 1] as const satisfies CubicBezier
export const easeInOutCirc = [
  0.785, 0.135, 0.15, 0.86,
] as const satisfies CubicBezier
