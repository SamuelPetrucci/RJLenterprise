import Link from 'next/link'

export default function Footer() {
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
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <span className="text-xs font-bold">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <span className="text-xs font-bold">in</span>
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
                    <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                      Contact
                    </Link>
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
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
