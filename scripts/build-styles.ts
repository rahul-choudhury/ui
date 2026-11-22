// Concatenates every component stylesheet (src/components/*.css) into
// dist/styles/styles.css, the single file apps import. Each component file
// wraps its rules in `@layer ui`; the layer order is declared up front so
// the file also works when imported without reset.css.

import { readdirSync, readFileSync, writeFileSync } from "node:fs"

const dir = new URL("../src/components/", import.meta.url)
const files = readdirSync(dir)
  .filter((name) => name.endsWith(".css"))
  .sort()

const parts = files.map(
  (name) => `/* ${name} */\n${readFileSync(new URL(name, dir), "utf8").trim()}`
)

writeFileSync(
  new URL("../dist/styles/styles.css", import.meta.url),
  ["@layer reset, ui;", ...parts].join("\n\n") + "\n"
)

console.log(`Built styles.css from ${files.length} component stylesheet(s).`)
