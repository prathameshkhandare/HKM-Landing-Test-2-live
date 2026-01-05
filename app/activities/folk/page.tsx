"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Heart, Users, Home, BookOpen, Coffee, Lightbulb, UserCheck, Zap } from "lucide-react"

export default function FolkPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-black">
      <NavbarDemo />

      {/* Hero Section - FOLK (Youth) - Vibrant & Energetic */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
            {/* Animated Authentic Background - Saffron to Maroon for Energy */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c] via-[#b91c1c] to-[#7f1d1d] opacity-90 animate-gradient-slow"></div>
            
            {/* Geometric/Mandala Overlay - Dynamic Spin for Youth */}
            <div className="absolute inset-0 opacity-10 animate-spin-slow-reverse" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
            
            {/* Spiritual Mantra Texture - Subtle */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(120deg, #FFB81C 0px, transparent 1px, transparent 20px)' }}></div>
            
            {/* Divine Center - Peacock Feather Motif (Abstract for Youth) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[100px] opacity-20 animate-pulse-fast"></div>
                {/* Large Background Peacock Feather Graphic */}
                <svg width="600" height="600" viewBox="0 0 100 100" fill="none" className="absolute opacity-10 rotate-12">
                   <path d="M50 20Q65 20 65 35Q65 50 50 50Q35 50 35 35Q35 20 50 20Z" stroke="#FFB81C" strokeWidth="1"/>
                   <path d="M50 25Q58 25 58 35Q58 45 50 45Q42 45 42 35Q42 25 50 25Z" fill="#FFB81C" opacity="0.3"/>
                   <path d="M50 50Q50 90 10 100" stroke="#FFB81C" strokeWidth="3" strokeLinecap="round"/>
                   <path d="M65 35Q90 30 95 10" stroke="#FFB81C" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                   <path d="M35 35Q10 30 5 10" stroke="#FFB81C" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                </svg>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                  {/* FOLK Logo Glow */}
                  <div className="mb-8 flex justify-center relative">
                     <div className="absolute inset-0 bg-[#FFB81C] blur-2xl opacity-40 rounded-full"></div>
                     <div className="w-28 h-28 md:w-36 md:h-36 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-[#FFB81C]/50 p-4 relative z-10 shadow-[0_0_30px_rgba(255,184,28,0.3)]">
                        <Image src="/activities/folk/folk-logo.png" alt="FOLK Logo" width={100} height={100} className="object-contain" />
                     </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    FOLK
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#FFB81C] mb-8 uppercase tracking-widest">
                    Youth Empowerment Club
                  </h2>

                  {/* Spiritual Divider - Modern Tilak */}
                  <div className="flex items-center justify-center gap-6 mb-10">
                     <div className="h-[2px] w-24 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                     <div className="relative w-8 h-12">
                         <svg viewBox="0 0 24 40" fill="none" className="w-full h-full drop-shadow-[0_0_10px_#FFB81C]">
                            <path d="M12 35 C 12 35, 6 30, 6 15 L 6 2 L 10 2 L 10 25 L 12 28 L 14 25 L 14 2 L 18 2 L 18 15 C 18 30, 12 35, 12 35 Z" fill="#FFB81C"/>
                            <path d="M12 32 C 12 32, 9 35, 9 38 L 15 38 C 15 35, 12 32, 12 32 Z" fill="#FFB81C"/>
                         </svg>
                     </div>
                     <div className="h-[2px] w-24 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                  </div>
                  
                  <p className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
                    Friends Of Lord Krishna - Crystallizing the formative phase of the younger generation.
                  </p>
              </motion.div>
            </div>
      </section>

      {/* Introduction with Classic Frame effect */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a]">
              Experience a <span className="text-[#ea580c]">Lifetime</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#ea580c] rounded-full" />
            <p className="text-lg text-[#5a5a5a] leading-relaxed font-medium">
              FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation with key values that guide them throughout their lives. Some of the most vital and practical knowledge has been inherited from the time-tested Vedic wisdom and woven into methodic workshops.
            </p>
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              For more than one decade, our programs have been catalyzing the youth culture by designing rich avenues in art, theatre, science, philosophy, and many more. A vibrant community of highly progressive young minds awaits you.
            </p>
            
            <div className="relative p-8 bg-white rounded-xl shadow-xl border-l-[6px] border-[#FFB81C]">
                <div className="absolute top-4 left-4 text-4xl text-[#FFB81C] opacity-30">"</div>
              <p className="text-[#3A3A3A] italic text-lg pl-6">
                Nobody comes with a sealed guarantee that we might live up to a particular age. What is done in life earlier, especially if misguided, becomes impossible to be undone later in life.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative h-[500px] rounded-t-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#FFB81C]/30"
          >
             <Image 
               src="/activities/folk/folk-class.png" 
               alt="FOLK Session" 
               fill 
               className="object-cover transition-transform duration-700 hover:scale-110"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D0A0A] to-transparent p-10">
               <span className="text-[#FFB81C] font-bold text-xl tracking-widest uppercase">Interactive Sessions</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join FOLK - Vibrant Cards */}
      <section className="py-24 bg-[#FFF9F0] relative">
         <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-fixed"></div>
         
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] mb-6 drop-shadow-sm">Why Join <span className="text-[#FFB81C]">FOLK?</span></h2>
            <div className="flex items-center justify-center gap-2 mb-6">
                 <div className="h-[1px] w-12 bg-[#701a1a]/30"></div>
                 <div className="text-[#ea580c] text-xl">✦</div>
                 <div className="h-[1px] w-12 bg-[#701a1a]/30"></div>
            </div>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg">
              Based on the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, we present the treasure house of spiritual knowledge to youth.
            </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: Lightbulb, title: "Interactive Sessions", desc: "Teaching how to apply Vedic wisdom to current world realities. Solutions to manage stress, improve memory, and excel in life." },
                { icon: Users, title: "Vibrant Community", desc: "A gala gathering every Sunday with spiritual classes, music, dance and delicious prasadam offered to Lord Krishna." },
                { icon: UserCheck, title: "Personality Enrichment", desc: "explore deeper selves and encourage introspection—a real need in today’s chaotic times." }
              ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-10 rounded-2xl shadow-xl border-t-[6px] border-[#ea580c] group hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-[#FFF9F0] rounded-full flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#ea580c] transition-colors duration-300">
                    <item.icon size={32} className="text-[#ea580c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#701a1a] mb-4 group-hover:text-[#ea580c] transition-colors">{item.title}</h3>
                  <p className="text-[#5a5a5a] leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Programs Section - Alternating Layout with Ornaments */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-[#701a1a] mb-20 text-center drop-shadow-sm">FOLK Programs</h2>
        
        <div className="space-y-24">
          {/* Program 1 */}
          <div className="flex flex-col md:flex-row gap-16 items-center group">
             <div className="flex-1 order-2 md:order-1 space-y-6">
                <div className="inline-block px-5 py-2 bg-[#FFB81C] text-[#2D0A0A] rounded-full text-sm font-bold mb-2 shadow-lg">2 SESSIONS</div>
                <h3 className="text-4xl font-bold text-[#701a1a]">1. AIM OF LIFE</h3>
                <div className="w-12 h-1 bg-[#701a1a] rounded-full"></div>
                <p className="text-[#5a5a5a] leading-relaxed text-lg">
                  What is the real goal of life? An aimless person is like a ship that has lost its control over the sea. The Aim is defined as a strong will to achieve something. Every person must have a well-defined objective in life. It helps a person to understand the direction of his/her career. One will discover in these session the real aim of life which is ultimately going to help person and make his life peaceful and happy.
                </p>
             </div>
             <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 border-4 border-white md:group-hover:translate-x-4 transition-transform duration-500">
                <div className="absolute inset-0 bg-[#ea580c]/20 mix-blend-overlay z-10"></div>
                <Image src="/activities/folk/folk-prayer.jpg" alt="Meditation" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </div>

          {/* Program 2 */}
           <div className="flex flex-col md:flex-row gap-16 items-center group">
             <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white md:group-hover:-translate-x-4 transition-transform duration-500">
                <div className="absolute inset-0 bg-[#ea580c]/20 mix-blend-overlay z-10"></div>
                <Image src="/activities/folk/folk-dining.png" alt="Discussion" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="flex-1 space-y-6">
                <div className="inline-block px-5 py-2 bg-[#ea580c] text-white rounded-full text-sm font-bold mb-2 shadow-lg">18 SESSIONS</div>
                <h3 className="text-4xl font-bold text-[#701a1a]">2. Jijnasa</h3>
                 <div className="w-12 h-1 bg-[#ea580c] rounded-full"></div>
                <p className="text-[#5a5a5a] leading-relaxed text-lg">
                  Despite the significant technological and medical advances mankind has been making in the last few decades, happiness in relationships and life seems to be on the downslide. Stress and dissatisfaction are apparently on the rise. The world seems to be missing something. What is that missing link? You can discover that missing link and many more things…
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Residency Section - Premium Dark Spiritual Theme (Enhanced) */}
      <section className="py-24 relative text-white overflow-hidden">
        {/* Deep Royal Background with Gradient */}
        <div className="absolute inset-0 bg-[#2D0A0A]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#3d0e0e] to-[#1a0505] opacity-90"></div>
        
        {/* Animated Mandala Overlay */}
        <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: "url('/assets/mandala-pattern.png')", backgroundSize: "800px" }}></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/assets/mandala-pattern.png')", backgroundSize: "400px" }}></div>
        
        {/* Divine Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFB81C] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        {/* Floating Spiritual Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#ea580c] rounded-full opacity-30 animate-pulse-slow delay-700"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-50 animate-float-up delay-1000"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow delay-500"></div>
            {/* Cosmic Dust Texture */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
             {/* Decorative Top Icon */}
             <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.3)] backdrop-blur-sm relative">
                    <div className="absolute inset-2 border border-[#FFB81C]/50 rounded-full animate-ping-slow"></div>
                    <Home size={32} className="text-[#FFB81C]" />
                </div>
             </div>
             
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#ffe8cc] to-[#FFB81C] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-serif">
                FOLK Residency
            </h2>
            
            {/* Ornate Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[2px] w-24 bg-gradient-to-l from-[#ea580c] to-transparent"></div>
                <div className="w-3 h-3 rotate-45 bg-[#FFB81C] shadow-[0_0_10px_#FFB81C]"></div>
                <div className="h-[2px] w-24 bg-gradient-to-r from-[#ea580c] to-transparent"></div>
            </div>

            <p className="text-2xl text-[#ffe8cc] max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
              "Reintroducing today’s fast-tracked youth to the timeless concept of peaceful living."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Content - Glass Cards */}
            <div className="space-y-10">
              <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFB81C] to-transparent opacity-50"></div>
                  <p className="leading-relaxed text-xl text-[#e0e0e0] font-light pl-6">
                    Residencies in carefully chosen areas across Chennai and a few other Indian cities are maintained and let out to bachelors who are either students or working professionals. <span className="text-[#FFB81C] font-medium">Closely following the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</span>, the Residency program invites youngsters to live with like-minded people.
                  </p>
              </div>
              
              <ul className="space-y-6 mt-8">
                {[
                  { icon: UserCheck, text: "Companionship without compromising personal space", title: "Balanced Living" },
                  { icon: Coffee, text: "Hygienic, nutritious, and 100% vegetarian food, thrice a day", title: "Sattvic Prasadam" },
                  { icon: BookOpen, text: "Regular morning programs, meditation sessions, group discussions", title: "Spiritual Culture" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2, type: "spring" }}
                    className="group relative flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/10 to-transparent backdrop-blur-md border border-[#FFB81C]/20 hover:border-[#FFB81C]/60 hover:bg-white/15 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-14 h-14 bg-[#FFB81C] rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,184,28,0.4)] group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-[#2D0A0A]" size={28} />
                    </div>
                    <div>
                        <h4 className="text-[#FFB81C] font-bold text-lg mb-1">{item.title}</h4>
                        <span className="text-lg text-[#f0f0f0] font-light leading-relaxed">{item.text}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Right Card - Divine Invitation */}
            <div className="relative">
               {/* Glowing Background Effect */}
               <div className="absolute -inset-4 bg-gradient-to-br from-[#ea580c] to-[#FFB81C] rounded-[2.5rem] blur-2xl opacity-30 animate-pulse-slow"></div>
               
               <div className="relative bg-[#FFF9F0] text-[#3A3A3A] p-2 rounded-[2rem] shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                   {/* Double Border Frame */}
                   <div className="rounded-[1.8rem] border-2 border-[#ea580c] p-1 h-full">
                       <div className="rounded-[1.6rem] border border-[#ea580c]/30 p-8 md:p-10 h-full relative overflow-hidden bg-[url('/assets/mandala-pattern.png')] bg-opacity-5">
                            
                            {/* Corner Ornaments */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap size={100} className="text-[#ea580c] rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1 bg-[#ea580c]/10 text-[#ea580c] font-bold rounded-full text-xs uppercase tracking-widest mb-4 border border-[#ea580c]/20">
                                    Join the Community
                                </div>
                                
                                <h3 className="text-4xl font-bold mb-4 text-[#701a1a] font-serif">Get Connected</h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-full mb-6"></div>
                                
                                <p className="mb-10 text-[#5a5a5a] text-lg leading-relaxed font-medium">
                                    Sharing a house with diverse backgrounds gives you a chance to build relationships, learn life skills, and grow as a compassionate, confident human being.
                                </p>
                                
                                <div className="space-y-6">
                                    <Link 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfleSdfYl6ZOzyikwxtqg369M08b_tCdvV77hbJFkXjLxtohQ/viewform"
                                    target="_blank"
                                    className="flex items-center justify-between w-full p-5 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] hover:from-[#e5a810] hover:to-[#d97706] text-white font-bold text-lg rounded-xl transition-all shadow-[0_10px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1 group border border-white/20"
                                    >
                                    <span className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                            <Zap size={16} className="fill-white" />
                                        </div>
                                        Register Now
                                    </span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform bg-white text-[#ea580c] rounded-full p-1 w-8 h-8" />
                                    </Link>
                                    
                                    <div className="p-6 bg-white/80 backdrop-blur rounded-xl border border-[#ea580c]/20 text-center shadow-inner">
                                    <p className="text-xs text-[#888] mb-2 uppercase tracking-wide font-bold">For more information</p>
                                    <a href="mailto:connect@hkmchennai.org" className="text-xl font-bold text-[#ea580c] hover:text-[#701a1a] transition-colors font-serif">
                                        connect@hkmchennai.org
                                    </a>
                                    </div>
                                </div>
                            </div>
                       </div>
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
