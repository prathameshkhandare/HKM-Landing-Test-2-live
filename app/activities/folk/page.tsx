"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Heart, Users, Home, BookOpen, Coffee } from "lucide-react"

export default function FolkPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/activities/folk/folk-group.jpg"
            alt="FOLK - Youth Empowerment Club"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 flex justify-center">
             {/* Optional Logo if needed, or just text */}
             <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 p-4">
                <Image src="/activities/folk/folk-logo.png" alt="FOLK Logo" width={100} height={100} className="object-contain" />
             </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Youth Empowerment Club <br/><span className="text-[#FFB81C]">FOLK</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Friends Of Lord Krishna - Crystallizing the formative phase of the younger generation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B7CB8]">
              Experience a Lifetime
            </h2>
            <div className="w-20 h-1.5 bg-[#E8725C] rounded-full" />
            <p className="text-lg text-[#666666] leading-relaxed">
              FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation with key values that guide them throughout their lives. Some of the most vital and practical knowledge has been inherited from the time-tested Vedic wisdom and woven into methodic workshops.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed">
              For more than one decade, our programs have been catalyzing the youth culture by designing rich avenues in art, theatre, science, philosophy, and many more. A vibrant community of highly progressive young minds awaits you.
            </p>
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-[#FFB81C]">
              <p className="text-[#3A3A3A] italic">
                "Nobody comes with a sealed guarantee that we might live up to a particular age. What is done in life earlier, especially if misguided, becomes impossible to be undone later in life."
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
             <Image 
               src="/activities/folk/folk-class.png" 
               alt="FOLK Session" 
               fill 
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
               <span className="text-white font-semibold">Interactive Sessions</span>
             </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B7CB8] mb-4">Why Join FOLK?</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Based on the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, we present the treasure house of spiritual knowledge to youth.
            </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Interactive Sessions", desc: "Teaching how to apply Vedic wisdom to current world realities. Solutions to manage stress, improve memory, and excel in life." },
                { icon: Users, title: "Vibrant Community", desc: "A gala gathering every Sunday with spiritual classes, music, dance and delicious prasadam offered to Lord Krishna." },
                { icon: Heart, title: "Personality Enrichment", desc: "explore deeper selves and encourage introspection—a real need in today’s chaotic times." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FFF9F0] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#FFB81C]/20 group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E8725C]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">{item.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B7CB8] mb-12 text-center">FOLK Programs</h2>
        
        <div className="space-y-16">
          {/* Program 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 order-2 md:order-1">
                <div className="inline-block px-4 py-1.5 bg-[#FFB81C]/10 text-[#FFB81C] rounded-full text-sm font-semibold mb-4">2 Sessions</div>
                <h3 className="text-3xl font-bold text-[#3A3A3A] mb-4">1. AIM OF LIFE</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  What is the real goal of life? An aimless person is like a ship that has lost its control over the sea. The Aim is defined as a strong will to achieve something. Every person must have a well-defined objective in life. It helps a person to understand the direction of his/her career. One will discover in these session the real aim of life which is ultimately going to help person and make his life peaceful and happy.
                </p>
             </div>
             <div className="flex-1 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B7CB8] to-[#2563EB] opacity-10"></div>
                {/* Placeholder gradient as no specific image for this, or reuse one */}
                <Image src="/activities/folk/folk-prayer.jpg" alt="Meditation" fill className="object-cover hover:scale-105 transition-transform duration-500" />
             </div>
          </div>

          {/* Program 2 */}
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image src="/activities/folk/folk-dining.png" alt="Discussion" fill className="object-cover hover:scale-105 transition-transform duration-500" />
             </div>
             <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#E8725C]/10 text-[#E8725C] rounded-full text-sm font-semibold mb-4">18 Sessions</div>
                <h3 className="text-3xl font-bold text-[#3A3A3A] mb-4">2. Jijnasa</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Despite the significant technological and medical advances mankind has been making in the last few decades, happiness in relationships and life seems to be on the downslide. Stress and dissatisfaction are apparently on the rise. The world seems to be missing something. What is that missing link? You can discover that missing link and many more things…
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Residency Section */}
      <section className="py-20 bg-[#1B7CB8] text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">FOLK Residency</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Reintroducing today’s fast-tracked youth to the timeless concept of peaceful living.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="leading-relaxed text-lg text-white">
                Residencies in carefully chosen areas across Chennai and a few other Indian cities are maintained and let out to bachelors who are either students or working professionals. Closely following the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada and Lord Krishna, the Residency program invites youngsters to live with like-minded people.
              </p>
              
              <ul className="space-y-4 mt-6">
                {[
                  { icon: Home, text: "Companionship without compromising personal space" },
                  { icon: Coffee, text: "Hygienic, nutritious, and 100% vegetarian food, thrice a day" },
                  { icon: BookOpen, text: "Regular morning programs, meditation sessions, group discussions" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <item.icon className="text-[#FFB81C] shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white text-[#3A3A3A] p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">Get Connected</h3>
              <p className="mb-8 text-[#666666]">
                Sharing a house with diverse backgrounds gives you a chance to build relationships, learn life skills, and grow as a compassionate, confident human being.
              </p>
              
              <div className="space-y-4">
                 <Link 
                   href="https://docs.google.com/forms/d/e/1FAIpQLSfleSdfYl6ZOzyikwxtqg369M08b_tCdvV77hbJFkXjLxtohQ/viewform"
                   target="_blank"
                   className="flex items-center justify-between w-full p-4 bg-[#FFB81C] hover:bg-[#E5A810] text-black font-bold rounded-lg transition-colors group"
                 >
                   <span>Register for Sunday Session</span>
                   <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                 </Link>
                 
                 <div className="p-4 bg-[#F3F4F6] rounded-lg">
                   <p className="text-sm text-[#666666] mb-1">For more information:</p>
                   <a href="mailto:connect@hkmchennai.org" className="text-lg font-bold text-[#1B7CB8] hover:underline">
                     connect@hkmchennai.org
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
