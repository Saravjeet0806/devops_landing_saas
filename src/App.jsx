import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tools from './pages/Tools'
import Support from './pages/Support'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import HeroSection from './components/HeroSection'
import Features from './components/Features' 
import Workflow from './components/Workflow'
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
              <>
                <HeroSection />
                <Features />  
                <Workflow />
                <Pricing/>
                <Testimonials/>
              </>
            }
          />
          <Route path="/tools" element={<Tools />} />
          <Route path="/support" element={<Support />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
