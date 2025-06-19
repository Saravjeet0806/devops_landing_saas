import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tools from './pages/Tools'
import Support from './pages/Support'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tools" element={<Tools />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  )
}

export default App
