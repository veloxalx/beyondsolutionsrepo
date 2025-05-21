"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Trophy, Zap, Users } from "lucide-react"

interface CounterItemProps {
  value: number
  label: string
  icon: React.ReactNode
  suffix?: string
}

function CounterItem({ value, label, icon, suffix = "" }: CounterItemProps) {
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
    <div ref={ref} className="text-center">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center">{icon}</div>
      </div>
      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#F5A623] to-[#F5A623]/70 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-gray-700 font-medium">{label}</div>
    </div>
  )
}

export default function CounterSection() {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <CounterItem value={500} label="Clients Served" icon={<Users className="h-8 w-8 text-[#F5A623]" />} />
          <CounterItem value={150} label="Projects Completed" icon={<Trophy className="h-8 w-8 text-[#F5A623]" />} />
          <CounterItem value={10} label="Years Experience" icon={<Zap className="h-8 w-8 text-[#F5A623]" />} />
          <CounterItem
            value={98}
            suffix="%"
            label="Client Satisfaction"
            icon={<CheckCircle className="h-8 w-8 text-[#F5A623]" />}
          />
        </div>
      </div>
    </section>
  )
}
