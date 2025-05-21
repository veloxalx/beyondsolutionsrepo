"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Beyond Solutions transformed our digital presence completely. Their strategic approach helped us achieve a 200% increase in qualified leads and a 35% boost in conversion rates within just 3 months. They're not just service providers; they're true partners in our success.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc.",
    image: "/testimonials/testimonial-1.jpg",
    logo: "/testimonials/company-1.svg",
    rating: 5,
  },
  {
    quote:
      "Working with Beyond Solutions opened new opportunities we hadn't even considered. Their team's deep expertise and innovative thinking helped us navigate complex market challenges and emerge stronger than ever. The ROI on our investment has been exceptional.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Global Innovations",
    image: "/testimonials/testimonial-2.jpg",
    logo: "/testimonials/company-2.svg",
    rating: 5,
  },
  {
    quote:
      "Beyond Solutions doesn't just deliver services; they deliver results. Their data-driven approach and strategic insights have been instrumental in our company's growth. What sets them apart is their genuine commitment to understanding our business and goals.",
    author: "Emma Rodriguez",
    position: "COO",
    company: "Nexus Enterprises",
    image: "/testimonials/testimonial-3.jpg",
    logo: "/testimonials/company-3.svg",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        next()
      }, 8000)
    }
    return () => resetTimeout()
  }, [current, autoplay])

  return (
    <section className="w-full py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/10 text-[#F5A623] hover:bg-white/20 border-white/10">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with Beyond Solutions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>

          <div
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative flex-shrink-0 border-4 border-[#F5A623]/20">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <Quote className="h-10 w-10 text-[#F5A623] opacity-50" />
                      <div className="h-8 w-auto relative">
                        <div className="bg-gray-200 w-full h-full rounded flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Company Logo</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xl md:text-2xl text-white mb-6 italic leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg text-white">{testimonials[current].author}</p>
                        <p className="text-gray-400">
                          {testimonials[current].position}, {testimonials[current].company}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[current].rating ? "text-[#F5A623] fill-[#F5A623]" : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-[#F5A623] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
