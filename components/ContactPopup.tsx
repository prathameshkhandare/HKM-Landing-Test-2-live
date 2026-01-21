"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles } from "lucide-react"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Auto close after showing success message
    setTimeout(() => {
      onClose()
      setIsSubmitted(false) // Reset for future if re-triggered needed logic (though usually one-time)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#FFB81C]/30 bg-white shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
              >
                <X size={20} />
              </button>

              {/* Top Decorative Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-[#ea580c] via-[#FFB81C] to-[#ea580c]" />

              <div className="p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF9F0] text-[#ea580c]">
                       <Sparkles size={24} />
                    </div>
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-[#701a1a]">
                    Stay Connected with the Divine
                  </h3>
                  <p className="text-sm text-gray-600">
                    Join our spiritual community and receive updates on festivals, darshans, and cultural events.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[#ea580c] focus:bg-white focus:ring-2 focus:ring-[#ea580c]/20"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-500">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[#ea580c] focus:bg-white focus:ring-2 focus:ring-[#ea580c]/20"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[#ea580c] focus:bg-white focus:ring-2 focus:ring-[#ea580c]/20"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d94e09] py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Join Community <Send size={18} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 mt-2">
                       We respect your privacy. No spam, ever.
                    </p>
                  </form>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600">You have successfully joined our community.</p>
                    </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
