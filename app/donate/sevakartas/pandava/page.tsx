"use client"

import SevaPageTemplate from "@/components/SevaPageTemplate"

const donors = [
  "Sri. K. Sundaram",
  "Smt. Meenakshi S",
  "Sri. P. Rajagopal",
  "Smt. V. Kamala",
  "Sri. M. Suresh",
  "Smt. R. Lakshmi",
  "Sri. G. Venkat",
  "Smt. S. Priya",
  "Sri. A. Rajesh",
  "Smt. K. Meenakshi",
]

export default function PandavaSevaPage() {
  return (
    <SevaPageTemplate 
      title="Pandava Seva"
      subtitle="Support the Temple Monthly. Receive Divine Blessings."
      image="/donate/pandava_seva.jpg"
      description={`
        The Pandava Seva provides you with a wonderful opportunity to support the temple's daily operations and festivals on a monthly basis.
        
        By contributing ₹10,000 monthly, you become a pillar of support for our spiritual activities, ensuring that the service to Their Lordships continues without interruption.
      `}
      benefits={[
        { title: "Special Archana", desc: "Performed on birthdays/anniversaries for your family." },
        { title: "Prasadam Delivery", desc: "Mahaprasadam delivered to your home monthly." },
        { title: "Festival Invites", desc: "Special invitations to all major festivals." }
      ]}
      unitName="Month"
      unitPrice={10000}
      checkoutUrl="https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/pandava-seva"
      donors={donors}
    />
  )
}
