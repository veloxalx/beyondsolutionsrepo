import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Shield, Zap } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const services = [
    {
      id: 1,
      title: "Strategic Consulting",
      description: "Transform your business strategy with data-driven insights and proven methodologies that deliver measurable results",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      stats: "500+ Strategies Implemented"
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions and seamless digital integration",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      stats: "98% Success Rate"
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Maximize efficiency and ROI through systematic process improvements and performance analytics",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      stats: "40% Average ROI Increase"
    },
    {
      id: 4,
      title: "Leadership Development",
      description: "Build exceptional leadership capabilities across your organization with proven development programs",
      icon: Users,
      color: "from-orange-500 to-red-500",
      stats: "1000+ Leaders Trained"
    },
    {
      id: 5,
      title: "Innovation Management",
      description: "Foster a culture of innovation and drive breakthrough solutions that keep you ahead of competition",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      stats: "200+ Innovation Projects"
    },
    {
      id: 6,
      title: "Risk Management",
      description: "Protect and future-proof your business with comprehensive risk strategies and mitigation plans",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      stats: "99.9% Risk Mitigation"
    }
  ]

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 4000) // 4 seconds per card

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentServiceIndex]
  const IconComponent = currentService.icon

  return (
    <div>
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center pt-40 pb-32 overflow-hidden bg-black"
      >
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/api/placeholder/1920/1080" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }} 
          className="container px-4 md:px-6 mx-auto relative z-10"
        >
          <div className="text-center max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"></span>
                <span className="text-white/80 text-sm font-medium">Industry-Leading Business Solutions</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="block mb-2">Transforming Businesses with</span>
                <span className="bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">
                  Elite Strategic Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                We deliver unmatched strategic consulting and implementation services that drive exceptional business
                results for elite organizations seeking unprecedented growth.
              </p>
            </motion.div>
          </div>

          {/* Centered Service Card Carousel */}
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ x: 300, opacity: 0, rotateY: 90 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  exit={{ x: -300, opacity: 0, rotateY: -90 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut",
                    opacity: { duration: 0.5 }
                  }}
                  className="relative p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
                  style={{ perspective: '1000px' }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentService.color} opacity-20`}></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentService.color} opacity-50 blur-sm`}></div>
                    <div className="absolute inset-0.5 rounded-3xl bg-black/80"></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      {currentService.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg text-white/80 leading-relaxed mb-6 max-w-lg mx-auto"
                    >
                      {currentService.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${currentService.color} text-white font-semibold text-sm shadow-lg`}
                    >
                      {currentService.stats}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Service indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? 'bg-orange-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                  key={currentServiceIndex}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-black font-medium px-12 py-8 rounded-full text-lg shadow-lg shadow-orange-400/20 transition-all hover:shadow-xl hover:shadow-orange-400/30 hover:-translate-y-1 border border-orange-400/20">
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
                Trusted by <span className="text-orange-400 font-semibold">500+</span> industry leaders
              </p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-orange-400 fill-current"
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
      </section>
    </div>
  )
}

export default Hero