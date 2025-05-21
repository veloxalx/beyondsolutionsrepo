"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    quote:
      "Beyond Solutions transformed our digital presence and helped us achieve a 200% increase in online leads within just 3 months. Their strategic approach and execution are unmatched.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc.",
    image: "/testimonial-1.jpg",
    rating: 5,
  },
  {
    quote:
      "Their strategic approach to our business challenges opened new opportunities we hadn't even considered. The team at Beyond Solutions truly lives up to their name - they go beyond expectations.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Global Innovations",
    image: "/testimonial-2.jpg",
    rating: 5,
  },
  {
    quote:
      "Working with Beyond Solutions was a game-changer for our company. Their insights and execution are unmatched in the industry. We've seen tremendous growth since partnering with them.",
    author: "Emma Rodriguez",
    position: "COO",
    company: "Nexus Enterprises",
    image: "/testimonial-3.jpg",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="w-full py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#F5A623]/10 text-[#F5A623] hover:bg-[#F5A623]/20">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with Beyond Solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#F5A623]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#F5A623]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative flex-shrink-0 border-4 border-[#F5A623]/20">
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[current].rating ? "text-[#F5A623] fill-[#F5A623]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonials[current].author}</p>
                      <p className="text-gray-500">
                        {testimonials[current].position}, {testimonials[current].company}
                      </p>
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
                  setCurrent(i)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-[#F5A623] w-8" : "bg-gray-300 hover:bg-gray-400"
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
