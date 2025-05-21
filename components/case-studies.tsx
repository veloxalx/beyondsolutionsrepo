"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const caseStudies = [
  {
    id: "techvision",
    title: "TechVision's Digital Transformation",
    company: "TechVision Inc.",
    industry: "SaaS",
    challenge:
      "TechVision was struggling with declining market share and outdated digital infrastructure. They needed a comprehensive strategy to revitalize their brand and modernize their operations.",
    solution:
      "We implemented a complete digital transformation strategy, modernizing their technology stack, optimizing their customer journey, and implementing data-driven marketing strategies.",
    results: [
      "200% increase in qualified leads",
      "35% boost in conversion rates",
      "65% improvement in customer retention",
      "3x return on marketing investment",
    ],
    image: "/case-studies/techvision.jpg",
    logo: "/logos/techvision.svg",
  },
  {
    id: "global-manufacturing",
    title: "Global Manufacturing's Operational Excellence",
    company: "Global Manufacturing Corp.",
    industry: "Manufacturing",
    challenge:
      "Rising costs, inefficient processes, and quality inconsistencies were eroding Global Manufacturing's profit margins and competitive position.",
    solution:
      "Our operational excellence program identified key inefficiencies, implemented lean manufacturing principles, and created a continuous improvement culture.",
    results: [
      "40% reduction in operational costs",
      "65% improvement in process efficiency",
      "30% faster delivery times",
      "25% increase in employee productivity",
    ],
    image: "/case-studies/manufacturing.jpg",
    logo: "/logos/global-manufacturing.svg",
  },
  {
    id: "nexus-financial",
    title: "Nexus Financial's Market Expansion",
    company: "Nexus Financial",
    industry: "Financial Services",
    challenge:
      "Nexus Financial had saturated their current market and needed a strategic approach to identify and enter new markets while managing risk.",
    solution:
      "We developed a comprehensive market expansion strategy, identifying optimal new markets, creating tailored entry plans, and building strategic partnerships.",
    results: [
      "Successfully entered 5 new markets",
      "50% faster market penetration than industry average",
      "35% higher ROI on expansion investments",
      "120% overall business growth in 18 months",
    ],
    image: "/case-studies/financial.jpg",
    logo: "/logos/nexus-financial.svg",
  },
]

export default function CaseStudies() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0])

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See how we've helped businesses like yours transform challenges into opportunities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseStudy(study)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCaseStudy.id === study.id
                  ? "bg-gradient-to-r from-[#F5A623] to-[#FF4D00] text-black font-medium"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCaseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={activeCaseStudy.image || "/placeholder.svg"}
                alt={activeCaseStudy.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black font-bold">
                      {activeCaseStudy.company
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{activeCaseStudy.company}</div>
                    <div className="text-white/70 text-sm">{activeCaseStudy.industry}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{activeCaseStudy.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">The Challenge</h4>
                  <p className="text-gray-300">{activeCaseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">Our Solution</h4>
                  <p className="text-gray-300">{activeCaseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">Results</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCaseStudy.results.map((result, i) => (
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
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group mt-4">
                <span>Read the full case study</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
