"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const challenges = [
  {
    id: "growth",
    title: "Growth Stagnation",
    description: "Struggling to achieve sustainable growth in revenue, market share, or customer base.",
    symptoms: [
      "Declining or flat revenue growth",
      "Increasing customer acquisition costs",
      "Saturated current markets",
      "Ineffective marketing and sales efforts",
    ],
    solution:
      "Our growth acceleration framework identifies untapped opportunities and optimizes your entire revenue generation engine.",
    results: ["35% average increase in revenue growth", "28% improvement in customer acquisition efficiency"],
  },
  {
    id: "efficiency",
    title: "Operational Inefficiency",
    description: "Inefficient processes causing high costs, slow delivery, and reduced profit margins.",
    symptoms: [
      "Rising operational costs",
      "Inefficient workflows and bottlenecks",
      "Declining profit margins",
      "Inconsistent quality and delivery",
    ],
    solution:
      "Our operational excellence methodology streamlines processes and eliminates waste while improving quality and speed.",
    results: ["40% reduction in operational costs", "65% improvement in process efficiency"],
  },
  {
    id: "digital",
    title: "Digital Transformation",
    description: "Legacy systems and outdated processes creating friction and limiting business agility.",
    symptoms: [
      "Outdated technology systems",
      "Poor customer experience metrics",
      "Inability to adapt to market changes",
      "Security and compliance concerns",
    ],
    solution:
      "Our digital transformation framework modernizes your technology stack while ensuring alignment with business goals.",
    results: ["75% improvement in customer satisfaction", "60% reduction in IT maintenance costs"],
  },
  {
    id: "talent",
    title: "Talent Challenges",
    description: "Difficulty attracting, retaining, and optimizing your workforce in a competitive market.",
    symptoms: [
      "High employee turnover",
      "Skills gaps in critical areas",
      "Low employee engagement",
      "Ineffective leadership development",
    ],
    solution:
      "Our talent optimization approach aligns your people strategy with business objectives to build high-performing teams.",
    results: ["45% reduction in employee turnover", "35% increase in employee productivity"],
  },
]

export default function BusinessChallenges() {
  const [activeChallenge, setActiveChallenge] = useState(challenges[0])

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#F5A623]/10 text-[#F5A623] hover:bg-[#F5A623]/20">Business Challenges</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            What Business Challenge Are You Facing?
          </h2>
          <p className="text-xl text-gray-600">
            We help businesses overcome specific challenges and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => setActiveChallenge(challenge)}
              className={`p-6 rounded-xl transition-all duration-300 text-left ${
                activeChallenge.id === challenge.id
                  ? "bg-gradient-to-br from-[#F5A623] to-[#FF4D00] text-white shadow-lg shadow-[#F5A623]/20"
                  : "bg-white hover:bg-gray-50 border border-gray-100 hover:shadow-md"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${
                  activeChallenge.id === challenge.id ? "text-white" : "text-gray-900"
                }`}
              >
                {challenge.title}
              </h3>
              <p className={`text-sm ${activeChallenge.id === challenge.id ? "text-white/90" : "text-gray-600"}`}>
                {challenge.description}
              </p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeChallenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeChallenge.title}</h3>
                  <p className="text-gray-700 mb-6">{activeChallenge.description}</p>

                  <h4 className="font-semibold text-gray-900 mb-3">Common Symptoms:</h4>
                  <ul className="space-y-3 mb-6">
                    {activeChallenge.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-red-500" />
                        </div>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Solution:</h4>
                  <p className="text-gray-700 mb-6">{activeChallenge.solution}</p>

                  <h4 className="font-semibold text-gray-900 mb-3">Typical Results:</h4>
                  <ul className="space-y-3 mb-6">
                    {activeChallenge.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-[#F5A623]" />
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group w-full mt-4">
                    <span>Solve this challenge</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
