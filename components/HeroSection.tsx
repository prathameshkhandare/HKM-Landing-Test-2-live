"use client"

import { useState, useEffect, useRef } from "react"

const videos = [
  { type: "cloudinary", id: "Temple-Darshan-1_nutfl3", cloudName: "dmyzn29mc" },
  { type: "youtube", id: "bJsaR9-h26Y" },
  { type: "cloudinary", id: "Sri_Krishna_Janmashtami_2025_Highlights___HKM_Chennai_Grand_Celebrations_1_ohsc8z", cloudName: "dmyzn29mc" },
  { type: "cloudinary", id: "Sri_Krishna_Janmashtami_2025_Highlights___HKM_Chennai_Grand_Celebrations_1_ohsc8z", cloudName: "dmyzn29mc" },
  { type: "cloudinary", id: "Sri_Krishna_Janmashtami_2025_Highlights___HKM_Chennai_Grand_Celebrations_1_ohsc8z", cloudName: "dmyzn29mc" }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Preload next video when slide changes
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % videos.length
    if (!loadedVideos.has(nextIndex)) {
      setLoadedVideos(prev => new Set(prev).add(nextIndex))
    }
  }, [currentSlide, loadedVideos])

  return (
    <div className="relative h-screen w-screen max-w-full overflow-hidden pb-16 md:pb-0">
      {/* Background Videos */}
      <div className="absolute inset-0 w-full overflow-hidden h-full md:h-full">
        {videos.map((video, idx) => (
          <div
            key={`video-${idx}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full bg-slate-900 overflow-hidden">
              {/* Render Cloudinary or YouTube video */}
              {video.type === "cloudinary" ? (
                loadedVideos.has(idx) ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el
                    }}
                    className="absolute pointer-events-none object-cover"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '80% 50%',
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload={idx === 0 ? "auto" : "metadata"}
                  >
                    <source
                      src={`https://res.cloudinary.com/${video.cloudName}/video/upload/ar_3:4,c_fill,q_auto:low/${video.id}.mp4`}
                      type="video/mp4"
                      media="(max-width: 768px)"
                    />
                    <source
                      src={`https://res.cloudinary.com/${video.cloudName}/video/upload/q_auto:good/${video.id}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 bg-slate-900" />
                )
              ) : (
                <iframe
                  className="absolute pointer-events-none"
                  style={{
                    top: '50%', // Change to '30%', '40%', '60%', '70%' to shift vertical position
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300vw',
                    height: '100vh',
                    minWidth: '177.78vh',
                    minHeight: '100vh',
                  }}
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${video.id}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                  title={`YouTube video ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom navigation with text labels - positioned above video */}
      {/* Change md:bottom-4 to adjust desktop position: md:bottom-8, md:bottom-12, md:bottom-16, md:bottom-20, etc. */}
      <div className="absolute bottom-10 md:bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          {/* Mobile & Tablet & Desktop: Text labels */}
          <div className="flex items-center justify-start md:justify-center gap-0 sm:gap-0.5 md:gap-1 overflow-x-auto scrollbar-hide">
            {[
              { label: "Temple Darshan", id: 0 },
              { label: "Spiritual Programs", id: 1 },
              { label: "Community Events", id: 2 },
              { label: "Sacred Festivals", id: 3 },
              { label: "Daily Worship", id: 4 }
            ].map((item, index) => (
              <div key={item.id} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => setCurrentSlide(item.id)}
                  className={`px-2 sm:px-4 md:px-6 py-6.5 sm:py-2 md:py-0.0 text-[10px] sm:text-sm md:text-base font-medium transition-all duration-300 hover:text-[#FFB81C] whitespace-nowrap ${
                    currentSlide === item.id
                      ? "text-[#FFB81C]"
                      : "text-white/80"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
                {index < 4 && (
                  <div className="h-4 sm:h-5 md:h-6 w-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
