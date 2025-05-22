import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Shield, Zap, Star, Award, ChevronRight } from 'lucide-react'

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
      subtitle: "Future-Ready Business Strategy",
      description: "Transform your business strategy with data-driven insights, market analysis, and proven methodologies that deliver measurable results and sustainable competitive advantage.",
      icon: Target,
      primaryColor: "from-blue-500 to-cyan-400",
      accentColor: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-500/20 via-cyan-400/10 to-transparent",
      stats: "500+ Strategies Implemented",
      metric: "85% Success Rate",
      features: ["Market Analysis", "Competitive Intelligence", "Strategic Roadmaps"]
    },
    {
      id: 2,
      title: "Digital Transformation",
      subtitle: "Next-Gen Technology Solutions",
      description: "Modernize your operations with cutting-edge technology solutions, seamless digital integration, and automation that drives efficiency and innovation across your organization.",
      icon: Zap,
      primaryColor: "from-purple-500 to-pink-400",
      accentColor: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-500/20 via-pink-400/10 to-transparent",
      stats: "98% Implementation Success",
      metric: "60% Efficiency Gain",
      features: ["Cloud Migration", "Process Automation", "Digital Integration"]
    },
    {
      id: 3,
      title: "Performance Optimization",
      subtitle: "Maximize ROI & Efficiency",
      description: "Maximize efficiency and ROI through systematic process improvements, performance analytics, and optimization strategies that deliver tangible business outcomes.",
      icon: TrendingUp,
      primaryColor: "from-green-500 to-emerald-400",
      accentColor: "from-green-600 to-emerald-500",
      bgGradient: "from-green-500/20 via-emerald-400/10 to-transparent",
      stats: "40% Average ROI Increase",
      metric: "200+ Projects Optimized",
      features: ["Process Improvement", "Performance Analytics", "Cost Optimization"]
    },
    {
      id: 4,
      title: "Leadership Development",
      subtitle: "Exceptional Leadership Excellence",
      description: "Build exceptional leadership capabilities across your organization with proven development programs, mentoring, and executive coaching that creates lasting impact.",
      icon: Users,
      primaryColor: "from-orange-500 to-red-400",
      accentColor: "from-orange-600 to-red-500",
      bgGradient: "from-orange-500/20 via-red-400/10 to-transparent",
      stats: "1000+ Leaders Trained",
      metric: "92% Promotion Rate",
      features: ["Executive Coaching", "Team Development", "Leadership Assessment"]
    },
    {
      id: 5,
      title: "Innovation Management",
      subtitle: "Breakthrough Innovation Culture",
      description: "Foster a culture of innovation and drive breakthrough solutions with structured innovation processes, ideation frameworks, and implementation strategies.",
      icon: Lightbulb,
      primaryColor: "from-yellow-500 to-orange-400",
      accentColor: "from-yellow-600 to-orange-500",
      bgGradient: "from-yellow-500/20 via-orange-400/10 to-transparent",
      stats: "200+ Innovation Projects",
      metric: "3x Faster Time-to-Market",
      features: ["Innovation Strategy", "Ideation Workshops", "Product Development"]
    },
    {
      id: 6,
      title: "Risk Management",
      subtitle: "Comprehensive Risk Protection",
      description: "Protect and future-proof your business with comprehensive risk strategies, mitigation plans, and contingency frameworks that ensure business continuity.",
      icon: Shield,
      primaryColor: "from-indigo-500 to-purple-400",
      accentColor: "from-indigo-600 to-purple-500",
      bgGradient: "from-indigo-500/20 via-purple-400/10 to-transparent",
      stats: "99.9% Risk Mitigation",
      metric: "Zero Critical Failures",
      features: ["Risk Assessment", "Compliance Management", "Business Continuity"]
    }
  ]

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 5000) // 5 seconds per card for better readability

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
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          >
            <source src="/api/placeholder/1920/1080" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Enhanced Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-400/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} transition-all duration-1000 ease-out`}></div>
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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20">
                <motion.span 
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white/90 text-sm font-medium tracking-wide">Industry-Leading Business Solutions</span>
                <Star className="w-4 h-4 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="block mb-4">Transforming Businesses with</span>
                <span className="bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent bg-300% animate-gradient">
                  Elite Strategic Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
                We deliver unmatched strategic consulting and implementation services that drive exceptional business
                results for elite organizations seeking unprecedented growth and market leadership.
              </p>
            </motion.div>
          </div>

          {/* Premium Centered Service Card Carousel */}
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ x: 400, opacity: 0, rotateY: 45, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ x: -400, opacity: 0, rotateY: -45, scale: 0.8 }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.6 }
                  }}
                  className="relative group"
                  style={{ perspective: '1200px' }}
                >
                  {/* Main Card Container */}
                  <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} opacity-60 transition-all duration-1000`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${currentService.primaryColor} opacity-10 transition-all duration-1000`}></div>
                    
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-3xl">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentService.accentColor} opacity-40 blur-xl transition-all duration-1000`}></div>
                      <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                          className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${currentService.primaryColor} flex items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                        >
                          <IconComponent className="w-12 h-12 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                        </motion.div>
                        
                        <div className="text-center md:text-left flex-grow">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={`text-sm font-semibold tracking-wide bg-gradient-to-r ${currentService.primaryColor} bg-clip-text text-transparent mb-2`}
                          >
                            {currentService.subtitle}
                          </motion.p>
                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                          >
                            {currentService.title}
                          </motion.h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg text-white/85 leading-relaxed mb-8 max-w-3xl font-light"
                      >
                        {currentService.description}
                      </motion.p>
                      
                      {/* Features Grid */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                      >
                        {currentService.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <ChevronRight className={`w-4 h-4 bg-gradient-to-r ${currentService.primaryColor} rounded p-0.5`} />
                            <span className="text-white/80 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                      
                      {/* Stats Section */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                      >
                        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r ${currentService.primaryColor} shadow-lg`}>
                          <Award className="w-6 h-6 text-white" />
                          <div>
                            <p className="text-white font-bold text-lg">{currentService.stats}</p>
                            <p className="text-white/80 text-sm">Proven Results</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                          <TrendingUp className="w-6 h-6 text-orange-400" />
                          <div>
                            <p className="text-white font-bold text-lg">{currentService.metric}</p>
                            <p className="text-white/70 text-sm">Performance Metric</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Enhanced Navigation */}
              <div className="flex justify-center mt-10 gap-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? 'w-12 h-4' 
                        : 'w-4 h-4 hover:w-6'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? `bg-gradient-to-r ${services[index].primaryColor} shadow-lg` 
                        : 'bg-white/30 hover:bg-white/50'
                    }`} />
                    {index === currentServiceIndex && (
                      <div className="absolute inset-0.5 rounded-full bg-white/20 blur-sm"></div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="mt-6 w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentService.primaryColor} rounded-full shadow-lg`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                  key={currentServiceIndex}
                />
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-black font-semibold px-16 py-10 rounded-full text-xl shadow-xl shadow-orange-400/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/40 hover:-translate-y-2 border border-orange-400/30 group">
              Schedule Elite Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              className="px-16 py-10 rounded-full text-xl border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:border-orange-400/50 hover:text-orange-300"
            >
              View Success Stories
            </Button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-20">
            <div className="flex -space-x-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-full border-4 border-black bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-lg font-bold text-white">C{i}</span>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-2xl mb-2">
                Trusted by <span className="text-orange-400 font-bold">500+</span> industry leaders
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 text-orange-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-lg ml-3 font-medium">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-white/60 text-sm font-medium tracking-wide">Explore Excellence</span>
            <div className="w-10 h-16 rounded-full border-2 border-white/30 flex items-center justify-center p-2 backdrop-blur-sm bg-white/5">
              <motion.div 
                className="w-3 h-3 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero