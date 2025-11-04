'use client'

import { useState } from 'react'
import Link from 'next/link'
import ContactModal from './ContactModal'

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <footer className="bg-secondary-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold gradient-text">
                RLJ Enterprise
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Building conscious communities where people thrive.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61576261681462" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/rljenterprisect/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.815 3.708 13.664 3.708 12.367s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-7.83 1.297c-1.297 0-2.448.49-3.323 1.297-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323s-.49-2.448-1.297-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
                  <li>
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm text-left"
                    >
                      Contact
                    </button>
                  </li>
            </ul>
          </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    <a href="mailto:partners@rljenterprisect.com" className="hover:text-primary-400 transition-colors">
                      partners@rljenterprisect.com
                    </a>
                  </div>
                  <div className="text-gray-300">
                    <a href="tel:+18604977160" className="hover:text-primary-400 transition-colors">
                      (860) 497-7160
                    </a>
                  </div>
                  <div className="text-gray-300">
                    75 Brace Road<br />
                    West Hartford, CT 06107
                  </div>
                  <div className="text-gray-300 mt-3">
                    <strong>Business Hours:</strong><br />
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM EST
                  </div>
                </div>
              </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RLJ Enterprise. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  )
}
