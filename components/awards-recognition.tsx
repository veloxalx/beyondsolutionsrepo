import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Star, Medal, Crown, Shield, Zap, Target, TrendingUp, CheckCircle, Globe, Handshake, Lightbulb } from 'lucide-react'

const AwardsRecognition = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [hoveredAward, setHoveredAward] = useState(null)

const awards = [
  {
    id: 1,
    title: "BTL Excellence Award",
    organization: "Sri Lanka Marketing Association",
    year: "2024",
    icon: Star,
    color: "from-orange-500 to-orange-600",
    accentColor: "from-orange-400 to-orange-500",
    bgColor: "from-orange-500/10 to-orange-600/5",
    description: "Recognized as the leader in Below-The-Line marketing, delivering over 300 impactful integrated campaigns",
    category: "BTL Marketing"
  },
  {
    id: 2,
    title: "Creative Design Excellence",
    organization: "Design Council Sri Lanka",
    year: "2024",
    icon: Trophy,
    color: "from-orange-600 to-yellow-500",
    accentColor: "from-orange-500 to-yellow-400",
    bgColor: "from-orange-600/10 to-yellow-500/5",
    description: "Awarded for exceptional design and fabrication of promotional materials that elevate brand experiences",
    category: "Creative Design"
  },
  {
    id: 3,
    title: "Strategic Marketing Innovation",
    organization: "Marketing Innovation Forum",
    year: "2024",
    icon: Zap,
    color: "from-orange-400 to-orange-600",
    accentColor: "from-orange-300 to-orange-500",
    bgColor: "from-orange-400/10 to-orange-600/5",
    description: "Honored for crafting innovative marketing strategies that drive tangible results across diverse industries",
    category: "Strategy"
  },
  {
    id: 4,
    title: "Project Management Excellence",
    organization: "Project Management Institute",
    year: "2023",
    icon: Target,
    color: "from-orange-500 to-blue-500",
    accentColor: "from-orange-400 to-blue-400",
    bgColor: "from-orange-500/10 to-blue-500/5",
    description: "Recognized for flawless project planning and management, delivering every campaign as a masterpiece",
    category: "Project Management"
  },
  {
    id: 5,
    title: "Integrated Solutions Pioneer",
    organization: "Marketing Solutions Alliance",
    year: "2023",
    icon: Handshake,
    color: "from-orange-600 to-green-500",
    accentColor: "from-orange-500 to-green-400",
    bgColor: "from-orange-600/10 to-green-500/5",
    description: "Awarded for pioneering 360° integrated marketing solutions that transform brands beyond the ordinary",
    category: "Integration"
  },
  {
    id: 6,
    title: "Brand Transformation Leader",
    organization: "Brand Development Council",
    year: "2023",
    icon: Crown,
    color: "from-orange-500 to-purple-500",
    accentColor: "from-orange-400 to-purple-400",
    bgColor: "from-orange-500/10 to-purple-500/5",
    description: "Acknowledged for consistently elevating brands to new heights through creative brilliance and strategic thinking",
    category: "Brand Development"
  }
];

const stats = [
  { number: "300+", label: "BTL Campaigns Delivered", icon: Star },
  { number: "360°", label: "Integrated Marketing Solutions", icon: Trophy },
  { number: "7+", label: "Years of Creative Excellence", icon: Crown },
  { number: "100%", label: "Client Satisfaction Rate", icon: CheckCircle }
];


  return (
    <section 
      ref={sectionRef}
      className="w-full py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-600/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, #f97316 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        {/* Animated lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"></div>
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 mb-6">
            <Award className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-semibold tracking-wide">INDUSTRY RECOGNITION</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" id='awards'>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Awards & </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            As Sri Lanka's leading BTL agency, Beyond Solutions has earned recognition for transforming brands through innovative, integrated marketing excellence
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
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/60 backdrop-blur-sm shadow-xl shadow-black/20 border border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group hover:border-orange-400/40"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/80 backdrop-blur-sm shadow-xl shadow-black/20 border border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden h-full flex flex-col hover:border-orange-500/40">
                  
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
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg shadow-orange-500/30 transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-bold shadow-md`}>
                        {award.year}
                      </div>
                    </div>
                    
                    {/* Award Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                      {award.title}
                    </h3>
                    
                    {/* Organization */}
                    <p className="text-gray-300 font-medium mb-4 text-sm">
                      {award.organization}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${award.color} text-white shadow-sm`}>
                        {award.category}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {award.description}
                    </p>
                    
                    {/* Hover Effect - Additional Info */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredAward === award.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-600">
                        <div className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
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
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Brand <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Beyond the Ordinary</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the Beyond Solutions difference - where every campaign becomes a masterpiece and every brand reaches new heights
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 group inline-block"
            >
              Start Your Journey Beyond
              <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              >
              →
              </motion.span>
            </a>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardsRecognition