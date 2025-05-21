"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic campaigns that increase your online presence, drive qualified traffic, and convert leads into loyal customers.",
    icon: "/icons/marketing-premium.svg",
    image: "/services/digital-marketing.jpg",
    features: [
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Social Media Management",
      "PPC & Paid Advertising",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
    ],
  },
  {
    id: "business-strategy",
    title: "Business Strategy",
    description:
      "Data-driven business strategies that identify opportunities, mitigate risks, and position your company for sustainable growth.",
    icon: "/icons/strategy-premium.svg",
    image: "/services/business-strategy.jpg",
    features: [
      "Market Analysis & Research",
      "Competitive Positioning",
      "Growth & Expansion Planning",
      "Business Model Innovation",
      "Risk Assessment & Management",
      "Strategic Partnerships",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights that drive informed decision-making and measurable business growth.",
    icon: "/icons/analytics-premium.svg",
    image: "/services/data-analytics.jpg",
    features: [
      "Business Intelligence Dashboards",
      "Customer Behavior Analysis",
      "Predictive Analytics Models",
      "Performance Metrics & KPIs",
      "Data Visualization Solutions",
      "ROI & Attribution Modeling",
    ],
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    description:
      "Expert guidance from industry professionals to solve complex challenges and unlock new opportunities for your business.",
    icon: "/icons/consulting-premium.svg",
    image: "/services/business-consulting.jpg",
    features: [
      "Executive Leadership Coaching",
      "Operational Efficiency",
      "Change Management",
      "Innovation Workshops",
      "Process Improvement",
      "Team Performance Optimization",
    ],
  },
]

export default function ServiceShowcase() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#F5A623]/10 text-[#F5A623] hover:bg-[#F5A623]/20">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Transformative Solutions</h2>
          <p className="text-xl text-gray-600">
            We deliver comprehensive strategies and services tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                  activeService.id === service.id
                    ? "bg-gradient-to-r from-[#F5A623]/10 to-white border-l-4 border-[#F5A623] shadow-lg"
                    : "bg-white hover:bg-gray-50 border border-gray-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeService.id === service.id ? "bg-[#F5A623]/20" : "bg-gray-100"
                  }`}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 transition-colors ${
                      activeService.id === service.id ? "text-[#F5A623]" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{service.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={activeService.image || "/placeholder.svg"}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeService.title}</h3>
                    <p className="text-white/80 max-w-2xl">{activeService.description}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeService.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-[#F5A623]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group">
                      <span>Learn more about {activeService.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
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
