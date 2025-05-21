"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface StatisticCardProps {
  value: number
  label: string
  description: string
  suffix?: string
  accentColor?: string
}

export default function StatisticCard({
  value,
  label,
  description,
  suffix = "",
  accentColor = "from-blue-500 to-indigo-600",
}: StatisticCardProps) {
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

    requestAnimationFrame(updateCount)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
        {count}
        {suffix}
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-2">{label}</div>
      <div className="text-gray-500">{description}</div>
    </motion.div>
  )
}
