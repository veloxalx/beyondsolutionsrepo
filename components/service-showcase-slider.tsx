"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    id: "strategic-consulting",
    title: "Strategic Business Consulting",
    description:
      "Transform your organization with our elite strategic consulting services that deliver exceptional results.",
    icon: "/icons/strategic-consulting.svg",
    image: "/services/strategic-consulting.jpg",
    results: [
      "35% average revenue growth",
      "40% improvement in operational efficiency",
      "3.2x return on consulting investment",
    ],
    cta: "Explore Strategic Consulting",
  },
  {
    id: "digital-transformation",
    title: "Premier Digital Transformation",
    description: "Modernize your business with our cutting-edge digital solutions that drive competitive advantage.",
    icon: "/icons/digital-transformation.svg",
    image: "/services/digital-transformation.jpg",
    results: [
      "75% improvement in customer satisfaction",
      "60% reduction in IT maintenance costs",
      "85% increase in business agility metrics",
    ],
    cta: "Discover Digital Solutions",
  },
  {
    id: "operational-excellence",
    title: "Superior Operational Excellence",
    description:
      "Streamline processes, reduce costs, and improve productivity through our data-driven optimization strategies.",
    icon: "/icons/operational-efficiency.svg",
    image: "/services/operational-efficiency.jpg",
    results: [
      "40% reduction in operational costs",
      "65% improvement in process efficiency",
      "30% faster delivery times",
    ],
    cta: "Optimize Your Operations",
  },
  {
    id: "market-expansion",
    title: "Unrivaled Market Expansion",
    description: "Enter new markets and capture untapped opportunities with our strategic market entry planning.",
    icon: "/icons/market-expansion.svg",
    image: "/services/market-expansion.jpg",
    results: [
      "Successfully entered 5+ new markets on average",
      "50% faster market penetration than industry average",
      "35% higher ROI on expansion investments",
    ],
    cta: "Expand Your Market Reach",
  },
]

export default function ServiceShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 6000) // Change slide every 6 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-6xl mx-auto my-16" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute top-1/2 -left-6 md:-left-16 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          aria-label="Previous service"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:text-[#F5A623] transition-colors" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-6 md:-right-16 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          aria-label="Next service"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:text-[#F5A623] transition-colors" />
        </button>
      </div>

      <div className="h-[500px] md:h-[550px] overflow-hidden rounded-3xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <div className="relative h-full w-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={services[currentIndex].image || "/placeholder.svg"}
                  alt={services[currentIndex].title}
                  fill
                  className="object-cover opacity-50"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              <div className="relative h-full flex flex-col md:flex-row items-center p-10 md:p-16 z-10">
                <div className="md:w-3/5 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 backdrop-blur-md text-white font-medium text-sm border border-[#F5A623]/20">
                    <Trophy className="h-4 w-4 text-[#F5A623]" />
                    <span>Industry-Leading Service</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    {services[currentIndex].title}
                  </h2>

                  <p className="text-xl text-white/80 leading-relaxed">{services[currentIndex].description}</p>

                  <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group mt-4 px-8 py-6 text-lg shadow-lg shadow-[#F5A623]/20 transition-all hover:shadow-xl hover:shadow-[#F5A623]/30 hover:-translate-y-1 border border-[#F5A623]/20">
                    <span>{services[currentIndex].cta}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="md:w-2/5 mt-10 md:mt-0 md:pl-10">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                        <Trophy className="h-4 w-4 text-[#F5A623]" />
                      </div>
                      Proven Results
                    </h3>
                    <ul className="space-y-5">
                      {services[currentIndex].results.map((result, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 text-[#F5A623]" />
                          </div>
                          <span className="text-white/90 text-lg">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1)
              setCurrentIndex(i)
            }}
            className={`transition-all duration-300 ${
              i === currentIndex
                ? "w-10 h-3 bg-[#F5A623] rounded-full"
                : "w-3 h-3 bg-white/20 hover:bg-white/40 rounded-full"
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
