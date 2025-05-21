"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const solutions = [
  {
    id: "revenue-growth",
    title: "Revenue Growth",
    description:
      "Strategic solutions to accelerate revenue growth through optimized marketing, sales enablement, and customer experience enhancement.",
    icon: "/icons/revenue-growth.svg",
    image: "/solutions/revenue-growth.jpg",
    challenge:
      "Stagnant revenue growth despite increasing marketing spend and competitive market conditions limiting expansion.",
    solution:
      "Our comprehensive revenue acceleration framework identifies growth opportunities and optimizes your entire customer acquisition and retention strategy.",
    results: [
      "35% average increase in qualified leads",
      "28% improvement in conversion rates",
      "42% boost in customer lifetime value",
      "3.2x return on marketing investment",
    ],
    caseStudy: {
      company: "TechVision Inc.",
      industry: "SaaS",
      result: "200% revenue growth in 12 months",
    },
  },
  {
    id: "operational-efficiency",
    title: "Operational Efficiency",
    description:
      "Streamline processes, reduce costs, and improve productivity through data-driven operational optimization strategies.",
    icon: "/icons/operational-efficiency.svg",
    image: "/solutions/operational-efficiency.jpg",
    challenge: "Inefficient processes causing high operational costs, slow delivery times, and reduced profit margins.",
    solution:
      "Our operational excellence methodology identifies inefficiencies and implements streamlined processes with clear metrics and accountability.",
    results: [
      "40% reduction in operational costs",
      "65% improvement in process efficiency",
      "30% faster delivery times",
      "25% increase in employee productivity",
    ],
    caseStudy: {
      company: "Global Manufacturing Corp.",
      industry: "Manufacturing",
      result: "Saved $2.5M annually in operational costs",
    },
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge digital solutions that enhance customer experience and drive competitive advantage.",
    icon: "/icons/digital-transformation.svg",
    image: "/solutions/digital-transformation.jpg",
    challenge:
      "Legacy systems and outdated processes creating friction in customer experience and limiting business agility.",
    solution:
      "Our digital transformation framework modernizes your technology stack while ensuring alignment with business goals and user needs.",
    results: [
      "75% improvement in customer satisfaction",
      "60% reduction in IT maintenance costs",
      "45% faster time-to-market for new products",
      "85% increase in business agility metrics",
    ],
    caseStudy: {
      company: "Nexus Financial",
      industry: "Financial Services",
      result: "Digital transformation led to 120% growth",
    },
  },
  {
    id: "market-expansion",
    title: "Market Expansion",
    description:
      "Enter new markets and capture untapped opportunities with data-driven market analysis and strategic entry planning.",
    icon: "/icons/market-expansion.svg",
    image: "/solutions/market-expansion.jpg",
    challenge:
      "Saturated current markets limiting growth potential and uncertainty about which new markets to prioritize.",
    solution:
      "Our market expansion strategy identifies optimal new markets, creates tailored entry plans, and mitigates expansion risks.",
    results: [
      "Successfully entered 5+ new markets on average",
      "50% faster market penetration than industry average",
      "35% higher ROI on expansion investments",
      "85% success rate for new market entries",
    ],
    caseStudy: {
      company: "Horizon Brands",
      industry: "Consumer Goods",
      result: "Expanded to 7 new markets in 18 months",
    },
  },
]

