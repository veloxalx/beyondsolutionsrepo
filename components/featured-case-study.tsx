"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function FeaturedCaseStudy() {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/10 text-[#F5A623] hover:bg-white/20 border-white/10">Case Study</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
              Success in Action
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See how we helped TechVision transform their business and achieve extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image src="/case-study-featured.jpg" alt="TechVision Case Study" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black font-bold">TV</span>
                </div>
                <div>
                  <div className="text-white font-medium">TechVision Inc.</div>
                  <div className="text-white/70 text-sm">Technology Sector</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">TechVision's Digital Transformation</h3>
            <p className="text-gray-300 text-lg">
              TechVision was struggling with declining market share and outdated digital infrastructure. They needed a
              comprehensive strategy to revitalize their brand and modernize their operations.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#F5A623]">200%</div>
                <p className="text-white/70">Increase in qualified leads</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#F5A623]">35%</div>
                <p className="text-white/70">Boost in conversion rates</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#F5A623]">65%</div>
                <p className="text-white/70">Improvement in customer retention</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#F5A623]">3x</div>
                <p className="text-white/70">Return on marketing investment</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#F5A623] pl-6 italic text-white/90">
              "Beyond Solutions didn't just help us solve problems—they helped us reimagine what was possible for our
              business. The results speak for themselves."
              <footer className="mt-2 text-white/70 not-italic">— Sarah Johnson, CEO of TechVision</footer>
            </blockquote>

            <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group mt-4">
              <span>Read the full case study</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
