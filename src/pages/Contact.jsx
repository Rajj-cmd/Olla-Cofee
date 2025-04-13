import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-[#B89164] text-2xl" />,
      title: "Location",
      detail: "Jamal, Kathmandu, Nepal"
    },
    {
      icon: <FaPhone className="text-[#B89164] text-2xl" />,
      title: "Phone",
      detail: "+977-1234567890"
    },
    {
      icon: <FaEnvelope className="text-[#B89164] text-2xl" />,
      title: "Email",
      detail: "info@ollacoffee.com"
    },
    {
      icon: <FaClock className="text-[#B89164] text-2xl" />,
      title: "Hours",
      detail: "Sun-Fri: 9AM - 5PM"
    }
  ]

  return (
    <div className="pt-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Hero Section */}
        <div className="relative py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Have questions about our courses? We're here to help you start your coffee journey.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-['Playfair_Display'] text-stone-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#B89164] focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#B89164] text-white py-3 rounded-lg hover:bg-[#A37144] transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-['Playfair_Display'] text-stone-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-stone-100 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900">{info.title}</h3>
                        <p className="text-stone-600">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-[300px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2714556401464!2d85.31234!3d27.705644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ee1%3A0x5c31d64a05b6c1b4!2sJamal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1615541541234!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
