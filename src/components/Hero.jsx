import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterModal from './RegisterModal'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-white pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Text Section */}
          <div className={`text-center pt-16 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Experience Badge */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="h-px w-8 bg-stone-300" />
              <span className="text-stone-500 text-sm tracking-widest">ESTABLISHED 2008</span>
              <span className="h-px w-8 bg-stone-300" />
            </div>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-stone-100 border border-stone-200 mb-8">
              <span className="text-stone-800 text-sm font-medium">
                Olla Coffee & Barista Training Center
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-stone-900 leading-tight mb-6">
              Where Coffee Dreams <br />
              <span className="text-[#B89164]">Come to Life</span>
            </h1>
            
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              With <span className="font-semibold">15 years of excellence</span> in barista training, 
              we've been shaping Nepal's coffee culture since 2008.
            </p>
          </div>

          {/* Three Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/coffee-barista.jpg"
                alt="Barista Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">Expert Training</h3>
                  <p className="text-sm text-stone-200">Professional Certification</p>
                </div>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/Barista-image -1.jpg"
                alt="Coffee Making"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">Hands-on Experience</h3>
                  <p className="text-sm text-stone-200">Learn by Doing</p>
                </div>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/Cream.jpg"
                alt="Latte Art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">Advanced Techniques</h3>
                  <p className="text-sm text-stone-200">Master the Craft</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="text-center pb-20">
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Join Nepal's premier barista training program. Learn from industry experts and master the art of exceptional coffee making.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setIsRegisterModalOpen(true)}
                className="group relative px-8 py-3 bg-stone-900 text-white rounded-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#B89164] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button 
                onClick={() => navigate('/courses')}
                className="group relative px-8 py-3 border-2 border-stone-900 text-stone-900 rounded-lg overflow-hidden"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">
                  View Programs
                </span>
                <div className="absolute inset-0 bg-stone-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />
    </>
  )
}

export default Hero
