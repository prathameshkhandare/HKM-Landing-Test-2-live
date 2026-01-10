import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Activities & Programs — Hare Krishna Movement Chennai",
  description:
    "Explore our spiritual activities including Sunday Retreats, Youth Empowerment (FOLK), Children's Programs (ICVK), and Cultural Festivals.",
  openGraph: {
    title: "Activities & Programs — Hare Krishna Movement Chennai",
    description:
      "Engage in spiritual discourses, festivals, and youth programs. Find a path to spiritual growth with HKM Chennai.",
    images: [
      {
        url: "/assets/cultutral-festival.JPG", // Using a relevant image from the section
        width: 1200,
        height: 630,
        alt: "Cultural Festivals at HKM Chennai",
      },
    ],
  },
}

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
