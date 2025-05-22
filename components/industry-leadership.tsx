import { useState } from "react"
import { ArrowRight, Trophy, Check, Zap, Building2, Heart, Cog } from "lucide-react"

const industries = [
  {
    id: "technology",
    name: "Technology",
    icon: Zap,
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
    gradient: "from-orange-500 via-orange-600 to-black",
    bgGradient: "from-orange-500/30 via-orange-600/20 to-black/10",
    borderGradient: "from-orange-500 to-orange-600"
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: Building2,
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
    gradient: "from-orange-600 via-orange-700 to-black",
    bgGradient: "from-orange-600/30 via-orange-700/20 to-black/10",
    borderGradient: "from-orange-600 to-orange-700"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
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
    gradient: "from-orange-400 via-orange-600 to-black",
    bgGradient: "from-orange-400/30 via-orange-600/20 to-black/10",
    borderGradient: "from-orange-400 to-orange-600"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Cog,
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
    gradient: "from-orange-300 via-orange-500 to-black",
    bgGradient: "from-orange-300/30 via-orange-500/20 to-black/10",
    borderGradient: "from-orange-300 to-orange-500"
  },
]

export default function IndustryLeadership() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])
  const ActiveIcon = activeIndustry.icon

  return (
    <section className="w-full py-32 bg-gradient-to-br from-black via-gray-900 to-orange-900/20 text-white relative overflow-hidden">
      {/* Enhanced Black & Orange Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main orange glow - top left */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-500/40 via-orange-600/25 to-black/20 rounded-full blur-[200px] opacity-60 -translate-y-1/2 -translate-x-1/3 animate-pulse"></div>
        
        {/* Secondary glow - bottom right */}
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-orange-400/35 via-orange-600/20 to-black/30 rounded-full blur-[250px] opacity-50 translate-y-1/2 translate-x-1/3"></div>
        
        {/* Accent glow - center right */}
        <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-orange-500/30 via-orange-700/15 to-black/25 rounded-full blur-[180px] opacity-40"></div>
        
        {/* Deep black accent - center left */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-black/60 via-gray-900/40 to-orange-900/20 rounded-full blur-[150px] opacity-80"></div>
      </div>

      {/* Animated Grid Pattern with Orange Accent */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industry-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.4"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Enhanced Header with Black & Orange Theme */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-black mb-8 shadow-2xl shadow-orange-500/25">
            <div className="px-6 py-3 bg-gradient-to-r from-black to-gray-900 rounded-full flex items-center gap-2 border border-orange-500/20">
              <Trophy className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Industry Leadership</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Unmatched Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-black bg-clip-text text-transparent animate-gradient-x">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We deliver <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-semibold">superior solutions</span> tailored to the 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold"> unique challenges</span> of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Industry Selector with Beautiful Gradients */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-black/80 via-gray-900/60 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
              {industries.map((industry) => {
                const IconComponent = industry.icon
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry)}
                    className={`w-full text-left p-6 transition-all duration-500 flex items-center gap-4 relative group ${
                      activeIndustry.id === industry.id
                        ? `bg-gradient-to-r ${industry.bgGradient} border-l-4 border-orange-500 shadow-lg shadow-orange-500/20`
                        : "hover:bg-gradient-to-r hover:from-orange-900/20 hover:to-black/40 border-l-4 border-transparent hover:border-orange-500/50"
                    }`}
                  >
                    {/* Active indicator glow with enhanced gradient */}
                    {activeIndustry.id === industry.id && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${industry.bgGradient} animate-pulse`}></div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 relative z-10 ${
                      activeIndustry.id === industry.id 
                        ? `bg-gradient-to-r ${industry.gradient} shadow-lg shadow-orange-500/30` 
                        : "bg-gradient-to-r from-gray-800 to-black group-hover:from-orange-900/40 group-hover:to-gray-800"
                    }`}>
                      <IconComponent className={`h-6 w-6 transition-all duration-300 ${
                        activeIndustry.id === industry.id ? "text-white drop-shadow-lg" : "text-gray-300 group-hover:text-orange-400"
                      }`} />
                    </div>
                    
                    <span className={`font-semibold text-lg transition-all duration-300 relative z-10 ${
                      activeIndustry.id === industry.id 
                        ? "text-orange-400 drop-shadow-lg" 
                        : "text-white group-hover:text-orange-300"
                    }`}>
                      {industry.name}
                    </span>
                    
                    {activeIndustry.id === industry.id && (
                      <div className="ml-auto relative z-10">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Industry Details with Enhanced Gradients */}
          <div className="lg:col-span-9">
            <div 
              key={activeIndustry.id}
              className="bg-gradient-to-br from-black/70 via-gray-900/50 to-orange-900/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 transition-all duration-700"
            >
              {/* Header Section with Beautiful Gradient */}
              <div className={`relative p-8 bg-gradient-to-r ${activeIndustry.bgGradient} border-b border-orange-500/30`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-orange-500/10"></div>
                
                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeIndustry.gradient} flex items-center justify-center shadow-2xl shadow-orange-500/40 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent rounded-2xl"></div>
                    <ActiveIcon className="h-8 w-8 text-white drop-shadow-lg relative z-10" />
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/30 via-orange-600/20 to-black/30 backdrop-blur-sm border border-orange-500/30 text-orange-300 font-semibold text-sm mb-2 shadow-lg">
                      <Trophy className="h-4 w-4" />
                      <span>Industry Leader</span>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">{activeIndustry.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">{activeIndustry.description}</p>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Expertise */}
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${activeIndustry.borderGradient} flex items-center justify-center shadow-lg shadow-orange-500/30`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Our Elite Expertise</span>
                    </h4>
                    <ul className="space-y-4">
                      {activeIndustry.expertise.map((expertise, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-4 group"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${activeIndustry.borderGradient} flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30`}>
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-300 text-lg leading-relaxed group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {expertise}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-600 via-orange-700 to-black flex items-center justify-center shadow-lg shadow-orange-600/30">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Superior Results</span>
                    </h4>
                    <ul className="space-y-4">
                      {activeIndustry.results.map((result, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-4 group"
                          style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-black flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-600/30">
                            <Trophy className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-300 text-lg leading-relaxed group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action with Stunning Gradient */}
                <div className={`mt-12 p-8 bg-gradient-to-r ${activeIndustry.bgGradient} rounded-xl border border-orange-500/30 shadow-2xl shadow-orange-500/10 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-orange-500/10"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                        Discover Our {activeIndustry.name} Excellence
                      </h4>
                      <p className="text-gray-300 text-lg">
                        Learn how we deliver unmatched results for {activeIndustry.name.toLowerCase()} organizations.
                      </p>
                    </div>
                    
                    <button className={`inline-flex items-center gap-3 bg-gradient-to-r ${activeIndustry.gradient} hover:from-orange-500 hover:via-orange-600 hover:to-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 group whitespace-nowrap border border-orange-500/30`}>
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  )
}