import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RegisterModal from './RegisterModal'

function Courses() {
  const navigate = useNavigate()
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const handleLearnMore = (courseSection) => {
    navigate('/courses', { state: { scrollTo: courseSection } });
  }

  const courses = [
    {
      id: 'advanced-barista',
      title: 'Advanced Barista Course',
      duration: '4 Weeks',
      image: '/advanced-barista.jpg',
      description: 'Master the art of coffee making with our comprehensive program.',
      section: 'advanced-barista-section',
    },
    {
      id: 'latte-art',
      title: 'Latte Art Course',
      duration: '2 Weeks',
      image: '/latte-art.jpg',
      description: 'Learn to create stunning latte art designs along wwith milk steaming and frothing techniques.',
      section: 'latte-art-section',
    },
    {
      id: 'crash-course',
      title: 'Barista Crash Course',
      duration: '1 Week',
      image: '/crash-course.jpg',
      description: 'Quick introduction to essential barista skills. Best for those short on time.',
      section: 'crash-course-section',
    }
  ]

  return (
    <>
      <div className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-stone-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose from our specialized courses designed to take your coffee skills to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-sm text-stone-600">{course.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{course.title}</h3>
                  <p className="text-stone-600 mb-4">{course.description}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleLearnMore(course.section)}
                      className="flex-1 bg-stone-900 text-white py-2 rounded-l hover:bg-stone-800 transition-colors"
                    >
                      Learn More
                    </button>
                    <button 
                      onClick={() => setIsRegisterModalOpen(true)}
                      className="flex-1 bg-[#B89164] text-white py-2 rounded-r hover:bg-[#A37144] transition-colors"
                    >
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

export default Courses
