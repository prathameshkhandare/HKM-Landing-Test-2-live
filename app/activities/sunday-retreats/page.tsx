"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Music, UserCheck, Utensils } from "lucide-react"

export default function SundayRetreatsPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/activities/sunday-retreats/kirtan-main.png"
            alt="Sunday Retreat Kirtan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Sunday Retreat
          </h1>
          <div className="w-24 h-1.5 bg-[#FFB81C] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-3xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto">
            "Make your holiday a holy day"
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B7CB8]">
              Spiritual Surcharge
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Sunday Festival is a unique program to surcharge you spiritually for the rest of the week. In this family festival you can look forward to participate in thrilling devotional engagements.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#E5E5E5]">
                 <div className="p-3 bg-[#FFB81C]/10 rounded-full text-[#FFB81C]">
                    <Music size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-[#3A3A3A]">Enchanting Kirtans</h3>
                    <p className="text-[#666666]">Participate in soul-stirring kirtans and aartis.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#E5E5E5]">
                 <div className="p-3 bg-[#E8725C]/10 rounded-full text-[#E8725C]">
                    <UserCheck size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-[#3A3A3A]">Vedic Wisdom</h3>
                    <p className="text-[#666666]">Bhagavad-gita pravachan in English to enlighten your intellect.</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
             <Image 
               src="/activities/sunday-retreats/krishna-balarama-main.jpg" 
               alt="Sri Sri Krishna Balarama" 
               fill 
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                   <p className="font-semibold text-lg">Sri Sri Krishna Balarama</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Schedule / Flow */}
      <section className="py-20 bg-[#1B7CB8] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top translate-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Program Highlights</h2>
              <p className="text-xl text-white/90">Ideally crafted spiritual programs for youth and families starting from 5:30 PM.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { time: "5:30 PM", title: "Sandhya Arati", desc: "Worship of Their Lordships", icon: Clock },
                { time: "6:00 PM", title: "Bhagavad-gita", desc: "Discourse in English", icon: UserCheck },
                { time: "7:00 PM", title: "Shayan Arati", desc: "With enchanting kirtans", icon: Music },
                { time: "8:00 PM", title: "Prasadam", desc: "Delicious feast for all", icon: Utensils }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-center group">
                   <div className="w-16 h-16 mx-auto bg-white text-[#1B7CB8] rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                      <item.icon />
                   </div>
                   <div className="text-[#FFB81C] font-bold mb-2">{item.time}</div>
                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                   <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Gallery / Glimpses */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
         <h2 className="text-3xl md:text-4xl font-bold text-[#1B7CB8] text-center mb-12">Glimpses of Retreats</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
               <Image src="/activities/sunday-retreats/kirtan-group-1.png" alt="Kirtan Group" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow md:-mt-8">
               <Image src="/activities/sunday-retreats/crowd-lecture.png" alt="Lecture Session" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
               <Image src="/activities/sunday-retreats/kirtan-group-2.png" alt="Kirtan Group 2" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#FFB81C]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1B7CB8] via-[#FFB81C] to-[#E8725C]"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Come & Join Us!</h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                 Experience the joy of spiritual association. Every Sunday evening at Hare Krishna Movement Chennai.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                 <Link 
                   href="/contact-us"
                   className="inline-flex items-center px-8 py-4 bg-[#1B7CB8] hover:bg-[#156292] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-[#1B7CB8]/30 hover:-translate-y-1"
                 >
                   <MapPin className="mr-2" /> Get Directions
                 </Link>
                 <Link 
                   href="/contact-us"
                   className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#1B7CB8] text-[#1B7CB8] hover:bg-[#1B7CB8]/5 font-bold rounded-full transition-all"
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
