import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donation FAQs — Common Questions Answered | Hare Krishna Chennai",
  description:
    "Find answers to common questions about donating to Hare Krishna Movement Chennai. Learn about tax deductions (80G), payment methods, security, recurring donations, and how your contributions support our spiritual mission.",
  keywords: [
    "Donation FAQ",
    "80G Tax Deduction",
    "Donate ISKCON Chennai",
    "Secure Donations",
    "Recurring Giving",
    "Temple Donations",
    "Charitable Giving India"
  ],
  openGraph: {
    title: "Donation FAQs — Your Questions Answered",
    description:
      "Get answers to all your questions about donating to HKM Chennai. Tax benefits, security, and transparency guaranteed.",
    url: "https://hkm-landing-test-2.vercel.app/donate/faqs",
    images: [
      {
        url: "/assets/hkm-hero-new.jpg",
        width: 1200,
        height: 630,
        alt: "Hare Krishna Movement Chennai",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/donate/faqs"
  }
}

export default function DonateFAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are donations tax-deductible?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all donations to HKM Chennai are tax-deductible under Section 80G of the Indian Income Tax Act. You will receive a receipt for your donation that can be used for tax purposes."
                }
              },
              {
                "@type": "Question",
                "name": "How can I make a donation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can donate through multiple methods: online payment (Razorpay/CCAvenue), bank transfer, check/draft by mail, or in-person at our temple."
                }
              },
              {
                "@type": "Question",
                "name": "Is my donation secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all online donations are processed through secure payment gateways. Your personal and financial information is encrypted and protected."
                }
              },
              {
                "@type": "Question",
                "name": "Can I make a recurring donation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer recurring giving programs: Pandava Seva (monthly), Sudama Seva (quarterly), and Gopala Seva (annual)."
                }
              },
              {
                "@type": "Question",
                "name": "How are donations used?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Donations support our spiritual programs, community service, youth empowerment, temple operations, and outreach activities."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
