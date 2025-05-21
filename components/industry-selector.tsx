"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const industries = [
  {
    id: "technology",
    name: "Technology",
    icon: "/icons/industry-technology.svg",
    description: "Accelerate innovation and growth in the fast-paced technology sector with our specialized solutions.",
    challenges: [
      "Rapid market changes requiring agile adaptation",
      "Intense competition for talent and market share",
      "Balancing innovation with operational efficiency",
    ],
    solutions: [
      "Digital transformation acceleration",
      "Product development optimization",
      "Talent acquisition and retention strategies",
    ],
    caseStudy: {
      company: "TechVision Inc.",
      result: "200% revenue growth in 12 months",
    },
    image: "/industries/technology.jpg",
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: "/icons/industry-finance.svg",
    description:
      "Navigate regulatory challenges while driving innovation and customer-centricity in financial services.",
    challenges: [
      "Complex regulatory compliance requirements",
      "Digital disruption from fintech competitors",
      "Legacy systems limiting agility and innovation",
    ],
    solutions: [
      "Regulatory compliance frameworks",
      "Digital banking transformation",
      "Customer experience enhancement",
    ],
    caseStudy: {
      company: "Nexus Financial",
      result: "35% increase in customer satisfaction",
    },
    image: "/industries/finance.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "/icons/industry-healthcare.svg",
    description:
      "Improve patient outcomes and operational efficiency while navigating the complex healthcare landscape.",
    challenges: [
      "Balancing quality care with cost containment",
      "Integrating new technologies securely",
      "Managing complex stakeholder relationships",
    ],
    solutions: [
      "Patient experience optimization",
      "Healthcare operations efficiency",
      "Technology integration and security",
    ],
    caseStudy: {
      company: "MediCare Solutions",
      result: "40% reduction in operational costs",
    },
    image: "/industries/healthcare.jpg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "/icons/industry-manufacturing.svg",
    description: "Optimize production processes and supply chains to increase efficiency and competitiveness.",
    challenges: [
      "Supply chain disruptions and volatility",
      "Increasing production costs and competition",
      "Digital transformation of traditional processes",
    ],
    solutions: ["Supply chain optimization", "Smart manufacturing implementation", "Operational excellence programs"],
    caseStudy: {
      company: "Global Manufacturing Corp.",
      result: "65% improvement in process efficiency",
    },
    image: "/industries/manufacturing.jpg",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "/icons/industry-retail.svg",
    description: "Create seamless omnichannel experiences that drive customer loyalty and revenue growth.",
    challenges: [
      "Evolving consumer expectations and behaviors",
      "Omnichannel integration challenges",
      "Intense competition and margin pressure",
    ],
    solutions: ["Omnichannel experience design", "Customer loyalty programs", "Inventory and fulfillment optimization"],
    caseStudy: {
      company: "Retail Innovations",
      result: "120% increase in online sales",
    },
    image: "/industries/retail.jpg",
  },
]

export default function IndustrySelector() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  return (
    <section className="w-full py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/10 text-[#F5A623] hover:bg-white/20 border-white/10">
            Industry Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
              Tailored to Your Industry
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            We understand the unique challenges of your industry and deliver specialized solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`w-full text-left p-4 transition-colors flex items-center gap-3 ${
                    activeIndustry.id === industry.id
                      ? "bg-gradient-to-r from-[#F5A623]/20 to-transparent border-l-4 border-[#F5A623]"
                      : "hover:bg-white/5 border-l-4 border-transparent"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <div className="relative w-5 h-5">
                      <Image
                        src={industry.icon || "/placeholder.svg"}
                        alt={industry.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span
                    className={`font-medium ${activeIndustry.id === industry.id ? "text-[#F5A623]" : "text-white"}`}
                  >
                    {industry.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={activeIndustry.image || "/placeholder.svg"}
                    alt={activeIndustry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="relative w-5 h-5">
                          <Image
                            src={activeIndustry.icon || "/placeholder.svg"}
                            alt={activeIndustry.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{activeIndustry.name}</h3>
                    </div>
                    <p className="text-white/80">{activeIndustry.description}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white">Industry Challenges</h4>
                      <ul className="space-y-3">
                        {activeIndustry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-3 h-3 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white">Our Solutions</h4>
                      <ul className="space-y-3">
                        {activeIndustry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-3 h-3 text-[#F5A623]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-[#F5A623]/10 to-transparent rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-white">
                          Success Story: {activeIndustry.caseStudy.company}
                        </h4>
                        <p className="text-[#F5A623]">{activeIndustry.caseStudy.result}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group">
                        <span>Read success story</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
