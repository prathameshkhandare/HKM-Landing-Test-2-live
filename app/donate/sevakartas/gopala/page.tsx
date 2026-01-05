"use client"

import SevaPageTemplate from "@/components/SevaPageTemplate"

const donors = [
  "Sri. M. Karthik",
  "Smt. S. Priya",
  "Sri. A. Rajesh",
  "Smt. Lakshmi N",
  "Sri. Venkatesh R",
  "Kumari. Divya S",
  "Sri. P. Balasubramanian",
  "Smt. K. Meenakshi",
  "Sri. R. Senthil Kumar",
  "Smt. V. Geetha",
  // Add more names to make it look full
  "Sri. Gopalakrishnan",
  "Smt. Radhika",
  "Sri. Krishnamurthy",
  "Smt. Anandhi",
  "Sri. Saravanan"
]

export default function GopalaSevaPage() {
  return (
    <SevaPageTemplate 
      title="Gopala Seva"
      subtitle="Feed the Lord. Feed the World."
      image="/donate/gopala_seva.jpg"
      description={`
        Gopala Seva is dedicated to the daily offering of Bhoga (food) to Their Lordships. In the Vaishnava tradition, offering food to the Lord is the highest form of service, as this Prasadam then purifies all who partake of it.
        
        Your monthly contribution ensures that the deities are worshipped with the finest ingredients and that thousands of visitors receive sanctified food every day.
      `}
      benefits={[
        { title: "Annadana Seva", desc: "Support the distribution of Prasadam to visitors." },
        { title: "Daily Archana", desc: "Daily prayers performed in your family's name." },
        { title: "Special Prasadam", desc: "Receive Mahaprasadam at your doorstep monthly." }
      ]}
      unitName="Month"
      unitPrice={1000}
      checkoutUrl="https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/gopala-seva"
      donors={donors}
    />
  )
}
