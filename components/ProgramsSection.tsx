import { Sparkles, ShieldCheck, Wallet, Leaf } from "lucide-react"

export default function ProgramsSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-white pattern-lotus">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Gita Life */}
          <div className="group rounded-2xl bg-white ring-1 ring-blue-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:ring-[#1B7CB8] hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B7CB8]/10 ring-1 ring-[#1B7CB8]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[#1B7CB8]/20">
              <Sparkles className="w-6 h-6 text-[#1B7CB8] group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors duration-300">Gita Life</h3>
            <p className="text-[#666666] leading-relaxed group-hover:text-[#3A3A3A] transition-colors duration-300">Bhagavad Gita Sessions on Sunday evening, 5:00 pm to 7:00 pm, at Chennai.</p>
          </div>

          {/* ICVK (For Kids) */}
          <div className="group rounded-2xl bg-white ring-1 ring-blue-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:ring-cyan-400 hover:bg-gradient-to-br hover:from-white hover:to-cyan-50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFB81C]/10 ring-1 ring-[#FFB81C]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[#FFB81C]/20">
              <ShieldCheck className="w-6 h-6 text-[#FFB81C] group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A] group-hover:text-[#FFB81C] transition-colors duration-300">ICVK (For Kids)</h3>
            <p className="text-[#666666] leading-relaxed group-hover:text-[#3A3A3A] transition-colors duration-300">India Culture and values for kids - ICVK offers a spiritual dimension.</p>
          </div>

          {/* FOLK (For Youth) */}
          <div className="group rounded-2xl bg-white ring-1 ring-blue-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:ring-sky-500 hover:bg-gradient-to-br hover:from-white hover:to-sky-50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8725C]/10 ring-1 ring-[#E8725C]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[#E8725C]/20">
              <Wallet className="w-6 h-6 text-[#E8725C] group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A] group-hover:text-[#E8725C] transition-colors duration-300">FOLK (For Youth)</h3>
            <p className="text-[#666666] leading-relaxed group-hover:text-[#3A3A3A] transition-colors duration-300">Youth wing of the Hare Krishna Movement, Chennai empowering youth spiritually.</p>
          </div>

          {/* Srila Prabhupada Ashray */}
          <div className="group rounded-2xl bg-white ring-1 ring-blue-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out hover:ring-[#1B7CB8] hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B7CB8]/10 ring-1 ring-[#1B7CB8]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[#1B7CB8]/20">
              <Leaf className="w-6 h-6 text-[#1B7CB8] group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors duration-300">Srila Prabhupada Ashray</h3>
            <p className="text-[#666666] leading-relaxed group-hover:text-[#3A3A3A] transition-colors duration-300">HKM Chennai provides a great opportunity to receive shelter of a pure devotee.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
