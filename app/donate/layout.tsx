import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate & Support — Hare Krishna Movement Chennai",
  description:
    "Support the mission of spreading Krishna Consciousness. Contribute to Annadhanam, Temple Construction, and Education.",
  openGraph: {
    title: "Donate & Support — Hare Krishna Movement Chennai",
    description:
      "Your contributions help us serve society through spiritual education and food distribution. Join us in this noble cause.",
    images: [
      {
        url: "/assets/hkm-values-new.png", // Using a general/hero image
        width: 1200,
        height: 630,
        alt: "Support HKM Chennai",
      },
    ],
  },
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
