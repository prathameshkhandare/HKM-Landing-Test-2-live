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
      setIsSubmitted(false)
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
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#FFD700] bg-[#FFFDF5] shadow-[0_0_40px_rgba(255,215,0,0.2)]">

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full bg-[#FFF0D4] p-2 text-[#701a1a] transition-colors hover:bg-[#FFD700] hover:text-[#2D0A0A]"
              >
                <X size={20} />
              </button>

              {/* Top Decorative Bar */}
              <div className="h-3 w-full bg-gradient-to-r from-[#b45309] via-[#FFD700] to-[#b45309] relative z-10" />

              <div className="p-8 relative z-10">
                {/* Header */}
                <div className="mb-8 text-center">
                  <div className="mb-2 flex justify-center">
                    <span className="font-serif text-xl font-bold text-[#b45309] tracking-[0.2em] uppercase drop-shadow-sm">
                      Hare Krishna!
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-3xl font-bold text-[#701a1a] drop-shadow-sm">
                    Stay Connected
                  </h3>
                  <h4 className="mb-3 font-serif text-xl font-medium text-[#b45309]">
                    with the Divine
                  </h4>
                  <p className="text-sm text-[#5c4033] font-medium leading-relaxed">
                    Join our spiritual community and receive updates on festivals, darshans, and cultural events.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#701a1a]/70">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-[#e5d5c5] bg-white px-4 py-3.5 text-[#2D0A0A] placeholder-[#9ca3af] outline-none transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 group-hover:border-[#FFB81C]/50 shadow-sm"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="group">
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#701a1a]/70">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-xl border border-[#e5d5c5] bg-white px-4 py-3.5 text-[#2D0A0A] placeholder-[#9ca3af] outline-none transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 group-hover:border-[#FFB81C]/50 shadow-sm"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>

                    <div className="group">
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#701a1a]/70">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-[#e5d5c5] bg-white px-4 py-3.5 text-[#2D0A0A] placeholder-[#9ca3af] outline-none transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 group-hover:border-[#FFB81C]/50 shadow-sm"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#EA580C] py-4 font-bold text-white shadow-[#FF9933]/30 shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-70 uppercase tracking-wide text-sm"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Join Community <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-[#8c7870] mt-3 font-medium">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-2">Thank You!</h4>
                    <p className="text-[#5c4033]">You have successfully joined our divine community.</p>
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
