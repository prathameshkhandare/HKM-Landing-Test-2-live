"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Music, UserCheck, Utensils } from "lucide-react"

export default function SundayRetreatsPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-black">
      <NavbarDemo />

      {/* Hero Section - Pure Design (No Image) - Compact & Spiritual */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Animated Authentic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#501313] via-[#ea580c] to-[#9a3412] opacity-90 animate-gradient-slow"></div>
        
        {/* Geometric/Mandala Overlay */}
        <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
        
        {/* Spiritual Mantra Texture (Simulated) */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>
        
        {/* Divine Center - Peacock Feather Motif & Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
            {/* Large Background Peacock Feather Graphic */}
            <svg width="350" height="350" viewBox="0 0 100 100" fill="none" className="absolute opacity-10">
               {/* Simplified Peacock Feather Eye */}
               <path d="M50 20Q65 20 65 35Q65 50 50 50Q35 50 35 35Q35 20 50 20Z" stroke="#FFB81C" strokeWidth="1"/>
               <path d="M50 25Q58 25 58 35Q58 45 50 45Q42 45 42 35Q42 25 50 25Z" fill="#FFB81C" opacity="0.5"/>
               {/* Feather Staff */}
               <path d="M50 50Q50 80 20 90" stroke="#FFB81C" strokeWidth="2" strokeLinecap="round"/>
               {/* Radiating Hairlines */}
               <path d="M65 35Q80 30 85 20" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
               <path d="M35 35Q20 30 15 20" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
               <path d="M50 20Q50 10 50 5" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
            </svg>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl">
           <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
        </div>
        <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl">
           <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8">
          {/* Ornamental Header Icon - Flute & Lotus */}
          <div className="flex justify-center mb-4">
             <div className="relative">
                 <div className="absolute inset-0 bg-[#FFB81C] blur-lg opacity-40"></div>
                 {/* Stylized Flute Icon */}
                 <svg width="50" height="40" viewBox="0 0 50 40" fill="none" className="relative z-10 drop-shadow-lg transform -rotate-12">
                    <rect x="5" y="15" width="40" height="6" rx="3" fill="#FFB81C"/>
                    <circle cx="15" cy="18" r="1.5" fill="#2D0A0A"/>
                    <circle cx="22" cy="18" r="1.5" fill="#2D0A0A"/>
                    <circle cx="29" cy="18" r="1.5" fill="#2D0A0A"/>
                    <circle cx="36" cy="18" r="1.5" fill="#2D0A0A"/>
                 </svg>
             </div>
          </div>

          {/* Title with Gold Glow/Shadow */}
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" style={{ textShadow: "0 4px 30px rgba(234, 88, 12, 0.6)" }}>
            Sunday Retreat
          </h1>
          
          {/* Spiritual Divider - Vaishnava Tilak */}
          <div className="flex items-center justify-center gap-6 mb-8">
             <div className="h-[1px] w-20 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
             {/* Vaishnava Tilak SVG */}
             <div className="relative w-6 h-10">
                 <svg viewBox="0 0 24 40" fill="none" className="w-full h-full drop-shadow-[0_0_5px_#FFB81C]">
                    {/* U Shape */}
                    <path d="M12 35 C 12 35, 6 30, 6 15 L 6 2 L 10 2 L 10 25 L 12 28 L 14 25 L 14 2 L 18 2 L 18 15 C 18 30, 12 35, 12 35 Z" fill="#FFB81C"/>
                    {/* Tulsi Leaf Base */}
                    <path d="M12 32 C 12 32, 9 35, 9 38 L 15 38 C 15 35, 12 32, 12 32 Z" fill="#FFB81C"/>
                 </svg>
             </div>
             <div className="h-[1px] w-20 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
          </div>
          
          <p className="text-xl md:text-3xl text-[#FFF9F0] font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md tracking-wide opacity-90">
            "Make your holiday a holy day"
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
         {/* Background Texture */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C]/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] drop-shadow-sm">
              Spiritual Surcharge
            </h2>
            <div className="w-20 h-1 bg-[#1E3A8A] rounded-full"></div>
            <p className="text-xl text-[#4a4a4a] leading-relaxed font-medium">
              Sunday Festival is a unique program to surcharge you spiritually for the rest of the week. In this family festival you can look forward to participate in thrilling devotional engagements.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
               <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#1E3A8A] hover:translate-x-2 transition-transform duration-300">
                 <div className="p-4 bg-[#FFF9F0] rounded-full text-[#1E3A8A] border border-[#1E3A8A]/20">
                    <Music size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-[#701a1a] mb-1">Enchanting Kirtans</h3>
                    <p className="text-[#666666]">Participate in soul-stirring kirtans and aartis.</p>
                 </div>
               </div>
               <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#FFB81C] hover:translate-x-2 transition-transform duration-300">
                 <div className="p-4 bg-[#FFF9F0] rounded-full text-[#E8725C] border border-[#E8725C]/20">
                    <UserCheck size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-[#701a1a] mb-1">Vedic Wisdom</h3>
                    <p className="text-[#666666]">Bhagavad-gita pravachan in English to enlighten your intellect.</p>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Framed Image - Classic Altar Look */}
          <div className="relative h-[550px] w-full p-3 bg-white shadow-2xl rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-[#ddd]">
             <div className="absolute inset-0 border-2 border-[#FFB81C]/30 m-2 z-10 pointer-events-none"></div>
             <div className="relative h-full w-full overflow-hidden border border-[#999]">
                <Image 
                  src="/activities/sunday-retreats/deities-main.jpg" 
                  alt="Sri Sri Krishna Balarama" 
                  fill 
                  className="object-cover"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFB81C] rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Highlights - Vibrant Textured Background */}
      <section className="py-24 relative overflow-hidden bg-[#FFF9F0]">
        {/* Rich Texture Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '300px' }}></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
           <div className="text-center mb-16">
              <span className="text-[#1E3A8A] font-bold tracking-widest uppercase text-sm mb-2 block">Weekly Schedule</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#701a1a] drop-shadow-sm tracking-tight">Program Highlights</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                 <div className="h-[1px] w-16 bg-[#701a1a]/30"></div>
                 <div className="text-[#FFB81C] text-xl">♦</div>
                 <div className="h-[1px] w-16 bg-[#701a1a]/30"></div>
              </div>
              <p className="text-xl md:text-2xl text-[#5a5a5a] max-w-3xl mx-auto leading-relaxed">
                Join us for an evening of spiritual rejuvenation every Sunday starting at <span className="font-bold text-[#1E3A8A]">5:30 PM</span>
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  time: "5:30 PM", 
                  title: "Sandhya Arati", 
                  desc: "Grand worship of Their Lordships", 
                  img: "/activities/sunday-retreats/sandhya-arati.jpg",
                  position: "80% center"
                },
                { 
                  time: "6:00 PM", 
                  title: "Bhagavad-gita", 
                  desc: "Enlightening discourse in English", 
                  img: "/activities/sunday-retreats/lecture-crowd.jpg",
                  position: "center"
                },
                { 
                  time: "7:00 PM", 
                  title: "Shayan Arati", 
                  desc: "Soul-stirring kirtans & dance", 
                  img: "/activities/sunday-retreats/kirtan-group.png",
                  position: "center"
                },
                { 
                  time: "8:00 PM", 
                  title: "Prasadam", 
                  desc: "Delicious sanctified feast for all", 
                  img: "/activities/sunday-retreats/prasadam.jpg",
                  position: "center"
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative h-[420px] bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-sm border border-[#e5e5e5]">
                   <div className="relative h-full w-full overflow-hidden border border-[#1E3A8A]/10">
                       {/* Background Image */}
                       <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                          style={{ objectPosition: item.position || "center" }}
                       />
                       
                       {/* Gradient Overlay - Neutral Dark for Text Contrast */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500" />
                       
                       {/* Ornate Corner Borders */}
                       <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#FFB81C]/70"></div>
                       <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#FFB81C]/70"></div>
                       <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#FFB81C]/70"></div>
                       <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#FFB81C]/70"></div>

                       {/* Content */}
                       <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center z-10">
                          <div className="mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block px-5 py-1.5 bg-[#FFB81C] text-[#331800] font-bold tracking-wide text-sm mb-4 shadow-lg uppercase border border-[#fff]/20">
                              {item.time}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg tracking-wide">{item.title}</h3>
                            <div className="h-[2px] w-12 bg-[#FFB81C] mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                            <p className="text-[#f0f0f0] text-sm font-medium tracking-wide drop-shadow-md">
                              {item.desc}
                            </p>
                          </div>
                       </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Gallery - Masonry Feel */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
         <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Glimpses of Retreats</h2>
             <p className="text-[#666]">Moments of joy and devotion captured in time</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="relative h-[350px] group overflow-hidden shadow-lg border-4 border-[#FFF9F0] outline outline-1 outline-[#ddd]">
               <Image src="/activities/sunday-retreats/monks-kirtan.jpg" alt="Monks Kirtan" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#701a1a] via-[#942727] to-[#FFB81C]/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold border-b-2 border-white pb-1 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Soulful Kirtans</span>
               </div>
            </div>
            <div className="relative h-[350px] group overflow-hidden shadow-lg border-4 border-[#FFF9F0] outline outline-1 outline-[#ddd] md:-mt-12 shadow-2xl z-10">
               <Image src="/activities/sunday-retreats/lecture-crowd.jpg" alt="Lecture Session" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#2a59c0] to-[#60a5fa]/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold border-b-2 border-white pb-1 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Enlightening Discourses</span>
               </div>
            </div>
            <div className="relative h-[350px] group overflow-hidden shadow-lg border-4 border-[#FFF9F0] outline outline-1 outline-[#ddd]">
               <Image src="/activities/sunday-retreats/kirtan-group.png" alt="Kirtan Group" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#d97706] via-[#f59e0b] to-[#fbbf24]/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold border-b-2 border-white pb-1 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Joyful Association</span>
               </div>
            </div>
         </div>
      </section>

      {/* CTA - Vibrant Saffron Gradient */}
      {/* CTA - Vibrant Saffron Gradient with Ornaments - Compact Version */}
      {/* CTA - Vibrant Saffron Gradient with Ornaments - Compact Version */}
      <section className="py-16 bg-[#701a1a] relative overflow-hidden text-white">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#5c1010] to-[#701a1a]"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '400px', backgroundRepeat: 'repeat' }}></div>
        
        {/* Floating Particles Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFB81C] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#FFB81C] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <div className="relative p-8 md:p-12 rounded-xl bg-black/20 backdrop-blur-sm border border-[#FFB81C]/30 shadow-2xl">
              
              {/* Ornamental Corner SVGs - Scaled Down */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#FFB81C] opacity-80">
                 <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-[#FFB81C] rounded-full"></div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#FFB81C] opacity-80">
                 <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#FFB81C] rounded-full"></div>
              </div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#FFB81C] opacity-80">
                 <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-[#FFB81C] rounded-full"></div>
              </div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#FFB81C] opacity-80">
                 <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-[#FFB81C] rounded-full"></div>
              </div>

              {/* Side Vertical Ornaments */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-40 hidden md:block">
                  <svg width="20" height="100" viewBox="0 0 20 100" fill="none" stroke="#FFB81C">
                     <path d="M10 0V100M0 20L10 10L20 20M0 80L10 90L20 80" />
                  </svg>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-40 hidden md:block">
                  <svg width="20" height="100" viewBox="0 0 20 100" fill="none" stroke="#FFB81C">
                     <path d="M10 0V100M0 20L10 10L20 20M0 80L10 90L20 80" />
                  </svg>
              </div>
              
              {/* Decorative Lotus Header */}
              <div className="flex justify-center mb-4">
                 <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="opacity-90">
                    <path d="M24 0C24 0 28 12 40 16C28 20 24 32 24 32C24 32 20 20 8 16C20 12 24 0 24 0Z" fill="#FFB81C"/>
                    <circle cx="24" cy="16" r="3" fill="#FFF9F0"/>
                 </svg>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#FFB81C] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                Come & Join Us!
              </h2>
              
              {/* Intricate Divider */}
              <div className="flex items-center justify-center gap-2 mb-6 opacity-70">
                 <div className="h-[1px] w-12 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                 <div className="w-2 h-2 rotate-45 border border-[#FFB81C]"></div>
                 <div className="h-[1px] w-12 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
              </div>

              <p className="text-lg md:text-2xl text-[#ffe8cc] mb-8 leading-relaxed font-light drop-shadow-md">
                 Experience the joy of spiritual association. <br/>Every Sunday evening at Hare Krishna Movement Chennai.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                 <Link 
                   href="/contact-us"
                   className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#FFB81C] to-[#FCA311] text-[#331800] font-bold text-lg rounded-full transition-all shadow-[0_0_20px_rgba(255,184,28,0.3)] hover:shadow-[0_0_30px_rgba(255,184,28,0.5)] hover:-translate-y-1 overflow-hidden"
                 >
                   <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12 origin-left"></span>
                   <MapPin className="mr-2" size={20} /> Get Directions
                 </Link>
                 <Link 
                   href="/contact-us"
                   className="inline-flex items-center px-8 py-3 border-2 border-[#FFB81C] text-[#FFB81C] hover:bg-[#FFB81C] hover:text-[#331800] font-bold text-lg rounded-full transition-all tracking-wide"
                 >
                   Contact Us
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
