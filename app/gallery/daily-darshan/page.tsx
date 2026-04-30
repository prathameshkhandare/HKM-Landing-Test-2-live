import { getAllDailyDarshanImages } from "@/lib/dailyDarshanServer"
import DailyDarshanClient from "./DailyDarshanClient"

/** Re-fetch latest Supabase `daily_darshan` images periodically (not only at build time). */
export const revalidate = 120

export default async function DailyDarshanPage() {
  const dbImages = await getAllDailyDarshanImages()
  return <DailyDarshanClient dbImages={dbImages} />
}
