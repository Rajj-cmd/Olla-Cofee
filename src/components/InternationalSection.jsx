import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function InternationalSection() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/working abroad.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)' // Ensures smooth scrolling
        }}
      />
      
      {/* Content with dark overlay */}
      <div className="relative bg-gradient-to-b from-stone-900/95 via-stone-900/90 to-stone-900/95 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <span className="text-[#B89164] text-sm font-medium tracking-wider uppercase">International Opportunities</span>
              <h2 className="text-4xl font-['Playfair_Display'] text-white mt-4 mb-6">
                Planning to Work Abroad?
              </h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto">
                Get internationally recognized barista certification and open doors to exciting career opportunities worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-stone-800/50 p-8 rounded-lg hover:bg-stone-800 transition-colors">
                <div className="text-[#B89164] text-2xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Recognition</h3>
                <p className="text-stone-300">Our certification is recognized by coffee shops and cafes worldwide.</p>
              </div>
              <div className="bg-stone-800/50 p-8 rounded-lg hover:bg-stone-800 transition-colors">
                <div className="text-[#B89164] text-2xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-white mb-3">Job Placement</h3>
                <p className="text-stone-300">Access to our international network of employers and job opportunities.</p>
              </div>
              <div className="bg-stone-800/50 p-8 rounded-lg hover:bg-stone-800 transition-colors">
                <div className="text-[#B89164] text-2xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-white mb-3">Visa Support</h3>
                <p className="text-stone-300">Guidance on work visas and international employment requirements.</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-[#B89164] text-white rounded-lg hover:bg-[#A37144] transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternationalSection
