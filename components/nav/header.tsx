"use client";

import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link } from "../../renderer/Link";
import { Button } from "@/components/ui/button";
export default function Header({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-[#061B49] py-8 ">
      
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {children}
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/about">
              <Button
                variant="default"
                className="bg-orange-500 hover:bg-orange-600"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Call us 1-800-557-5192
              </Button>
            </Link>
          </div>
        </div>
    
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="inline-flex !z-50 items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset "
            >
              {!isMenuOpen && <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-teal-950/90 backdrop-blur-sm md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="inline-flex absolute top-0 right-0 p-8 pr-4 !z-50 items-center justify-center  rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset "
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Button
              variant="ghost"
              className="text-white hover:text-teal-500 text-2xl"
              onClick={toggleMenu}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-teal-500 text-2xl"
              onClick={toggleMenu}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-teal-500 text-2xl"
              onClick={toggleMenu}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-teal-500 text-2xl"
              onClick={toggleMenu}
            >
              Contact
            </Button>
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo() {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/" className="flex  lg:hidden items-center">
        <span className="ml-2 text-3xl font-bold text-teal-500">H</span>
        <span className=" text-3xl font-bold text-white">R</span>
      </Link>

      <Link href="/" className="lg:flex  hidden  items-center">
        <span className="ml-2 text-3xl font-bold text-orange-500">Getting</span>
        <span className=" text-3xl font-bold text-white">Cashnow</span>
      </Link>
    </div>
  );
}
