"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Floating Bottom Navbar */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-6 md:right-6">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border border-orange-500/20 rounded-2xl md:rounded-3xl shadow-2xl shadow-black/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-32 md:h-10 md:w-40">
                  <Image
                    src="/" // Update with your logo path
                    alt="Beyond Solutions Logo"
                    fill
                    className="object-contain brightness-0 invert"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  What we do
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/gallery"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  Gallery
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Get in Touch Button */}
              <div className="hidden md:block">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/30"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden relative p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur-sm"></div>
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-orange-400" />
                  ) : (
                    <Menu className="h-6 w-6 text-orange-400" />
                  )}
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-orange-500/20 overflow-hidden rounded-b-2xl"
              >
                <div className="px-6 py-6 space-y-1 bg-gradient-to-b from-transparent to-black/20">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/"
                      className="block text-white/90 hover:text-orange-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-orange-500/10 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/about"
                      className="block text-white/90 hover:text-orange-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-orange-500/10 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/what-we-do"
                      className="block text-white/90 hover:text-orange-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-orange-500/10 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      What we do
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/gallery"
                      className="block text-white/90 hover:text-orange-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-orange-500/10 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="/contact"
                      className="block text-white/90 hover:text-orange-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-orange-500/10 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-xl py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 border border-orange-400/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Bottom padding to prevent content from being hidden behind floating navbar */}
      <div className="pb-24 md:pb-28" />
    </>
  )
}