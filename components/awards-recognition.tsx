"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

const awards = [
  "Best Business Consultancy 2023",
  "Excellence in Digital Transformation",
  "Top Strategic Partner Award",
  "Innovation Leader 2023",
  "Client Satisfaction Excellence",
]

export default function AwardsRecognition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full bg-gradient-to-r from-[#F5A623] to-[#FF4D00] py-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-black" />
            <span className="font-bold text-black">Award-Winning Excellence:</span>
          </div>
          {awards.map((award, i) => (
            <div key={i} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black/30 mr-2"></span>
              <span className="text-black font-medium">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
