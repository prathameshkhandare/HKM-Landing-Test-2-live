import { supabase } from "./supabase"

export type DailyDarshanHero = {
  src: string
  title: string
  desc: string
} | null

function pickString(row: Record<string, unknown>, keys: string[]): string {
  for (const k of keys) {
    const v = row[k]
    if (typeof v === "string" && v.trim().length) return v.trim()
  }
  return ""
}

/**
 * Latest row from Supabase `public.daily_darshan` for the first (hero) gallery image.
 * Set `image_url` (or `url` / `image` / `src`) on each row. Orders by `created_at` desc, or `id` desc if that fails.
 */
export async function getLatestDailyDarshanForHero(): Promise<DailyDarshanHero> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null

    let res = await supabase
      .from("daily_darshan")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()

    if (res.error) {
      res = await supabase
        .from("daily_darshan")
        .select("*")
        .order("id", { ascending: false })
        .limit(1)
        .maybeSingle()
    }

    /* If table has no `created_at` / `id`, take any row (ensure at least one row for “current” darshan). */
    if (res.error) {
      res = await supabase.from("daily_darshan").select("*").limit(1).maybeSingle()
    }

    if (res.error) {
      console.error("[daily_darshan] query:", res.error.message)
      return null
    }

    const row = res.data as Record<string, unknown> | null
    if (!row) return null

    const src = pickString(row, [
      "image_url",
      "url",
      "image",
      "src",
      "photo_url",
      "public_url",
      "file_url",
    ])
    if (!src) {
      console.warn("[daily_darshan] No image URL on latest row; check column name.")
      return null
    }

    const title =
      pickString(row, ["title", "name", "caption", "headline"]) || "Deity Darśan of Today"
    const desc =
      pickString(row, ["description", "desc", "subtitle", "summary"]) ||
      "The Lord’s merciful form, offered for you this day—may this holy vision purify the heart and awaken divine remembrance."

    return { src, title, desc }
  } catch (e) {
    console.error("[daily_darshan]", e)
    return null
  }
}
