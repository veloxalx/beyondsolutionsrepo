import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Trophy,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const socialLinks = [
    {
      Icon: Facebook,
      label: "Facebook",
      gradient: "from-blue-500 to-blue-600",
    },
    { Icon: Twitter, label: "Twitter", gradient: "from-sky-400 to-sky-500" },
    {
      Icon: Instagram,
      label: "Instagram",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  const phoneNumbers = [
    { number: "+94 772 771 224", name: "Imesh" },
    { number: "+61 423 797 092", name: "" },
    { number: "+94 707 077 079", name: "Shane" },
    { number: "+94 775 545 952", name: "Gayan" },
  ];

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
            <pattern
              id="footer-grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-amber-400 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                    Beyond Solutions
                  </h3>
                  <p className="text-orange-400 text-xs font-medium">
                    Elite Business Partners
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed" id="contact">
              We help{" "}
              <span className="text-orange-400 font-semibold">
                elite organizations
              </span>{" "}
              achieve extraordinary results through our
              <span className="text-amber-400 font-semibold">
                {" "}
                proprietary strategic solutions
              </span>{" "}
              that drive unmatched growth, innovation, and lasting success.
            </p>

            <div className="flex gap-2">
              {socialLinks.map(({ Icon, label, gradient }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 transition-all duration-300 group hover:transform hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-0.5 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
              Company
            </h3>
            <ul className="space-y-3">
              {["About", "Leadership", "Careers", "Contact", "Press"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                "Integrated Marketing Solutions",
                "Conceptualizing",
                "Design & Fabrication of Promotional Material",
                "Crafting Marketing Strategy",
                "Project Planning & Management",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`/solutions/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30 group-hover:bg-amber-500 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Star className="h-3.5 w-3.5 text-white" />
                </div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                  Exclusive Insights
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Join{" "}
                <span className="text-orange-400 font-semibold">
                  industry leaders
                </span>{" "}
                receiving our premium insights, trends, and
                <span className="text-amber-400 font-semibold">
                  {" "}
                  exclusive strategies
                </span>{" "}
                for exceptional business growth.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-800/50 border border-gray-600/50 text-white placeholder:text-gray-500 rounded-lg pl-4 pr-28 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 text-sm"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 disabled:from-green-500 disabled:to-green-600 text-white rounded-md px-4 font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-1.5 text-sm"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                    {!isSubscribed && <ArrowRight className="h-3 w-3" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information - Fixed Layout */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Email */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-4 w-4 text-white" />
              </div>
                            <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:hello@beyondsolutions.lk" className="hover:text-orange-400 transition-colors duration-300">
                    hello@beyondsolutions.lk
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Call Us</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {phoneNumbers.map((phone, i) => (
                    <li key={i}>
                      <span className="text-white font-medium">{phone.name ? `${phone.name}: ` : ""}</span>
                      <a href={`tel:${phone.number.replace(/\s/g, "")}`} className="hover:text-orange-400 transition-colors duration-300">
                        {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Head Office</h4>
                <p className="text-gray-400 text-sm">
                  No 23, Palm Grove,<br />
                  Colombo 03,<br />
                  Sri Lanka
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer Note */}
        <div className="text-center text-gray-500 text-xs pt-8 border-t border-gray-700/50 mt-8">
          © {new Date().getFullYear()} Beyond Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
