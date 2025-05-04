import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface DestinationCardProps {
  destination: {
    id: number
    city: string
    country: string
    description: string
    days: number
    image: string
  }
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.city}, ${destination.country}`}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-1">
          {destination.city}, <span className="text-gray-600">{destination.country}</span>
        </h3>
        <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
        <div className="flex items-center text-warm-sand">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{destination.days} days</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link
          href={`/destinations/${destination.city.toLowerCase()}`}
          className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  )
}
