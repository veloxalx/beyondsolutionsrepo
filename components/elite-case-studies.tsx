"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const caseStudies = [
  {
    id: "prime-group-awards",
    title: "Prime Group Awards Ceremony 2018",
    company: "Prime Group",
    industry: "Corporate Events",
    challenge:
      "Prime Group needed a prestigious awards ceremony that would celebrate their achievements while reinforcing their brand excellence and corporate values to stakeholders and employees.",
    solution:
      "We designed and executed a comprehensive awards ceremony featuring premium venue management, elegant staging, sophisticated lighting design, and seamless event coordination.",
    results: [
      "500+ attendees including industry leaders",
      "95% positive feedback from participants",
      "Enhanced brand prestige and recognition",
      "Successful celebration of company milestones",
    ],
    image: "/images/case-studies/prime.jpg",
    logo: "/images/logos/primegroup.png",
    testimonial: {
      quote:
        "Beyond Solutions delivered an exceptional awards ceremony that perfectly captured our company's achievements and values. The attention to detail and professional execution exceeded our expectations.",
      author: "Rajesh Perera",
      title: "Managing Director, Prime Group",
    },
  },
  {
    id: "sathosa-idam-nidhanaya",
    title: "Sathosa Idam Nidhanaya - Season 3",
    company: "Sathosa",
    industry: "Retail & Entertainment",
    challenge:
      "Sathosa required a captivating television production for Season 3 of their popular program, needing creative content that would engage audiences while promoting their brand values.",
    solution:
      "We provided comprehensive television production services including concept development, scriptwriting, filming, post-production, and broadcast coordination for the entire season.",
    results: [
      "Successfully completed full season production",
      "High viewer engagement and ratings",
      "Enhanced brand visibility for Sathosa",
      "Seamless broadcast delivery on schedule",
    ],
    image: "/images/case-studies/sathosa.jpg",
    logo: "/images/logos/sathosa.png",
    testimonial: {
      quote:
        "The production quality and creative excellence delivered by Beyond Solutions for Season 3 was outstanding. They brought our vision to life with professionalism and creativity.",
      author: "Samantha Silva",
      title: "Marketing Manager, Sathosa",
    },
  },
  {
    id: "stax-masquerade-dance",
    title: "Stax Masquerade Dance",
    company: "Stax Entertainment",
    industry: "Entertainment & Events",
    challenge:
      "Stax Entertainment wanted to create an unforgettable masquerade dance event that would set new standards for luxury entertainment experiences in the market.",
    solution:
      "We orchestrated a premium masquerade dance event featuring elaborate decorations, professional choreography, luxury catering, and immersive entertainment experiences.",
    results: [
      "300+ guests in attendance",
      "Sold-out event with waiting list",
      "100% client satisfaction rating",
      "Established new benchmark for luxury events",
    ],
    image: "/images/case-studies/stax.jpg",
    logo: "/images/logos/stax.png",
    testimonial: {
      quote:
        "Beyond Solutions transformed our masquerade vision into reality. The event was magical, and every detail was executed to perfection. Our guests are still talking about it!",
      author: "David Fernando",
      title: "Event Director, Stax Entertainment",
    },
  },
  {
    id: "designer-stalls",
    title: "Designer Stalls Exhibition",
    company: "Various Designers",
    industry: "Fashion & Design",
    challenge:
      "Multiple fashion designers needed an elegant platform to showcase their collections, requiring sophisticated stall designs that would enhance their brand presentation and attract customers.",
    solution:
      "We created bespoke designer stalls with premium materials, strategic lighting, and optimized layouts that highlighted each designer's unique aesthetic while maintaining cohesive exhibition flow.",
    results: [
      "50+ designers successfully showcased",
      "40% increase in sales compared to previous exhibitions",
      "Enhanced designer brand visibility",
      "Positive feedback from both designers and visitors",
    ],
    image: "/images/case-studies/stalls/stall1.png",
    logo: "/images/logos/designer-collective.png",
    testimonial: {
      quote:
        "The designer stalls created by Beyond Solutions perfectly captured the essence of our brand. The quality and attention to detail helped us stand out and connect with our target audience.",
      author: "Priya Wickramasinghe",
      title: "Fashion Designer",
    },
  },
  {
    id: "premium-ceremonies",
    title: "Premium Corporate Ceremonies",
    company: "Multiple Corporate Clients",
    industry: "Corporate Events",
    challenge:
      "Various corporations needed sophisticated ceremony planning for milestone celebrations, product launches, and corporate gatherings that would reflect their brand excellence.",
    solution:
      "We delivered comprehensive ceremony planning services including venue selection, décor design, catering coordination, entertainment booking, and complete event management.",
    results: [
      "25+ successful ceremonies executed",
      "98% client retention rate",
      "Zero incidents or delays",
      "Consistent 5-star client feedback",
    ],
    image: "/images/case-studies/stalls/stall2.png",
    logo: "/images/logos/beyond-solutions.png",
    testimonial: {
      quote:
        "Beyond Solutions has been our trusted partner for all major corporate ceremonies. Their professionalism, creativity, and flawless execution make every event memorable and impactful.",
      author: "Nirosh Gunasekara",
      title: "Corporate Relations Manager",
    },
  },

];

export default function EliteCaseStudies() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0])

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 text-[#F5A623] font-medium">
            <Trophy className="h-4 w-4" />
            <span>Elite Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See how we've helped elite organizations transform challenges into unprecedented success.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseStudy(study)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCaseStudy.id === study.id
                  ? "bg-gradient-to-r from-[#F5A623] to-[#FF4D00] text-black font-medium"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCaseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={activeCaseStudy.image || "/placeholder.svg"}
                alt={activeCaseStudy.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/20 backdrop-blur-sm text-white font-medium text-sm mb-3">
                  <Trophy className="h-3.5 w-3.5" />
                  <span>Elite Success Story</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black font-bold">
                      {activeCaseStudy.company
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{activeCaseStudy.company}</div>
                    <div className="text-white/70 text-sm">{activeCaseStudy.industry}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{activeCaseStudy.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">The Challenge</h4>
                  <p className="text-gray-300">{activeCaseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">Our Elite Solution</h4>
                  <p className="text-gray-300">{activeCaseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#F5A623] mb-2">Exceptional Results</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCaseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#F5A623]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mt-6">
                <blockquote className="text-lg italic text-white/90 mb-4">
                  "{activeCaseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center">
                    <span className="text-[#F5A623] font-bold">{activeCaseStudy.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{activeCaseStudy.testimonial.author}</p>
                    <p className="text-white/70 text-sm">{activeCaseStudy.testimonial.title}</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full group mt-4">
                <span>View detailed case study</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
