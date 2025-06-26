"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/pricing", label: "PRICING" }, // Updated link
    {
      href: "https://booksy.com/en-us/1308536_fade-factory-barbershop_barber-shop_30060_valley-stream#ba_s=seo",
      label: "BOOK APPOINTMENT",
    },
    { href: "/about", label: "ABOUT" },
    { href: "/our-work", label: "OUR WORK" },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {" "}
            {/* Changed from md:justify-center and removed relative */}
            {/* Logo - visible on all screens, adjusted size for desktop */}
            <Link href="/">
              <div className="relative w-28 h-10 md:w-32 md:h-11">
                {" "}
                {/* Adjusted desktop logo size slightly */}
                <Image
                  src="/fade-factory-logo-transparent.svg"
                  alt="Fade Factory NYC Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
            {/* Desktop Navigation Links - aligned to the right */}
            <div className="hidden md:flex items-center space-x-5">
              {" "}
              {/* Reduced space from space-x-8 */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-xs tracking-wider" // Changed to text-xs and tracking-wider
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile menu button - remains on the right for mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2 relative w-10 h-10 flex items-center justify-center" // Added relative, w-10 h-10, flex, items-center, justify-center
                aria-label={isOpen ? "Close menu" : "Open menu"} // Updated aria-label
              >
                <Menu
                  size={28}
                  className={`absolute transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <X
                  size={28}
                  className={`absolute transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full relative pt-16">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 z-50"
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
          {/* Removed the logo from here */}
          <div className="flex flex-col space-y-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
