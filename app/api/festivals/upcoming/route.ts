export const runtime = "edge";

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type FestivalRow = Record<string, unknown>;

interface NormalizedFestival {
  id: string;
  name: string;
  poster: string | null;
  date: string | null;
  dateTs: number | null;
  slug: string | null;
  isUpcoming: boolean | null;
}

const FESTIVAL_POSTERS_TABLE = "festival_posters";

const NAME_KEYS = ["name", "title", "festival_name", "event_name", "poster_title"];
const POSTER_KEYS = [
  "poster",
  "poster_url",
  "poster_path",
  "image",
  "image_url",
  "banner",
  "banner_url",
  "cover_image",
  "thumbnail",
];
const DATE_KEYS = [
  "date",
  "festival_date",
  "event_date",
  "start_date",
  "celebration_date",
];
const SLUG_KEYS = ["slug", "festival_slug"];
const UPCOMING_KEYS = ["is_upcoming", "upcoming", "is_active"];

function pickString(row: FestivalRow, keys: string[]): string | null {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return null;
}

function pickBoolean(row: FestivalRow, keys: string[]): boolean | null {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "number") {
      if (value === 1) return true;
      if (value === 0) return false;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (["true", "1", "yes", "y", "active", "upcoming"].includes(normalized)) return true;
      if (["false", "0", "no", "n", "inactive", "past", "completed"].includes(normalized)) return false;
    }
  }
  return null;
}

function parseDate(value: string | null): number | null {
  if (!value) return null;
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? null : parsed;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizePoster(value: string | null): string | null {
  if (!value) return null;
  if (value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `/${value.replace(/^\/+/, "")}`;
}

function normalizeFestival(row: FestivalRow, index: number): NormalizedFestival | null {
  const name = pickString(row, NAME_KEYS);
  if (!name) return null;

  const date = pickString(row, DATE_KEYS);
  const fallbackSlug = slugify(name);

  return {
    id: pickString(row, ["id", "uuid", "festival_id"]) ?? `${fallbackSlug || "festival"}-${index}`,
    name,
    poster: normalizePoster(pickString(row, POSTER_KEYS)),
    date,
    dateTs: parseDate(date),
    slug: pickString(row, SLUG_KEYS) ?? fallbackSlug,
    isUpcoming: pickBoolean(row, UPCOMING_KEYS),
  };
}

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTs = today.getTime();

    const { data, error } = await supabase.from(FESTIVAL_POSTERS_TABLE).select("*").limit(100);

    if (error) {
      console.error(
        `[api/festivals/upcoming] Failed querying ${FESTIVAL_POSTERS_TABLE}:`,
        error,
      );
      return NextResponse.json({ festivals: [] });
    }

    const rows = Array.isArray(data) ? (data as FestivalRow[]) : [];
    if (!rows.length) {
      return NextResponse.json({ festivals: [] });
    }

    const normalized = rows
      .map((row, index) => normalizeFestival(row, index))
      .filter((festival): festival is NormalizedFestival => festival !== null);

    const upcomingOnly = normalized.filter((festival) => {
      if (festival.isUpcoming === true) return true;
      if (festival.isUpcoming === false) return false;
      if (festival.dateTs !== null) return festival.dateTs >= todayTs;
      return true;
    });

    const selected = (upcomingOnly.length ? upcomingOnly : normalized)
      .sort((a, b) => {
        if (a.dateTs === null && b.dateTs === null) return a.name.localeCompare(b.name);
        if (a.dateTs === null) return 1;
        if (b.dateTs === null) return -1;
        return a.dateTs - b.dateTs;
      })
      .slice(0, 12)
      .map(({ id, name, poster, date, slug }) => ({
        id,
        name,
        poster: poster ?? "/assets/cultutral-festival.JPG",
        date,
        slug,
      }));

    return NextResponse.json({ festivals: selected });
  } catch (error) {
    console.error("[api/festivals/upcoming] Unexpected error:", error);
    return NextResponse.json({ error: "Failed to fetch festivals" }, { status: 500 });
  }
}
