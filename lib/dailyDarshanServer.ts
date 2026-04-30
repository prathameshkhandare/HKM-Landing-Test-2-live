import { supabase } from "./supabase"

export type DailyDarshanImage = {
  src: string
  title: string
  desc: string
}

/** @deprecated use getAllDailyDarshanImages instead */
export type DailyDarshanHero = DailyDarshanImage | null

function pickString(row: Record<string, unknown>, keys: string[]): string {
  for (const k of keys) {
    const v = row[k]
    if (typeof v === "string" && v.trim().length) return v.trim()
  }
  return ""
}

function rowToImage(row: Record<string, unknown>): DailyDarshanImage | null {
  const src = pickString(row, ["image_url", "url", "image", "src", "photo_url", "public_url", "file_url"])
  if (!src) return null

  const title =
    pickString(row, ["title", "name", "caption", "headline"]) || "Deity Darśan of Today"
  const desc =
    pickString(row, ["description", "desc", "subtitle", "summary"]) ||
    "The Lord's merciful form, offered for you this day—may this holy vision purify the heart and awaken divine remembrance."

  return { src, title, desc }
}

/**
 * Fetch up to 9 rows from `public.daily_darshan`, ordered newest-first.
 * Returns an empty array on error or missing config.
 */
export async function getAllDailyDarshanImages(): Promise<DailyDarshanImage[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return []

    let res = await supabase
      .from("daily_darshan")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(9)

    if (res.error) {
      res = await supabase
        .from("daily_darshan")
        .select("*")
        .order("id", { ascending: false })
        .limit(9)
    }

    if (res.error) {
      res = await supabase.from("daily_darshan").select("*").limit(9)
    }

    if (res.error) {
      console.error("[daily_darshan] query:", res.error.message)
      return []
    }

    const rows = (res.data ?? []) as Record<string, unknown>[]
    const images = rows.map(rowToImage).filter(Boolean) as DailyDarshanImage[]
    return images
  } catch (e) {
    console.error("[daily_darshan]", e)
    return []
  }
}

/** @deprecated use getAllDailyDarshanImages instead */
export async function getLatestDailyDarshanForHero(): Promise<DailyDarshanHero> {
  const images = await getAllDailyDarshanImages()
  return images[0] ?? null
}
