import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dakshina Dwaraka Cultural Complex — Temple Construction Project",
  description:
    "Support the construction of Dakshina Dwaraka, a magnificent cultural complex dedicated to Sri Sri Rukmini Dwarakadhish in Chennai. Join us in building this divine abode through Gopala Seva, Sudama Seva, Pandava Seva, and Krishnalaya Seva.",
  keywords: [
    "Dakshina Dwaraka",
    "Temple Construction Chennai",
    "ISKCON Chennai Temple",
    "Rukmini Dwarakadhish",
    "Temple Donation",
    "Gopala Seva",
    "Sudama Seva",
    "Pandava Seva",
    "Krishnalaya Seva",
    "Cultural Complex Chennai"
  ],
  openGraph: {
    title: "Dakshina Dwaraka Cultural Complex — Build the Lord's Abode",
    description:
      "Be part of building a magnificent cultural complex dedicated to Sri Sri Rukmini Dwarakadhish. Support through monthly sevas or one-time contributions.",
    url: "https://hkm-landing-test-2.vercel.app/dakshina-dwaraka",
    images: [
      {
        url: "/assets/dakshina-dwaraka-dham.png",
        width: 1200,
        height: 630,
        alt: "Dakshina Dwaraka Cultural Complex",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/dakshina-dwaraka"
  }
}

export default function DakshinaDwarakaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
