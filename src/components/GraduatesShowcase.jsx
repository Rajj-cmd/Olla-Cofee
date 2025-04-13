import { useState, useEffect } from 'react'

function GraduatesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  
  const graduates = [
    {
      name: "Binod Gurung",
      position: "Head Barista",
      location: "Dubai, UAE",
      image: "/graduate-1.jpg",
      company: "Costa Coffee"
    },
    {
      name: "Sunil Tamang",
      position: "Senior Barista",
      location: "Sydney, Australia",
      image: "/graduate-2.jpg",
      company: "Coffee Club"
    },
    {
      name: "Roshni Thapa",
      position: "Cafe Manager",
      location: "Toronto, Canada",
      image: "/graduate-3.jpg",
      company: "Starbucks"
    },
    // Add more graduates as needed
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <span className="text-[#B89164] text-sm font-medium tracking-wider uppercase">Success Stories</span>
            <h2 className="text-4xl font-['Playfair_Display'] text-stone-900 mt-4 mb-6">
              Our Graduates Worldwide
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Join our alumni network of successful baristas working in prestigious cafes around the globe
            </p>
          </div>
        </div>

        {/* Scrolling Graduate Cards */}
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 py-8 px-4 scrollbar-hide">
            {graduates.map((graduate, index) => (
              <div 
                key={index}
                className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={graduate.image}
                    alt={graduate.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900">{graduate.name}</h3>
                  <p className="text-[#B89164] font-medium mt-1">{graduate.position}</p>
                  <div className="mt-4 flex items-center text-stone-600">
                    <span className="text-sm">📍 {graduate.location}</span>
                  </div>
                  <p className="mt-1 text-sm text-stone-500">{graduate.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default GraduatesShowcase
