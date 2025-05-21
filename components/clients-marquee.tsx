"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const clients = ["Microsoft", "Adobe", "Google", "Amazon", "Spotify", "IBM", "Oracle", "Tesla", "Apple", "Samsung"]

export default function ClientsMarquee() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="w-full py-16 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-xl font-medium text-center text-white/70 mb-12"
        >
          Trusted by Industry Leaders Worldwide
        </motion.h2>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-16 animate-marquee">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-8"
            >
              <span className="text-white font-medium">{client}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex space-x-16 animate-marquee2">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-8"
            >
              <span className="text-white font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
