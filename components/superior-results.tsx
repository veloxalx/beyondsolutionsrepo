import { useState, useEffect } from 'react';

const SuperiorResults = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    efficiency: 0,
    satisfaction: 0,
    growth: 0
  });

  useEffect(() => {
    const targets = {
      revenue: 340,
      efficiency: 95,
      satisfaction: 98,
      growth: 250
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const incrementCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

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

    const timer = setTimeout(incrementCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      value: counters.revenue,
      suffix: '%',
      label: 'Revenue Increase',
      description: 'Average client revenue growth',
      icon: '📈'
    },
    {
      value: counters.efficiency,
      suffix: '%',
      label: 'Efficiency Gain',
      description: 'Operational improvement',
      icon: '⚡'
    },
    {
      value: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Sustained partnership rate',
      icon: '🎯'
    },
    {
      value: counters.growth,
      suffix: '%',
      label: 'Market Growth',
      description: 'Accelerated expansion',
      icon: '🚀'
    }
  ];

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-red-500/10 rounded-full blur-[200px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-orange-600/25 via-amber-400/15 to-yellow-500/10 rounded-full blur-[180px] opacity-30 translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/20 to-amber-500/20 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-pulse"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mb-6">
            <div className="px-6 py-2 bg-black rounded-full">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Elite Performance</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-400 to-amber-300 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Superior Results for
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Elite Organizations
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our strategic solutions consistently deliver exceptional outcomes that 
            <span className="text-orange-400 font-semibold"> transform businesses</span> and 
            <span className="text-amber-400 font-semibold"> drive unprecedented growth</span>
          </p>
        </div>

        {/* Enhanced Results Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              
              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-orange-300 text-4xl">{metric.suffix}</span>
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {metric.description}
              </p>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 cursor-pointer">
            <span>Discover Your Potential</span>
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full transform translate-x-px"></div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Join the elite organizations already experiencing transformational growth with our proven methodologies
          </p>
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
          animation: gradient-x 4s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default SuperiorResults;