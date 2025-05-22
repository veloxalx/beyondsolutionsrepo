import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Trophy, ArrowRight, Star } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", gradient: "from-blue-500 to-blue-600" },
    { Icon: Twitter, label: "Twitter", gradient: "from-sky-400 to-sky-500" },
    { Icon: Instagram, label: "Instagram", gradient: "from-pink-500 to-purple-500" },
    { Icon: Linkedin, label: "LinkedIn", gradient: "from-blue-600 to-blue-700" }
  ]

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-red-500/10 rounded-full blur-[250px] opacity-40 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-orange-600/25 via-amber-400/15 to-yellow-500/10 rounded-full blur-[200px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/15 to-amber-500/15 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20 pb-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                    Beyond Solutions
                  </h3>
                  <p className="text-orange-400 text-sm font-medium">Elite Business Partners</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We help <span className="text-orange-400 font-semibold">elite organizations</span> achieve extraordinary results through our 
              <span className="text-amber-400 font-semibold"> proprietary strategic solutions</span> that drive unmatched growth, innovation, and lasting success.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, gradient }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:${gradient} transition-all duration-300 group hover:transform hover:scale-110 hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-8 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
              Company
            </h3>
            <ul className="space-y-5">
              {["About", "Leadership", "Careers", "Contact", "Press"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-3 group text-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500/30 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-8 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              Solutions
            </h3>
            <ul className="space-y-5">
              {[
                "Elite Revenue Growth",
                "Superior Operational Excellence", 
                "Premier Digital Transformation",
                "Unrivaled Market Expansion",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`/solutions/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-3 group text-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500/30 group-hover:bg-amber-500 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-2xl bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                  Exclusive Insights
                </h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Join <span className="text-orange-400 font-semibold">industry leaders</span> receiving our premium insights, trends, and 
                <span className="text-amber-400 font-semibold"> exclusive strategies</span> for exceptional business growth.
              </p>
              
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-800/50 border border-gray-600/50 text-white placeholder:text-gray-500 rounded-xl pl-6 pr-32 py-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 disabled:from-green-500 disabled:to-green-600 text-white rounded-lg px-6 font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-2"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                    {!isSubscribed && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-700/50">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Email Us</p>
              <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                elite@beyondsolutions.com
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Call Us</p>
              <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                (800) 123-4567
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Visit Us</p>
              <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                123 Premium Plaza, Suite 500<br />New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Beyond Solutions. 
              <span className="text-orange-400 font-semibold ml-1">The Premier Business Transformation Partner.</span>
            </p>
          </div>
          
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((item, i) => (
              <a
                key={i}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-400 hover:text-orange-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}