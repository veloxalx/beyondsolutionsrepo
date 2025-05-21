import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623] to-[#FF4D00] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image src="/logo-white.png" alt="Beyond Solutions Logo" width={180} height={60} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help elite organizations achieve extraordinary results through our proprietary strategic solutions that
              drive unmatched growth, innovation, and lasting success.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm flex items-center justify-center hover:from-[#F5A623] hover:to-[#FF4D00] transition-all duration-300 group"
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Icon className="h-5 w-5 text-white group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-4">
              {["About", "Leadership", "Careers", "Contact", "Press"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]/50 group-hover:bg-[#F5A623] transition-colors"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Solutions
            </h3>
            <ul className="space-y-4">
              {[
                "Elite Revenue Growth",
                "Superior Operational Excellence",
                "Premier Digital Transformation",
                "Unrivaled Market Expansion",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/solutions/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]/50 group-hover:bg-[#F5A623] transition-colors"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Subscribe to Our Exclusive Insights
            </h3>
            <p className="text-gray-400 mb-6">
              Join industry leaders receiving our premium insights, trends, and exclusive strategies for exceptional
              business growth.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-full pl-5 pr-36 py-6 focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                />
                <Button className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#F5A623] to-[#FF4D00] hover:from-[#F5A623]/90 hover:to-[#FF4D00]/90 text-black rounded-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          <div className="flex items-start gap-3 group">
            <Mail className="h-5 w-5 text-[#F5A623] mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 group-hover:text-white transition-colors">elite@beyondsolutions.com</p>
          </div>
          <div className="flex items-start gap-3 group">
            <Phone className="h-5 w-5 text-[#F5A623] mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 group-hover:text-white transition-colors">(800) 123-4567</p>
          </div>
          <div className="flex items-start gap-3 group">
            <MapPin className="h-5 w-5 text-[#F5A623] mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 group-hover:text-white transition-colors">
              123 Premium Plaza, Suite 500, New York, NY
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[#F5A623]" />
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Beyond Solutions. The Premier Business Transformation Partner.
            </p>
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-500 text-sm hover:text-[#F5A623] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
