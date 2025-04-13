import { useState, useEffect } from 'react'

function TrainingProcess() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const trainers = [
    {
      name: "Sanjay Giri",
      role: "Head Barista Trainer",
      image: "/trainer-1.jpg",
      experience: "Head Trainer at Olla Coffee"
    },
    {
      name: "Raj Giri",
      role: " Barista Trainer",
      image: "/trainer-2.jpg",
      experience: "Barista Trainer at Olla Coffee"
    }
  ]

  const steps = [
    {
      title: "Theory & Foundation",
      description: "Learn coffee basics, bean types, and brewing principles",
      icon: "☕"
    },
    {
      title: "Hands-on Practice",
      description: "Master espresso extraction and milk techniques",
      icon: "🎯"
    },
    {
      title: "Advanced Skills",
      description: "Perfect your craft with specialized training",
      icon: "⭐"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#B89164] text-sm font-medium tracking-wider uppercase">Our Training Process</span>
            <h2 className="text-4xl font-['Playfair_Display'] text-stone-900 mt-4 mb-6">
              Learn from the Best
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our experienced trainers guide you through a comprehensive learning journey
            </p>
          </div>

          {/* Trainers Section - Moved up */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {trainers.map((trainer, index) => (
              <div key={index} className="text-center">
                {/* Circular Image Container */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#B89164]/20"></div>
                  <img 
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Trainer Info */}
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">{trainer.name}</h3>
                <p className="text-[#B89164] font-medium mb-2">{trainer.role}</p>
                <p className="text-stone-600 text-sm">{trainer.experience}</p>
              </div>
            ))}
          </div>

          {/* Training Steps - Moved down */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingProcess
