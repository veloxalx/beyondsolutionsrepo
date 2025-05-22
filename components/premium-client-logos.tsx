const PremiumClientLogos = () => {
  // Premium company logos data
  const clientLogos = [
    { name: "Microsoft", width: "140", height: "32" },
    { name: "Google", width: "120", height: "40" },
    { name: "Amazon", width: "130", height: "38" },
    { name: "Apple", width: "36", height: "44" },
    { name: "Tesla", width: "120", height: "24" },
    { name: "Netflix", width: "110", height: "30" },
    { name: "Spotify", width: "120", height: "36" },
    { name: "Airbnb", width: "120", height: "36" },
    { name: "Uber", width: "90", height: "36" },
    { name: "Adobe", width: "100", height: "36" },
    { name: "Salesforce", width: "140", height: "28" },
    { name: "Oracle", width: "120", height: "24" }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            Trusted Partnership
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-orange-200 bg-clip-text text-transparent tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's most innovative and respected organizations to deliver exceptional results
          </p>
        </div>

        {/* Premium client logos grid */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/90 to-transparent z-10"></div>
          
          {/* Main logos container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-lg border border-orange-500/20 shadow-2xl shadow-orange-500/10 p-8 md:p-12">
            {/* First row - scrolling animation */}
            <div className="flex items-center justify-center mb-8 animate-marquee-fast">
              <div className="flex items-center space-x-12 md:space-x-16">
                {clientLogos.slice(0, 6).map((client, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <img
                        src={`/api/placeholder/${client.width}/${client.height}`}
                        alt={`${client.name} logo`}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
                        style={{ width: client.width + 'px', height: client.height + 'px' }}
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {clientLogos.slice(0, 6).map((client, index) => (
                  <div 
                    key={`row1-dup-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <img
                        src={`/api/placeholder/${client.width}/${client.height}`}
                        alt={`${client.name} logo`}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
                        style={{ width: client.width + 'px', height: client.height + 'px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - reverse scrolling */}
            <div className="flex items-center justify-center animate-marquee-reverse-fast">
              <div className="flex items-center space-x-12 md:space-x-16">
                {clientLogos.slice(6, 12).map((client, index) => (
                  <div 
                    key={`row2-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <img
                        src={`/api/placeholder/${client.width}/${client.height}`}
                        alt={`${client.name} logo`}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
                        style={{ width: client.width + 'px', height: client.height + 'px' }}
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {clientLogos.slice(6, 12).map((client, index) => (
                  <div 
                    key={`row2-dup-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <img
                        src={`/api/placeholder/${client.width}/${client.height}`}
                        alt={`${client.name} logo`}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
                        style={{ width: client.width + 'px', height: client.height + 'px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/90 to-black/60 backdrop-blur-sm rounded-xl border border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-300 font-medium">Global Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/90 to-black/60 backdrop-blur-sm rounded-xl border border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-gray-300 font-medium">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/90 to-black/60 backdrop-blur-sm rounded-xl border border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-300 font-medium">Countries</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/90 to-black/60 backdrop-blur-sm rounded-xl border border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Support</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for faster animations */}
      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse-fast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 12s linear infinite;
        }
        
        .animate-marquee-reverse-fast {
          animation: marquee-reverse-fast 12s linear infinite;
        }
        
        .animate-marquee-fast:hover,
        .animate-marquee-reverse-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PremiumClientLogos;