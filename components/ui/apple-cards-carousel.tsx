"use client"
import React, { useEffect, useRef, useState, createContext, useContext } from "react"
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion" // Corrected import
import Image from "next/image"
import { useOutsideClick } from "@/hooks/use-outside-click"
import type { JSX } from "react/jsx-runtime" // Declared JSX variable

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Card = {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Drag scroll state
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      
      // Update current index based on scroll position
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 16 : 16
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentIndex(newIndex)
    }
  }

  const scrollLeftAction = () => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 16 : 16
      const scrollAmount = cardWidth + gap
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRightAction = () => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 16 : 16
      const scrollAmount = cardWidth + gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = "grabbing"
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab"
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Adjust scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full pb-16">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 cursor-grab active:cursor-grabbing select-none"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l pointer-events-none",
            )}
          ></div>

          <div className={cn("flex flex-row justify-start gap-4 pl-4", "mx-auto max-w-7xl")}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation arrows positioned on left and right sides */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 md:px-8">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-40 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-xl disabled:opacity-30 pointer-events-auto hover:bg-[#1B7CB8] hover:text-white transition-all duration-300 disabled:cursor-not-allowed"
            onClick={scrollLeftAction}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 md:h-7 md:w-7" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-40 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-xl disabled:opacity-30 pointer-events-auto hover:bg-[#1B7CB8] hover:text-white transition-all duration-300 disabled:cursor-not-allowed"
            onClick={scrollRightAction}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 md:h-7 md:w-7" />
          </motion.button>
        </div>
      </div>
      
      {/* Scroll indicator dots - positioned at bottom of parent container */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
        {items.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = isMobile() ? 230 : 384
                const gap = isMobile() ? 16 : 16
                const scrollPosition = (cardWidth + gap) * idx
                carouselRef.current.scrollTo({
                  left: scrollPosition,
                  behavior: "smooth",
                })
              }
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300 z-50",
              Math.abs(currentIndex - idx) <= 1 ? "w-8 bg-[#1B7CB8]" : "w-2 bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card
  index: number
  layout?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose, currentIndex } = useContext(CarouselContext)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <motion.div 
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent"
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="relative z-40 p-8"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
            whileHover={{ scale: 1.05 }}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
            whileHover={{ scale: 1.02 }}
          >
            {card.title}
          </motion.p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={card.src || "/placeholder.svg"}
            alt={card.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.button>
    </>
  )
}
