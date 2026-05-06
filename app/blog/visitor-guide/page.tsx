import type { Metadata } from "next"
import VisitorGuideClient from "../../visitor-guide/VisitorGuideClient"
import Footer from "@/components/FooterSection"

export const metadata: Metadata = {
  title: "Complete Visitor Guide - ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham Chennai",
  description:
    "Complete visitor guide to ISKCON Thiruvanmiyur, Chennai - Dakshina Dwaraka Dham. Timings, darshan, prasadam, festivals, how to reach, and everything you need to know.",
  openGraph: {
    title: "Complete Visitor Guide - ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham",
    description:
      "Plan your divine visit to Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur. Timings, prasadam, festivals, directions, and FAQs - everything you need to know.",
    type: "article",
  },
}

export default function BlogVisitorGuidePage() {
  return (
    <>
      <VisitorGuideClient />
      <Footer />
    </>
  )
}
