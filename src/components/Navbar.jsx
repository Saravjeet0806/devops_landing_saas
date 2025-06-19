import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)
  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="py-3 sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-base">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='w-10 h-10 mr-2' src={logo} alt="" />
            <span className="text-xl tracking-tight">Devops Mania</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-14'>
            {navItems.map((item, index) =>
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            )}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center"> {/*hidden by default but available for large screens*/}
            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end"> {/*hidden for large screens*/}
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}  {/* if true it will should X icon otherwise the menu bar icon*/}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <div className="flex space-x-6">
              <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
            </div>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar