"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Target, Users, Sparkles, Calendar, TrendingUp } from "lucide-react"

const causes = [
  {
    title: "Prasadam Distribution",
    description: "Providing blessed food to devotees and the community",
    goal: 50000,
    raised: 42000,
    impact: "Fed over 500 people this month",
    icon: <Heart className="text-[#ea580c]" />
  },
  {
    title: "Youth Empowerment Program",
    description: "Supporting FOLK and youth spiritual development",
    goal: 100000,
    raised: 78500,
    impact: "Mentored 50+ young devotees",
    icon: <Users className="text-[#ea580c]" />
  },
  {
    title: "Temple Maintenance",
    description: "Keeping our sacred space clean and beautiful",
    goal: 75000,
    raised: 65000,
    impact: "Completed major repairs and renovations",
    icon: <Sparkles className="text-[#ea580c]" />
  },
  {
    title: "Community Outreach",
    description: "Spreading spiritual knowledge to underserved areas",
    goal: 60000,
    raised: 48000,
    impact: "Reached 200+ people in local communities",
    icon: <Target className="text-[#ea580c]" />
  },
  {
    title: "Festival Celebrations",
    description: "Organizing sacred festivals for the community",
    goal: 80000,
    raised: 72000,
    impact: "Celebrated 8 major festivals this year",
    icon: <Calendar className="text-[#ea580c]" />
  },
  {
    title: "Spiritual Education",
    description: "Supporting classes and spiritual discourses",
    goal: 45000,
    raised: 38000,
    impact: "Conducted 50+ classes and seminars",
    icon: <TrendingUp className="text-[#ea580c]" />
  },
]

export default function RecentCauses() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Saffron Theme */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Mandala Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Target Icon */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                    <Target size={32} className="text-[#FFB81C]" />
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Recent <span className="text-[#FFB81C] font-serif italic">Causes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light leading-relaxed max-w-3xl mx-auto italic">
              "See Where Your Donations Make a Difference"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10 -mt-10">
        
        {/* Intro Card - Sacred Scroll Style (Smaller variant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-[#FFF9F0] p-1 rounded-3xl shadow-lg relative overflow-hidden"
        > 
             <div className="absolute inset-0 border-[2px] border-[#FFB81C]/30 rounded-3xl pointer-events-none"></div>
             <div className="bg-white rounded-[1.3rem] p-8 border border-[#FFB81C]/10">
                <h2 className="text-2xl font-bold mb-4 text-[#701a1a] font-serif">Our Current Initiatives</h2>
                <p className="text-[#666666] leading-relaxed text-lg">
                    Your generous donations support various causes that help us spread Krishna Consciousness and serve the
                    community. Below are our current fundraising initiatives and their impact.
                </p>
             </div>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {causes.map((cause, index) => {
            const percentage = (cause.raised / cause.goal) * 100
            const percentageRounded = Math.round(percentage)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                  <Card className="h-full border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group bg-white">
                    <CardHeader className="bg-[#FFF9F0] border-b border-[#FFB81C]/10 flex flex-row items-start justify-between gap-4 py-5">
                      <div>
                        <CardTitle className="text-[#701a1a] text-xl font-serif mb-1 group-hover:text-[#ea580c] transition-colors">{cause.title}</CardTitle>
                      </div>
                      <div className="bg-white p-2 rounded-full shadow-sm border border-[#FFB81C]/20 shrink-0">
                          {cause.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <p className="text-[#666666]">{cause.description}</p>
    
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between mb-2 items-end">
                          <span className="text-sm font-bold text-[#701a1a]">₹{cause.raised.toLocaleString()} raised</span>
                          <span className="text-xs text-[#666666] mb-0.5">
                            Goal: ₹{cause.goal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-[#FFF9F0] rounded-full h-3 border border-[#FFB81C]/20 overflow-hidden relative">
                           {/* Striped Background for bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(percentage, 100)}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-[#ea580c] to-[#FFB81C] h-full rounded-full relative"
                          >
                               <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-30"></div>
                          </motion.div>
                        </div>
                        <div className="flex justify-end mt-1">
                            <span className="text-xs font-bold text-[#ea580c]">{percentageRounded}% funded</span>
                        </div>
                      </div>
    
                      {/* Impact */}
                      <div className="bg-[#FFF9F0] rounded-xl p-4 border border-[#FFB81C]/20 flex gap-3 items-start">
                        <Sparkles size={16} className="text-[#FFB81C] mt-1 shrink-0" />
                        <p className="text-sm text-[#555]">
                          <span className="font-bold text-[#701a1a]">Impact:</span> {cause.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
