import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import TrainingProcess from './components/TrainingProcess'
import InternationalSection from './components/InternationalSection'
import GraduatesShowcase from './components/GraduatesShowcase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import CoursesPage from './pages/Courses'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <>
              <Hero />
              <Courses />
              <TrainingProcess />
              <InternationalSection />
              <GraduatesShowcase />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
