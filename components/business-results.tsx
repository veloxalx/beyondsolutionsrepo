"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface MetricCardProps {
  title: string
  value: number
  suffix: string
  description: string
  color: string
  delay: number
}

function MetricCard({ title, value, suffix, description, color, delay }: MetricCardProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = performance.now()
    const endValue = value

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const nextCount = Math.floor(progress * endValue)

      if (nextCount !== countRef.current) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateCount)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [inView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 ${color} hover:shadow-xl transition-shadow`}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="text-5xl font-bold mb-3">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{description}</div>
    </motion.div>
  )
}

export default function BusinessResults() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Measurable Business Impact</h2>
          <p className="text-xl text-gray-600">
            Our solutions consistently deliver exceptional results across key business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            title="Revenue Growth"
            value={35}
            suffix="%"
            description="Average increase in revenue for our clients"
            color="border-[#F5A623]"
            delay={0}
          />
          <MetricCard
            title="Cost Reduction"
            value={40}
            suffix="%"
            description="Average operational cost savings"
            color="border-emerald-500"
            delay={200}
          />
          <MetricCard
            title="Productivity"
            value={65}
            suffix="%"
            description="Average improvement in process efficiency"
            color="border-blue-500"
            delay={400}
          />
          <MetricCard
            title="Customer Satisfaction"
            value={85}
            suffix="%"
            description="Average improvement in satisfaction scores"
            color="border-purple-500"
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}
