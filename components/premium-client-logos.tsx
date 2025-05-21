"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

const premiumClients = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Adobe", logo: "/logos/adobe.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Spotify", logo: "/logos/spotify.svg" },
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
  { name: "Tesla", logo: "/logos/tesla.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
]

export default function PremiumClientLogos() {
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
          Trusted by the World's Most Prestigious Organizations
        </motion.h2>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-16 animate-marquee">
          {premiumClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-8"
            >
              <div className="relative h-8 w-32">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex space-x-16 animate-marquee2">
          {premiumClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-8"
            >
              <div className="relative h-8 w-32">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
