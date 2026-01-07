"use client"
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import logo from "@/public/hkmlogo.jpg"

// ... (imports)

// Define recursive type for nav items
type NavItem = {
  name: string
  link: string
  submenu?: NavItem[]
}

export default function NavbarDemo() {
  const router = useRouter()

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Temple",
      link: "/temple",
    },
    {
      name: "Srila Prabhupada",
      link: "/srila-prabhupada",
    },
    {
      name: "Philosophy",
      link: "/philosophy",
    },
    {
      name: "Activities",
      link: "/activities",
      submenu: [
        { name: "Spiritual Discourses", link: "/activities/spiritual-discourses" },
        { name: "FOLK", link: "/activities/folk" },
        { name: "Distribution of Knowledge", link: "/activities/distribution-of-spiritual-knowledge" },
        { name: "Cultural Festivals", link: "/activities/cultural-festivals" },
        { name: "Sunday Retreats", link: "/activities/sunday-retreats" },
        { name: "Yuga Dharma", link: "/activities/yuga-dharma" },
        { name: "Soulful Sangam", link: "/activities/soulful-sangam" },
        { name: "Kala Madhuryam", link: "/activities/kala-madhuryam" },
        { name: "Atmarpanam", link: "/activities/atmarpanam" },
        { 
          name: "ICVK", 
          link: "/activities/icvk",
          submenu: [
              { name: "ICVK Activities", link: "/activities/icvk/activities" },
              { name: "ICVK Registration", link: "/activities/icvk/registration" },
              { name: "ICVK Enquiry", link: "/activities/icvk/enquiry" },
              { name: "REGISTER FOR ICVK (INDIAN CULTURAL AND VALUES FOR KIDS)", link: "/activities/icvk/register-for-icvk" },
              { name: "Winter Camp Registration", link: "/activities/icvk/winter-camp-registration" },
          ]
        },
        { name: "Yatramritam", link: "/activities/tirtha-yatra" },
        { name: "Ask a Question", link: "/activities/ask-a-question" },
      ],
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)
  
  // Helper to handle nested mobile expansion
  const [expandedNestedSubmenu, setExpandedNestedSubmenu] = useState<string | null>(null)

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-2 sm:px-4">
          <CustomNavbarLogo />
          <DesktopNavItems items={navItems} />
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <NavbarButton
              as="button"
              variant="primary"
              className="bg-white text-[#1B7CB8] hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold border-2 border-white"
              onClick={() => router.push("/donate")}
            >
              <span className="hidden sm:inline">DONATE NOW</span>
              <span className="sm:hidden">DONATE</span>
            </NavbarButton>
          </div>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <CustomNavbarLogo />
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/donate")}
              className="bg-white text-[#1B7CB8] hover:bg-gray-50 shadow-lg transition-all duration-200 text-xs px-3 py-1.5 rounded-full font-semibold border-2 border-white"
            >
              DONATE
            </button>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <div key={`mobile-link-${idx}`} className="w-full">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setExpandedSubmenu(expandedSubmenu === item.name ? null : item.name)}
                    className="flex w-full items-center justify-between py-2 text-[#3A3A3A] font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedSubmenu === item.name && (
                    <div className="ml-4 space-y-2 border-l-2 border-[#FFFFFF] pl-4">
                      {item.submenu.map((subitem, subidx) => (
                        <div key={`mobile-sublink-${subidx}`}>
                            {subitem.submenu ? (
                                <div>
                                    <button
                                        onClick={() => setExpandedNestedSubmenu(expandedNestedSubmenu === subitem.name ? null : subitem.name)}
                                        className="flex w-full items-center justify-between py-1 text-[#666666] hover:text-[#1B7CB8]"
                                    >
                                        {subitem.name}
                                        <ChevronDown
                                            className={`w-3 h-3 transition-transform ${expandedNestedSubmenu === subitem.name ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {expandedNestedSubmenu === subitem.name && (
                                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                            {subitem.submenu.map((nestedItem, nestedIdx) => (
                                                <Link
                                                    key={`nested-${nestedIdx}`}
                                                    href={nestedItem.link}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block py-1 text-sm text-[#888888] hover:text-[#1B7CB8]"
                                                >
                                                    {nestedItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={subitem.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-1 text-[#666666] hover:text-[#1B7CB8]"
                                >
                                    {subitem.name}
                                </Link>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#3A3A3A] font-medium hover:text-[#1B7CB8] hover:scale-105 transition-all duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex w-full flex-col gap-4 border-t border-[#E5E5E5] pt-4">
            <NavbarButton
              as="button"
              variant="primary"
              className="w-full bg-white text-[#1B7CB8] hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 rounded-full font-semibold border-2 border-white"
              onClick={() => {
                router.push("/donate")
                setIsMobileMenuOpen(false)
              }}
            >
              DONATE NOW
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

const DesktopNavItems = ({
  items,
}: {
  items: NavItem[]
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null)

  return (
    <div className="hidden flex-1 flex-row items-center justify-center gap-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex">
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            href={item.link}
            className="relative px-3 py-2 text-[#FFFFFF] flex items-center gap-1 hover:text-[#FFFFFF] hover:scale-110 whitespace-nowrap transition-all duration-200"
          >
            {item.name}
            {item.submenu && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${hoveredItem === item.name ? "rotate-180" : ""}`}
              />
            )}
          </Link>

          {item.submenu && hoveredItem === item.name && (
            <div className="absolute top-full left-0 mt-0 w-60 bg-[#1B7CB8] rounded-none shadow-xl border-t-4 border-[#FBB201] py-0 z-[60]">
              {item.submenu.map((subitem, subidx) => (
                <div 
                    key={`sublink-${subidx}`}
                    className="relative border-b border-white/20 last:border-b-0"
                    onMouseEnter={() => setHoveredSubItem(subitem.name)}
                    onMouseLeave={() => setHoveredSubItem(null)}
                >
                    <Link
                    href={subitem.link}
                    className="block px-4 py-3 text-white hover:bg-white hover:text-[#1B7CB8] transition-colors flex items-center justify-between font-medium"
                    >
                    {subitem.name}
                    {subitem.submenu && (
                        <ChevronDown className="w-4 h-4 -rotate-90 hover:text-[#1B7CB8]" />
                    )}
                    </Link>
                    
                    {/* Level 3 Nested Menu */}
                    {subitem.submenu && hoveredSubItem === subitem.name && (
                        <div className="absolute top-0 left-full ml-0 w-80 bg-[#1B7CB8] rounded-none shadow-xl border-t-4 border-[#FBB201] border-l-2 border-l-white py-0 z-[70]">
                            {subitem.submenu.map((nestedItem, nestedIdx) => (
                                <Link
                                    key={`nested-${nestedIdx}`}
                                    href={nestedItem.link}
                                    className="block px-4 py-3 text-white hover:bg-white hover:text-[#1B7CB8] transition-colors whitespace-normal text-sm border-b border-white/20 last:border-b-0 font-medium"
                                >
                                    {nestedItem.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const CustomNavbarLogo = () => {
    // ... existing implementation
    return (
    <Link href="/" className="relative z-20 flex-shrink-0 flex items-center gap-2 px-1 sm:px-2 py-1 text-sm font-normal">
      <img src={logo.src || "/placeholder.svg"} alt="HKM Logo" className="h-8 sm:h-10 w-auto" loading="eager" />
    </Link>
  )
}

