import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Shield, Zap, Star, Award, ChevronRight, Building2, Sparkles, Crown } from 'lucide-react'

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
      primaryColor: "from-orange-500 to-orange-400",
      accentColor: "from-orange-600 to-orange-500",
      bgGradient: "from-orange-500/20 via-orange-400/10 to-transparent",
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
      primaryColor: "from-orange-600 to-orange-400",
      accentColor: "from-orange-700 to-orange-500",
      bgGradient: "from-orange-600/20 via-orange-400/10 to-transparent",
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
      primaryColor: "from-orange-500 to-orange-300",
      accentColor: "from-orange-600 to-orange-400",
      bgGradient: "from-orange-500/20 via-orange-300/10 to-transparent",
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
      primaryColor: "from-orange-400 to-orange-300",
      accentColor: "from-orange-500 to-orange-400",
      bgGradient: "from-orange-400/20 via-orange-300/10 to-transparent",
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
      primaryColor: "from-orange-600 to-orange-400",
      accentColor: "from-orange-700 to-orange-500",
      bgGradient: "from-orange-600/20 via-orange-400/10 to-transparent",
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
      primaryColor: "from-orange-500 to-orange-400",
      accentColor: "from-orange-600 to-orange-500",
      bgGradient: "from-orange-500/20 via-orange-400/10 to-transparent",
      stats: "99.9% Risk Mitigation",
      metric: "Zero Critical Failures",
      features: ["Risk Assessment", "Compliance Management", "Business Continuity"]
    }
  ]

  const trustedCompanies = [
    { name: "Microsoft", logo: "MS" },
    { name: "Apple", logo: "AP" },
    { name: "Google", logo: "GO" },
    { name: "Amazon", logo: "AM" }
  ]

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentServiceIndex]
  const IconComponent = currentService.icon

  return (
    <div>
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      >
        {/* Ultra-Premium Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradients */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/15 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-600/10 via-transparent to-transparent"></div>
          
          {/* Dynamic animated orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/5 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-orange-400/20 to-orange-500/15 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -30, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-orange-300/25 to-orange-400/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Service-specific background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} transition-all duration-1000 ease-out`}></div>
          
          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              backgroundImage: `radial-gradient(circle at 40px 40px, orange 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }} 
          className="container px-4 md:px-6 mx-auto relative z-10"
        >
          <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-orange-500/30 shadow-2xl shadow-orange-500/20">
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-400" />
                  <motion.div
                    className="absolute inset-0 bg-orange-400/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="text-orange-300 text-xs sm:text-sm font-semibold tracking-wider">ELITE BUSINESS TRANSFORMATION</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-400 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <motion.span 
                  className="block mb-3 sm:mb-4 lg:mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transforming Businesses with
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
                >
                  Elite Strategic Solutions
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-300/20 blur-2xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto font-light px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We deliver unmatched strategic consulting and implementation services that drive exceptional business
                results for elite organizations seeking unprecedented growth and market leadership.
              </motion.p>
            </motion.div>
          </div>

          {/* Ultra-Premium Service Card Carousel */}
          <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
            <div className="relative w-full max-w-4xl lg:max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ x: 500, opacity: 0, rotateY: 60, scale: 0.7 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ x: -500, opacity: 0, rotateY: -60, scale: 0.7 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.4 }
                  }}
                  className="relative group"
                  style={{ perspective: '1500px' }}
                >
                  {/* Floating elements around card */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400/40 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        x: [-5, 5, -5],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Main Card Container */}
                  <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-2xl border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20 overflow-hidden group-hover:shadow-3xl group-hover:shadow-orange-500/30 transition-all duration-500">
                    
                    {/* Ultra-premium glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500/50 to-orange-400/50 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                    
                    {/* Animated Background Gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} opacity-60`}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
                          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${currentService.primaryColor} flex items-center justify-center shadow-2xl shadow-orange-500/40 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                        >
                          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white relative z-10" />
                          <motion.div
                            className="absolute inset-0 bg-white/30 rounded-2xl sm:rounded-3xl blur-md"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/30 to-orange-600/30 rounded-2xl sm:rounded-3xl blur-lg opacity-50"></div>
                        </motion.div>
                        
                        <div className="text-center lg:text-left flex-grow">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className={`text-sm sm:text-base font-bold tracking-wider bg-gradient-to-r ${currentService.primaryColor} bg-clip-text text-transparent mb-2 sm:mb-3 flex items-center justify-center lg:justify-start gap-2`}
                          >
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                            {currentService.subtitle}
                          </motion.p>
                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
                          >
                            {currentService.title}
                          </motion.h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl font-light"
                      >
                        {currentService.description}
                      </motion.p>
                      
                      {/* Features Grid */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10"
                      >
                        {currentService.features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md border border-orange-500/30 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/50 group/feature"
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-r ${currentService.primaryColor} flex items-center justify-center shadow-lg`}>
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-300 font-medium group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Stats Section */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8"
                      >
                        <motion.div 
                          className={`flex items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${currentService.primaryColor} shadow-2xl shadow-orange-500/40 w-full sm:w-auto`}
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-white font-bold text-sm sm:text-base lg:text-xl truncate">{currentService.stats}</p>
                            <p className="text-white/90 text-xs sm:text-sm font-medium">Proven Excellence</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-2xl sm:rounded-3xl bg-black/80 backdrop-blur-xl border-2 border-orange-500/40 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 w-full sm:w-auto"
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-white font-bold text-sm sm:text-base lg:text-xl truncate">{currentService.metric}</p>
                            <p className="text-gray-400 text-xs sm:text-sm font-medium">Performance Impact</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Enhanced Navigation */}
              <div className="flex justify-center mt-8 sm:mt-12 gap-4 sm:gap-6">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? 'w-12 sm:w-16 h-4 sm:h-6' 
                        : 'w-4 sm:w-6 h-4 sm:h-6 hover:w-8 sm:hover:w-10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? `bg-gradient-to-r ${service.primaryColor} shadow-lg shadow-orange-500/50` 
                        : 'bg-orange-500/40 hover:bg-orange-400/60'
                    }`} />
                    {index === currentServiceIndex && (
                      <>
                        <div className="absolute inset-1 rounded-full bg-white/20 blur-sm"></div>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/10"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="mt-6 sm:mt-8 w-full bg-gray-800/60 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm border border-orange-500/20">
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentService.primaryColor} rounded-full shadow-lg relative overflow-hidden`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                  key={currentServiceIndex}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Ultra-Premium CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-8 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 xl:py-12 rounded-full text-base sm:text-lg lg:text-xl shadow-2xl shadow-orange-500/30 transition-all duration-500 hover:shadow-3xl hover:shadow-orange-500/50 border-2 border-orange-400/30 group relative overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
                <span className="text-sm sm:text-base lg:text-xl">Schedule Elite Consultation</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <motion.button
              className="px-8 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 xl:py-12 rounded-full text-base sm:text-lg lg:text-xl border-2 border-orange-500/50 text-orange-300 hover:bg-orange-500/20 backdrop-blur-md font-bold transition-all duration-500 hover:border-orange-400/70 hover:text-orange-200 bg-black/40 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 text-sm sm:text-base lg:text-xl">View Success Stories</span>
            </motion.button>
          </motion.div>

          {/* Ultra-Premium Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-12 sm:pt-16 lg:pt-24"
          >
            <div className="bg-gradient-to-r from-black/60 via-gray-900/80 to-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border-2 border-orange-500/30 p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl shadow-orange-500/10 relative overflow-hidden">
              
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-400/5"></div>
              <motion.div
                className="absolute inset-0 bg-orange-500/10 rounded-2xl sm:rounded-3xl blur-3xl"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                
                {/* Company Logos Section */}
                {/* <div className="w-full max-w-4xl">
                  <motion.p 
                    className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider mb-6 sm:mb-8 text-center flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                    TRUSTED BY GLOBAL LEADERS
                  </motion.p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {trustedCompanies.map((company, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.15, type: "spring", bounce: 0.4 }}
                        className="flex flex-col items-center group cursor-pointer"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:shadow-3xl group-hover:shadow-orange-500/50 transition-all duration-500 border-2 border-orange-400/30 relative overflow-hidden">
                          <Building2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl"
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/40 to-orange-600/40 rounded-2xl sm:rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 font-semibold group-hover:text-orange-300 transition-colors duration-300">{company.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}
                
                {/* Stats and Reviews Section */}
                {/* <div className="w-full max-w-2xl text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <div>
                      <motion.p 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 2.2, type: "spring", bounce: 0.3 }}
                      >
                        Trusted by <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">500+</span>
                      </motion.p>
                      <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium">Elite Organizations Worldwide</p>
                    </div>
                    
                    <motion.div 
                      className="flex items-center justify-center gap-3 sm:gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.4, delay: 2.5 + i * 0.1, type: "spring", bounce: 0.6 }}
                            whileHover={{ scale: 1.2, rotate: 15 }}
                          >
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400 fill-current drop-shadow-lg" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-white text-lg sm:text-xl font-bold">5.0</span>
                      <span className="text-gray-400 text-base sm:text-lg">•</span>
                      <span className="text-gray-400 font-medium text-sm sm:text-base">500+ Reviews</span>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-black/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-orange-500/30 backdrop-blur-md shadow-xl relative overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-orange-500/5 rounded-2xl sm:rounded-3xl"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                          </motion.div>
                          <span className="text-orange-300 text-xs sm:text-sm font-bold tracking-wide">CLIENT TESTIMONIAL</span>
                        </div>
                        <p className="text-orange-300 text-sm sm:text-base lg:text-lg italic leading-relaxed mb-3 sm:mb-4">
                          "Exceptional results that completely transformed our business strategy and market position."
                        </p>
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-xs sm:text-sm">Fortune 100 CEO</p>
                            <p className="text-gray-400 text-xs">Global Technology Leader</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ultra-Premium Scroll Indicator */}
        {/* <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <motion.span 
              className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
              <span className="hidden sm:inline">DISCOVER EXCELLENCE</span>
              <span className="sm:hidden">DISCOVER</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
            </motion.span>
            <div className="relative w-10 h-16 sm:w-12 sm:h-20 rounded-full border-2 border-orange-500/50 flex items-center justify-center p-2 sm:p-3 backdrop-blur-md bg-black/30 shadow-xl shadow-orange-500/20">
              <motion.div 
                className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div> */}

        {/* Additional floating elements for ultra-premium feel */}
        <motion.div
          className="absolute top-1/4 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-3/4 right-8 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-300/50 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-500/40 rounded-full"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </div>
  )
}

export default Hero