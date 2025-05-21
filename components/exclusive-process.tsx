"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Trophy } from "lucide-react"

const process = [
  {
    step: "01",
    title: "Elite Discovery",
    description:
      "Our proprietary discovery process deeply analyzes your business, goals, challenges, and vision for the future. This comprehensive analysis forms the foundation of our strategic approach.",
  },
  {
    step: "02",
    title: "Premium Strategy Development",
    description:
      "Our expert team develops a customized strategy aligned with your objectives and market opportunities, leveraging our proprietary data-driven insights and industry expertise.",
  },
  {
    step: "03",
    title: "Superior Implementation",
    description:
      "We execute the strategy with unmatched precision, adapting as needed to ensure optimal results. Our elite approach allows for continuous refinement throughout the process.",
  },
  {
    step: "04",
    title: "Advanced Optimization",
    description:
      "We continuously monitor performance, analyze results, and make data-driven adjustments to maximize effectiveness and ROI beyond industry standards.",
  },
  {
    step: "05",
    title: "Exceptional Growth & Scaling",
    description:
      "Once we've established success, we focus on our proprietary scaling strategies to expand your reach, impact, and business growth for unprecedented long-term success.",
  },
]

export default function ExclusiveProcess() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#F5A623]/10 text-[#F5A623] font-medium">
            <Trophy className="h-4 w-4" />
            <span>Proprietary Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Our Elite Process</h2>
          <p className="text-xl text-gray-600">
            Our exclusive methodology ensures superior results and exceptional outcomes for every client.
          </p>
        </div>

        <div ref={targetRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F5A623] to-[#FF4D00] origin-top"
          />

          {/* Process steps */}
          {process.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-20 h-20 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FF4D00] flex items-center justify-center text-black font-bold text-2xl z-10 flex-shrink-0 ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {item.step}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-lg ${
                  i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
