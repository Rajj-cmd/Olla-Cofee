import { useEffect } from 'react'

function RegisterModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl animate-modal">
          {/* Desktop Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-stone-900 hover:bg-stone-700 rounded-full p-2 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Close Button */}
          <button 
            onClick={onClose}
            className="md:hidden absolute top-4 left-4 z-10 bg-stone-900 hover:bg-stone-700 rounded-full p-2 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Promotional Left Side */}
            <div className="md:w-1/2 bg-stone-900 p-8 rounded-l-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "url('/coffee-pattern.png')",
                  backgroundSize: '200px',
                  transform: 'rotate(-15deg) scale(1.5)'
                }}/>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-[#B89164]/20 text-[#B89164] rounded-full text-sm mb-8">
                  Limited Time Offer
                </span>
                
                <h3 className="text-4xl font-['Playfair_Display'] text-white mb-4">
                  25% OFF
                  <br />
                  <span className="text-[#B89164]">Advanced Course</span>
                </h3>
                
                <p className="text-stone-300 mb-8">
                  Start your journey to become a professional barista with our internationally recognized certification program.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                      <span className="text-[#B89164]">✓</span>
                    </div>
                    <span className="text-stone-300">Professional Certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                      <span className="text-[#B89164]">✓</span>
                    </div>
                    <span className="text-stone-300">Hands-on Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                      <span className="text-[#B89164]">✓</span>
                    </div>
                    <span className="text-stone-300">Job Placement Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right Side */}
            <div className="md:w-1/2 p-8">
              <h4 className="text-2xl font-semibold text-stone-900 mb-6">Register Now</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Country</label>
                  <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent">
                    <option value="">Select your country</option>
                    <option value="NP">Nepal</option>
                    <option value="IN">India</option>
                    <option value="BD">Bangladesh</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Course Interest</label>
                  <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent">
                    <option value="">Select a course</option>
                    <option value="advanced">Advanced Barista Course</option>
                    <option value="latte">Latte Art Course</option>
                    <option value="crash">Barista Crash Course</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#B89164] text-white py-3 rounded-lg hover:bg-[#A37144] transition-colors mt-6"
                >
                  Claim My Discount
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterModal
