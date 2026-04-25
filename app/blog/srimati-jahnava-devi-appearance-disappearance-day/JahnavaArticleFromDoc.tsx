import React from "react"
import type { FC } from "react"
import raw from "./jahnava-article-paragraphs.json"
import { fixJahnavaTypos } from "./jahnava-typo-fixes"

const allParas = (raw as { content: string[] }).content.map(fixJahnavaTypos)
/* Skip document title, subtitle, Prabhupāda credit, and the small ✶ line */
const content = allParas.slice(5)

const H2_PREFIX =
  /^(Introduction|I\.|II\.|III\.|IV\.|V\.|VI\.|VII\.|VIII\.|IX\.|X\.|Conclusion —)/

const H3_TITLES = new Set([
  "Her Father’s Glorious Brother — Gaurīdāsa Paṇḍita",
  "Room Conversation — San Diego, June 29, 1972",
  "Interview with Professor O’Connell — Toronto, June 18, 1976",
  "Her Greatness on Her Own Merit",
  "The Unprecedented Honour — Her Deity Beside Gopīnātha",
])

const SANSKRIT_VERSE_LINES = new Set([
  "Śrī-varuṇī-revatā-vaṃśa-sambhave",
  "tasya priye dve vasudhā ca jāhnavī",
  "Śrī-sūrya-dāsasya mahātmanaḥ sute",
  "kakudma-rūpasya ca sūrya-tejasāḥ",
  "anaṅga-mañjarīm kecij jāhnavāṃ ca pracakṣate",
  "ubhayaṃ tu samīcīnaṃ pūrva-nyāyāt satāṃ matam",
  "sūryadāsa sarakhela, tāṃra bhāi kṛṣṇadāsa",
  "nityānande dṛḍha viśvāsa, premera nivāsa",
  "Śrī-vīrabhadra gosāñi–skandha-mahāśākhā",
  "tāṃra upaśākhā yata, asaṃkhya tāra rekhā",
  "yei kṛṣṇa-tattva-vettā, sei guru haya",
])

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[—–''"`]/g, "-")
    .replace(/[^a-z0-9\-\u0900-\u0fff]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72)
}

function isStarLine(t: string) {
  const s = t.trim()
  return s.split("").every((c) => /[\s✶*·.‧]/.test(c)) && s.length < 20 && s.length > 0
}

/**
 * Heuristic: long Prabhupāda quotations with a citation after an em dash.
 * Skips false positives (narration sentences) by requiring a citation pattern.
 */
function tryQuoteBlock(t: string): { main: string; cite: string } | null {
  if (!/ — /.test(t)) return null
  const idx = t.lastIndexOf(" — ")
  if (idx < 0) return null
  const main = t.slice(0, idx).trim()
  const cite = t.slice(idx + 3).trim()
  if (main.length < 8 || cite.length < 20) return null
  if (
    !/(Śrī Caitanya|Śrīla Prabhupāda,|Conversations|Magazine|Gaura-ga|Great Vai|Anubhāṣya|Ādi-līlā|Madhya-līlā|CC Ādi|BBT|Room Conversation|Interview with Prof)/.test(
      cite,
    )
  )
    return null
  if (
    /^(In |After |When |The |Jāhnav|She |He |Gaurīd|This |Every |Vīrabh)/i.test(
      main,
    ) &&
    !/^[\u201C"']/.test(main) &&
    !/^[""«]/.test(main)
  ) {
    return null
  }
  return { main, cite }
}

export const JahnavaArticleFromDoc: FC = () => {
  const out: React.ReactNode[] = []
  let k = 0
  const verse: string[] = []
  const flushV = () => {
    if (verse.length === 0) return
    out.push(
      <div className="jahn-verse-stanza" key={`s-${k++}`} lang="sa">
        {verse.map((line) => (
          <div key={line} className="jahn-verse-skt--line text-center">
            {line}
          </div>
        ))}
      </div>,
    )
    verse.length = 0
  }

  for (const rawLine of content) {
    const t = rawLine
    if (isStarLine(t)) {
      flushV()
      out.push(
        <div className="gp-divider" key={`d-${k++}`}>
          ✦
        </div>,
      )
      continue
    }
    if (H2_PREFIX.test(t.trim()) && t.length < 220) {
      flushV()
      out.push(
        <h2 className="gp-sh scroll-mt-24" id={slug(t)} key={`h2-${k++}`}>
          {t}
        </h2>,
      )
      continue
    }
    if (H3_TITLES.has(t)) {
      flushV()
      out.push(
        <h3 className="gp-sh3" key={`h3-${k++}`}>
          {t}
        </h3>,
      )
      continue
    }
    if (SANSKRIT_VERSE_LINES.has(t)) {
      verse.push(t)
      continue
    }
    if (verse.length) flushV()

    const q = tryQuoteBlock(t)
    if (q) {
      out.push(
        <blockquote className="gp-bq" key={`bq-${k++}`}>
          <p className="!text-[var(--gp-text)]">{q.main}</p>
          <cite>— {q.cite}</cite>
        </blockquote>,
      )
      continue
    }

    if (t === "Jāhnavā mātā kī jaya!" || t === "Śrī nityānanda-priya-devī kī jaya!") {
      out.push(
        <p
          className="!text-center font-['var(--gp-font-display)'] !text-2xl !text-[#b86a0a] !not-italic !mb-2"
          key={`jaya-${k++}`}
        >
          {t}
        </p>,
      )
      continue
    }

    out.push(
      <p className="jahn-p" key={`p-${k++}`}>
        {t}
      </p>,
    )
  }
  flushV()
  return <div className="jahn-article-body">{out}</div>
}
