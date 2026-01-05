"use client"

import SevaPageTemplate from "@/components/SevaPageTemplate"

// Placeholder data for donors - in a real app this would come from an API
const donors = Array.from({ length: 120 }, (_, i) => {
    if (i === 0) return "MR. SOUJANYA R"
    if (i === 1) return "V SUMATH"
    if (i === 2) return "MR. BALAJI SRIMURUGAN"
    if (i === 3) return "MRS. PAVITHRA RAM"
    if (i === 4) return "MR. SURESH NV"
    if (i === 5) return "SMT. INDRAJI"
    if (i === 6) return "MR. MAHENDRA AND BHAVANA MISAR"
    if (i % 2 === 0) return `Donor Name ${i + 1}`
    return `Agastya Bhakta ${250 + i}` 
})

export default function KrishnalayaSevaPage() {
  return (
    <SevaPageTemplate 
      title="Krishnalaya Seva"
      subtitle="Build a Home for Krishna. Build a Home for Your Soul."
      image="/donate/krishnalaya_temple.png" // Using the image from the main page
      description={`
        The Krishnalaya Seva is a unique opportunity to contribute towards the construction of the magnificent Cultural Complex in Thiruvanmiyur. 
        
        By sponsoring square feet of construction, you are not just building a physical structure, but a spiritual sanctuary that will stand for generations. This temple will be a beacon of peace, culture, and devotion in Chennai.
        
        "Just as we build a house for ourselves, we must build a palace for the Lord. In doing so, we construct our own path back to the spiritual world."
      `}
      benefits={[
        { title: "Special Inscription", desc: "Your name will be inscribed on the Wall of Gratitude." },
        { title: "Eternal Blessings", desc: "Receive special blessings from Sri Sri Rukmini Dwarakadhish." },
        { title: "Tax Exemption", desc: "All donations are 100% tax exempt under section 80G." },
        { title: "Certificate", desc: "Receive a personalized certificate of appreciation." }
      ]}
      unitName="Sq.Ft"
      unitPrice={5000}
      checkoutUrl="https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai"
      donors={donors}
    />
  )
}
