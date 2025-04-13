import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterModal from '../components/RegisterModal'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Hero Section */}
        <div className="relative py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Established in 2008, Olla coffee has been tainnig baristas and serving the finest coffee in Nepal.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-stone-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-stone-600 mb-6">
              We are located in Jamal, Kathmandu district. Since 1980, we have served our customers , consisting of expatriates, tourists and residents of the Kathmandu valley, with passion and care. We aspire to reach out to the rest of the world too through our exports to Japan, Germany, France, UK and the US. We are coffe enthusiasts dedicated in exploring the world of coffee with our customers. Our shop carries a selection of many variaties of coffee and tea including dark roasted, green, and super-food tea selections, ranging in price from a few cents per cup all the way to the rarest blends available in Nepal.

We aspire to the highest standards of product quality and freshness in both our coffee and teas. We have respect for nature, people, social responsibility, and a commitment to maintain high standards in encompassing all aspects of cultivation and production in Nepal.
              </p>
              <p className="text-lg text-stone-600">
                Our commitment to excellence and comprehensive training programs have made us Nepal's leading barista training center.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/coffee-farm.jpg" 
                alt="Olla Coffee History" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Certificate.jpg" 
                alt="Our Training Mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-stone-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                At Olla Coffee, our mission is to empower aspiring baristas with world-class training and education. We believe in creating opportunities for Nepali youth in the global coffee industry while maintaining the highest standards of coffee education.
              </p>
              <ul className="space-y-4 text-stone-600">
                <li className="flex items-start">
                  <span className="text-[#B89164] mr-3">•</span>
                  Professional barista training and certification
                </li>
                <li className="flex items-start">
                  <span className="text-[#B89164] mr-3">•</span>
                  International job placement assistance
                </li>
                <li className="flex items-start">
                  <span className="text-[#B89164] mr-3">•</span>
                  Continuous learning and skill development
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-['Playfair_Display'] text-stone-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                What sets Olla Coffee apart in professional barista training
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#B89164] text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Job Placement Network
                </h3>
                <p className="text-stone-600">
                We’ve built strong connections with coffee shops, cafés, and hospitality businesses across Nepal and abroad. Through our growing network, we assist our trainees in finding the right job opportunities after completing their training — helping them kick-start their barista careers with confidence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#B89164] text-3xl mb-4">📜</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Exprienced Trainers
                </h3>
                <p className="text-stone-600">
                Our trainers bring years of hands-on experience in the coffee industry, both locally and abroad. With a deep understanding of barista skills, coffee culture, and real-world practices, they are committed to delivering practical, high-quality training tailored to industry standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#B89164] text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Professional Café Environment
                </h3>
                <p className="text-stone-600">
                Our training center is designed to replicate a real café setting, giving students hands-on experience in a professional environment. From operating espresso machines to managing customer interactions, trainees build the practical skills and confidence needed to thrive in the coffee industry.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-24 text-center bg-stone-900 rounded-xl p-12">
            <h2 className="text-3xl font-['Playfair_Display'] text-white mb-4">
              Start Your Coffee Journey Today
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
              Join Nepal's premier barista training program and transform your passion into a profession
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => navigate('/courses')}
                className="px-8 py-3 bg-[#B89164] text-white rounded-lg hover:bg-[#A37144] transition-colors text-lg font-medium"
              >
                View Our Courses
              </button>
              <button 
                onClick={() => setIsRegisterModalOpen(true)}
                className="px-8 py-3 border-2 border-[#B89164] text-white rounded-lg hover:bg-[#B89164]/10 transition-colors text-lg font-medium"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  )
}

export default About
