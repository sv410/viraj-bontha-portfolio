"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Linkedin } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/80 backdrop-blur-md border-b border-[#2A0E61]/50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">Viraj Bontha</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://linkedin.com/in/viraj-bontha"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030014] border-b border-[#2A0E61]/50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#2A0E61]/50">
              <Link
                href="https://linkedin.com/in/viraj-bontha"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
