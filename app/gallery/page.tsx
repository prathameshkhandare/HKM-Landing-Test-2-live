"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { motion } from "framer-motion"
import { Image as ImageIcon, Sparkles, Calendar, ChevronRight } from "lucide-react"

const activities = [
  { name: "ACTIVITIES", link: "/activities/" },
  { name: "FESTIVALS", link: "/festivals/" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
]

const galleryImages = [
  { id: 1, alt: "Krishna temple deity" },
  { id: 2, alt: "Temple interior" },
  { id: 3, alt: "Festival celebration" },
  { id: 4, alt: "Spiritual gathering" },
  { id: 5, alt: "Temple decoration" },
  { id: 6, alt: "Community event" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Saffron Theme */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] pt-24 pb-12">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Mandala Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-center lg:text-left"
             >
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                     Spiritual Window
                </div>
                <h1 className=" text-white text-4xl md:text-6xl font-bold mb-4 font-serif tracking-tight drop-shadow-lg leading-tight">
                    Dakṣiṇa Dvārakā <span className="text-[#FFB81C] italic">Dhāma</span>
                </h1>
                <p className="text-xl text-[#ffe8cc] font-light max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                    Cultural Complex to promote and preserve Indian heritage through divine aesthetics.
                </p>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
             >
                 {/* Chant Box */}
                 <div className="relative bg-[#2D0A0A]/40 backdrop-blur-md border border-[#FFB81C]/30 p-8 rounded-2xl shadow-2xl text-center transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-0 border border-[#FFB81C]/20 rounded-2xl m-2 pointer-events-none"></div>
                    <Sparkles className="absolute top-4 right-4 text-[#FFB81C] opacity-50" />
                    <Sparkles className="absolute bottom-4 left-4 text-[#FFB81C] opacity-50" />
                    
                    <p className="text-[#FFB81C] font-serif text-2xl md:text-3xl font-bold leading-relaxed tracking-wide drop-shadow-md">
                        HARE KRISHNA HARE KRISHNA
                        <br />
                        KRISHNA KRISHNA HARE HARE
                        <br />
                        HARE RAMA HARE RAMA
                        <br />
                        RAMA RAMA HARE HARE
                    </p>
                 </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10 -mt-10">
        
         {/* Page Title with Ornamental Divider */}
         <div className="text-center mb-16">
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#d97706] to-[#b45309] mb-6 font-serif drop-shadow-sm">Photo Gallery</h2>
            <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-24 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C] bg-[#FFF9F0]"></div>
                <div className="h-[2px] w-24 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Gallery Area - Takes 3 columns on desktop */}
          <div className="lg:col-span-3">
            {/* Masonry-style Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-4">
              {/* Image 1 - Large featured 2x2 */}
              <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                    <p className="text-white font-serif font-bold text-lg">{galleryImages[0].alt}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              
              {/* Image 2 - Square 1x1 on mobile, Tall 1x2 on desktop */}
              <div className="col-span-1 row-span-1 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Image 3 - Square 1x1 on mobile, Tall 1x2 on desktop */}
              <div className="col-span-1 row-span-1 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Image 4 - Square 1x1 */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Image 5 - Square 1x1 */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Image 6 - Wide 2x1 */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
                 <button className="px-8 py-3 rounded-full border-2 border-[#ea580c] text-[#ea580c] font-bold hover:bg-[#ea580c] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto">
                     <ImageIcon size={20} /> Load More Photos
                 </button>
            </div>
          </div>

          {/* Sidebar - Sacred Scroll Style */}
          <div className="space-y-4 lg:space-y-8">
            {/* Activities Card */}
            <div className="relative bg-[#FFF9F0] p-1.5 rounded-[1.5rem] shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
               <div className="absolute inset-0 border-[3px] border-[#FFB81C]/20 rounded-[1.5rem] pointer-events-none"></div>
               <div className="absolute inset-2 border-[1px] border-[#FFB81C]/10 border-dashed rounded-[1.2rem] pointer-events-none"></div>
               
               <div className="bg-white rounded-[1.2rem] p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                        <Sparkles size={60} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="mb-4 pb-3 border-b-2 border-[#FFB81C]/20 flex items-center gap-2">
                             <Sparkles className="text-[#ea580c]" size={20} />
                             <h4 className="text-xl font-bold text-[#701a1a] tracking-wide font-serif">ACTIVITIES</h4>
                        </div>
                        
                        <div className="space-y-1">
                        {activities.map((activity, idx) => (
                            <Link
                            key={idx}
                            href={activity.link}
                            className="group flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-[#FFF9F0] transition-all duration-200 border-l-[3px] border-transparent hover:border-[#FFB81C]"
                            >
                                <ChevronRight className="text-[#FFB81C] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <span className="text-sm font-bold text-[#555] group-hover:text-[#ea580c] transition-colors flex-1 uppercase tracking-wide">
                                    {activity.name}
                                </span>
                            </Link>
                        ))}
                        </div>
                    </div>
               </div>
            </div>

            {/* Festivals Card */}
            <div className="relative bg-[#FFF9F0] p-1.5 rounded-[1.5rem] shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
               <div className="absolute inset-0 border-[3px] border-[#ea580c]/20 rounded-[1.5rem] pointer-events-none"></div>
               <div className="absolute inset-2 border-[1px] border-[#ea580c]/10 border-dashed rounded-[1.2rem] pointer-events-none"></div>
               
               <div className="bg-white rounded-[1.2rem] p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                        <Calendar size={60} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="mb-4 pb-3 border-b-2 border-[#ea580c]/20 flex items-center gap-2">
                             <Calendar className="text-[#ea580c]" size={20} />
                             <h4 className="text-xl font-bold text-[#701a1a] tracking-wide font-serif">FESTIVALS</h4>
                        </div>
                        
                        <div className="space-y-1">
                        {festivals.map((festival, idx) => (
                            <Link
                            key={idx}
                            href={festival.link}
                            className="group flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-[#FFF9F0] transition-all duration-200 border-l-[3px] border-transparent hover:border-[#ea580c]"
                            >
                                <ChevronRight className="text-[#ea580c] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <span className="text-xs font-bold text-[#555] group-hover:text-[#ea580c] transition-colors flex-1 uppercase tracking-wide leading-relaxed">
                                    {festival.name}
                                </span>
                            </Link>
                        ))}
                        </div>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
