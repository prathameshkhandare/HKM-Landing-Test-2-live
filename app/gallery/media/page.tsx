"use client"

import FooterSection from "@/components/FooterSection"
import VideoGallery from "@/components/media/VideoGallery"
import NewsCoverage from "@/components/media/NewsCoverage"
import SocialFeed from "@/components/media/SocialFeed"
import PressKit from "@/components/media/PressKit"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white text-[#3A3A3A] font-sans">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 bg-[url('/assets/activities/activities-main.png')] bg-cover bg-center opacity-50"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-[#2D0A0A]/50 to-transparent"></div>
         
         {/* Divine Glow */}
         <div className="absolute pt-32 w-full h-full flex justify-center items-center pointer-events-none">
             <div className="w-[600px] h-[600px] bg-[#ea580c] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
         </div>

         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                 <span className="inline-block px-4 py-1.5 border border-[#FFB81C] rounded-full text-[#FFB81C] font-bold tracking-[0.2em] text-sm uppercase mb-6 bg-black/30 backdrop-blur-sm">
                     Digital Archive
                 </span>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif drop-shadow-lg leading-tight">
                    Voice of <span className="text-[#FFB81C] italic">Devotion</span>
                 </h1>
                 <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                     Exploring the spiritual and social impact of Dakshina Dwaraka Dham through the lens of media.
                 </p>
             </motion.div>
         </div>
      </section>

      {/* Components Assembly */}
      <VideoGallery />
      <NewsCoverage />
      <SocialFeed />
      <PressKit />

      <FooterSection />
    </div>
  )
}
