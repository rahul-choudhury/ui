# @rahul-choudhury/ui

My personal design system.

## Install

```sh
bun add @rahul-choudhury/ui
```

Install peer dependencies in the consuming app:

```sh
bun add react react-dom @base-ui/react
```

## Imports

```ts
import { easeOutQuint, mergeClassName } from "@rahul-choudhury/ui"
import { Button, Input } from "@rahul-choudhury/ui/components"
import {
  useMediaQuery,
  usePrefersReducedMotion,
} from "@rahul-choudhury/ui/hooks"
```

## Styles

Import the three stylesheets once, at the top of the app's global CSS:

```css
@import "@rahul-choudhury/ui/reset.css";
@import "@rahul-choudhury/ui/tokens.css";
@import "@rahul-choudhury/ui/styles.css";
```

- `reset.css` is [Josh Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)
  (without its `#root` isolation rule: set `isolation: isolate` on your app's
  root element yourself).
- `tokens.css` defines the design tokens as CSS variables (`--color-text`,
  `--space-4`, `--radius-md`, ...). Use them in your own CSS with `var()`.
- `styles.css` holds the component styles, in the `ui` cascade layer.

Each component renders a `ui-*` class (`.ui-button`) plus `data-*` attributes
for its variant, size and state. To adjust one, pass your own class:

```tsx
<Button className={styles.wide}>Save</Button>
```

Your styles always win over the library's, because the library's styles live
in a cascade layer and yours don't. No class merging is needed.

When you write your own wrapper that has a base class and also accepts a
`className`, use `mergeClassName`. It handles Base UI's function form of
`className` as well as strings:

```tsx
function MenuItem({ className, ...props }: Menu.Item.Props) {
  return (
    <Menu.Item className={mergeClassName(styles.item, className)} {...props} />
  )
}
```

## Themes

The color tokens automatically switch between coordinated light and
dark themes using CSS `light-dark()` and `color-scheme: light dark` when no
explicit theme is set. This follows the operating system's color preference
without a media query. No application-level theme provider or class is required.

To override the system preference, set `data-theme` on the root element:

```html
<html data-theme="light"></html>
<!-- or -->
<html data-theme="dark"></html>
```

Remove the `data-theme` attribute to follow the system preference again.
