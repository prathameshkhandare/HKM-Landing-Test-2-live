"use client"

import React, { useState } from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function AskAnyQuestionPage() {
    return (
        <PhilosophyLayout
            title="Ask Any Question"
            subtitle="Clear your doubts with Vedic Wisdom"
            heroImage="/assets/hkm-about-education.png" 
        >
            <p>
                The Vedic scriptures encourage inquiry. In the Bhagavad-gita, Arjuna asks questions and Lord Krishna answers them. Inquiry is the beginning of spiritual life. <strong>Athato brahma jijnasa</strong> – "Now, therefore, one should inquire into the nature of the Absolute Truth."
            </p>

            <blockquote className="border-l-4 border-[#FBB201] pl-6 my-10 italic text-xl text-gray-600 bg-gray-50 py-6 pr-4 rounded-r-lg">
                "We should not blindly accept anything. We should ask questions to understand the truth." 
                <span className="text-sm not-italic text-gray-500 mt-2 block">— Srila Prabhupada</span>
            </blockquote>

            <p>
                If you have any questions or doubts regarding spiritual life, philosophy, or the purpose of existence, please feel free to ask. Our devotee scholars will be happy to guide you based on the teachings of Srila Prabhupada.
            </p>

            {/* AAQ Form */}
            <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner">
                <h3 className="text-2xl font-bold text-[#0078BF] mb-6 font-sans">Submit Your Question</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FBB201] focus:ring-2 focus:ring-[#FBB201]/20 outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FBB201] focus:ring-2 focus:ring-[#FBB201]/20 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FBB201] focus:ring-2 focus:ring-[#FBB201]/20 outline-none transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <input 
                                type="text" 
                                id="city" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FBB201] focus:ring-2 focus:ring-[#FBB201]/20 outline-none transition-all"
                                placeholder="Chennai"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">Your Question</label>
                        <textarea 
                            id="question" 
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FBB201] focus:ring-2 focus:ring-[#FBB201]/20 outline-none transition-all resize-none"
                            placeholder="Type your question here..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 bg-[#0078BF] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#006099] transition-all flex items-center justify-center gap-2"
                    >
                        <Send size={18} />
                        Submit Question
                    </motion.button>
                </form>
            </div>
        </PhilosophyLayout>
    )
}
