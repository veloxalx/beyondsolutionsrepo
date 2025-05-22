import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ServiceShowcaseSlider from "@/components/service-showcase-slider"

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  return (
    <div>      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center pt-40 pb-32 overflow-hidden bg-black"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse"></span>
                <span className="text-white/80 text-sm font-medium">Industry-Leading Business Solutions</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="block mb-2">Transforming Businesses with</span>
                <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent animate-gradient-shift">
                  Elite Strategic Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                We deliver unmatched strategic consulting and implementation services that drive exceptional business
                results for elite organizations seeking unprecedented growth.
              </p>
            </motion.div>
          </div>

          {/* Service Showcase Slider */}
          <ServiceShowcaseSlider />

          <div className="flex flex-wrap justify-center gap-8 pt-20">
            <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black font-medium px-12 py-8 rounded-full text-lg shadow-lg shadow-[#F5A623]/20 transition-all hover:shadow-xl hover:shadow-[#F5A623]/30 hover:-translate-y-1 border border-[#F5A623]/20">
              Schedule Elite Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-12 py-8 rounded-full text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              View Success Stories
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-20">
            <div className="flex -space-x-5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full border-2 border-black bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden shadow-lg"
                >
                  <span className="text-sm font-medium text-white">C{i}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-medium text-xl">
                Trusted by <span className="text-[#F5A623] font-semibold">500+</span> industry leaders
              </p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#F5A623] fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
                <span className="text-white/70 text-sm ml-2">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/50 text-sm font-medium">Explore Excellence</span>
            <div className="w-8 h-14 rounded-full border-2 border-white/20 flex items-center justify-center p-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section></div>
  )
}

export default Hero;