"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Trophy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const industries = [
  {
    id: "technology",
    name: "Technology",
    icon: "/icons/industry-technology.svg",
    description:
      "We deliver unmatched solutions for technology companies, helping them accelerate innovation and growth in the fast-paced digital landscape.",
    expertise: [
      "Digital transformation acceleration",
      "Product development optimization",
      "Market expansion strategies",
      "Customer acquisition excellence",
    ],
    results: [
      "35% average increase in revenue growth",
      "40% improvement in product development efficiency",
      "65% faster time-to-market for new products",
    ],
    image: "/industries/technology.jpg",
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: "/icons/industry-finance.svg",
    description:
      "Our elite solutions help financial institutions navigate regulatory challenges while driving innovation and customer-centricity.",
    expertise: [
      "Regulatory compliance frameworks",
      "Digital banking transformation",
      "Customer experience enhancement",
      "Operational efficiency optimization",
    ],
    results: [
      "40% reduction in operational costs",
      "35% increase in customer satisfaction",
      "60% improvement in regulatory compliance efficiency",
    ],
    image: "/industries/finance.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "/icons/industry-healthcare.svg",
    description:
      "We deliver superior solutions that improve patient outcomes and operational efficiency in the complex healthcare landscape.",
    expertise: [
      "Patient experience optimization",
      "Healthcare operations efficiency",
      "Technology integration and security",
      "Regulatory compliance excellence",
    ],
    results: [
      "45% improvement in patient satisfaction",
      "40% reduction in operational costs",
      "35% increase in staff productivity",
    ],
    image: "/industries/healthcare.jpg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "/icons/industry-manufacturing.svg",
    description:
      "Our premium solutions optimize production processes and supply chains to increase efficiency and competitiveness.",
    expertise: [
      "Supply chain optimization",
      "Smart manufacturing implementation",
      "Operational excellence programs",
      "Quality management systems",
    ],
    results: [
      "65% improvement in process efficiency",
      "40% reduction in supply chain costs",
      "30% increase in product quality metrics",
    ],
    image: "/industries/manufacturing.jpg",
  },
]

export default function IndustryLeadership() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#F5A623]/10 text-[#F5A623] font-medium">
            <Trophy className="h-4 w-4" />
            <span>Industry Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Unmatched Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">
            We deliver superior solutions tailored to the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`w-full text-left p-4 transition-colors flex items-center gap-3 ${
                    activeIndustry.id === industry.id
                      ? "bg-gradient-to-r from-[#F5A623]/10 to-transparent border-l-4 border-[#F5A623]"
                      : "hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
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
                    className={`font-medium ${activeIndustry.id === industry.id ? "text-[#F5A623]" : "text-black"}`}
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={activeIndustry.image || "/placeholder.svg"}
                    alt={activeIndustry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/20 backdrop-blur-sm text-white font-medium text-sm mb-3">
                      <Trophy className="h-3.5 w-3.5" />
                      <span>Industry Leader</span>
                    </div>
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
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">Our Elite Expertise</h4>
                      <ul className="space-y-3">
                        {activeIndustry.expertise.map((expertise, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-[#F5A623]" />
                            </div>
                            <span className="text-gray-700">{expertise}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">Superior Results</h4>
                      <ul className="space-y-3">
                        {activeIndustry.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Trophy className="h-3 w-3 text-[#F5A623]" />
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-[#F5A623]/10 to-transparent rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">
                          Discover Our {activeIndustry.name} Excellence
                        </h4>
                        <p className="text-gray-600">
                          Learn how we deliver unmatched results for {activeIndustry.name} organizations.
                        </p>
                      </div>
                      <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group">
                        <span>Explore solutions</span>
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
