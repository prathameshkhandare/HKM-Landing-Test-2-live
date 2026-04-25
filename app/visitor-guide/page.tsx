import type { Metadata } from "next"
import VisitorGuideClient from "./VisitorGuideClient"
import Footer from "@/components/FooterSection"

export const metadata: Metadata = {
  title: "Complete Visitor Guide - ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham Chennai",
  description:
    "Complete visitor guide to ISKCON Thiruvanmiyur, Chennai - Dakshina Dwaraka Dham. Timings, darshan, prasadam, festivals, how to reach, and everything you need to know.",
  keywords: [
    "ISKCON Thiruvanmiyur",
    "Dakshina Dwaraka Dham",
    "ISKCON Chennai",
    "Hare Krishna temple Chennai",
    "temple timings Chennai",
    "ISKCON visitor guide",
    "Thiruvanmiyur temple",
  ],
  openGraph: {
    title: "Complete Visitor Guide - ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham",
    description:
      "Plan your divine visit to Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur. Timings, prasadam, festivals, directions, and FAQs - everything you need to know.",
    type: "article",
  },
}

export default function VisitorGuidePage() {
  return (
    <>
      <VisitorGuideClient />
      <Footer />
    </>
  )
}
