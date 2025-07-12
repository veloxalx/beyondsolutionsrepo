import { useState, useEffect, useRef } from 'react';

const SuperiorResults = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    efficiency: 0,
    satisfaction: 0,
    growth: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Enhanced counter animation with staggered start
  useEffect(() => {
    const targets = {
      revenue: 340,
      efficiency: 95,
      satisfaction: 98,
      growth: 250
    };

    const duration = 3000;
    const steps = 90;
    const interval = duration / steps;

    const incrementCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        // More sophisticated easing function
        const easeOut = 1 - Math.pow(1 - progress, 4);

        setCounters({
          revenue: Math.floor(targets.revenue * easeOut),
          efficiency: Math.floor(targets.efficiency * easeOut),
          satisfaction: Math.floor(targets.satisfaction * easeOut),
          growth: Math.floor(targets.growth * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);
    };

    // Trigger animation when component becomes visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(incrementCounters, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const metrics = [
    {
      value: counters.revenue,
      suffix: '%',
      label: 'Revenue Increase',
      description: 'Average client revenue growth in first quarter',
      icon: '📈',
      color: 'from-emerald-400 to-green-300',
      accentColor: 'emerald'
    },
    {
      value: counters.efficiency,
      suffix: '%',
      label: 'Efficiency Gain',
      description: 'Operational improvement through automation',
      icon: '⚡',
      color: 'from-orange-400 to-amber-300',
      accentColor: 'orange'
    },
    {
      value: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Sustained partnership and retention rate',
      icon: '🎯',
      color: 'from-blue-400 to-cyan-300',
      accentColor: 'blue'
    },
    {
      value: counters.growth,
      suffix: '%',
      label: 'Market Growth',
      description: 'Accelerated expansion and market penetration',
      icon: '🚀',
      color: 'from-purple-400 to-pink-300',
      accentColor: 'purple'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-br from-orange-500/40 via-amber-500/30 to-red-500/20 rounded-full blur-[250px] opacity-60 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-tr from-orange-600/35 via-amber-400/25 to-yellow-500/15 rounded-full blur-[200px] opacity-40 translate-y-1/2 -translate-x-1/3 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/30 to-amber-500/30 rounded-full blur-[150px] opacity-30 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Grid Pattern with animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-pulse"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="animatedGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.6"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#animatedGrid)" stroke="url(#gridGradient)"/>
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Enhanced Header with staggered animations */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 mb-8 animate-gradient-pulse">
            <div className="px-8 py-3 bg-black rounded-full backdrop-blur-sm">
              <span className="text-orange-400 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></span>
                Elite Performance Metrics
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-10 tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-white via-orange-400 to-amber-300 bg-clip-text text-transparent bg-300% animate-gradient-x" id='results'>
              Superior Results for
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
              Elite Organizations
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Our strategic solutions consistently deliver exceptional outcomes that 
            <span className="text-orange-400 font-bold animate-pulse"> transform businesses</span> and 
            <span className="text-amber-400 font-bold animate-pulse"> drive unprecedented growth</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              Real-time metrics
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              Verified results
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              Enterprise grade
            </span>
          </div>
        </div>

        {/* Enhanced Results Metrics with advanced interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/60 rounded-3xl p-8 transition-all duration-700 cursor-pointer transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:scale-110 hover:-translate-y-2`}
              style={{ 
                animationDelay: `${index * 0.2 + 0.5}s`,
                transform: hoveredCard === index ? 'scale(1.05) translateY(-8px)' : undefined
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Dynamic glow effect based on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700 ${
                metric.accentColor === 'emerald' ? 'from-emerald-500/20 to-green-500/10' :
                metric.accentColor === 'orange' ? 'from-orange-500/20 to-amber-500/10' :
                metric.accentColor === 'blue' ? 'from-blue-500/20 to-cyan-500/10' :
                'from-purple-500/20 to-pink-500/10'
              }`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r transition-all duration-500"
                   style={{
                     background: hoveredCard === index ? `linear-gradient(135deg, var(--tw-gradient-stops)) border-box` : undefined,
                     '--tw-gradient-from': metric.accentColor === 'emerald' ? '#10b981' :
                                          metric.accentColor === 'orange' ? '#f97316' :
                                          metric.accentColor === 'blue' ? '#3b82f6' : '#8b5cf6',
                     '--tw-gradient-to': metric.accentColor === 'emerald' ? '#059669' :
                                        metric.accentColor === 'orange' ? '#ea580c' :
                                        metric.accentColor === 'blue' ? '#1d4ed8' : '#7c3aed'
                   }}></div>
              
              {/* Icon with enhanced animation */}
              <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {metric.icon}
              </div>
              
              {/* Value with counting animation */}
              <div className="text-6xl md:text-7xl font-black mb-4 relative">
                <span className={`bg-gradient-to-r ${metric.color} bg-clip-text text-transparent transition-all duration-500 group-hover:drop-shadow-lg`}>
                  {metric.value}
                </span>
                <span className={`text-4xl font-bold ml-1 transition-colors duration-300 ${
                  metric.accentColor === 'emerald' ? 'text-emerald-300 group-hover:text-emerald-200' :
                  metric.accentColor === 'orange' ? 'text-orange-300 group-hover:text-orange-200' :
                  metric.accentColor === 'blue' ? 'text-blue-300 group-hover:text-blue-200' :
                  'text-purple-300 group-hover:text-purple-200'
                }`}>{metric.suffix}</span>
                
                {/* Floating plus indicator */}
                {hoveredCard === index && (
                  <span className="absolute -top-2 -right-4 text-2xl font-bold text-green-400 animate-bounce">
                    +
                  </span>
                )}
              </div>
              
              {/* Label with enhanced styling */}
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                metric.accentColor === 'emerald' ? 'text-white group-hover:text-emerald-200' :
                metric.accentColor === 'orange' ? 'text-white group-hover:text-orange-200' :
                metric.accentColor === 'blue' ? 'text-white group-hover:text-blue-200' :
                'text-white group-hover:text-purple-200'
              }`}>
                {metric.label}
              </h3>
              
              {/* Description with animation */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {metric.description}
              </p>
              
              {/* Progress bar indicator */}
              <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${(metric.value / (metric.suffix === '%' ? 100 : 400)) * 100}%` : '0%',
                    transitionDelay: `${index * 0.2 + 1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '1.5s'}}>
            <a
            href="/contact"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 hover:from-orange-500 hover:via-amber-400 hover:to-orange-400 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40 cursor-pointer relative overflow-hidden"
            >
            <span className="relative z-10">Discover Your Potential</span>
            
            {/* Animated arrow */}
            <div className="relative z-10 w-6 sm:w-8 h-6 sm:h-8 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full transform translate-x-px group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          
            <p className="text-gray-400 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Our market leadership stems from our commitment to excellence. Get in touch with us today and experience the extraordinary impact of our ATL and BTL campaigns.
            </p>
            <div className="mt-4 text-gray-300 text-sm sm:text-base font-medium">
            Imesh Silva<br />
            <span className="text-orange-400">Founder / Director</span>
            </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 text-gray-500 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full"></div>
              SL20 Approved
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-500 rounded-full"></div>
              ISO Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full"></div>
              99.9% Uptime
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-pulse {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-33%); }
          50% { transform: translateY(-20px) translateX(-33%); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-gradient-pulse {
          background-size: 200% 200%;
          animation: gradient-pulse 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default SuperiorResults;