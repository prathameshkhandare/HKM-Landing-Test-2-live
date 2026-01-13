import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ICVK — Indian Culture & Values for Kids | Hare Krishna Movement Chennai",
  description:
    "Enroll your child in ICVK (Indian Culture and Values for Kids), a fun and engaging program teaching Vedic values, Sanskrit, yoga, music, and cultural arts. Ages 3-15. Build character, confidence, and cultural pride in your children through interactive classes every Sunday.",
  keywords: [
    "ICVK Chennai",
    "Kids Spiritual Program",
    "Indian Culture for Kids",
    "Vedic Values Children",
    "Sanskrit Classes Kids",
    "Yoga for Children",
    "Cultural Education Chennai",
    "Sunday School Chennai",
    "Character Building Kids"
  ],
  openGraph: {
    title: "ICVK — Nurture Your Child's Cultural Roots & Values",
    description:
      "Fun Sunday program for kids ages 3-15. Learn Vedic values, Sanskrit, yoga, music, and cultural arts in an engaging environment.",
    url: "https://hkm-landing-test-2.vercel.app/activities/icvk",
    images: [
      {
        url: "/assets/activities/icvk/krishna_radha_header_final_v4.png",
        width: 1200,
        height: 630,
        alt: "ICVK - Indian Culture and Values for Kids",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/activities/icvk"
  }
}

export default function ICVKLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
