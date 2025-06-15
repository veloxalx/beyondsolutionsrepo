const PremiumClientLogos = () => {
  // Premium company logos data with max dimensions to maintain aspect ratio
  const clientLogos = [
    { name: "Sri Lanka Telecom Mobile", maxWidth: "140", imageUrl: "/images/logos/sltm.png" },
    { name: "Seylan Bank", maxWidth: "120", imageUrl: "/images/logos/seylan.png" },
    { name: "Bank of Ceylon", maxWidth: "130", imageUrl: "/images/logos/boc.png" },
    { name: "LOLC", maxWidth: "120", imageUrl: "/images/logos/LOLC.jpg" },
    { name: "NSB", maxWidth: "120", imageUrl: "/images/logos/nsb.png" },
    { name: "ComBank", maxWidth: "110", imageUrl: "/images/logos/combanl.png" },
    { name: "Commercial Credit", maxWidth: "120", imageUrl: "/images/logos/commericalcredit.png" },
    { name: "Acres", maxWidth: "140", imageUrl: "/images/logos/acres.jpg" },
    { name: "Grill n Chill", maxWidth: "120", imageUrl: "/images/logos/grillnchill.png" },
    { name: "Lyceum", maxWidth: "130", imageUrl: "/images/logos/lyceum.webp" },
    { name: "Mercedes", maxWidth: "120", imageUrl: "/images/logos/merc.jpg" },
    { name: "Prime Group", maxWidth: "110", imageUrl: "/images/logos/primegroup.png" },
    { name: "SLIC", maxWidth: "120", imageUrl: "/images/logos/slic.png" },
    { name: "Sri Pala", maxWidth: "140", imageUrl: "/images/logos/sripala.png" },
    { name: "Train", maxWidth: "120", imageUrl: "/images/logos/train.png" },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_orange_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_orange_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of companies that trust our solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/90 to-transparent z-10"></div>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-lg border border-orange-500/20 shadow-2xl shadow-orange-500/10 p-8 md:p-12">
            {/* First row */}
            <div className="flex items-center justify-center mb-8 animate-marquee-fast">
              <div className="flex items-center space-x-12 md:space-x-16">
                {clientLogos.slice(0, 6).map((client, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <div className="flex items-center justify-center h-12">
                        <img
                          src={client.imageUrl}
                          alt={`${client.name} logo`}
                          className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125 max-h-full object-contain"
                          style={{ maxWidth: client.maxWidth + 'px' }}
                        />
                      </div>
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
                      <div className="flex items-center justify-center h-12">
                        <img
                          src={client.imageUrl}
                          alt={`${client.name} logo`}
                          className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125 max-h-full object-contain"
                          style={{ maxWidth: client.maxWidth + 'px' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row */}
            <div className="flex items-center justify-center animate-marquee-reverse-fast">
              <div className="flex items-center space-x-12 md:space-x-16">
                {clientLogos.slice(6, 12).map((client, index) => (
                  <div 
                    key={`row2-${index}`}
                    className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
                      <div className="flex items-center justify-center h-12">
                        <img
                          src={client.imageUrl}
                          alt={`${client.name} logo`}
                          className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125 max-h-full object-contain"
                          style={{ maxWidth: client.maxWidth + 'px' }}
                        />
                      </div>
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
                      <div className="flex items-center justify-center h-12">
                        <img
                          src={client.imageUrl}
                          alt={`${client.name} logo`}
                          className="opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125 max-h-full object-contain"
                          style={{ maxWidth: client.maxWidth + 'px' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <div className="container px-4 md:px-6 mx-auto relative z-10 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">500+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">98%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">10+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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