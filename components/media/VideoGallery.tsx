"use client"
import { motion } from "framer-motion"
import { Play, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "History of Dakshina Dwaraka",
    thumbnail: "https://img.youtube.com/vi/tYUeRIYXPIU/maxresdefault.jpg",
    category: "Documentary",
    duration: "12:40",
    link: "https://youtu.be/tYUeRIYXPIU?si=Oi5J-JNkAaUDt7hv",
    videoId: "tYUeRIYXPIU"
  },
  {
    id: 2,
    title: "Janmashtami Grand Celebrations 2025",
    thumbnail: "https://img.youtube.com/vi/keGp5bKJ21E/maxresdefault.jpg",
    category: "Festival",
    duration: "08:15",
    link: "https://youtu.be/keGp5bKJ21E?si=xR1G6LTTDbi_CFQU",
    videoId: "keGp5bKJ21E"
  },
  {
    id: 3,
    title: "Ratha Yatra - A Journey of Joy",
    thumbnail: "https://img.youtube.com/vi/j_VhgToaqSc/maxresdefault.jpg",
    category: "Festival",
    duration: "05:30",
    link: "https://youtu.be/j_VhgToaqSc?si=B-Ze29-xVbhUKLED",
    videoId: "j_VhgToaqSc"
  },
  {
    id: 4,
    title: "ICVK Cultural Impact Report",
    thumbnail: "https://img.youtube.com/vi/kDx_k1wAs6E/maxresdefault.jpg",
    category: "News",
    duration: "03:45",
    link: "https://youtu.be/kDx_k1wAs6E?si=ZSYMsvQ8JaekXaee",
    videoId: "kDx_k1wAs6E"
  },
    {
    id: 5,
    title: "Sunday Feast Highlights",
    thumbnail: "https://img.youtube.com/vi/fjk5mZI1JJc/maxresdefault.jpg",
    category: "Events",
    duration: "04:20",
    link: "https://youtu.be/fjk5mZI1JJc?si=n1tSx_qzKsGujYoF",
    videoId: "fjk5mZI1JJc"
  },
  {
    id: 6,
    title: "Food for Life - Annadanam Seva",
    thumbnail: "https://img.youtube.com/vi/-VODEbyyJrQ/maxresdefault.jpg",
    category: "Social Impact",
    duration: "06:10",
    link: "https://youtu.be/-VODEbyyJrQ?si=ZJUEogGaSPsa-ZTA",
    videoId: "-VODEbyyJrQ"
  }
]

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
             <span className="inline-block px-4 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase">Visual Journey</span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif">Cinematic <span className="text-[#ea580c]">Archives</span></h2>
             <div className="flex justify-center items-center gap-2">
                 <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#FFB81C]"></div>
                 <Play size={20} className="text-[#FFB81C] fill-[#FFB81C]" />
                 <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#FFB81C]"></div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
                <motion.div 
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#FFB81C]/20"
                >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video overflow-hidden cursor-pointer bg-black" onClick={() => setActiveVideo(video.id)}>
                         <Image 
                            src={video.thumbnail} 
                            alt={video.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                         />
                         
                         {/* Overlay Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                         
                         {/* Play Button Overlay */}
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                                 <div className="w-10 h-10 bg-[#ea580c] rounded-full flex items-center justify-center pl-1 shadow-lg">
                                     <Play size={20} className="text-white fill-white" />
                                 </div>
                             </div>
                         </div>
                         
                         {/* Category Tag */}
                         <div className="absolute top-3 right-3 px-3 py-1 bg-[#FFB81C] text-[#2d0a0a] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                             {video.category}
                         </div>

                         {/* Duration */}
                         <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-mono rounded bg-backdrop-blur">
                             {video.duration}
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-[#701a1a] mb-2 font-serif line-clamp-2 leading-tight group-hover:text-[#ea580c] transition-colors">
                            {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#5a5a5a]">
                            <Sparkles size={12} className="text-[#FFB81C]" />
                            <span>Featured Content</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Video Modal */}
        {activeVideo !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
                <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-[#ea580c] transition-colors z-10 bg-black/50 p-2 rounded-full"
                        onClick={() => setActiveVideo(null)}
                    >
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${videos.find(v => v.id === activeVideo)?.videoId}?autoplay=1`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        )}
    </section>
  )
}