export default function SolutionsShowcase() {
  const [activeSolution, setActiveSolution] = useState(solutions[0])
  const [activeTab, setActiveTab] = useState<"overview" | "challenge" | "solution" | "results">("overview")

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Business Solutions</h2>
          <p className="text-xl text-gray-600">
            We deliver targeted solutions to address your specific business needs and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => {
                  setActiveSolution(solution)
                  setActiveTab("overview")
                }}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                  activeSolution.id === solution.id
                    ? "bg-gradient-to-r from-[#F5A623]/10 to-white border-l-4 border-[#F5A623] shadow-lg"
                    : "bg-white hover:bg-gray-50 border border-gray-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeSolution.id === solution.id ? "bg-[#F5A623]/20" : "bg-gray-100"
                  }`}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={solution.icon || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 transition-colors ${
                      activeSolution.id === solution.id ? "text-[#F5A623]" : "text-black"
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{solution.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSolution.id}-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={activeSolution.image || "/placeholder.svg"}
                    alt={activeSolution.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeSolution.title}</h3>
                    <p className="text-white/80 max-w-2xl">{activeSolution.description}</p>
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <div className="flex overflow-x-auto">
                    {(["overview", "challenge", "solution", "results"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                          activeTab === tab
                            ? "text-[#F5A623] border-b-2 border-[#F5A623]"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                          <p className="text-gray-700">{activeSolution.challenge}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                          <p className="text-gray-700">{activeSolution.solution}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeSolution.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-[#F5A623]" />
                              </div>
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#F5A623]/10 to-transparent p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold mb-1">
                              Case Study: {activeSolution.caseStudy.company}
                            </h4>
                            <p className="text-gray-600">
                              {activeSolution.caseStudy.industry} | {activeSolution.caseStudy.result}
                            </p>
                          </div>
                          <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group">
                            <span>Read case study</span>
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "challenge" && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold mb-4">The Business Challenge</h4>
                      <p className="text-gray-700 text-lg leading-relaxed">{activeSolution.challenge}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h5 className="font-semibold mb-3 text-gray-900">Common Symptoms</h5>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              <span className="text-gray-700">
                                {activeSolution.id === "revenue-growth"
                                  ? "Declining or flat revenue growth"
                                  : activeSolution.id === "operational-efficiency"
                                    ? "Rising operational costs"
                                    : activeSolution.id === "digital-transformation"
                                      ? "Outdated technology systems"
                                      : "Limited growth in current markets"}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              <span className="text-gray-700">
                                {activeSolution.id === "revenue-growth"
                                  ? "Increasing customer acquisition costs"
                                  : activeSolution.id === "operational-efficiency"
                                    ? "Inefficient workflows and bottlenecks"
                                    : activeSolution.id === "digital-transformation"
                                      ? "Poor customer experience metrics"
                                      : "Uncertainty about expansion priorities"}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              <span className="text-gray-700">
                                {activeSolution.id === "revenue-growth"
                                  ? "High customer churn rates"
                                  : activeSolution.id === "operational-efficiency"
                                    ? "Declining profit margins"
                                    : activeSolution.id === "digital-transformation"
                                      ? "Inability to adapt to market changes quickly"
                                      : "High failure rate in previous expansion attempts"}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h5 className="font-semibold mb-3 text-gray-900">Business Impact</h5>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg
                                  className="w-3 h-3 text-amber-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                  />
                                </svg>
                              </div>
                              <span className="text-gray-700">
                                {activeSolution.id === "revenue-growth"
                                  ? "Reduced market share and competitive position"
                                  : activeSolution.id === "operational-efficiency"
                                    ? "Inability to price competitively"
                                    : activeSolution.id === "digital-transformation"
                                      ? "Loss of market relevance"
                                      : "Stagnant overall business growth"}
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg
                                  className="w-3 h-3 text-amber-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                  />
                                </svg>
                              </div>
                              <span className="text-gray-700">
                                {activeSolution.id === "revenue-growth"
                                  ? "Investor pressure and declining valuations"
                                  : activeSolution.id === "operational-efficiency"
                                    ? "Resource constraints limiting innovation"
                                    : activeSolution.id === "digital-transformation"
                                      ? "Competitive disadvantage"
                                      : "Overreliance on limited market segments"}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "solution" && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold mb-4">Our Solution Approach</h4>
                      <p className="text-gray-700 text-lg leading-relaxed">{activeSolution.solution}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center mb-4">
                            <span className="font-bold text-[#F5A623]">1</span>
                          </div>
                          <h5 className="font-semibold mb-3 text-gray-900">Assessment</h5>
                          <p className="text-gray-600">
                            {activeSolution.id === "revenue-growth"
                              ? "Comprehensive analysis of your current revenue streams, marketing effectiveness, and growth opportunities."
                              : activeSolution.id === "operational-efficiency"
                                ? "Detailed process mapping and efficiency analysis to identify improvement opportunities."
                                : activeSolution.id === "digital-transformation"
                                  ? "Technology stack assessment and digital maturity evaluation."
                                  : "Market analysis and expansion readiness assessment."}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center mb-4">
                            <span className="font-bold text-[#F5A623]">2</span>
                          </div>
                          <h5 className="font-semibold mb-3 text-gray-900">Strategy</h5>
                          <p className="text-gray-600">
                            {activeSolution.id === "revenue-growth"
                              ? "Tailored revenue growth strategy with clear KPIs, timelines, and resource allocation."
                              : activeSolution.id === "operational-efficiency"
                                ? "Process optimization roadmap with prioritized initiatives and expected outcomes."
                                : activeSolution.id === "digital-transformation"
                                  ? "Digital transformation blueprint aligned with business objectives."
                                  : "Market entry strategy with prioritized opportunities and risk mitigation plans."}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center mb-4">
                            <span className="font-bold text-[#F5A623]">3</span>
                          </div>
                          <h5 className="font-semibold mb-3 text-gray-900">Implementation</h5>
                          <p className="text-gray-600">
                            {activeSolution.id === "revenue-growth"
                              ? "Execution support with ongoing optimization and performance tracking."
                              : activeSolution.id === "operational-efficiency"
                                ? "Process redesign implementation with change management and training."
                                : activeSolution.id === "digital-transformation"
                                  ? "Phased implementation with minimal disruption to ongoing operations."
                                  : "Guided market entry execution with local expertise and partnership development."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "results" && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold mb-4">Measurable Results</h4>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our clients consistently achieve exceptional results through our proven methodologies and
                        tailored solutions.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {activeSolution.results.map((result, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                                <Check className="h-6 w-6 text-[#F5A623]" />
                              </div>
                              <h5 className="font-semibold text-lg text-gray-900">{result}</h5>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-[#F5A623]/10 to-transparent p-6 rounded-xl mt-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h5 className="font-semibold text-lg mb-1">Featured Success Story</h5>
                            <p className="text-gray-700 mb-2">
                              <span className="font-medium">{activeSolution.caseStudy.company}</span> |{" "}
                              {activeSolution.caseStudy.industry}
                            </p>
                            <p className="text-[#F5A623] font-semibold">{activeSolution.caseStudy.result}</p>
                          </div>
                          <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group">
                            <span>Read case study</span>
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
