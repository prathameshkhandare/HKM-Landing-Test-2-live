"use client"

import { motion, AnimatePresence } from "framer-motion"
import { createContext, useContext, useState, ReactNode } from "react"

interface NavigationLoaderContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const NavigationLoaderContext = createContext<NavigationLoaderContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

export const useNavigationLoader = () => useContext(NavigationLoaderContext)

export function NavigationLoaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return (
    <NavigationLoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-[#0078BF]/30 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center gap-4"
            >
              <div className="relative w-16 h-16">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-[#0078BF]/20 border-t-[#0078BF] rounded-full"
                />
              </div>
              
              <p className="text-[#0078BF] font-medium">Loading...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationLoaderContext.Provider>
  )
}
