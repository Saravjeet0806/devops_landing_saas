import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './pages/Chatbot';
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import Register from './components/Register'; // Handles /signup, /login etc.

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <Workflow />
                <Pricing />
                <Testimonials />
              </>
            }
          />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/support" element={<Support />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Register handles global auth-related routes */}
          <Route path="/*" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
