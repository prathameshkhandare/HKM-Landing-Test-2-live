"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

interface DonorListPageProps {
  title: string
  donors?: string[]
}

const ITEMS_PER_PAGE = 40

export default function DonorListPage({ title, donors = [] }: DonorListPageProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter donors based on search
  const filteredDonors = donors.filter(donor => 
    donor.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredDonors.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentDonors = filteredDonors.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
    }
    return pageNumbers
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#4A3728] text-white relative overflow-hidden flex items-center justify-center min-h-[30vh]">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB81C]/20 backdrop-blur-md border border-[#FFB81C]/30 text-[#FFB81C] text-sm font-bold tracking-widest uppercase mb-6">
             Wall of Gratitude
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-lg uppercase">
            {title}
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto"></div>
        </div>
      </section>

      {/* List Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="text" 
                placeholder="Search for a name..." 
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1) // Reset to first page on search
                }}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#FFB81C]/20 focus:border-[#FFB81C] focus:ring-4 focus:ring-[#FFB81C]/10 outline-none transition-all shadow-sm"
            />
        </div>

        {/* Donors Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#FFB81C]/20 relative overflow-hidden min-h-[600px]">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB81C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           
           {currentDonors.length > 0 ? (
             <>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-10 mb-12">
                    {currentDonors.map((donor, index) => (
                        <div 
                            key={index} 
                            className="aspect-[4/3] flex items-center justify-center p-2 text-center shadow-sm hover:shadow-md transition-all duration-300 select-none bg-[#84cc16] border-[6px] border-[#f97316]"
                        >
                            <span className="font-bold text-[10px] md:text-xs uppercase tracking-tight leading-tight break-words text-black">
                                {donor}
                            </span>
                        </div>
                    ))}
                 </div>

                 {/* Pagination Controls */}
                 {totalPages > 1 && (
                     <div className="flex flex-wrap justify-center items-center gap-2 relative z-10">
                         <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                         >
                             <ChevronLeft size={20} />
                         </button>
                         
                         {getPageNumbers().map(pageNum => (
                             <button
                                key={pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all
                                    ${currentPage === pageNum 
                                        ? 'bg-[#FFB81C] text-[#701a1a] shadow-lg scale-110' 
                                        : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-600'
                                    }
                                `}
                             >
                                 {pageNum}
                             </button>
                         ))}

                         <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                         >
                             <ChevronRight size={20} />
                         </button>
                     </div>
                 )}
             </>
           ) : (
             <div className="text-center py-20 relative z-10">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No donors found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
             </div>
           )}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
