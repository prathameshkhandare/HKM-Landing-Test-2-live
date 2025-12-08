"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const explorationImages = [
  {
    id: 1,
    title: "Sri Krishna Janmashtami",
    image: "/assets/Sri-krishna-Janmashtami.jpg",
    description: "Explore the spiritual heritage"
  },
  {
    id: 2,
    title: "Vyasa Puja",
    image: "/assets/VyasaPuja2019-16.jpg",
    description: "Land of Lord Krishna"
  },
  {
    id: 3,
    title: "Balarama Jayanthi",
    image: "/assets/BalaramaJayanthi19-39.jpg",
    description: "Spiritual capital of the world"
  },
  {
    id: 4,
    title: "Govardhan Puja",
    image: "/assets/Govardhna-puja.JPG",
    description: "Home of Lord Jagannath"
  },
  {
    id: 5,
    title: "Narsimha Jayanti",
    image: "/assets/Narasimha Jayanti.JPG",
    description: "Ancient kingdom of Krishna"
  }
]

export default function ExplorationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % explorationImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + explorationImages.length) % explorationImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  // Calculate position for each card relative to center
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const absPos = ((diff + explorationImages.length) % explorationImages.length)
    const position = absPos > explorationImages.length / 2 ? absPos - explorationImages.length : absPos

    // Define styles for each position level
    const styles: Record<number, any> = {
      0: { // Center
        scale: 1,
        x: '0%',
        z: 0,
        opacity: 1,
        zIndex: 50,
      },
      1: { // Right 1
        scale: 0.85,
        x: '70%',
        z: -100,
        opacity: 0.7,
        zIndex: 40,
      },
      '-1': { // Left 1
        scale: 0.85,
        x: '-70%',
        z: -100,
        opacity: 0.7,
        zIndex: 40,
      },
      2: { // Right 2
        scale: 0.7,
        x: '140%',
        z: -200,
        opacity: 0.4,
        zIndex: 30,
      },
      '-2': { // Left 2
        scale: 0.7,
        x: '-140%',
        z: -200,
        opacity: 0.4,
        zIndex: 30,
      }
    }

    return styles[position] || { scale: 0, x: '0%', z: -300, opacity: 0, zIndex: 0 }
  }

  return (
    <section className="relative -mt-12 md:mt-0 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Temple pattern background - Optimized single layer */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/assets/temple-pattern.PNG" 
          alt="" 
          loading="lazy"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="heading-2 text-white mb-1 sm:mb-2 md:mb-4 tracking-wider">
            EXPLORATION
          </h2>
          <p className="body-large text-white/80">for every spiritual journey</p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative">
          {/* Carousel Viewport */}
          <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[530px] mb-4 sm:mb-6" style={{ perspective: '2000px' }}>
            {/* All Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {explorationImages.map((image, index) => {
                const style = getCardStyle(index)
                const isCenter = index === currentIndex
                
                return (
                  <motion.div
                    key={image.id}
                    className="absolute w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                    style={{
                      zIndex: style.zIndex,
                    }}
                    animate={{
                      scale: style.scale,
                      x: style.x,
                      opacity: style.opacity,
                      rotateY: style.z / 10,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    onClick={() => !isCenter && goToSlide(index)}
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content Overlay - Only visible on center card */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 p-4 pb-3 sm:p-6 md:p-8 text-white"
                      >
                        <h3 className="heading-3 text-white mb-1 sm:mb-2">
                          {image.title}
                        </h3>
                        <p className="body-large text-white/90">
                          {image.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] bg-white/90 active:bg-white md:hover:bg-white backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] bg-white/90 active:bg-white md:hover:bg-white backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-800" />
            </button>
          </div>

          {/* Thumbnail Navigation - Desktop only */}
          <div className="hidden md:flex justify-center gap-1.5">
            {explorationImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-6 h-6 rounded-sm overflow-hidden transition-all duration-300 ${
                  currentIndex === index
                    ? "ring-2 ring-[#FBB201] opacity-100 scale-110"
                    : "ring-1 ring-white/30 opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
