import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Star, Medal, Crown, Shield, Zap, Target, TrendingUp, CheckCircle } from 'lucide-react'

const AwardsRecognition = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [hoveredAward, setHoveredAward] = useState(null)

  const awards = [
    {
      id: 1,
      title: "Business Excellence Award",
      organization: "Global Business Institute",
      year: "2024",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-400",
      accentColor: "from-yellow-600 to-yellow-500",
      bgColor: "from-yellow-500/20 to-yellow-400/10",
      description: "Outstanding achievement in strategic consulting and business transformation",
      category: "Excellence"
    },
    {
      id: 2,
      title: "Innovation Leader",
      organization: "Tech Innovation Council",
      year: "2024",
      icon: Zap,
      color: "from-blue-500 to-blue-400",
      accentColor: "from-blue-600 to-blue-500",
      bgColor: "from-blue-500/20 to-blue-400/10",
      description: "Recognized for breakthrough digital transformation solutions",
      category: "Innovation"
    },
    {
      id: 3,
      title: "Top Consulting Firm",
      organization: "Industry Leaders Forum",
      year: "2023",
      icon: Crown,
      color: "from-purple-500 to-purple-400",
      accentColor: "from-purple-600 to-purple-500",
      bgColor: "from-purple-500/20 to-purple-400/10",
      description: "Ranked #1 in strategic consulting services and client satisfaction",
      category: "Leadership"
    },
    {
      id: 4,
      title: "Customer Excellence",
      organization: "Service Quality Alliance",
      year: "2023",
      icon: Star,
      color: "from-green-500 to-green-400",
      accentColor: "from-green-600 to-green-500",
      bgColor: "from-green-500/20 to-green-400/10",
      description: "Exceptional client service and satisfaction ratings above 98%",
      category: "Service"
    },
    {
      id: 5,
      title: "Digital Pioneer Award",
      organization: "Digital Transformation Institute",
      year: "2023",
      icon: Target,
      color: "from-orange-500 to-orange-400",
      accentColor: "from-orange-600 to-orange-500",
      bgColor: "from-orange-500/20 to-orange-400/10",
      description: "Leading digital transformation initiatives across Fortune 500 companies",
      category: "Digital"
    },
    {
      id: 6,
      title: "Performance Excellence",
      organization: "Global Performance Council",
      year: "2022",
      icon: TrendingUp,
      color: "from-red-500 to-red-400",
      accentColor: "from-red-600 to-red-500",
      bgColor: "from-red-500/20 to-red-400/10",
      description: "Outstanding ROI delivery and operational efficiency improvements",
      category: "Performance"
    },
    {
      id: 7,
      title: "Trust & Security Award",
      organization: "Business Security Alliance",
      year: "2022",
      icon: Shield,
      color: "from-indigo-500 to-indigo-400",
      accentColor: "from-indigo-600 to-indigo-500",
      bgColor: "from-indigo-500/20 to-indigo-400/10",
      description: "Highest standards in data security and client confidentiality",
      category: "Security"
    },
    {
      id: 8,
      title: "Industry Champion",
      organization: "Professional Services Awards",
      year: "2022",
      icon: Medal,
      color: "from-teal-500 to-teal-400",
      accentColor: "from-teal-600 to-teal-500",
      bgColor: "from-teal-500/20 to-teal-400/10",
      description: "Championing excellence in professional consulting services",
      category: "Achievement"
    }
  ]

  const stats = [
    { number: "50+", label: "Awards Won", icon: Trophy },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Years Excellence", icon: Award },
    { number: "500+", label: "Success Stories", icon: CheckCircle }
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, #f97316 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-400/5 border border-orange-500/20 mb-6">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="text-orange-600 text-sm font-semibold tracking-wide">INDUSTRY RECOGNITION</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Awards & <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our unwavering commitment to excellence has earned recognition from leading industry authorities and prestigious organizations worldwide
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredAward(award.id)}
                onMouseLeave={() => setHoveredAward(null)}
                className="group relative"
              >
                {/* Main Award Card */}
                <div className="relative p-8 rounded-3xl bg-white shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/20 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${award.accentColor} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Icon and Year */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        animate={hoveredAward === award.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-bold shadow-md`}>
                        {award.year}
                      </div>
                    </div>
                    
                    {/* Award Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {award.title}
                    </h3>
                    
                    {/* Organization */}
                    <p className="text-gray-600 font-medium mb-4 text-sm">
                      {award.organization}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${award.color} text-white shadow-sm`}>
                        {award.category}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {award.description}
                    </p>
                    
                    {/* Hover Effect - Additional Info */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredAward === award.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <div className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          Verified Achievement
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Success Story?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let us help you achieve the same level of excellence that has earned us industry recognition
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-xl shadow-orange-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardsRecognition