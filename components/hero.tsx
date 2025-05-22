import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Shield, Zap, Star, Award, ChevronRight, Building2 } from 'lucide-react'

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
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalInc", logo: "GI" },
    { name: "InnovateLtd", logo: "IL" },
    { name: "FutureCo", logo: "FC" }
  ]

  // Faster auto-rotate services - reduced from 5000ms to 2500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 2500) // 2.5 seconds per card for faster transitions

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentServiceIndex]
  const IconComponent = currentService.icon

  return (
    <div>
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center pt-40 pb-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      >
        {/* Enhanced Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-600/5 via-transparent to-transparent"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} transition-all duration-500 ease-out`}></div>
        </div>
        
        {/* Sophisticated pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, orange 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-black/80 to-gray-900/70 backdrop-blur-md border border-orange-500/30 shadow-lg shadow-orange-500/10">
                <motion.span 
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-orange-300 text-sm font-medium tracking-wide">Industry-Leading Business Solutions</span>
                <Star className="w-4 h-4 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="block mb-4 text-white">Transforming Businesses with</span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent bg-300% animate-gradient">
                  Elite Strategic Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
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
                    duration: 0.5, // Reduced from 0.9 to 0.5
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.3 } // Reduced from 0.6 to 0.3
                  }}
                  className="relative group"
                  style={{ perspective: '1200px' }}
                >
                  {/* Main Card Container */}
                  <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden">
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentService.bgGradient} opacity-60 transition-all duration-500`}></div>
                    
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-3xl">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentService.accentColor} opacity-20 blur-xl transition-all duration-500`}></div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 0.1, type: "spring", bounce: 0.4 }} // Reduced timing
                          className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${currentService.primaryColor} flex items-center justify-center shadow-xl shadow-orange-500/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-12 h-12 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                        </motion.div>
                        
                        <div className="text-center md:text-left flex-grow">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.15 }} // Reduced timing
                            className={`text-sm font-semibold tracking-wide bg-gradient-to-r ${currentService.primaryColor} bg-clip-text text-transparent mb-2`}
                          >
                            {currentService.subtitle}
                          </motion.p>
                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }} // Reduced timing
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
                        transition={{ duration: 0.3, delay: 0.25 }} // Reduced timing
                        className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl font-light"
                      >
                        {currentService.description}
                      </motion.p>
                      
                      {/* Features Grid */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }} // Reduced timing
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                      >
                        {currentService.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-orange-500/20 shadow-sm">
                            <ChevronRight className={`w-4 h-4 text-white bg-gradient-to-r ${currentService.primaryColor} rounded p-0.5`} />
                            <span className="text-gray-300 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                      
                      {/* Stats Section */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.35 }} // Reduced timing
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                      >
                        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r ${currentService.primaryColor} shadow-lg shadow-orange-500/30`}>
                          <Award className="w-6 h-6 text-white" />
                          <div>
                            <p className="text-white font-bold text-lg">{currentService.stats}</p>
                            <p className="text-white/90 text-sm">Proven Results</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-black/60 backdrop-blur-md border border-orange-500/30 shadow-lg">
                          <TrendingUp className="w-6 h-6 text-orange-400" />
                          <div>
                            <p className="text-white font-bold text-lg">{currentService.metric}</p>
                            <p className="text-gray-400 text-sm">Performance Metric</p>
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
                    className={`relative transition-all duration-200 ${
                      index === currentServiceIndex 
                        ? 'w-12 h-4' 
                        : 'w-4 h-4 hover:w-6'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-200 ${
                      index === currentServiceIndex 
                        ? `bg-gradient-to-r ${services[index].primaryColor} shadow-lg shadow-orange-500/30` 
                        : 'bg-orange-500/30 hover:bg-orange-400/50'
                    }`} />
                    {index === currentServiceIndex && (
                      <div className="absolute inset-0.5 rounded-full bg-white/20 blur-sm"></div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="mt-6 w-full bg-gray-800/40 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentService.primaryColor} rounded-full shadow-lg`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }} // Reduced from 5 to 2.5
                  key={currentServiceIndex}
                />
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold px-16 py-10 rounded-full text-xl shadow-xl shadow-orange-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-2 border border-orange-400/30 group">
              Schedule Elite Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              className="px-16 py-10 rounded-full text-xl border-orange-500/40 text-orange-300 hover:bg-orange-500/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:border-orange-400/60 hover:text-orange-200 bg-black/20"
            >
              View Success Stories
            </Button>
          </div>

          {/* Fixed and Enhanced Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="pt-20"
          >
            <div className="bg-gradient-to-r from-black/40 via-gray-900/60 to-black/40 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* Left Side - Company Logos */}
                <div className="flex-1">
                  <p className="text-orange-300 text-sm font-medium tracking-wide mb-6 text-center lg:text-left">
                    TRUSTED BY INDUSTRY LEADERS
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {trustedCompanies.map((company, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        className="flex flex-col items-center group cursor-pointer"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-300 group-hover:scale-110 border border-orange-400/30">
                          <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 mt-2 font-medium">{company.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Vertical Divider */}
                <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
                
                {/* Right Side - Stats and Reviews */}
                <div className="flex-1 text-center lg:text-right">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trusted by <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">500+</span>
                      </p>
                      <p className="text-gray-400 text-lg">Industry Leaders Worldwide</p>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-end gap-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                          >
                            <Star className="w-6 h-6 text-orange-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-white text-lg font-semibold">5.0</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">200+ Reviews</span>
                    </div>
                    
                    <div className="bg-black/40 rounded-2xl p-4 border border-orange-500/20">
                      <p className="text-orange-300 text-sm italic">
                        "Exceptional results that transformed our business strategy completely."
                      </p>
                      <p className="text-gray-400 text-xs mt-2">— Fortune 500 CEO</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-gray-400 text-sm font-medium tracking-wide">Explore Excellence</span>
            <div className="w-10 h-16 rounded-full border-2 border-orange-500/40 flex items-center justify-center p-2 backdrop-blur-sm bg-black/20">
              <motion.div 
                className="w-3 h-3 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full"
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