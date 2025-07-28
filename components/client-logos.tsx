"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const clients = ["Microsoft", "Adobe", "Google", "Amazon", "Spotify", "IBM", "Oracle", "Tesla", "Apple", "Samsung"]

const socialLinks = [
  {
    Icon: Facebook,
    label: "Facebook",
    gradient: "from-blue-500 to-blue-600",
    link: "https://www.facebook.com/beyondsolutions.lk"
  },
  {
    Icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/beyondsolutionslk/?hl=en",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    link: "https://lk.linkedin.com/in/gayan-perera-5662351b5",
    gradient: "from-blue-600 to-blue-700",
  },
];

export default function ClientLogos() {
  const controls = useAnimation()
  const socialControls = useAnimation()
  const ref = useRef(null)
  const socialRef = useRef(null)
  const inView = useInView(ref, { once: false })
  const socialInView = useInView(socialRef, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (socialInView) {
      socialControls.start("visible")
    }
  }, [socialControls, socialInView])

  return (
    <section className="w-full py-16 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-xl font-medium text-center text-white/70 mb-12"
        >
          Trusted by Industry Leaders Worldwide
        </motion.h2>
      </div>

      <div className="relative overflow-hidden w-full mb-16">
        <div className="flex space-x-16 animate-marquee">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-8"
            >
              <span className="text-white font-medium">{client}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 flex space-x-16 animate-marquee2">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-8"
            >
              <span className="text-white font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.h3
          className="text-lg font-medium text-center text-white/70 mb-8"
        >
          Connect With Us
        </motion.h3>
        <motion.div
          ref={socialRef}
          initial="hidden"
          animate={socialControls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8,
                staggerChildren: 0.2
              } 
            },
          }}
          className="flex justify-center items-center space-x-8"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <button
                type="button"
                className={`group relative p-4 rounded-full bg-gradient-to-r ${social.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white`}
                aria-label={social.label}
              >
                <social.Icon 
                  className="w-6 h-6 text-white" 
                />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </button>
            </a>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  )
}