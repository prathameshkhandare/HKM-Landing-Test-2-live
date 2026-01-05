"use client"

import SevaPageTemplate from "@/components/SevaPageTemplate"

const donors = [
  "Sri. N. Balaji",
  "Smt. R. Srividya",
  "Sri. G. Venkat",
  "Smt. P. Lakshmi",
  "Sri. K. Ramesh",
  "Smt. S. Geetha",
  "Sri. M. Kumar",
  "Smt. V. Priya",
]

export default function SudamaSevaPage() {
  return (
    <SevaPageTemplate 
      title="Sudama Seva"
      subtitle="Your Humble Offering, The Lord's Infinite Mercy."
      image="/donate/sudama_seva.jpg"
      description={`
        Inspired by Sudama's humble offering of chipped rice to Lord Krishna, the Sudama Seva allows you to contribute ₹5,000 monthly to the temple.
        
        Just as Krishna accepted Sudama's offering with great love, He accepts your sincere service and blesses you with spiritual prosperity.
      `}
      benefits={[
        { title: "Special Prayers", desc: "Prayers chanted for your family on auspicious days." },
        { title: "Temple Support", desc: "Your donation supports temple maintenance." },
        { title: "Spiritual Connection", desc: "Stay connected to the Lord's service." }
      ]}
      unitName="Month"
      unitPrice={5000}
      checkoutUrl="https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/sudama-seva"
      donors={donors}
    />
  )
}
