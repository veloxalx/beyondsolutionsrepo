"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Trophy, Star, Zap, Target, TrendingUp, Award } from "lucide-react"

const process = [
  {
    step: "01",
    title: "Elite Discovery",
    description:
      "Our proprietary discovery process deeply analyzes your business, goals, challenges, and vision for the future. This comprehensive analysis forms the foundation of our strategic approach.",
    icon: <Star className="w-6 h-6" />,
    highlight: "Proprietary Analysis Framework"
  },
  {
    step: "02", 
    title: "Premium Strategy Development",
    description:
      "Our expert team develops a customized strategy aligned with your objectives and market opportunities, leveraging our proprietary data-driven insights and industry expertise.",
    icon: <Target className="w-6 h-6" />,
    highlight: "Data-Driven Strategic Planning"
  },
  {
    step: "03",
    title: "Superior Implementation",
    description:
      "We execute the strategy with unmatched precision, adapting as needed to ensure optimal results. Our elite approach allows for continuous refinement throughout the process.",
    icon: <Zap className="w-6 h-6" />,
    highlight: "Precision Execution Excellence"
  },
  {
    step: "04",
    title: "Advanced Optimization",
    description:
      "We continuously monitor performance, analyze results, and make data-driven adjustments to maximize effectiveness and ROI beyond industry standards.",
    icon: <TrendingUp className="w-6 h-6" />,
    highlight: "Continuous Performance Enhancement"
  },
  {
    step: "05",
    title: "Exceptional Growth & Scaling",
    description:
      "Once we've established success, we focus on our proprietary scaling strategies to expand your reach, impact, and business growth for unprecedented long-term success.",
    icon: <Award className="w-6 h-6" />,
    highlight: "Unprecedented Growth Acceleration"
  },
]

export default function ExclusiveProcess() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,165,0,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30"
          >
            <Trophy className="h-5 w-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">Proprietary Methodology</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-8 tracking-tight"
          >
            Our Elite Process
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Our exclusive methodology ensures superior results and exceptional outcomes for every client through our proven five-stage transformation framework.
          </motion.p>
        </div>

        <div ref={targetRef} className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[49px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500 origin-top shadow-lg shadow-orange-500/50"
          />
          
          {/* Glowing Timeline Background */}
          <div className="absolute left-[48px] md:left-[calc(50%-1px)] top-0 bottom-0 w-3 bg-gradient-to-b from-orange-500/20 via-orange-600/20 to-orange-500/20 blur-sm"></div>

          {/* Process Steps */}
          {process.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start mb-20 ${
                i % 2 === 0 ? "md:text-left" : "md:text-right md:flex-row-reverse"
              }`}
            >
              {/* Step Number Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative z-20 flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/50 relative overflow-hidden group cursor-pointer">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Step number */}
                  <span className="relative z-10 text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </span>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-pulse"></div>
                </div>
                
                {/* Connecting dots */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-orange-500/20 animate-spin" style={{ animationDuration: '10s' }}></div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className={`relative bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl max-w-lg group hover:shadow-orange-500/20 transition-all duration-500 ${
                  i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and highlight */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center border border-orange-500/30">
                      <div className="text-orange-400">
                        {item.icon}
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                      <span className="text-orange-300 text-xs font-semibold">{item.highlight}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400/30 rounded-full"></div>
                </div>
                
                {/* Card border glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </motion.div>

              {/* Step connector lines for desktop */}
              <div className={`hidden md:block absolute top-12 ${
                i % 2 === 0 ? 'left-24 right-1/2' : 'right-24 left-1/2'
              } h-px bg-gradient-to-r from-orange-500/30 to-transparent`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-500/10 border border-orange-500/20 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-6 w-6 text-orange-400" />
            <span className="text-orange-300 font-semibold">Ready to Begin Your Transformation?</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience the Elite Difference
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the exclusive circle of organizations that have achieved unprecedented success through our proprietary methodology.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 group">
            Start Your Elite Journey
            <motion.span 
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}