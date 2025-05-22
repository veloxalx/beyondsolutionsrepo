      import { ArrowRight } from "lucide-react";
      import { Button } from "@/components/ui/button";
      
      export default function CTASection() {
        return (
          <section className="w-full py-32 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
                    Experience Unmatched Excellence
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Join the elite organizations that have achieved extraordinary results through our premium solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black font-medium px-10 py-7 rounded-full text-lg shadow-lg shadow-[#F5A623]/20 transition-all hover:shadow-xl hover:shadow-[#F5A623]/30 hover:-translate-y-1 border border-[#F5A623]/20">
                    Schedule Elite Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="px-10 py-7 rounded-full text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    View Success Stories
                  </Button> */}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#F5A623]"
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
                    <h3 className="font-semibold text-white mb-1">Exclusive Strategy Session</h3>
                    <p className="text-white/70 text-sm">Complimentary 45-minute executive consultation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#F5A623]"
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
                    <h3 className="font-semibold text-white mb-1">Premium Confidentiality</h3>
                    <p className="text-white/70 text-sm">Enterprise-grade privacy protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#F5A623]"
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
                    <h3 className="font-semibold text-white mb-1">Priority Response</h3>
                    <p className="text-white/70 text-sm">Executive team response within 12 hours</p>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </section>
          );
      }