"use client"

import SevaPageTemplate from "@/components/SevaPageTemplate"

const donors = [
  "Sri. R. Krishnan",
  "Smt. S. Lakshmi",
  "Sri. V. Raman",
  "Smt. K. Priya",
  "Sri. M. Suresh",
  // Placeholder for general donors
]

export default function GeneralDonationPage() {
  return (
    <SevaPageTemplate 
      title="General Donation"
      subtitle="Support the Mission of Sri Chaitanya Mahaprabhu"
      image="/donate/general_donation.png"
      description={`
        Your general donation supports the overall activities of the Hare Krishna Movement Chennai, including temple construction, annadana, cow protection, and festival celebrations.
        
        Every contribution, small or large, helps us in our mission to spread the message of Bhagavad-gita and serve the community.
      `}
      benefits={[
        { title: "Universal Merit", desc: "Support all of the Lord's services." },
        { title: "Tax Benefit", desc: "100% Tax Exemption under 80G." },
        { title: "Divine Blessings", desc: "Receive the mercy of Sri Sri Rukmini Dwarakadhish." }
      ]}
      unitName="Donation"
      unitPrice={500} // Minimum/Base amount
      checkoutUrl="https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/general-donation"
      donors={donors}
    />
  )
}
