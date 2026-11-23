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

## Editor autocomplete

To get token suggestions while typing `var(--`, use
[css-variables-language-server](https://github.com/vunguyentuan/vscode-css-variables).
It skips `node_modules` by default, so point it at the tokens file explicitly.

**VS Code:** install the
[CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)
extension and add this to the project's `.vscode/settings.json`:

```json
{
  "cssVariables.lookupFiles": [
    "**/*.css",
    "node_modules/@rahul-choudhury/ui/dist/styles/tokens.css"
  ]
}
```

To have VS Code suggest the extension to anyone who opens the project, add
`.vscode/extensions.json`:

```json
{
  "recommendations": ["vunguyentuan.vscode-css-variables"]
}
```

**Neovim:** install the server (`bun add -g css-variables-language-server` or
`npm i -g css-variables-language-server`), then enable it with
[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)'s `css_variables`
config:

```lua
vim.lsp.config("css_variables", {
  settings = {
    cssVariables = {
      lookupFiles = {
        "**/*.css",
        "node_modules/@rahul-choudhury/ui/dist/styles/tokens.css",
      },
    },
  },
})
vim.lsp.enable("css_variables")
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
