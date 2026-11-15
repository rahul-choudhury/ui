// Fails if the easing curves in src/lib/easings.ts and the --ease-* tokens in
// src/styles/tokens.css have drifted apart. Run with `bun run check:tokens`.

import { readFileSync } from "node:fs"
import * as easings from "../src/lib/easings"

const css = readFileSync(
  new URL("../src/styles/tokens.css", import.meta.url),
  "utf8"
)

const fromCss = new Map<string, string>()
for (const match of css.matchAll(
  /--ease-([a-z-]+):\s*cubic-bezier\(([^)]+)\)/g
)) {
  const values = match[2].split(",").map((value) => Number(value.trim()))
  fromCss.set(match[1], values.join(", "))
}

const fromJs = new Map<string, string>()
for (const [name, curve] of Object.entries(easings)) {
  const token = name
    .replace(/^ease/, "")
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    .slice(1)
  fromJs.set(token, curve.join(", "))
}

const problems: string[] = []
for (const name of new Set([...fromCss.keys(), ...fromJs.keys()])) {
  const cssValue = fromCss.get(name)
  const jsValue = fromJs.get(name)
  if (cssValue === undefined) {
    problems.push(`--ease-${name} is missing from tokens.css`)
  } else if (jsValue === undefined) {
    problems.push(`ease-${name} is missing from easings.ts`)
  } else if (cssValue !== jsValue) {
    problems.push(
      `ease-${name}: tokens.css has (${cssValue}), easings.ts has (${jsValue})`
    )
  }
}

if (problems.length > 0) {
  console.error("Easing tokens are out of sync:\n" + problems.join("\n"))
  process.exit(1)
}

console.log(`Easing tokens in sync (${fromJs.size} curves).`)
