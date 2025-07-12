import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Floating Bottom Navbar - Centered */}
      <nav className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-xl px-2 sm:px-4 md:bottom-6">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border border-orange-500/20 rounded-xl md:rounded-2xl shadow-2xl shadow-black/50 w-full mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
          <div className="px-2 sm:px-4 md:px-8">
            <div className="flex items-center justify-between h-14 md:h-18">
              {/* Logo */}
              <div className="flex items-center mr-2 sm:mr-4 md:mr-6">
                <div className="text-white font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent whitespace-nowrap">
                  Beyond Solutions
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2 sm:gap-4 lg:gap-6">
                <a
                  href="/"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group text-xs sm:text-sm whitespace-nowrap"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#trust"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group text-xs sm:text-sm whitespace-nowrap"
                >
                  Trusted by Industry Leaders 
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#results"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group text-xs sm:text-sm whitespace-nowrap"
                >
                  Superior Results
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#awards"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group text-xs sm:text-sm whitespace-nowrap"
                >
                  Awards
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="/contact"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group text-xs sm:text-sm whitespace-nowrap"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Get in Touch Button */}
              <div className="hidden md:block ml-2 sm:ml-4 lg:ml-6">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-full px-3 sm:px-4 lg:px-6 py-2 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/30 text-xs sm:text-sm whitespace-nowrap"
                >
                  Get in Touch
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden relative p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur-sm transition-all duration-300"></div>
                <div className="relative transition-all duration-300">
                  <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5 text-orange-400 transition-all duration-300" />
                    ) : (
                      <Menu className="h-5 w-5 text-orange-400 transition-all duration-300" />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden border-t border-orange-500/20 rounded-b-xl overflow-hidden transition-all duration-500 ease-out ${
              isMobileMenuOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 sm:px-4 py-4 space-y-1 bg-gradient-to-b from-transparent to-black/20">
              <a
                href="/"
                className={`block text-white/90 hover:text-orange-400 font-medium py-2.5 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:translate-x-2 text-xs sm:text-sm transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              
              <a
                href="/about"
                className={`block text-white/90 hover:text-orange-400 font-medium py-2.5 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:translate-x-2 text-xs sm:text-sm transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '150ms' : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              
              <a
                href="/what-we-do"
                className={`block text-white/90 hover:text-orange-400 font-medium py-2.5 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:translate-x-2 text-xs sm:text-sm transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                What we do
              </a>
              
              <a
                href="/gallery"
                className={`block text-white/90 hover:text-orange-400 font-medium py-2.5 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:translate-x-2 text-xs sm:text-sm transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              
              <a
                href="/contact"
                className={`block text-white/90 hover:text-orange-400 font-medium py-2.5 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:translate-x-2 text-xs sm:text-sm transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-3">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-lg py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/30 text-xs sm:text-sm transform ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? '350ms' : '0ms' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Adjusted bottom padding to prevent content overlap */}
      <div className="pb-24 sm:pb-20 md:pb-24" />
    </>
  )
}