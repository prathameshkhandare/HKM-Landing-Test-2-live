"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Calendar, ArrowLeft } from "lucide-react"

interface CampaignDonationWidgetProps {
  unitName?: string
  unitPrice?: number
  minAmount?: number
  checkoutUrl?: string // Base URL for CCAvenue
}

export default function CampaignDonationWidget({
  unitName = "Sq.Ft",
  unitPrice = 5000,
  minAmount = 500,
  checkoutUrl = "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai"
}: CampaignDonationWidgetProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [quantity, setQuantity] = useState(1)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [manualMode, setManualMode] = useState(false)
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    dob: ""
  })

  const totalAmount = manualMode 
    ? (parseInt(customAmount) || 0) 
    : quantity * unitPrice

  // Grid Blocks (Visual representation, e.g., 5x4 grid = 20 blocks max shown)
  const maxBlocks = 20
  const blocks = Array.from({ length: maxBlocks }, (_, i) => i + 1)

  const handleBlockClick = (index: number) => {
    setManualMode(false)
    setQuantity(index + 1)
  }

  const handleQuantityChange = (delta: number) => {
    setManualMode(false)
    const newQty = Math.max(1, quantity + delta)
    setQuantity(newQty)
  }

  const handleManualAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualMode(true)
    setCustomAmount(e.target.value)
  }

  const handleQuickSelect = (qty: number) => {
    setManualMode(false)
    setQuantity(qty)
  }

  const handleDonateClick = () => {
    if (manualMode && (parseInt(customAmount) || 0) < minAmount) {
      alert(`Minimum donation amount is ₹${minAmount}`)
      return
    }
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct Redirect URL with params for auto-filling
    const params = new URLSearchParams()
    
    // Standard CCAvenue / Payment Gateway params
    params.append("amount", totalAmount.toString())
    params.append("billing_name", formData.fullName)
    params.append("billing_tel", formData.mobile)
    params.append("billing_email", formData.email)
    
    // Optional / Custom params (if supported by the specific form)
    if (formData.dob) {
        params.append("billing_dob", formData.dob) // or custom_field_X
    }

    // Check if the checkoutUrl already has query params
    const separator = checkoutUrl.includes("?") ? "&" : "?"
    const finalUrl = `${checkoutUrl}${separator}${params.toString()}`
    
    window.open(finalUrl, '_blank')
  }

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-2xl border-0 ring-1 ring-black/5 rounded-3xl">
      <div className="bg-[#FFF9F0] p-4 text-center border-b border-[#FFB81C]/10">
         <h3 className="font-bold text-[#4A3728] text-xl font-serif">
            {step === 1 ? "Make Your Mark in History" : "Proudly Building Heritage"}
         </h3>
         {step === 1 && (
            <p className="text-xs text-gray-500 mt-1">Select the number of {unitName} you wish to sponsor</p>
         )}
         {step === 2 && (
             <div className="inline-block px-4 py-1.5 mt-2 rounded-full bg-[#FFB81C]/10 text-[#d97706] text-xs font-bold uppercase tracking-wider border border-[#FFB81C]/20">
                Sponsoring ₹{totalAmount.toLocaleString()}
             </div>
         )}
      </div>

      <CardContent className="p-6 bg-white min-h-[500px] flex flex-col">
        {step === 1 ? (
          <div className="flex flex-col flex-1">
             {/* Grid Visualization */}
             <div className="grid grid-cols-5 gap-2 mb-6 mx-auto w-full max-w-[300px]">
                {blocks.map((block) => (
                    <div 
                        key={block}
                        onClick={() => handleBlockClick(block - 1)}
                        className={`
                            aspect-square rounded-[4px] border transition-all duration-300 cursor-pointer
                            ${!manualMode && block <= quantity 
                                ? "bg-gradient-to-br from-[#FFB81C] to-[#ea580c] border-[#ea580c] shadow-md scale-105" 
                                : "bg-white border-green-200 hover:border-[#FFB81C]"
                            }
                        `}
                    />
                ))}
             </div>
             <p className="text-[10px] text-center text-gray-400 mb-6">Click blocks to select quantity (1 Block = 1 {unitName})</p>

             {/* Quantity Control */}
             <div className="flex items-center justify-center gap-4 mb-6">
                 <Button 
                    variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-200 hover:border-[#FFB81C] hover:text-[#FFB81C]" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={manualMode}
                 >
                     <Minus size={18} />
                 </Button>
                 <div className="text-2xl font-bold min-w-[80px] text-center text-[#4A3728]">
                     {manualMode ? "-" : quantity} <span className="text-xs font-normal text-gray-500 ml-1">{unitName}</span>
                 </div>
                 <Button 
                    variant="outline" size="icon" className="rounded-full h-10 w-10 bg-green-50 border-green-100 text-green-700 hover:bg-green-100 hover:border-green-200"
                    onClick={() => handleQuantityChange(1)}
                    disabled={manualMode}
                 >
                     <Plus size={18} />
                 </Button>
             </div>

             {/* Quick Select */}
             <div className="flex justify-center gap-2 mb-8 flex-wrap">
                 {[1, 5, 10, 15, 20, 25].map(qty => (
                     <button
                        key={qty}
                        onClick={() => handleQuickSelect(qty)}
                        className={`
                            px-4 py-1.5 rounded-full text-xs font-bold border transition-all
                            ${!manualMode && quantity === qty 
                                ? "bg-[#ea580c] text-white border-[#ea580c] shadow-md" 
                                : "bg-white text-gray-600 border-gray-200 hover:border-[#FFB81C]"
                            }
                        `}
                     >
                         {qty} {unitName}
                     </button>
                 ))}
             </div>

             {/* Total Display */}
             <div className="bg-[#f0f9ff] border-2 border-dashed border-[#bae6fd] rounded-xl p-4 mb-6 text-center relative overflow-hidden">
                 <p className="text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-1">Total Contribution</p>
                 <p className="text-3xl font-extrabold text-[#0c4a6e]">
                    ₹{totalAmount.toLocaleString()}
                 </p>
             </div>

             <div className="mt-auto space-y-4">
                 <div className="relative">
                    <p className="text-[10px] text-center text-gray-400 uppercase mb-2">Or Enter Custom Amount</p>
                    <Input 
                        type="number" 
                        placeholder={`Enter amount manually (Min ₹${minAmount})`}
                        value={customAmount}
                        onChange={handleManualAmountChange}
                        className="text-center h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-[#FFB81C]"
                    />
                 </div>
                 
                 <Button 
                    onClick={handleDonateClick}
                    className="w-full h-14 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                 >
                     Donate & Build
                 </Button>
             </div>

          </div>
        ) : (
          <div className="flex flex-col flex-1 animate-in slide-in-from-right-10 duration-300">
             <div className="mb-6">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-gray-500 hover:text-[#FFB81C] -ml-2">
                    <ArrowLeft size={16} className="mr-1" /> Go Back
                </Button>
                <div className="mt-2 text-center text-[#4A3728] font-medium">Please fill in your details</div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase text-gray-500">Full Name *</Label>
                    <Input 
                        required 
                        placeholder="Enter your full name" 
                        className="h-11 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-[#FFB81C]"
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase text-gray-500">WhatsApp Number *</Label>
                    <Input 
                        required 
                        placeholder="Enter your mobile number" 
                        className="h-11 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-[#FFB81C]"
                        value={formData.mobile}
                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase text-gray-500">Email *</Label>
                    <Input 
                        required 
                        type="email"
                        placeholder="Enter your email" 
                        className="h-11 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-[#FFB81C]"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase text-gray-500">Date of Birth (Optional)</Label>
                    <div className="relative">
                        <Input 
                            placeholder="dd-mm-yyyy" 
                            className="h-11 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-[#FFB81C]"
                            value={formData.dob}
                            onChange={e => setFormData({...formData, dob: e.target.value})}
                        />
                        <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
                    </div>
                    <p className="text-[10px] text-gray-400 pt-1">A special Sankalpa will be performed on your birthday.</p>
                </div>

                <div className="mt-auto pt-6">
                    <Button 
                        type="submit"
                        className="w-full h-14 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        Continue
                    </Button>
                </div>
             </form>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
