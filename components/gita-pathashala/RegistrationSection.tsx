'use client';

import { useState } from 'react';

export default function RegistrationSection() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    childClass: '',
    schoolName: '',
    parentName: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/gita-pathashala-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          child_name: formData.childName,
          child_age: parseInt(formData.childAge),
          child_class: formData.childClass,
          school_name: formData.schoolName,
          parent_name: formData.parentName,
          mobile: formData.mobile,
          email: formData.email,
          address: formData.address
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit registration');
      }
      
      setSubmitted(true);
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="bg-[#FFF9F0] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-white p-12 sm:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100">
          <div className="text-6xl mb-6">🙏</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Registration Received!
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
          <p className="text-gray-700 font-sans text-xl leading-relaxed mb-10">
            Thank you for registering your child for Gītā Pathashālā. Our team will reach out
            to you on WhatsApp shortly with batch details and the Zoom link.
          </p>
          <a
            href="https://wa.me/919600815108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25d366] to-[#1eb354] text-white font-sans text-lg font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl">💬</span> Contact Us on WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="bg-[#FFF9F0] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBB201]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
            Join the Programme
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Register Your Child — Free
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
          <p className="text-gray-600 font-sans text-lg">
            Seats are limited. Complete this short form to secure your child's place.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-orange-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Child details */}
            <fieldset>
              <legend className="font-serif text-[#2D0A0A] font-bold text-xl mb-6 pb-3 border-b border-orange-100 w-full">
                Child's Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Child's Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="Full name as per school records"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                  >
                    <option value="">Select age</option>
                    {[7, 8, 9, 10, 11, 12].map((age) => (
                      <option key={age} value={age}>{age} years</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Class / Grade <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="childClass"
                    value={formData.childClass}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="e.g. Class 4"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="Name of school"
                  />
                </div>
              </div>
            </fieldset>

            {/* Parent details */}
            <fieldset>
              <legend className="font-serif text-[#2D0A0A] font-bold text-xl mb-6 pb-3 border-b border-orange-100 w-full">
                Parent / Guardian Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Parent's Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Mobile (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold tracking-wide uppercase mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-base focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </fieldset>

            {/* Address */}
            <fieldset>
              <legend className="font-serif text-[#2D0A0A] font-bold text-xl mb-6 pb-3 border-b border-orange-100 w-full">
                Residential Address
              </legend>
              <div>
                <label className="block text-gray-700 text-base font-bold tracking-wide uppercase mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border border-orange-200 rounded-xl px-5 py-4 text-[#2D0A0A] text-lg focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all bg-[#FFF9F0]/50 resize-none"
                  placeholder="House No., Street, Area, City, Pincode"
                />
              </div>
            </fieldset>

            {/* Commitment */}
            <fieldset>
              <legend className="font-serif text-[#2D0A0A] font-bold text-xl mb-6 pb-3 border-b border-orange-100 w-full">
                Commitment
              </legend>
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="peer appearance-none w-5 h-5 border-2 border-orange-200 rounded flex-shrink-0 checked:bg-[#ea580c] checked:border-[#ea580c] transition-colors cursor-pointer"
                  />
                  <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <span className="text-gray-700 text-base md:text-lg leading-relaxed font-sans select-none">
                  I understand that this is a 10-week programme. I commit to ensuring my child attends the online classes regularly on Mondays and Fridays (5:00–5:30 PM) and completes the 5-minute daily home practice.
                </span>
              </label>
            </fieldset>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-sans text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!agreed || isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-white font-sans font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
              <p className="text-center text-gray-600 text-sm mt-5 font-sans">
                By submitting this form, you agree to receive WhatsApp communications from Hare Krishna Movement Chennai regarding this programme.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
