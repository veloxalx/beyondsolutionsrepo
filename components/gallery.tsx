import React, { useState, useRef } from 'react'
import { Camera, Award, Music, Palette, Crown, Star, ArrowRight, Eye, ExternalLink, TrendingUp, Users, Calendar } from 'lucide-react'

const ServiceGallery = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [imageErrors, setImageErrors] = useState({})

  const projects = [
    {
      id: 1,
      title: "Prime Group Awards Ceremony 2018",
      category: "ceremonies",
      image: "/images/case-studies/prime.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Prime Group needed a prestigious awards ceremony that would celebrate their achievements while reinforcing their brand excellence and corporate values to stakeholders and employees.",
      services: ["Event Planning", "Stage Design", "Audio Visual", "Logistics"],
      year: "2018",
      icon: Award,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/5",
      company: "Prime Group",
      industry: "Corporate Events",
      results: ["500+ attendees including industry leaders", "95% positive feedback from participants"]
    },
    {
      id: 2,
      title: "Sathosa Idam Nidhanaya - Season 3",
      category: "campaigns",
      image: "/images/case-studies/sathosa.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      description: "Sathosa required a captivating television production for Season 3 of their popular program, needing creative content that would engage audiences while promoting their brand values.",
      services: ["Television Production", "Content Development", "Scriptwriting", "Post-Production"],
      year: "2023",
      icon: TrendingUp,
      color: "from-orange-600 to-yellow-500",
      bgColor: "from-orange-600/10 to-yellow-500/5",
      company: "Sathosa",
      industry: "Retail & Entertainment",
      results: ["Successfully completed full season production", "High viewer engagement and ratings"]
    },
    {
      id: 3,
      title: "Stax Masquerade Dance",
      category: "events",
      image: "/images/case-studies/stax.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      description: "Stax Entertainment wanted to create an unforgettable masquerade dance event that would set new standards for luxury entertainment experiences in the market.",
      services: ["Event Conceptualization", "Creative Design", "Entertainment Management", "Venue Setup"],
      year: "2023",
      icon: Music,
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-400/10 to-orange-600/5",
      company: "Stax Entertainment",
      industry: "Entertainment & Events",
      results: ["300+ guests in attendance", "Sold-out event with waiting list"]
    },
    {
      id: 4,
      title: "Designer Stalls Exhibition",
      category: "fabrication",
      image: "/images/case-studies/stalls/stall1.png",
      fallbackImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Multiple fashion designers needed an elegant platform to showcase their collections, requiring sophisticated stall designs that would enhance their brand presentation and attract customers.",
      services: ["Stall Design", "Fabrication", "Branding", "Installation"],
      year: "2023",
      icon: Palette,
      color: "from-orange-500 to-blue-500",
      bgColor: "from-orange-500/10 to-blue-500/5",
      company: "Various Designers",
      industry: "Fashion & Design",
      results: ["50+ designers successfully showcased", "40% increase in sales compared to previous exhibitions"]
    },
    {
      id: 5,
      title: "Premium Corporate Ceremonies",
      category: "ceremonies",
      image: "/images/case-studies/stalls/stall2.png",
      fallbackImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description: "Various corporations needed sophisticated ceremony planning for milestone celebrations, product launches, and corporate gatherings that would reflect their brand excellence.",
      services: ["Corporate Events", "Protocol Management", "VIP Coordination", "Media Management"],
      year: "2024",
      icon: Crown,
      color: "from-orange-600 to-purple-500",
      bgColor: "from-orange-600/10 to-purple-500/5",
      company: "Multiple Corporate Clients",
      industry: "Corporate Events",
      results: ["25+ successful ceremonies executed", "98% client retention rate"]
    },
    {
      id: 6,
      title: "Brand Activation Events",
      category: "campaigns",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      description: "Dynamic brand activation campaigns that create lasting impressions and drive meaningful engagement",
      services: ["Brand Activation", "Experiential Marketing", "Consumer Engagement", "ROI Tracking"],
      year: "2024",
      icon: Star,
      color: "from-orange-500 to-green-500",
      bgColor: "from-orange-500/10 to-green-500/5",
      company: "Various Clients",
      industry: "Marketing & Advertising",
      results: ["Multiple successful activations", "Enhanced brand visibility"]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ceremonies', label: 'Ceremonies', count: projects.filter(p => p.category === 'ceremonies').length },
    { id: 'campaigns', label: 'BTL Campaigns', count: projects.filter(p => p.category === 'campaigns').length },
    { id: 'events', label: 'Events', count: projects.filter(p => p.category === 'events').length },
    { id: 'fabrication', label: 'Fabrication', count: projects.filter(p => p.category === 'fabrication').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Calendar },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Years of Excellence", icon: TrendingUp },
    { number: "1000+", label: "Events Managed", icon: Users }
  ]

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  return (
    <section className="w-full py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-orange-600/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, #f97316 1px, transparent 1px)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/15 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-400/10 to-transparent"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 mb-6">
            <Camera className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-semibold tracking-wide">OUR PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Service </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Get to know about us and how we made a breakthrough to the Digital marketing industry in a short time span
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/60 backdrop-blur-sm shadow-xl shadow-black/20 border border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group hover:border-orange-400/40"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50 hover:border-orange-500/30'
              }`}
            >
              {category.label} <span className="text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            const hasImageError = imageErrors[project.id]
            
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Main Project Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/80 backdrop-blur-sm shadow-xl shadow-black/20 border border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden hover:border-orange-500/40">
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    {!hasImageError ? (
                      <>
                        <img
                          src={imageErrors[project.id] ? project.fallbackImage : project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={() => handleImageError(project.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/30 mix-blend-overlay"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/30 mix-blend-overlay"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Overlay with Eye Icon */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-bold shadow-md`}>
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative z-10 p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-700/60 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* View Project Button */}
                    {/* <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 flex items-center justify-center gap-2 hover:scale-105">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Next Masterpiece?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create something extraordinary together. Every great campaign starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 inline-flex items-center justify-center gap-2"
              >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
              </a>
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2">
              View All Projects
              <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceGallery