'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from '../../renderer/Link'
import { Button } from "@/components/ui/button"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-teal-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8 md:justify-start md:space-x-10">
          {/* Logo */}
        
        <Logo/>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

         

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button  className="">View Your Rate</Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
    <a href="/" className="flex  lg:hidden items-center">
      <span className="ml-2 text-3xl font-bold text-teal-500">R</span>
      <span className=" text-3xl font-bold text-white">R</span>
    </a>
    <a href="/" className="lg:flex  hidden  items-center">
      <span className="ml-2 text-3xl font-bold text-teal-500">Hardship</span>
      <span className=" text-3xl font-bold text-white">relief</span>
    </a>
  </div>
  )
}




