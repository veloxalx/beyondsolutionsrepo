import { useState, useEffect, useRef } from "react";
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
  Cog,
} from "lucide-react";

const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);
  const [particleCount, setParticleCount] = useState(12);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Creative Marketing",
      subtitle: "Innovative Brand & Campaign Execution",
      description:
        "Empower your brand with visually compelling, strategically crafted marketing campaigns that resonate with your audience and drive measurable growth.",
      icon: Target,
      primaryColor: "from-orange-500 to-orange-400",
      secondaryColor: "from-orange-500/20 to-orange-400/10",
      stats: "300+ Campaigns",
      metric: "50% Brand Lift",
      features: ["Brand Strategy", "Social Campaigns", "Content Marketing"],
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
    },
    {
      id: 2,
      title: "Digital Solutions",
      subtitle: "Powerful Web, App & Software Systems",
      description:
        "Build scalable websites, mobile apps, and software systems tailored to enhance your operational effectiveness and digital presence.",
      icon: Zap,
      primaryColor: "from-orange-600 to-orange-400",
      secondaryColor: "from-orange-600/20 to-orange-400/10",
      stats: "100+ Platforms Built",
      metric: "40% Faster Delivery",
      features: ["Web & App Dev", "Custom Software", "UI/UX"],
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.1) 0%, transparent 50%)",
    },
    {
      id: 3,
      title: "Event Management",
      subtitle: "Immersive Brand Experiences",
      description:
        "Deliver impactful, flawlessly executed events and activations that strengthen customer engagement and elevate your brand identity.",
      icon: TrendingUp,
      primaryColor: "from-orange-500 to-orange-300",
      secondaryColor: "from-orange-500/20 to-orange-300/10",
      stats: "200+ Events Delivered",
      metric: "90% Client Retention",
      features: [
        "Corporate Events",
        "Production Logistics",
        "Brand Activations",
      ],
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
    },
    {
      id: 4,
      title: "ICT & MIS Systems",
      subtitle: "Data-Driven Efficiency & Insights",
      description:
        "Empower organizations with custom MIS platforms, real-time data dashboards, and ICT systems to optimize operations and decision-making.",
      icon: Cog,
      primaryColor: "from-orange-400 to-orange-300",
      secondaryColor: "from-orange-400/20 to-orange-300/10",
      stats: "50+ MIS Projects",
      metric: "60% Decision Speed Gain",
      features: ["MIS Platforms", "GIS/BI Systems", "ICT for NGOs"],
      bgPattern:
        "radial-gradient(circle at 60% 60%, rgba(251, 146, 60, 0.08) 0%, transparent 50%)",
    },
  ];

  // Handle responsive particle count
  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth < 640 ? 6 : 12);
    };

    // Set initial count
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced auto-rotation with progress tracking
  useEffect(() => {
    if (!isAutoPlaying) return;

    const startProgress = () => {
      setProgressWidth(0);
      let width = 0;
      const progressInterval = setInterval(() => {
        width += 100 / 300; // 3 seconds = 300 * 10ms
        setProgressWidth(width);
        if (width >= 100) {
          clearInterval(progressInterval);
        }
      }, 10);
      return progressInterval;
    };

    const progressInterval = startProgress();

    intervalRef.current = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
      startProgress();
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying]);

  // Intersection observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const currentService = services[currentServiceIndex];
  const IconComponent = currentService.icon;

  const handleServiceChange = (index) => {
    setCurrentServiceIndex(index);
    setIsAutoPlaying(false);
    setProgressWidth(0);
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient overlay */}
        <div
          className="absolute inset-0 opacity-20 sm:opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Main gradient backgrounds - responsive sizing */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/15 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 left-1/5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-orange-400/20 to-orange-500/15 rounded-full blur-xl sm:blur-2xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-orange-300/10 to-orange-600/5 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "4s" }}
        />

        {/* Enhanced floating particles - responsive count */}
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40 sm:opacity-60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 sm:w-2 sm:h-2 bg-orange-400/40 rounded-full blur-sm animate-pulse" />
          </div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="heroGrid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div
            className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl border border-orange-500/40 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:animate-bounce" />
              <span className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider">
                ELITE BUSINESS TRANSFORMATION
              </span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            </div>

            {/* Main Headline - Fully responsive typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              <span
                className="block mb-3 sm:mb-4 lg:mb-6 text-white animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Transforming Businesses with
              </span>
              <span
                className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent animate-gradient-shift animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Elite Strategic Solutions
              </span>
            </h1>

            {/* Subtitle - Responsive text sizing */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light transition-all duration-700 px-4 sm:px-0 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              We deliver unmatched strategic consulting that drives exceptional
              business results for organizations seeking unprecedented growth
              and market leadership.
            </p>

            {/* Trust Indicators - Stack on small screens */}
            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                SL20 Trusted
              </span>
              <span className="flex items-center gap-2">
                <div
                  className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                Established in 2018
              </span>
              <span className="flex items-center gap-2">
                <div
                  className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                24/7 Support
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Service Card - Fully responsive */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div
            className={`relative w-full max-w-5xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div className="relative">
              {/* Service Card */}
              <div
                key={currentService.id}
                className="relative transform transition-all duration-700 ease-out animate-slide-in"
              >
                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 backdrop-blur-2xl border-2 border-orange-500/40 shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 group overflow-hidden">
                  {/* Dynamic background pattern */}
                  <div
                    className="absolute inset-0 opacity-10 sm:opacity-20 transition-opacity duration-1000"
                    style={{ background: currentService.bgPattern }}
                  />

                  {/* Animated glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentService.secondaryColor} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Header Section - Stack on mobile */}
                  <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:gap-10 mb-6 sm:mb-8 lg:mb-10 relative z-10">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${currentService.primaryColor} flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-6 group`}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl sm:rounded-3xl" />
                    </div>

                    <div className="text-center lg:text-left flex-1">
                      <p
                        className={`text-xs sm:text-sm font-bold tracking-wider bg-gradient-to-r ${currentService.primaryColor} bg-clip-text text-transparent mb-2 sm:mb-3 flex items-center justify-center lg:justify-start gap-2 animate-fade-in`}
                      >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 animate-spin-slow" />
                        {currentService.subtitle}
                      </p>
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                      >
                        {currentService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description - Responsive text sizing */}
                  <p
                    className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl relative z-10 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {currentService.description}
                  </p>

                  {/* Enhanced Features Grid - Responsive grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10 relative z-10">
                    {currentService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-black/70 border border-orange-500/40 hover:border-orange-400/60 transition-all duration-500 hover:bg-black/90 hover:transform hover:scale-105 group animate-slide-in-up"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-r ${currentService.primaryColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Stats Section - Stack on mobile */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
                    <div
                      className={`flex items-center gap-3 sm:gap-5 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r ${currentService.primaryColor} shadow-xl w-full sm:w-auto hover:scale-105 transition-all duration-500 group animate-slide-in-left`}
                      style={{ animationDelay: "0.6s" }}
                    >
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:animate-bounce" />
                      <div>
                        <p className="text-white font-black text-sm sm:text-base lg:text-lg">
                          {currentService.stats}
                        </p>
                        <p className="text-white/90 text-xs sm:text-sm font-medium">
                          Proven Excellence
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-3 sm:gap-5 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-black/80 border-2 border-orange-500/50 w-full sm:w-auto hover:scale-105 transition-all duration-500 hover:border-orange-400/70 group animate-slide-in-right"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400 group-hover:animate-bounce" />
                      <div>
                        <p className="text-white font-black text-sm sm:text-base lg:text-lg">
                          {currentService.metric}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm font-medium">
                          Performance Impact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Navigation - Responsive sizing */}
              <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 gap-3 sm:gap-4 lg:gap-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceChange(index)}
                    className={`transition-all duration-500 hover:scale-125 relative group ${
                      index === currentServiceIndex
                        ? "w-12 h-4 sm:w-14 sm:h-4 lg:w-16 lg:h-5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg shadow-orange-500/50"
                        : "w-4 h-4 sm:w-5 sm:h-5 bg-orange-500/50 rounded-full hover:bg-orange-400/70"
                    }`}
                  >
                    {index === currentServiceIndex && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Enhanced Progress Bar - Responsive height */}
              <div className="mt-6 sm:mt-8 w-full bg-gray-800/60 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm border border-orange-500/30 shadow-inner">
                <div
                  className={`h-full bg-gradient-to-r ${currentService.primaryColor} rounded-full shadow-lg transition-all duration-100 relative overflow-hidden`}
                  style={{ width: `${progressWidth}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 animate-shimmer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Responsive sizing and stacking */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "1.5s" }}
        >
            <button
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-black px-6 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-7 rounded-full text-sm sm:text-lg lg:text-xl shadow-2xl border-2 border-orange-400/40 group relative overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-orange-500/50"
            onClick={() => window.location.href = "/contact"}
            >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
              <span className="hidden sm:inline">
              Schedule Elite Consultation
              </span>
              <span className="sm:hidden">Get Consultation</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-3 transition-transform duration-300" />
            </span>
            </button>

          <button className="px-6 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-7 rounded-full border-2 border-orange-500/60 text-orange-300 hover:bg-orange-500/20 backdrop-blur-md font-black transition-all duration-500 bg-black/50 hover:scale-110 hover:-translate-y-2 hover:border-orange-400/80 hover:text-orange-200 hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden group text-sm sm:text-lg lg:text-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">
              <span className="hidden sm:inline">View Success Stories</span>
              <span className="sm:hidden">Success Stories</span>
            </span>
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(5px) rotate(-3deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
