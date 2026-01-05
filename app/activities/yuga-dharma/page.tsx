"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Music, BookOpen, Heart, Sparkles } from "lucide-react"

export default function YugaDharmaPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans">
      <NavbarDemo />

      {/* Hero Section - Devotional & Musical (Compact) */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Musical Soundwave Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
              {/* Musical Icon */}
              <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                      <Music size={32} className="text-[#FFB81C]" />
                  </div>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                Yuga <span className="text-[#FFB81C] font-serif italic">Dharma</span>
              </h1>
              
              {/* Ornamental Divider */}
              <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                  <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
              </div>

              <p className="text-xl md:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-4xl mx-auto italic">
                "Sankirtana Yajna - The Sole Hope for World Peace and Prosperity"
              </p>
          </motion.div>
        </div>
      </section>

      {/* The Necessity of Chanting - Four Yugas Timeline */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative cursor-default">
         <div className="text-center mb-16">
             <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Time & Tradition</span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] mb-6 font-serif">The Sole Hope for <span className="text-[#FFB81C]">World Peace</span></h2>
             <p className="text-lg text-[#5a5a5a] max-w-3xl mx-auto leading-relaxed">
               The Vedic scriptures prescribe a specific method for self-realization in each age. What was achievable in previous ages by meditation or sacrifice is now only possible through <strong>Sankirtana Yajna</strong>.
             </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Satya Yuga */}
             <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-300 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group h-full">
                 <div className="w-48 h-48 relative mb-6 rounded-2xl overflow-hidden border-4 border-[#FFB81C]/30 shadow-xl group-hover:scale-105 transition-transform duration-500 bg-orange-50">
                     <Image src="/activities/yuga-dharma/satya_yuga.png" alt="Satya Yuga Meditation" fill className="object-cover" />
                 </div>
                 <h3 className="text-xl font-bold text-[#701a1a] mb-2">Satya Yuga</h3>
                 <p className="text-sm text-[#ea580c] font-bold mb-3 uppercase tracking-wider">Meditation</p>
                 <p className="text-[#5a5a5a] text-sm leading-relaxed">
                   People had long durations of life, were peaceful and religious, and could practice meditation (Dhyana) for thousands of years to achieve perfection.
                 </p>
             </div>

             {/* Treta Yuga */}
             <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-300 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group h-full">
                 <div className="w-48 h-48 relative mb-6 rounded-2xl overflow-hidden border-4 border-[#FFB81C]/30 shadow-xl group-hover:scale-105 transition-transform duration-500 bg-orange-50">
                     <Image src="/activities/yuga-dharma/treta_yuga.png" alt="Treta Yuga Yajna" fill className="object-cover" />
                 </div>
                 <h3 className="text-xl font-bold text-[#701a1a] mb-2">Treta Yuga</h3>
                 <p className="text-sm text-[#ea580c] font-bold mb-3 uppercase tracking-wider">Vedic Sacrifices</p>
                 <p className="text-[#5a5a5a] text-sm leading-relaxed">
                   People performed elaborate Vedic sacrifices (Yajnas). Qualified brahmanas were expert in chanting mantras and conducting strict rituals.
                 </p>
             </div>

             {/* Dwapara Yuga */}
             <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-300 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group h-full">
                 <div className="w-48 h-48 relative mb-6 rounded-2xl overflow-hidden border-4 border-[#FFB81C]/30 shadow-xl group-hover:scale-105 transition-transform duration-500 bg-orange-50">
                     <Image src="/activities/yuga-dharma/dwapara_yuga.png" alt="Dwapara Yuga Worship" fill className="object-cover" />
                 </div>
                 <h3 className="text-xl font-bold text-[#701a1a] mb-2">Dwapara Yuga</h3>
                 <p className="text-sm text-[#ea580c] font-bold mb-3 uppercase tracking-wider">Deity Worship</p>
                 <p className="text-[#5a5a5a] text-sm leading-relaxed">
                   People could perform elaborate Deity worship (Arcana) in temples, adhering to strict rules of cleanliness and opulence.
                 </p>
             </div>

             {/* Kali Yuga - Highlighted */}
             <div className="bg-[#701a1a] p-6 rounded-xl shadow-2xl border-t-4 border-[#FFB81C] transform scale-105 relative overflow-hidden group flex flex-col items-center text-center h-full">
                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10"></div>
                 <div className="relative z-10 w-full flex flex-col items-center">
                     <div className="w-48 h-48 relative mb-6 rounded-2xl overflow-hidden border-4 border-[#FFB81C] shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-black/20">
                         <Image src="/activities/yuga-dharma/kali_yuga.png" alt="Kali Yuga Sankirtana" fill className="object-cover" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Kali Yuga</h3>
                     <p className="text-sm text-[#FFB81C] font-bold mb-3 uppercase tracking-wider">Sankirtana</p>
                     <p className="text-orange-100 text-sm leading-relaxed">
                       In this age of quarrel, people are short-lived and disturbed. The <strong>only</strong> way for spiritual realization is <strong>Sankirtana Yajna</strong>—chanting the holy names of the Lord.
                     </p>
                 </div>
             </div>
         </div>
      </section>



      {/* The Golden Avatar Section */}
      <section className="py-24 relative bg-gradient-to-r from-[#FFB81C] to-[#ea580c] overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 animate-spin-slow-reverse"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 flex justify-center">
                      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-white/10 backdrop-blur-sm p-4">
                          <Image src="/activities/yuga-dharma/lord_chaitanya.png" alt="Lord Chaitanya Mahaprabhu" fill className="object-contain p-4" />
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                      <div className="inline-block px-4 py-1 bg-white/20 rounded-full backdrop-blur-md border border-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-2 text-white shadow-sm">
                          500 Years Ago
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight drop-shadow-lg text-[#2D0A0A]">
                          The Golden <br/> <span className="text-white italic text-shadow-glow">Avatar</span>
                      </h2>
                      <p className="text-xl font-medium leading-relaxed text-white drop-shadow-md">
                          "Lord Chaitanya Mahaprabhu appeared to propagate the movement of Sankirtana. He is Lord Krishna Himself, assuming the mood of a devotee to teach us how to love God."
                      </p>
                      <p className="text-lg leading-relaxed font-medium text-white/90 drop-shadow-sm">
                          He pioneered a spiritual revolution by spreading the chanting of the holy names throughout India, declaring it the only means of deliverance in this age.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Transcendental Wisdom - Potency & Rules - Glorified */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-[#FFF9F0] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB81C]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-4">Scriptural Truths</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] mb-6 font-serif">Wisdom & <span className="text-[#ea580c] italic">Potency</span></h2>
              <p className="text-lg text-[#5a5a5a] max-w-3xl mx-auto font-medium">Essential instructions for the practice of Sankirtana Yajna.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Universal Application */}
              <div className="group bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg border border-[#ea580c]/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea580c]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-300">
                          <BookOpen size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Universal Path</h3>
                      <p className="text-[#5a5a5a] leading-relaxed font-medium">
                          "There are no stringent rules for chanting the Hare Krishna maha mantra. Any person belonging to any country, religion, or language can chant at any time under all circumstances."
                      </p>
                  </div>
              </div>

              {/* The Fire Analogy */}
              <div className="group bg-gradient-to-br from-white to-yellow-50 p-8 rounded-2xl shadow-lg border border-[#FFB81C]/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB81C]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#FFB81C] group-hover:bg-[#FFB81C] group-hover:text-white transition-colors duration-300">
                          <Sparkles size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">The Fire Analogy</h3>
                      <p className="text-[#5a5a5a] leading-relaxed font-medium">
                          "The holy name is compared to a fire. Whether one is scientifically conversant with the properties of fire or knows nothing about it, if one puts his hand in fire, he will be burnt."
                      </p>
                  </div>
              </div>

              {/* The Warning - Milk & Serpent */}
              <div className="group bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg border border-[#701a1a]/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#701a1a]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#701a1a] group-hover:bg-[#701a1a] group-hover:text-white transition-colors duration-300">
                          <Quote size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">A Stern Warning</h3>
                      <p className="text-[#5a5a5a] leading-relaxed italic font-medium">
                          "Chanting should be heard from the lips of a pure devotee. As far as possible, chanting from the lips of non-devotees should be avoided. <span className="text-[#b91c1c] font-bold">Milk touched by the lips of a serpent has poisonous effects.</span>"
                      </p>
                  </div>
              </div>

              {/* The Power of Krishna's Name */}
              <div className="group bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-[#b45309]/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#b45309]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#b45309] group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
                          <Music size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Ultimate Potency</h3>
                      <p className="text-[#5a5a5a] leading-relaxed font-medium">
                          It is stated in the <strong>Brahmanda Purana</strong> that the pious results derived from chanting the thousand holy names of Vishnu <span className="font-bold text-[#ea580c]">thrice</span> can be attained by only <span className="font-bold text-[#ea580c]">one</span> repetition of the holy name of Krishna.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[#FFF9F0] border-y-2 border-[#FFB81C]/20">
         {/* Background Patterns */}
         <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.08] bg-repeat"></div>
         
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Typography & Context */}
                <div className="lg:col-span-5 text-center lg:text-left space-y-8">
                    <div>
                        <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block flex items-center justify-center lg:justify-start gap-2">
                             <div className="w-8 h-0.5 bg-[#ea580c]"></div> Digital Darshan
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#701a1a] font-serif leading-tight">
                            Experience <br/> the <span className="text-[#FFB81C] drop-shadow-sm italic">Ecstasy</span>
                        </h2>
                    </div>

                    <div className="p-6 bg-white rounded-xl border-l-4 border-[#ea580c] shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Quote size={60} className="text-[#701a1a]" />
                        </div>
                        <p className="text-xl text-[#5a5a5a] italic font-serif leading-relaxed relative z-10">
                           "The spiritual vibration of Hare Krishna maha mantra acts like a medicine to clean our hearts and destroy our sinful propensities."
                        </p>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-4 text-[#701a1a]/80 font-medium text-sm tracking-wide">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#FFB81C] to-[#ea580c] flex items-center justify-center text-white text-xs">
                                    <Music size={14} />
                                </div>
                            ))}
                        </div>
                        <span>Join thousands chanting daily</span>
                    </div>
                </div>

                {/* Right Column: The Video Frame */}
                <div className="lg:col-span-7 relative">
                     {/* Decorative Elements behind video */}
                     <div className="absolute -inset-4 bg-[#FFB81C]/20 rounded-2xl transform rotate-2"></div>
                     <div className="absolute -inset-4 bg-[#701a1a]/5 rounded-2xl transform -rotate-1"></div>

                     <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 group">
                        <div className="aspect-video bg-black relative">
                           <iframe 
                             width="100%" 
                             height="100%" 
                             src="https://www.youtube.com/embed/BZiZtt80gyQ" 
                             title="Harinama Sankirtana Video"
                             frameBorder="0" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen
                             className="absolute inset-0 w-full h-full"
                           ></iframe>
                        </div>
                     </div>
                     
                     {/* Floral Corner Ornament */}
                     <div className="absolute -bottom-8 -right-8 text-[#FFB81C] opacity-40 hidden lg:block">
                        <Sparkles size={100} />
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* Chant and Make Your Life Sublime - Glorified Redesign */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] to-[#fff1e0]">
         {/* Divine Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB81C]/20 via-transparent to-transparent pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
             <div className="text-center mb-16 space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase">The Ultimate Goal</span>
                <h2 className="text-5xl md:text-6xl font-bold text-[#701a1a] font-serif leading-tight">Chant and Make Your Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#FFB81C]">Sublime</span></h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] mx-auto rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 {/* Left: Enriched Text */}
                 <div className="space-y-8 text-lg text-[#3d1c1c] leading-relaxed font-medium">
                    <p className="border-l-4 border-[#ea580c] pl-6 py-1">
                      The Vedas recommend that in the present age the most effective means for achieving self-realization is to always hear about, glorify, and remember the all-good Supreme Lord, who is known by many names.
                    </p>
                    <p>
                       One of these names is <span className="text-[#ea580c] font-bold">“Krishna”</span> which means “He who is all-attractive,” another is <span className="text-[#ea580c] font-bold">“Rama”</span> which means “He who is the reservoir of all pleasure,” and <span className="text-[#ea580c] font-bold">“Hare”</span> indicates the Lord’s inconceivable energy.
                    </p>
                    <p className="bg-white/60 p-6 rounded-xl border border-[#FFB81C]/30 shadow-sm">
                       This sublime chanting puts us directly in touch with the Supreme Lord through the sound vibration of His holy names and gradually awakens us to our original relationship with God.
                    </p>
                 </div>

                 {/* Right: The Glorified Mantra Card */}
                 <div className="relative group">
                     {/* Spinning Chakra Effect behind */}
                     <div className="absolute inset-0 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000 animate-pulse"></div>
                     
                     <div className="relative bg-white p-10 rounded-2xl shadow-2xl border-2 border-[#FFB81C] text-center space-y-8 transform hover:scale-[1.02] transition-transform duration-500">
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FFF9F0] border-2 border-[#FFB81C] rounded-full flex items-center justify-center text-[#ea580c] shadow-lg">
                             <Sparkles size={24} className="animate-spin-slow" />
                         </div>
                         
                         <h3 className="text-sm font-bold tracking-[0.2em] text-[#ea580c] uppercase border-b border-[#ea580c]/20 pb-4">The Great Mantra</h3>
                         
                         <div className="font-serif text-3xl md:text-4xl text-[#701a1a] leading-relaxed space-y-2 font-bold drop-shadow-sm">
                             <p>Hare Krishna Hare Krishna</p>
                             <p>Krishna Krishna Hare Hare</p>
                             <p>Hare Rama Hare Rama</p>
                             <p>Rama Rama Hare Hare</p>
                         </div>
                         
                         <div className="pt-4 text-sm text-[#5a5a5a] font-medium italic">
                             "Dances on the tongue of the chanter..."
                         </div>
                     </div>
                 </div>
             </div>

             {/* Bottom: Fire Analogy & Icons */}
             <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#FFB81C]/20">
                 <div className="grid grid-cols-1 md:grid-cols-2">
                     <div className="p-8 md:p-12 bg-[#701a1a] text-white flex flex-col justify-center">
                         <Quote className="text-[#FFB81C] mb-6 opacity-50" size={48} />
                         <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white">
                            "The holy name is compared to a fire. Whether one is scientifically conversant with all the properties of fire or knows nothing about it, if one puts his hand in fire, he will be burnt."
                         </p>
                     </div>
                     <div className="p-8 md:p-12 bg-orange-50 grid grid-cols-2 gap-6 items-center">
                         <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                             <Heart className="mx-auto text-[#ea580c] mb-2" size={28} />
                             <div className="font-bold text-[#2d0a0a]">Cleanses</div>
                             <div className="text-xs text-gray-500">The Heart</div>
                         </div>
                         <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                             <Sparkles className="mx-auto text-[#ea580c] mb-2" size={28} />
                             <div className="font-bold text-[#2d0a0a]">Awakens</div>
                             <div className="text-xs text-gray-500">The Soul</div>
                         </div>
                         <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow col-span-2">
                             <Music className="mx-auto text-[#ea580c] mb-2" size={28} />
                             <div className="font-bold text-[#2d0a0a]">Revives</div>
                             <div className="text-xs text-gray-500">Original Consciousness</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Krishna Consciousness Section - Preserved & Polished */}
      <section className="py-24 relative bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                  <div className="w-full md:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#FFF9F0] shadow-[#ea580c]/20 transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                          <Image src="/activities/yuga-dharma/yashoda_krishna.png" alt="Yashoda and Krishna" width={600} height={400} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                          <div className="absolute bottom-0 w-full p-8 text-center">
                              <p className="text-white text-xl font-serif italic font-medium leading-relaxed">"One who has developed attachment to Krishna is Krishna conscious."</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ea580c]/10 text-[#ea580c] rounded-full text-xs font-bold uppercase tracking-wider border border-[#ea580c]/20">
                          <Sparkles size={14} className="fill-[#ea580c]"/> The Original Energy
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif leading-tight">Krishna <br/>Consciousness</h2>
                      <div className="space-y-6 text-lg text-[#3d1c1c] leading-relaxed font-medium">
                          <p>
                              <strong>Krishna consciousness</strong> is not an artificial imposition on the mind; this consciousness is the original energy of the living entity. When we hear the transcendental vibration, this consciousness is revived.
                          </p>
                          <div className="border-l-4 border-[#FFB81C] pl-6 py-2 italic text-[#5a5a5a] bg-gray-50/50 rounded-r-lg">
                             "By practical experience also, one can perceive that by chanting this maha-mantra, or the Great Chanting for Deliverance, one can at once feel a transcendental ecstasy coming through from the spiritual stratum."
                          </div>
                          <p>
                              And when one is factually on the plane of spiritual understanding – surpassing the stages of senses, mind, and intelligence – one is situated on the transcendental plane.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* The Process - Vibrant Timeline Redesign */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#ffedd5] to-[#FFF9F0]">
         {/* Divine Background Elements */}
         {/* Divine Background Elements - Glorified Vectors */}
         <div className="absolute inset-0 bg-[url('/assets/5BlackWhiteMandalaPattern3.jpg')] opacity-[0.03] bg-repeat bg-center"></div>
         
         {/* Sacred Geometry Rings (Vectors) */}
         <div className="absolute top-0 left-0 w-[800px] h-[800px] border-[2px] border-[#ea580c]/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-[600px] h-[600px] border-[40px] border-[#ea580c]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
         
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] border-[2px] border-[#FFB81C]/20 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border-[60px] border-[#FFB81C]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
         
         {/* Floating Glows */}
         <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#ea580c]/10 rounded-full blur-2xl animate-pulse"></div>
         <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-[#FFB81C]/10 rounded-full blur-2xl animate-pulse delay-500"></div>

         <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FFB81C] to-transparent md:block hidden"></div>
         
         <div className="max-w-6xl mx-auto px-4 relative z-10">
             <div className="text-center mb-20">
                 <h2 className="text-5xl font-bold text-[#701a1a] font-serif mb-4">The Process</h2>
                 <p className="text-xl text-[#ea580c] font-medium tracking-wide">Simple. Sublime. Scientific.</p>
             </div>
             
             <div className="space-y-16">
                 {/* Step 1: Practical Experience */}
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                     <div className="w-full md:w-1/2 text-right order-2 md:order-1">
                         <div className="relative bg-gradient-to-br from-white to-[#fff8e1] p-8 rounded-2xl shadow-xl border border-[#FFB81C]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,184,28,0.3)] transition-all duration-300 group overflow-hidden">
                             <div className="absolute -right-6 -bottom-6 opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500">
                                 <Heart size={120} className="text-[#ea580c]" />
                             </div>
                             <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Practical Experience</h3>
                             <p className="text-[#5a5a5a] leading-relaxed font-medium relative z-10">
                                We have seen this practically. Even a child can take part in the chanting, or even a dog can take part in it. It takes a little more time for the entangled, but even a materially engrossed man is raised to the spiritual platform very quickly.
                             </p>
                         </div>
                     </div>
                     <div className="relative order-1 md:order-2 flex justify-center">
                         <div className="absolute inset-0 bg-[#FFB81C] blur-xl opacity-40 animate-pulse"></div>
                         <div className="w-16 h-16 bg-gradient-to-br from-[#FFB81C] to-[#ea580c] rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white font-bold text-2xl relative z-20">1</div>
                     </div>
                     <div className="w-full md:w-1/2 md:order-3"></div>
                 </div>

                 {/* Step 2: Marginal Energy */}
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                     <div className="w-full md:w-1/2 md:order-1"></div>
                     <div className="relative md:order-2 flex justify-center">
                         <div className="absolute inset-0 bg-[#FFB81C] blur-xl opacity-40 animate-pulse delay-300"></div>
                         <div className="w-16 h-16 bg-gradient-to-br from-[#FFB81C] to-[#ea580c] rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white font-bold text-2xl relative z-20">2</div>
                     </div>
                     <div className="w-full md:w-1/2 order-2 md:order-3">
                         <div className="relative bg-gradient-to-br from-white to-[#fff8e1] p-8 rounded-2xl shadow-xl border border-[#FFB81C]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,184,28,0.3)] transition-all duration-300 group overflow-hidden">
                             <div className="absolute -right-6 -bottom-6 opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500">
                                 <Sparkles size={120} className="text-[#ea580c]" />
                             </div>
                             <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Marginal Energy</h3>
                             <p className="text-[#5a5a5a] leading-relaxed font-medium relative z-10">
                                We (living entities) are <strong>marginal energy</strong>. When in contact with material energy (Maya), we suffer. But when in contact with <strong>Hara</strong> (Superior Energy), we are established in our happy, normal condition.
                             </p>
                         </div>
                     </div>
                 </div>

                 {/* Step 3: The Genuine Cry */}
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                     <div className="w-full md:w-1/2 text-right order-2 md:order-1">
                         <div className="relative bg-gradient-to-br from-[#701a1a] to-[#991b1b] p-8 rounded-2xl shadow-xl border border-[#FFB81C]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(112,26,26,0.6)] transition-all duration-300 transform scale-105 overflow-hidden group">
                             <div className="absolute -right-6 -bottom-6 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-500">
                                 <Quote size={120} className="text-white" />
                             </div>
                             <div className="absolute top-0 right-0 p-4 opacity-20"><Quote size={40} className="text-white" /></div>
                             <h3 className="text-2xl font-bold text-[#FFB81C] mb-4 font-serif relative z-10">"The Genuine Cry"</h3>
                             <p className="leading-relaxed opacity-90 italic text-lg text-white font-medium relative z-10">
                                "This chanting is exactly like the genuine cry of a child for its mother. Mother Hara helps the devotee achieve the grace of the supreme father, Hari or Krishna."
                             </p>
                         </div>
                     </div>
                     <div className="relative order-1 md:order-2 flex justify-center">
                         <div className="absolute inset-0 bg-[#701a1a] blur-xl opacity-40 animate-pulse delay-700"></div>
                         <div className="w-16 h-16 bg-gradient-to-br from-[#701a1a] to-[#991b1b] rounded-full border-4 border-[#FFB81C] shadow-2xl flex items-center justify-center text-[#FFB81C] font-bold text-2xl relative z-20">3</div>
                     </div>
                     <div className="w-full md:w-1/2 md:order-3"></div>
                 </div>
             </div>

             {/* Conclusion Banner - Sacred Saffron Scroll Redesign */}
             <div className="max-w-5xl mx-auto mt-24 relative z-10 font-serif">
                 <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                     {/* Outer Border Decoration */}
                     <div className="absolute inset-0 border-[6px] border-[#ea580c]/20 rounded-[2.5rem] pointer-events-none"></div>
                     <div className="absolute inset-3 border-[2px] border-[#ea580c]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

                     <div className="bg-white rounded-[2rem] p-8 md:p-14 relative overflow-hidden text-center">
                         {/* Decorative Background for the Card */}
                         <div className="absolute inset-0 bg-[url('/assets/5BlackWhiteMandalaPattern3.jpg')] opacity-[0.03] bg-repeat"></div>
                         
                         {/* Header Icon */}
                         <div className="flex justify-center mb-6">
                             <div className="w-16 h-16 bg-[#ea580c]/10 rounded-full flex items-center justify-center border-2 border-[#ea580c]">
                                 <Sparkles className="text-[#ea580c]" size={28} />
                             </div>
                         </div>

                         <h3 className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-10 relative z-10 font-sans">
                             — The Supreme Instruction —
                         </h3>
                         
                         {/* The Saffron Mantra Plaque */}
                         <div className="relative bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] p-1 rounded-2xl shadow-xl max-w-4xl mx-auto group">
                             <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                             <div className="relative border-2 border-[#fcd34d]/50 rounded-xl bg-[#ea580c] p-8 md:p-12 overflow-hidden">
                                 {/* Inner Glow */}
                                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFB81C]/20 to-transparent"></div>
                                 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
                                      <div className="text-center md:text-right md:border-r border-[#fcd34d]/30 md:pr-8">
                                          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed drop-shadow-md tracking-wide">
                                              HARE KRISHNA <br/> HARE KRISHNA
                                          </p>
                                          <p className="text-xl md:text-2xl font-medium text-[#fff7ed] mt-2">
                                              KRISHNA KRISHNA <br/> HARE HARE
                                          </p>
                                      </div>
                                      <div className="text-center md:text-left md:pl-8">
                                          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed drop-shadow-md tracking-wide">
                                              HARE RAMA <br/> HARE RAMA
                                          </p>
                                          <p className="text-xl md:text-2xl font-medium text-[#fff7ed] mt-2">
                                              RAMA RAMA <br/> HARE HARE
                                          </p>
                                      </div>
                                 </div>
                             </div>
                         </div>

                         <div className="mt-10 max-w-2xl mx-auto">
                            <p className="text-[#701a1a] text-lg italic font-medium leading-relaxed">
                               "In this Age of Kali there is no other means, no other means, no other means for self-realization than chanting the holy name..."
                            </p>
                            <div className="mt-3 text-sm font-bold text-[#ea580c] uppercase tracking-widest">- Brihan-naradiya Purana</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Srila Prabhupada Section - Royal Classic */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#701a1a]/10 rounded-full text-[#701a1a] font-bold text-sm tracking-widest uppercase mb-4">
                      <Quote size={14} /> Founder-Acharya
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif">Srila Prabhupada on <span className="text-[#ea580c]">Chanting</span></h2>
                  
                  <div className="relative p-10 bg-[#FFF9F0] rounded-lg border border-[#FFB81C]/30 shadow-xl">
                     <Quote className="absolute top-0 left-0 -mt-6 ml-6 text-[#FFB81C] fill-[#FFB81C]" size={60} />
                     <p className="relative z-10 text-xl text-[#5a5a5a] italic leading-relaxed mb-6 font-serif">
                       "The transcendental vibration established by the chanting of Hare Krishna Hare Krishna Krishna Krishna Hare Hare, Hare Rama Hare Rama Rama Rama Hare Hare is the sublime method of reviving our Krishna consciousness. As living spiritual souls we are all originally Krishna conscious entities..."
                     </p>
                     <div className="flex items-center gap-4">
                         <div className="h-[2px] w-12 bg-[#701a1a]"></div>
                         <p className="font-bold text-[#701a1a] uppercase tracking-wider text-sm">- Srila Prabhupada</p>
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 relative h-[500px] w-full">
                  <div className="absolute inset-0 border-2 border-[#FFB81C] transform rotate-3 rounded-lg"></div>
                  <div className="absolute inset-0 border-2 border-[#701a1a] transform -rotate-2 rounded-lg bg-[#2D0A0A]"></div>
                  <div className="absolute inset-2 rounded-lg overflow-hidden shadow-2xl">
                      <Image 
                        src="/activities/yuga-dharma/srila-prabhupada-chanting.png" 
                        alt="Srila Prabhupada Chanting" 
                        fill 
                        className="object-cover hover:scale-110 transition-transform duration-700" 
                      />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Mantra Section - "Sacred Golden Scroll" Redesign */}
      <section className="py-20 relative overflow-hidden bg-[#FFF9F0]">
         {/* Decorative Background */}
         <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5"></div>
         <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FFF9F0] to-transparent z-10"></div>
         <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FFF9F0] to-transparent z-10"></div>

         <div className="max-w-4xl mx-auto px-4 relative z-20">
             {/* The "Golden Frame" Container */}
             <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-[#FFB81C]/30 transform hover:scale-[1.01] transition-transform duration-700 mt-8">
                 {/* Internal Ornamental Border */}
                 <div className="absolute inset-2 border-2 border-[#701a1a]/10 rounded-xl pointer-events-none"></div>
                 <div className="absolute inset-3 border border-[#701a1a]/5 rounded-lg pointer-events-none"></div>

                 {/* Top Pill Ornament - Perfectly Centered */}
                 <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#FFF9F0] px-8 py-3 rounded-full border-2 border-[#FFB81C] shadow-lg z-30 flex items-center justify-center min-w-[250px]">
                     <span className="text-[#701a1a] font-serif font-bold text-xl flex items-center gap-3 whitespace-nowrap">
                        <Sparkles size={18} className="text-[#ea580c] animate-pulse" /> 
                        The Maha Mantra 
                        <Sparkles size={18} className="text-[#ea580c] animate-pulse" />
                     </span>
                 </div>

                 <div className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-14 pt-16">
                     {/* Mantra Image with Glow */}
                     <div className="relative group w-full md:w-1/2 flex justify-center">
                         <div className="absolute inset-0 bg-[#FFB81C] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full animate-pulse-slow"></div>
                         <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                             <Image 
                                src="/activities/yuga-dharma/mantra-card.png" 
                                alt="Hare Krishna Maha Mantra" 
                                width={450} 
                                height={280} 
                                className="object-contain drop-shadow-2xl"
                             />
                         </div>
                     </div>

                     {/* Text Content - Elegant & Classic */}
                     <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                         <h3 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif leading-tight">
                             The Great Chant for <br/><span className="text-[#ea580c] italic">Deliverance</span>
                         </h3>
                         
                         <div className="space-y-6">
                             <p className="text-[#5a5a5a] text-lg leading-relaxed font-serif italic border-l-4 border-[#FFB81C] pl-6 py-2 bg-[#FFB81C]/5 rounded-r-lg">
                               "These sixteen names composed of thirty-two syllables are the only means to counteract the evil effects of Kali-yuga."
                             </p>
                             
                             <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                                 <div className="h-px w-12 bg-[#ea580c]/50"></div>
                                 <span className="text-xs font-bold text-[#ea580c] uppercase tracking-widest">Kalisantarana Upanishad</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Scriptural References - Light, Ornate & Outline Style */}
      <section className="py-24 relative overflow-hidden bg-[#FFF9F0]">
         {/* Background Texture - More Design as requested */}
         <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.15] bg-repeat"></div>
         
         {/* Decorative Side Elements */}
         <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FFB81C]/10 to-transparent"></div>
         <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FFB81C]/10 to-transparent"></div>
         
         {/* Floating Elements (Subtle) */}
         <div className="absolute top-10 left-10 opacity-30 animate-spin-slow">
            <Sparkles className="text-[#ea580c]" size={40} />
         </div>
         <div className="absolute bottom-10 right-10 opacity-30 animate-bounce-slow">
            <Music className="text-[#ea580c]" size={40} />
         </div>

         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                  <span className="text-[#ea580c] font-bold tracking-[0.3em] text-sm uppercase mb-3 block">Vedic Wisdom</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] mb-6 font-serif text-center">
                    Scriptural References
                  </h2>
                  <div className="flex justify-center items-center gap-4">
                     <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#ea580c]"></div>
                     <BookOpen className="text-[#ea580c]" size={28} />
                     <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#ea580c]"></div>
                  </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   text: "All the grievous sins are removed for one who worships Lord Hari, the Lord of all lords, and chants the holy name, the Maha-mantra.", 
                   source: "Padma Purana, 3.50.6" 
                 },
                 { 
                   text: "When the sixteen names and thirty-two syllables of the Hare Krishna mantra are loudly vibrated, Krishna dances on one’s tongue.", 
                   source: "Stava-mala-vidyabhusana-bhasya" 
                 },
                 { 
                   text: "One who chants the holy name of the Lord is immediately freed from the reactions of unlimited sins, even if he chants indirectly, jokingly, or even neglectfully.", 
                   source: "Srimad-Bhagavatam, 6.2.14" 
                 },
                 { 
                    text: "The nama sankirtana (public chanting) of Hare Krishna maha-mantra delivers a complete revelation of all of spiritual reality.",
                    source: "Brahmanda Purana 6.59-60"
                 },
                 {
                    text: "My dear King, although Kali-yuga is an ocean of faults, there is still one good quality about this age: Simply by chanting the Hare Krsna maha-mantra, one can become free from material bondage.",
                    source: "Srimad Bhagavatam – 12.3.51"
                 }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, translateY: -5 }}
                    className="relative group bg-gradient-to-br from-[#fff7ed] to-white border-2 border-[#FFB81C] p-8 rounded-xl shadow-[0_5px_20px_rgba(234,88,12,0.1)] hover:shadow-[0_10px_30px_rgba(234,88,12,0.2)] transition-all duration-300 overflow-hidden"
                 >
                    {/* Outline / Corner Design */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#ea580c]/20 rounded-tr-xl group-hover:border-[#ea580c]/50 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#ea580c]/20 rounded-bl-xl group-hover:border-[#ea580c]/50 transition-colors"></div>
                    
                    {/* Colorful Background Tint on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB81C]/5 to-[#ea580c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Background Icon (Outline style) */}
                    <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform rotate-12">
                        <Quote size={120} className="text-[#701a1a]" />
                    </div>
                    
                    <div className="relative z-10">
                       <div className="mb-4 flex justify-between items-start">
                           <Quote className="text-[#ea580c] fill-[#ea580c]/10 w-8 h-8" />
                           <div className="w-2 h-2 rounded-full bg-[#ea580c]/50 group-hover:bg-[#ea580c] transition-colors"></div>
                       </div>

                       <p className="text-lg leading-relaxed mb-6 font-medium text-[#5a5a5a] italic font-serif group-hover:text-[#701a1a] transition-colors">
                           "{item.text}"
                       </p>
                       
                       <div className="h-px w-1/3 bg-[#ea580c]/30 mb-4 group-hover:w-full transition-all duration-500"></div>
                       
                       <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div>
                           <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest">{item.source}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}

               {/* Chanting Illustration - Cartoon Boy Free Standing */}
               <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative flex flex-col items-center justify-center p-4"
                >
                    <div className="text-center group cursor-pointer">
                        <div className="relative w-64 h-64 mx-auto mb-4 transform group-hover:scale-105 transition-transform duration-500">
                            {/* Pure Image - No Glows, No Shadows as requested */}
                            <Image 
                                src="/activities/yuga-dharma/cartoon_boy_chanting_vector.png" 
                                alt="Boy Chanting on Beads" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[#701a1a] font-serif font-bold italic text-xl tracking-wide group-hover:text-[#ea580c] transition-colors">"Always Chant Hare Krishna"</p>
                    </div>
               </motion.div>
            </div>
         </div>
      </section>

      <FooterSection />
    </div>
  )
}
