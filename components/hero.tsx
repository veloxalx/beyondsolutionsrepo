import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  Zap,
  Award,
  ChevronRight,
  Sparkles,
  Crown,
} from "lucide-react";

const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Strategic Consulting",
      subtitle: "Future-Ready Business Strategy",
      description: "Transform your business strategy with data-driven insights and proven methodologies that deliver measurable results.",
      icon: Target,
      primaryColor: "from-orange-500 to-orange-400",
      stats: "500+ Strategies",
      metric: "85% Success Rate",
      features: ["Market Analysis", "Strategic Roadmaps", "Implementation"],
    },
    {
      id: 2,
      title: "Digital Transformation",
      subtitle: "Next-Gen Technology Solutions",
      description: "Modernize operations with cutting-edge technology solutions and automation that drives efficiency across your organization.",
      icon: Zap,
      primaryColor: "from-orange-600 to-orange-400",
      stats: "98% Success Rate",
      metric: "60% Efficiency Gain",
      features: ["Cloud Migration", "Automation", "Integration"],
    },
    {
      id: 3,
      title: "Performance Optimization",
      subtitle: "Maximize ROI & Efficiency",
      description: "Maximize efficiency and ROI through systematic improvements and optimization strategies that deliver tangible results.",
      icon: TrendingUp,
      primaryColor: "from-orange-500 to-orange-300",
      stats: "40% ROI Increase",
      metric: "200+ Projects",
      features: ["Process Improvement", "Analytics", "Cost Optimization"],
    },
  ];

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentServiceIndex];
  const IconComponent = currentService.icon;

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/15 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-bounce"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-black/90 to-gray-900/80 backdrop-blur-xl border border-orange-500/30 shadow-xl">
              <Crown className="w-4 h-4 text-orange-400 animate-spin" style={{animationDuration: '10s'}} />
              <span className="text-orange-300 text-sm font-semibold tracking-wider">
                ELITE BUSINESS TRANSFORMATION
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="block mb-4 text-white">
                Transforming Businesses with
              </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Elite Strategic Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              We deliver unmatched strategic consulting that drives exceptional 
              business results for organizations seeking unprecedented growth.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            <div 
              key={currentService.id}
              className="relative transform transition-all duration-500 ease-in-out"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/95 to-black/90 backdrop-blur-2xl border-2 border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-400/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentService.primaryColor} flex items-center justify-center shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-110`}>
                    <IconComponent className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className={`text-sm font-bold tracking-wider bg-gradient-to-r ${currentService.primaryColor} bg-clip-text text-transparent mb-2 flex items-center justify-center lg:justify-start gap-2`}>
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      {currentService.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                  {currentService.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {currentService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-black/60 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:bg-black/80"
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${currentService.primaryColor} flex items-center justify-center shadow-lg`}>
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r ${currentService.primaryColor} shadow-xl w-full sm:w-auto hover:scale-105 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-bold">{currentService.stats}</p>
                      <p className="text-white/90 text-sm">Proven Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-black/80 border-2 border-orange-500/40 w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="text-white font-bold">{currentService.metric}</p>
                      <p className="text-gray-400 text-sm">Performance Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`transition-all duration-300 hover:scale-110 ${
                    index === currentServiceIndex
                      ? "w-12 h-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg"
                      : "w-4 h-4 bg-orange-500/40 rounded-full hover:bg-orange-400/60"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-gray-800/60 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-orange-500/20">
              <div
                className={`h-full bg-gradient-to-r ${currentService.primaryColor} rounded-full shadow-lg transition-all duration-300 animate-progress`}
                style={{animation: 'progress 3s linear infinite'}}
              >
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-12 py-6 rounded-full text-lg shadow-2xl border-2 border-orange-400/30 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-white/10 rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center gap-3">
              Schedule Elite Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>

          <button className="px-12 py-6 rounded-full border-2 border-orange-500/50 text-orange-300 hover:bg-orange-500/20 backdrop-blur-md font-bold transition-all duration-500 bg-black/40 hover:scale-105 hover:-translate-y-1 hover:border-orange-400/70 hover:text-orange-200">
            View Success Stories
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;