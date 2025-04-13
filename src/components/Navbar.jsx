import { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import RegisterModal from './RegisterModal'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-15 w-auto" src="/Olla-logo.png" alt="Olla Coffee" />
              <div className="ml-3">
                <span className="text-xl font-['Playfair_Display'] text-stone-800">Olla Coffee</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://facebook.com/ollacoffee" target="_blank" rel="noopener noreferrer" 
                className="text-[#1877F2] hover:text-[#0e5dc5] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com/ollacoffee" target="_blank" rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#d1274a] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:info@ollacoffee.com"
                className="text-[#EA4335] hover:text-[#d13426] transition-colors">
                <MdEmail size={22} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-stone-600 hover:text-stone-900">Home</Link>
              <Link to="/about" className="text-stone-600 hover:text-stone-900">About Us</Link>
              <Link to="/courses" className="text-stone-600 hover:text-stone-900">Courses</Link>
              <Link to="/contact" className="text-stone-600 hover:text-stone-900">Contact us</Link>
              <button 
                onClick={() => setIsRegisterModalOpen(true)}
                className="bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-stone-700"
              >
                Register Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-stone-600 hover:text-stone-900">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-stone-600 hover:text-stone-900">About Us</Link>
                <Link to="/courses" className="block px-3 py-2 text-stone-600 hover:text-stone-900">Courses</Link>
                <Link to="/contact" className="block px-3 py-2 text-stone-600 hover:text-stone-900">Contact us</Link>
                <button 
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="w-full text-left px-3 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700"
                >
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />
    </>
  )
}

export default Navbar
