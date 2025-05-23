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
      {/* Fixed Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src="/logo.png" // Update with your logo path
                  alt="Beyond Solutions Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#F5A623] font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#F5A623] font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/what-we-do"
                className="text-gray-700 hover:text-[#F5A623] font-medium transition-colors"
              >
                What we do
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-[#F5A623] font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#F5A623] font-medium transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Get in Touch Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-[#F5A623] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-[#F5A623] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/what-we-do"
                  className="block text-gray-700 hover:text-[#F5A623] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What we do
                </Link>
                <Link
                  href="/gallery"
                  className="block text-gray-700 hover:text-[#F5A623] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-[#F5A623] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-white rounded-full py-3 font-medium mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom padding to prevent content from being hidden behind fixed navbar */}
      <div className="pb-16 md:pb-20" />
    </>
  )
}