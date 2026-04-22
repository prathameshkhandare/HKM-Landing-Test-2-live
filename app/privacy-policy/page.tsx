import type { Metadata } from "next"
import PrivacyPage from "./PrivacyPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how Hare Krishna Movement Chennai protects your data and respects your privacy during your spiritual journey.",
}

export default function Page() {
  return <PrivacyPage />
}
