"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Trophy, Star, TrendingUp, Zap, Target } from "lucide-react"

const solutions = [
  {
    id: "revenue-growth",
    title: "Elite Revenue Growth",
    description:
      "Industry-leading solutions to accelerate revenue growth through our proprietary marketing, sales enablement, and customer experience enhancement methodologies.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/api/placeholder/800/400",
    challenge:
      "Stagnant revenue growth despite increasing marketing spend and competitive market conditions limiting expansion.",
    solution:
      "Our exclusive revenue acceleration framework identifies untapped growth opportunities and optimizes your entire customer acquisition and retention strategy for maximum impact.",
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
    title: "Superior Operational Excellence",
    description:
      "Unmatched process optimization, cost reduction, and productivity enhancement through our proprietary operational excellence methodology.",
    icon: <Zap className="w-6 h-6" />,
    image: "/api/placeholder/800/400",
    challenge: "Inefficient processes causing high operational costs, slow delivery times, and reduced profit margins.",
    solution:
      "Our exclusive operational excellence methodology identifies inefficiencies and implements streamlined processes with clear metrics and accountability for superior results.",
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
    title: "Premier Digital Transformation",
    description:
      "Best-in-class digital solutions that enhance customer experience and drive competitive advantage through our proprietary transformation framework.",
    icon: <Star className="w-6 h-6" />,
    image: "/api/placeholder/800/400",
    challenge:
      "Legacy systems and outdated processes creating friction in customer experience and limiting business agility.",
    solution:
      "Our exclusive digital transformation framework modernizes your technology stack while ensuring perfect alignment with business goals and user needs for maximum impact.",
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
    title: "Unrivaled Market Expansion",
    description:
      "Dominate new markets with our proprietary market analysis and strategic entry planning methodology that delivers superior results.",
    icon: <Target className="w-6 h-6" />,
    image: "/api/placeholder/800/400",
    challenge:
      "Saturated current markets limiting growth potential and uncertainty about which new markets to prioritize.",
    solution:
      "Our exclusive market expansion strategy identifies optimal new markets, creates tailored entry plans, and mitigates expansion risks for maximum success.",
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

export default function EliteSolutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0])
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className="w-full py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30">
            <Trophy className="h-5 w-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">Industry-Leading Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-6 tracking-tight">
            Unmatched Business Solutions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We deliver superior solutions that outperform the competition and drive exceptional results for forward-thinking organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solutions Menu */}
          <div className="lg:col-span-4 space-y-3">
            {solutions.map((solution) => (
              <motion.button
                key={solution.id}
                onClick={() => {
                  setActiveSolution(solution)
                  setActiveTab("overview")
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 flex items-start gap-4 relative overflow-hidden group ${
                  activeSolution.id === solution.id
                    ? "bg-gradient-to-r from-orange-500/20 via-orange-600/15 to-orange-500/10 border border-orange-500/50 shadow-2xl shadow-orange-500/20"
                    : "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-orange-500/30"
                }`}
              >
                {activeSolution.id === solution.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeSolution.id === solution.id 
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30" 
                      : "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                  }`}
                >
                  {solution.icon}
                </div>
                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      activeSolution.id === solution.id ? "text-orange-300" : "text-white group-hover:text-orange-200"
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSolution.id}-${activeTab}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
              >
                {/* Hero Image Section */}
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 mb-4">
                      <Trophy className="h-4 w-4 text-orange-300" />
                      <span className="text-orange-200 font-semibold text-sm">Industry-Leading</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{activeSolution.title}</h3>
                    <p className="text-gray-200 max-w-3xl leading-relaxed">{activeSolution.description}</p>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="border-b border-gray-700/50 bg-gray-800/30">
                  <div className="flex overflow-x-auto">
                    {(["overview", "challenge", "solution", "results"]).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 font-semibold text-sm transition-all duration-300 whitespace-nowrap relative ${
                          activeTab === tab
                            ? "text-orange-300 bg-gradient-to-b from-orange-500/20 to-transparent"
                            : "text-gray-400 hover:text-orange-200 hover:bg-gray-700/30"
                        }`}
                      >
                        {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                        )}
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  {activeTab === "overview" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 rounded-2xl p-6 border border-gray-700/50">
                          <h4 className="text-lg font-semibold mb-3 text-orange-300">The Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{activeSolution.challenge}</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-6 border border-orange-500/20">
                          <h4 className="text-lg font-semibold mb-3 text-orange-300">Our Elite Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{activeSolution.solution}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-white">Superior Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeSolution.results.map((result, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="h-4 w-4 text-black font-bold" />
                              </div>
                              <span className="text-gray-300 font-medium">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-transparent p-8 rounded-2xl border border-orange-500/30">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy className="h-5 w-5 text-orange-400" />
                              <h4 className="text-xl font-semibold text-white">Elite Success Story</h4>
                            </div>
                            <p className="text-gray-300 mb-1">
                              <span className="font-semibold text-orange-300">{activeSolution.caseStudy.company}</span>
                              <span className="text-gray-400"> | {activeSolution.caseStudy.industry}</span>
                            </p>
                            <p className="text-orange-400 font-bold text-lg">{activeSolution.caseStudy.result}</p>
                          </div>
                          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 group">
                            View Case Study
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Other tab content remains similar but with enhanced styling */}
                  {activeTab === "challenge" && (
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-semibold mb-4 text-white">The Business Challenge</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{activeSolution.challenge}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-6 border border-red-500/20">
                          <h5 className="font-semibold mb-4 text-red-300 text-lg">Common Symptoms</h5>
                          <div className="space-y-4">
                            {[
                              activeSolution.id === "revenue-growth" ? "Declining or flat revenue growth" :
                              activeSolution.id === "operational-efficiency" ? "Rising operational costs" :
                              activeSolution.id === "digital-transformation" ? "Outdated technology systems" :
                              "Limited growth in current markets",
                              
                              activeSolution.id === "revenue-growth" ? "Increasing customer acquisition costs" :
                              activeSolution.id === "operational-efficiency" ? "Inefficient workflows and bottlenecks" :
                              activeSolution.id === "digital-transformation" ? "Poor customer experience metrics" :
                              "Uncertainty about expansion priorities",
                              
                              activeSolution.id === "revenue-growth" ? "High customer churn rates" :
                              activeSolution.id === "operational-efficiency" ? "Declining profit margins" :
                              activeSolution.id === "digital-transformation" ? "Inability to adapt to market changes quickly" :
                              "High failure rate in previous expansion attempts"
                            ].map((symptom, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                </div>
                                <span className="text-gray-300">{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-2xl p-6 border border-amber-500/20">
                          <h5 className="font-semibold mb-4 text-amber-300 text-lg">Business Impact</h5>
                          <div className="space-y-4">
                            {[
                              activeSolution.id === "revenue-growth" ? "Reduced market share and competitive position" :
                              activeSolution.id === "operational-efficiency" ? "Inability to price competitively" :
                              activeSolution.id === "digital-transformation" ? "Loss of market relevance" :
                              "Stagnant overall business growth",
                              
                              activeSolution.id === "revenue-growth" ? "Investor pressure and declining valuations" :
                              activeSolution.id === "operational-efficiency" ? "Resource constraints limiting innovation" :
                              activeSolution.id === "digital-transformation" ? "Competitive disadvantage" :
                              "Overreliance on limited market segments"
                            ].map((impact, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                </div>
                                <span className="text-gray-300">{impact}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "solution" && (
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Trophy className="h-6 w-6 text-orange-400" />
                          <h4 className="text-2xl font-semibold text-white">Our Elite Solution Approach</h4>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{activeSolution.solution}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            step: "1",
                            title: "Elite Assessment",
                            description: activeSolution.id === "revenue-growth" ?
                              "Proprietary analysis of your current revenue streams, marketing effectiveness, and growth opportunities." :
                              activeSolution.id === "operational-efficiency" ?
                              "Exclusive process mapping and efficiency analysis to identify improvement opportunities." :
                              activeSolution.id === "digital-transformation" ?
                              "Comprehensive technology stack assessment and digital maturity evaluation." :
                              "Superior market analysis and expansion readiness assessment."
                          },
                          {
                            step: "2", 
                            title: "Premium Strategy",
                            description: activeSolution.id === "revenue-growth" ?
                              "Best-in-class revenue growth strategy with clear KPIs, timelines, and resource allocation." :
                              activeSolution.id === "operational-efficiency" ?
                              "Industry-leading process optimization roadmap with prioritized initiatives and expected outcomes." :
                              activeSolution.id === "digital-transformation" ?
                              "Unmatched digital transformation blueprint aligned with business objectives." :
                              "Superior market entry strategy with prioritized opportunities and risk mitigation plans."
                          },
                          {
                            step: "3",
                            title: "Elite Implementation", 
                            description: activeSolution.id === "revenue-growth" ?
                              "Unmatched execution support with ongoing optimization and performance tracking." :
                              activeSolution.id === "operational-efficiency" ?
                              "Superior process redesign implementation with change management and training." :
                              activeSolution.id === "digital-transformation" ?
                              "Best-in-class phased implementation with minimal disruption to ongoing operations." :
                              "Elite market entry execution with local expertise and partnership development."
                          }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 rounded-2xl p-6 border border-gray-700/50"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                              <span className="font-bold text-black text-lg">{item.step}</span>
                            </div>
                            <h5 className="font-semibold mb-3 text-orange-300 text-lg">{item.title}</h5>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "results" && (
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Trophy className="h-6 w-6 text-orange-400" />
                          <h4 className="text-2xl font-semibold text-white">Superior Results</h4>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Our clients consistently achieve exceptional results that outperform industry benchmarks through our elite methodologies and tailored solutions.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeSolution.results.map((result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 rounded-2xl p-6 border border-gray-700/50"
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                                <Check className="h-7 w-7 text-black font-bold" />
                              </div>
                              <h5 className="font-semibold text-lg text-white">{result}</h5>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-transparent p-8 rounded-2xl border border-orange-500/30">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy className="h-5 w-5 text-orange-400" />
                              <h5 className="font-semibold text-xl text-white">Elite Success Story</h5>
                            </div>
                            <p className="text-gray-300 mb-2">
                              <span className="font-semibold text-orange-300">{activeSolution.caseStudy.company}</span>
                              <span className="text-gray-400"> | {activeSolution.caseStudy.industry}</span>
                            </p>
                            <p className="text-orange-400 font-bold text-lg">{activeSolution.caseStudy.result}</p>
                          </div>
                          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 group">
                            View Case Study
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
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