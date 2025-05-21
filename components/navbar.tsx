"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Trophy, Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8 text-white",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <div className="relative h-10 w-40">
              <Image
                src={isScrolled ? "/logo-black.png" : "/logo-white.png"}
                alt="Beyond Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group" onMouseLeave={closeDropdowns}>
              <button
                className={cn(
                  "font-medium transition-colors flex items-center gap-1",
                  isScrolled ? "text-black hover:text-[#F5A623]" : "text-white hover:text-[#F5A623]",
                )}
                onClick={() => toggleDropdown("solutions")}
                onMouseEnter={() => setActiveDropdown("solutions")}
              >
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {[
                        { name: "Elite Revenue Growth", desc: "Accelerate business growth" },
                        { name: "Superior Operational Excellence", desc: "Streamline your operations" },
                        { name: "Premier Digital Transformation", desc: "Modernize your business" },
                        { name: "Unrivaled Market Expansion", desc: "Enter new markets strategically" },
                      ].map((solution, i) => (
                        <Link
                          key={i}
                          href={`/solutions/${solution.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center mt-0.5">
                            <Trophy className="h-4 w-4 text-[#F5A623]" />
                          </div>
                          <div>
                            <div className="font-medium text-black">{solution.name}</div>
                            <div className="text-sm text-gray-500">{solution.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group" onMouseLeave={closeDropdowns}>
              <button
                className={cn(
                  "font-medium transition-colors flex items-center gap-1",
                  isScrolled ? "text-black hover:text-[#F5A623]" : "text-white hover:text-[#F5A623]",
                )}
                onClick={() => toggleDropdown("industries")}
                onMouseEnter={() => setActiveDropdown("industries")}
              >
                Industries
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {[
                        { name: "Technology", desc: "Digital innovation excellence" },
                        { name: "Financial Services", desc: "Banking & finance solutions" },
                        { name: "Healthcare", desc: "Patient-centered excellence" },
                        { name: "Manufacturing", desc: "Operational optimization" },
                      ].map((industry, i) => (
                        <Link
                          key={i}
                          href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center mt-0.5">
                            <Award className="h-4 w-4 text-[#F5A623]" />
                          </div>
                          <div>
                            <div className="font-medium text-black">{industry.name}</div>
                            <div className="text-sm text-gray-500">{industry.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/case-studies"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-black hover:text-[#F5A623]" : "text-white hover:text-[#F5A623]",
              )}
            >
              Success Stories
            </Link>

            <Link
              href="/about"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-black hover:text-[#F5A623]" : "text-white hover:text-[#F5A623]",
              )}
            >
              About
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button
              className={cn(
                "rounded-full px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base",
                isScrolled
                  ? "bg-gradient-to-r from-[#F5A623] to-[#FF4D00] text-black border border-[#F5A623]/20"
                  : "bg-white hover:bg-white/90 text-black",
              )}
            >
              Schedule Consultation
            </Button>
          </div>

          <button
            className="lg:hidden relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-7 w-7", isScrolled ? "text-black" : "text-white")} />
            ) : (
              <Menu className={cn("h-7 w-7", isScrolled ? "text-black" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-0 pt-20"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleDropdown("mobile-solutions")}
                  className="w-full text-left text-xl font-medium text-white hover:text-[#F5A623] transition-colors py-4 flex justify-between items-center"
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeDropdown === "mobile-solutions" ? "rotate-180" : "",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-solutions" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-3 py-2"
                    >
                      {[
                        "Elite Revenue Growth",
                        "Superior Operational Excellence",
                        "Premier Digital Transformation",
                        "Unrivaled Market Expansion",
                      ].map((solution, i) => (
                        <Link
                          key={i}
                          href={`/solutions/${solution.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-white/80 hover:text-[#F5A623] py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {solution}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleDropdown("mobile-industries")}
                  className="w-full text-left text-xl font-medium text-white hover:text-[#F5A623] transition-colors py-4 flex justify-between items-center"
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeDropdown === "mobile-industries" ? "rotate-180" : "",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-3 py-2"
                    >
                      {["Technology", "Financial Services", "Healthcare", "Manufacturing"].map((industry, i) => (
                        <Link
                          key={i}
                          href={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-white/80 hover:text-[#F5A623] py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {industry}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/case-studies"
                className="text-xl font-medium text-white hover:text-[#F5A623] transition-colors py-4 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </Link>

              <Link
                href="/about"
                className="text-xl font-medium text-white hover:text-[#F5A623] transition-colors py-4 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Button
                className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black w-full mt-4 rounded-full py-6 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
