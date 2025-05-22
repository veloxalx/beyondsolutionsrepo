import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500 to-orange-600 rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent">
                  Experience Unmatched Excellence
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the elite organizations that have achieved extraordinary results through our premium solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-500/90 hover:to-orange-600/90 text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 border border-orange-500/20 flex items-center justify-center gap-2 group">
                  <span>Schedule Elite Consultation</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/30">
                  View Success Stories
                </button>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div className="flex items-start gap-3 p-3 sm:p-0">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Exclusive Strategy Session</h3>
                  <p className="text-white/70 text-xs sm:text-sm">Complimentary 45-minute executive consultation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 sm:p-0">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Premium Confidentiality</h3>
                  <p className="text-white/70 text-xs sm:text-sm">Enterprise-grade privacy protection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 sm:p-0 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Priority Response</h3>
                  <p className="text-white/70 text-xs sm:text-sm">Executive team response within 12 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}