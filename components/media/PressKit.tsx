"use client"
import { motion } from "framer-motion"
import { Download, FileText, Image as ImageIcon } from "lucide-react"

export default function PressKit() {
  return (
    <section className="py-20 bg-[#FFF9F0] text-[#2D0A0A] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea580c] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-[#2D0A0A]">Official <span className="text-[#ea580c] italic">Press Kit</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Download official high-resolution logos, brand assets, and press releases for Dakshina Dwaraka Dham. For media inquiries, please contact our PR team.
                </p>
                <div className="pt-4">
                    <a href="mailto:media@hkmchennai.org" className="text-[#ea580c] font-bold border-b border-[#ea580c] pb-1 hover:text-[#c2410c] hover:border-[#c2410c] transition-all">
                        media@hkmchennai.org
                    </a>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Asset Card 1 - Logos */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                        <div className="w-12 h-12 bg-[#FFB81C]/10 rounded-full flex items-center justify-center text-[#FFB81C] mb-4 group-hover:scale-110 transition-transform">
                            <ImageIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2D0A0A]">Brand Assets</h3>
                        <p className="text-sm text-gray-500 mb-6 font-medium">Logos, Icons, and Brand Guidelines in vector formats.</p>
                        <button className="flex items-center gap-2 text-sm font-bold text-[#FFB81C] uppercase tracking-wider group-hover:gap-3 transition-all">
                            Download Pack <Download size={16} />
                        </button>
                    </div>

                    {/* Asset Card 2 - Press Releases */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                        <div className="w-12 h-12 bg-[#ea580c]/10 rounded-full flex items-center justify-center text-[#ea580c] mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2D0A0A]">Press Releases</h3>
                        <p className="text-sm text-gray-500 mb-6 font-medium">Latest official statements and press notes.</p>
                        <button className="flex items-center gap-2 text-sm font-bold text-[#ea580c] uppercase tracking-wider group-hover:gap-3 transition-all">
                            View Documents <Download size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
