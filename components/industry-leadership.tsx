import { useState } from "react"
import { ArrowRight, Trophy, Check, Zap, Building2, Heart, Cog } from "lucide-react"

const industries = [
  {
    id: "marketing",
    name: "Creative Marketing",
    icon: Zap,
    description:
      "We develop powerful branding, strategic campaigns, and digital marketing experiences that connect with your audience and elevate your brand.",
    expertise: [
      "Brand strategy and design",
      "Social media campaigns",
      "Content creation and storytelling",
      "Targeted digital marketing",
    ],
    results: [
      "Increased brand awareness by up to 50%",
      "Higher engagement rates across platforms",
      "Enhanced customer acquisition performance",
    ],
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    bgGradient: "from-orange-500/20 via-orange-600/10 to-orange-700/5",
    borderGradient: "from-orange-500 to-orange-600"
  },
  {
    id: "digital",
    name: "Digital Solutions",
    icon: Building2,
    description:
      "We design and build digital platforms including mobile apps, websites, and systems tailored for performance and scalability.",
    expertise: [
      "Website and platform development",
      "Mobile application development",
      "Custom software engineering",
      "UX/UI design and prototyping",
    ],
    results: [
      "40% faster deployment of digital platforms",
      "Improved user retention and satisfaction",
      "Boosted system performance and reliability",
    ],
    gradient: "from-orange-600 via-orange-700 to-orange-800",
    bgGradient: "from-orange-600/20 via-orange-700/10 to-orange-800/5",
    borderGradient: "from-orange-600 to-orange-700"
  },
  {
    id: "events",
    name: "Event Management",
    icon: Heart,
    description:
      "We create and manage unforgettable events, from high-end corporate functions to immersive experiential marketing activations.",
    expertise: [
      "Corporate event planning",
      "Conference and launch management",
      "On-ground logistics & production",
      "Event branding and promotion",
    ],
    results: [
      "Flawless delivery of 200+ events",
      "Improved audience engagement",
      "Higher ROI from experiential campaigns",
    ],
    gradient: "from-orange-400 via-orange-500 to-orange-600",
    bgGradient: "from-orange-400/20 via-orange-500/10 to-orange-600/5",
    borderGradient: "from-orange-400 to-orange-500"
  },
  {
    id: "systems",
    name: "MIS & ICT Solutions",
    icon: Cog,
    description:
      "Our tailored MIS and ICT systems empower organizations with real-time data, operational insights, and efficient service delivery.",
    expertise: [
      "Custom MIS platform development",
      "GIS and business intelligence systems",
      "Data collection and visualization",
      "ICT solutions for development and NGOs",
    ],
    results: [
      "60% improvement in data accessibility",
      "Streamlined decision-making processes",
      "Increased organizational transparency",
    ],
    gradient: "from-orange-300 via-orange-400 to-orange-500",
    bgGradient: "from-orange-300/20 via-orange-400/10 to-orange-500/5",
    borderGradient: "from-orange-300 to-orange-400"
  },
];


export default function IndustryLeadership() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])
  const ActiveIcon = activeIndustry.icon

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent rounded-full blur-[150px] opacity-60 -translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-400/15 via-orange-500/8 to-transparent rounded-full blur-[120px] opacity-40 translate-y-1/2 translate-x-1/3"></div>
      </div>

      {/* Elegant Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industry-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f97316" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Refined Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 font-medium text-sm mb-6">
            <Trophy className="h-4 w-4" />
            <span>Industry Leadership</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Industry Expertise
            </span>
            <br />
            <span className="text-white">
              That Delivers Results
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Tailored solutions for the unique challenges of your industry, 
            backed by proven expertise and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Industry Selector */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
              {industries.map((industry) => {
                const IconComponent = industry.icon
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry)}
                    className={`w-full text-left p-4 transition-all duration-300 flex items-center gap-3 relative group ${
                      activeIndustry.id === industry.id
                        ? `bg-gradient-to-r ${industry.bgGradient} border-l-4 border-orange-500`
                        : "hover:bg-slate-800/50 border-l-4 border-transparent hover:border-orange-500/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeIndustry.id === industry.id 
                        ? `bg-gradient-to-r ${industry.gradient}` 
                        : "bg-slate-800 group-hover:bg-slate-700"
                    }`}>
                      <IconComponent className={`h-5 w-5 transition-all duration-300 ${
                        activeIndustry.id === industry.id ? "text-white" : "text-gray-400 group-hover:text-orange-400"
                      }`} />
                    </div>
                    
                    <span className={`font-medium transition-all duration-300 ${
                      activeIndustry.id === industry.id 
                        ? "text-orange-400" 
                        : "text-white group-hover:text-orange-300"
                    }`}>
                      {industry.name}
                    </span>
                    
                    {activeIndustry.id === industry.id && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-8">
            <div 
              key={activeIndustry.id}
              className="bg-gradient-to-br from-slate-900/70 to-gray-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-500"
            >
              {/* Header Section */}
              <div className={`relative p-6 bg-gradient-to-r ${activeIndustry.bgGradient} border-b border-slate-700/50`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeIndustry.gradient} flex items-center justify-center`}>
                    <ActiveIcon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-medium text-xs mb-1">
                      <Trophy className="h-3 w-3" />
                      <span>Specialized</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{activeIndustry.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{activeIndustry.description}</p>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Expertise */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Our Expertise</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeIndustry.expertise.map((expertise, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed group-hover:text-orange-200 transition-colors duration-200">
                            {expertise}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-orange-600 to-orange-700 flex items-center justify-center">
                        <Trophy className="h-3 w-3 text-white" />
                      </div>
                      <span>Key Results</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeIndustry.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Trophy className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed group-hover:text-orange-200 transition-colors duration-200">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-8 p-5 bg-gradient-to-r ${activeIndustry.bgGradient} rounded-lg border border-orange-500/20 relative overflow-hidden`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Discover Our {activeIndustry.name} Solutions
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Learn how we deliver results for {activeIndustry.name.toLowerCase()} organizations.
                      </p>
                    </div>
                    
                    <button className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeIndustry.gradient} hover:shadow-lg hover:shadow-orange-500/25 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:transform hover:scale-105 group whitespace-nowrap`}>
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}