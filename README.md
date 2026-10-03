# @rahul-choudhury/ui

My personal design system.

## Install

```sh
bun add @rahul-choudhury/ui
```

Install peer dependencies in the consuming app:

```sh
bun add react react-dom
```

## Imports

```ts
import { cn, easeOutQuint } from "@rahul-choudhury/ui"
import { Button, Input } from "@rahul-choudhury/ui/components"
import { usePrefersReducedMotion } from "@rahul-choudhury/ui/hooks"
```

## Tailwind Tokens

Import the package tokens from the app global CSS:

```css
@import "tailwindcss";
@import "@rahul-choudhury/ui/tokens.css";
```

The semantic color tokens automatically switch between coordinated light and
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
