import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docPath = process.argv[2] || "C:/Users/PRATHMESH/AppData/Local/Temp/jahnava_word/word/document.xml"
const xml = fs.readFileSync(docPath, "utf8")
const ps = xml.split(/<w:p[\s>]/)
const paras = []
for (const bl of ps) {
  const runs = bl.match(/<w:t[^>]*>([^<]*)<\/w:t>/g) || []
  if (!runs.length) continue
  let t = ""
  for (const r of runs) {
    const m = r.match(/<w:t[^>]*>([^<]*)<\/w:t>/)
    if (m) t += m[1]
  }
  t = t
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
  if (t.trim()) paras.push(t)
}
const devIdx = paras.findIndex((x) => x.includes("Developer Reference"))
const contentParas = devIdx > 0 ? paras.slice(0, devIdx) : paras
const outPath = path.join(__dirname, "jahnava-plain-paras.json")
fs.writeFileSync(outPath, JSON.stringify({ total: paras.length, devIdx, contentLen: contentParas.length, content: contentParas }, null, 0))
console.log("Wrote", outPath, "paragraphs in content:", contentParas.length)
console.log("First 3:", contentParas.slice(0, 3))
console.log("Last 2:", contentParas.slice(-2))
