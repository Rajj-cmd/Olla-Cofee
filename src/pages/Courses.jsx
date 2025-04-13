import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function CoursesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)

    // Handle scrolling to specific section if coming from Courses component
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <div className="pt-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Hero Section */}
        <div className="relative py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Professional barista training programs designed to launch your coffee career
            </p>
          </div>
        </div>

        {/* Course Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Advanced Barista Course */}
          <div id="advanced-barista-section" className="mb-32">
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 py-20 px-8 rounded-3xl overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "url('/coffee-pattern.png')",
                  backgroundSize: '400px',
                  transform: 'rotate(-15deg) scale(1.5)'
                }}/>
              </div>

              <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1 bg-[#B89164]/10 text-[#B89164] rounded-full text-sm mb-4">
                    Our Premier Course
                  </span>
                  <h2 className="text-5xl font-['Playfair_Display'] text-stone-900 mb-6">
                    Advanced Barista Course
                  </h2>
                  <div className="flex justify-center items-center gap-8 text-stone-900 mb-8">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                      </svg>
                      4 Weeks
                    </span>
                    <span className="text-stone-400">|</span>
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400 line-through text-lg">Rs. 15,000</span>
                      <span className="text-[#B89164] font-semibold text-2xl">Rs. 12,000</span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Features */}
                  <div className="space-y-6">
                    <p className="text-lg text-stone-700">
                      Transform your passion into expertise with our comprehensive program covering everything from bean to cup.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Beginner to advanced level training</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Learn to craft 60+ coffee and alternative beverages</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Customer service skills and grooming techniques</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Hands-on practice with multiple brewing devices and methods</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Barista certification included</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>1 month paid internship at partner cafés</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>International job placement assistance after completion</span>
                      </li>
                    </ul>
                    <div className="pt-6">
                      <button 
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="w-full px-8 py-4 bg-[#B89164] text-white rounded-lg hover:bg-[#A37144] transition-colors"
                      >
                        Book Now!
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#B89164]/5 rounded-3xl transform rotate-3"></div>
                    <img 
                      src="/advanced-barista.jpg"
                      alt="Advanced Barista Course"
                      className="relative rounded-2xl w-full h-[600px] object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latte Art Course */}
          <div id="latte-art-section" className="mb-32">
            <div className="bg-gradient-to-bl from-stone-100 to-stone-200 py-20 px-8 rounded-3xl overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "url('/coffee-pattern.png')",
                  backgroundSize: '400px',
                  transform: 'rotate(15deg) scale(1.5)'
                }}/>
              </div>

              <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1 bg-[#B89164]/10 text-[#B89164] rounded-full text-sm mb-4">
                    Specialty Course
                  </span>
                  <h2 className="text-5xl font-['Playfair_Display'] text-stone-900 mb-6">
                    Latte Art Course
                  </h2>
                  <div className="flex justify-center items-center gap-8 text-stone-900 mb-8">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                      </svg>
                      2 Weeks
                    </span>
                    <span className="text-stone-400">|</span>
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400 line-through text-lg">Rs. 8,500</span>
                      <span className="text-stone-900 font-semibold text-2xl">Rs. 7,500</span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Image (Left Side) */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#B89164]/5 rounded-3xl transform -rotate-3"></div>
                    <img 
                      src="/latte-art.jpg"
                      alt="Latte Art Course"
                      className="relative rounded-2xl w-full h-[600px] object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <p className="text-lg text-stone-700">
                      Master the art of creating stunning latte designs. From basic patterns to advanced techniques, learn to pour beautiful latte art consistently.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Beginner to advanced progression.</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>More than 7 latte art patterns.</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Milk steaming and frothing techniques.</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Free-pour and etching designs.
                        </span>
                      </li>
                    </ul>
                    <div className="pt-6">
                      <button 
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="w-full px-8 py-4 bg-[#B89164] text-white rounded-lg hover:bg-[#A37144] transition-colors"
                      >
                        Book Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barista Crash Course */}
          <div id="crash-course-section" className="mb-32">
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 py-20 px-8 rounded-3xl overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "url('/coffee-pattern.png')",
                  backgroundSize: '400px',
                  transform: 'rotate(-15deg) scale(1.5)'
                }}/>
              </div>

              <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1 bg-[#B89164]/10 text-[#B89164] rounded-full text-sm mb-4">
                    Quick Start Course
                  </span>
                  <h2 className="text-5xl font-['Playfair_Display'] text-stone-900 mb-6">
                    Barista Crash Course
                  </h2>
                  <div className="flex justify-center items-center gap-8 text-stone-900 mb-8">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                      </svg>
                      1 Week
                    </span>
                    <span className="text-stone-400">|</span>
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400 line-through text-lg">Rs. 9,000</span>
                      <span className="text-stone-900 font-semibold text-2xl">Rs. 7,000</span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Features */}
                  <div className="space-y-6">
                    <p className="text-lg text-stone-700">
                      A fast-track introduction to the world of coffee. Learn essential barista skills and basic coffee knowledge in an intensive one-week program.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Essential coffee theory and knowledge</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Basic espresso extraction skills</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Milk steaming fundamentals</span>
                      </li>
                      <li className="flex items-center gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B89164]/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#B89164]"></span>
                        </span>
                        <span>Common drink preparation</span>
                      </li>
                    </ul>
                    <div className="pt-6">
                      <button 
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="w-full px-8 py-4 bg-[#B89164] text-white rounded-lg hover:bg-[#A37144] transition-colors"
                      >
                        Book Now!
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#B89164]/5 rounded-3xl transform rotate-3"></div>
                    <img 
                      src="/crash-course.jpg"
                      alt="Barista Crash Course"
                      className="relative rounded-2xl w-full h-[600px] object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesPage
