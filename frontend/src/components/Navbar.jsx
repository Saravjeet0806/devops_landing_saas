import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const linkClasses = ({ isActive }) =>
    isActive ? 'text-orange-500 font-semibold' : 'hover:text-orange-400 transition';

  return (
    <nav className="py-3 sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="Devops Mania Logo" />
            <span className="text-xl tracking-tight">Devops Mania</span>
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex ml-14 space-x-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href} className={linkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Buttons (Desktop) */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            {isAuthenticated ? (
              <>
                <span className="text-white font-semibold">{user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="py-2 px-3 border rounded-md hover:border-orange-400">
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
                >
                  Create an Account
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-16 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col items-center lg:hidden transition-all duration-300">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink
                    to={item.href}
                    className={linkClasses}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {isAuthenticated ? (
              <>
                <span className="text-white mt-4 font-semibold">{user?.email}</span>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    handleLogout();
                  }}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="mt-6 flex space-x-4">
                <NavLink
                  to="/login"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="py-2 px-3 border rounded-md hover:border-orange-400 whitespace-nowrap"
                >
                  Sign In
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white whitespace-nowrap"
                >
                  Create an Account
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
