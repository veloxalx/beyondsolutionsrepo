"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatsCounterProps {
  value: number
  label: string
  icon: React.ReactNode
  suffix?: string
  duration?: number
}

export default function StatsCounter({ value, label, icon, suffix = "", duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const countTo = value

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const nextCount = Math.floor(progress * countTo)

      if (nextCount !== countRef.current) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount)
      }
    }

    rafRef.current = requestAnimationFrame(updateCount)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}
