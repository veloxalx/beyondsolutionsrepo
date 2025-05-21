import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <Card className="border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white">
      <CardContent className="p-0">
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
              <div className="relative w-6 h-6">
                <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-100 p-6 flex justify-end">
          <Button
            variant="ghost"
            className="text-[#F5A623] hover:text-[#F5A623]/90 hover:bg-[#F5A623]/10 p-0 h-auto group"
          >
            <span className="mr-2">Learn more</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
