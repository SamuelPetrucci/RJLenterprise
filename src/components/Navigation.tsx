'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactModal from './ContactModal'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine navigation items based on current page
  const isHomePage = pathname === '/'
  const navItems = isHomePage 
    ? [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#team', label: 'Team' },
        { href: '#services', label: 'Services' },
        { href: '/current-projects', label: 'Current Projects' },
        { href: '#contact', label: 'Contact' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/#about', label: 'About' },
        { href: '/#team', label: 'Team' },
        { href: '/services', label: 'Services' },
        { href: '/current-projects', label: 'Current Projects' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <Link href={isHomePage ? "#home" : "/"} className="flex items-center space-x-4">
            <img 
              src="/headerlogo.png" 
              alt="RLJ Enterprise Logo" 
              className="h-16 lg:h-20 w-auto"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <div className="text-3xl lg:text-4xl font-bold gradient-text hidden">
              RLJ Enterprise
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                {item.label === 'Contact' && !isHomePage ? (
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-secondary-700 hover:text-primary-600 font-semibold text-base lg:text-lg px-2 lg:px-3 py-2 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-600 font-semibold text-base lg:text-lg px-2 lg:px-3 py-2 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
                {index < navItems.length - 1 && (
                  <span className="text-secondary-400 mx-1">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.label === 'Contact' && !isHomePage ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsContactModalOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
                )}
      </div>
      </nav>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}
