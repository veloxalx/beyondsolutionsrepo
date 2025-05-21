import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  rating: number
}

export default function TestimonialCard({ quote, author, company, rating }: TestimonialCardProps) {
  return (
    <Card className="border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-[#F5A623] fill-[#F5A623]" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="text-lg text-gray-700 mb-6 italic">"{quote}"</blockquote>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}
