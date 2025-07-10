"use client"
import { useState } from "react"
import { ChevronDown, ChevronRight, Award, Target, Eye, Users, Lightbulb, Zap, TrendingUp, CheckCircle } from "lucide-react"
import PremiumClientLogos from "./premium-client-logos"

export function AboutUs() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const services = [
    { icon: <Lightbulb className="h-5 w-5" />, title: "Conceptualizing", description: "Innovative ideas that set your brand apart" },
    { icon: <Award className="h-5 w-5" />, title: "Design & Fabrication of Promotional Material", description: "High-quality materials that make an impact" },
    { icon: <TrendingUp className="h-5 w-5" />, title: "Crafting Marketing Strategy", description: "Strategic approaches for maximum ROI" },
    { icon: <Target className="h-5 w-5" />, title: "Project Planning & Management", description: "Seamless execution from start to finish" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                ABOUT US
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get to know about us and how we made a breakthrough to the Digital marketing industry in a short time span.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Beyond Solutions
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Beyond Solutions is your trusted partner in delivering innovative marketing solutions. Founded in 2018, we initially specialized in project management and advertising. Our transition to Beyond Solutions (Pvt) Ltd, a Limited Liability Company, in 2021 was a significant milestone, enhancing our ability to offer advanced services and broaden our market presence.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We excel in developing bespoke marketing strategies tailored to meet the distinct needs of your brand. Specializing in outdoor and digital advertising, we merge creative concepts with cutting-edge technology to maximize your brand's visibility and audience engagement.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-orange-500/30">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-orange-400">We Are The Leader in BTL</h3>
                    <p className="text-gray-300">
                      From conceptualization through to execution, our dedicated team ensures a smooth process and measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-orange-500/20 rounded-xl p-6 h-full transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg p-3 mr-4">
                      <div className="text-orange-400">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-orange-400 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Vision
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading Advertising Company in the Country, providing Our Clients the best service while maintaining the Trust, Loyalty & Integrity of the company.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-400 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Mission
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fostering a thriving, meaningful, and connected business ecosystem. Delivering measurable excellence for clients, employees, and suppliers with a WOW service.
              </p>
            </div>
          </div>
        </div>

        {/* Company Journey */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Our Journey
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-400 mb-2">2018 - Foundation</h4>
                  <p className="text-gray-300">Beyond Solutions was initially established as a Proprietorship company, specializing in project management and advertising.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-400 mb-2">2021 - Evolution</h4>
                  <p className="text-gray-300">Transitioned to Beyond Solutions (Pvt) Ltd, a Limited Liability Company, expanding our capabilities and market presence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-400 mb-2">Present - Leadership</h4>
                  <p className="text-gray-300">Our market leadership stems from our commitment to excellence. We empower some of Sri Lanka's largest clients to achieve the full potential of their campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governance & Leadership */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Governance */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Transparent Governance
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Transparent governance framework across financial, marketing, and human resources areas. Efficient services aligned with client's scope.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">Financial Transparency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">Marketing Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">Human Resources Management</span>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Imesh Silva</h3>
                <p className="text-orange-400 text-lg font-semibold mb-4">Founder / Director</p>
                <p className="text-gray-300">
                  Leading Beyond Solutions with vision and expertise, driving innovation in digital marketing and advertising solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <PremiumClientLogos/>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Ready to Experience Excellence?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our market leadership stems from our commitment to excellence. Get in touch with us today and experience the extraordinary impact of our ATL and BTL campaigns.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/30"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}