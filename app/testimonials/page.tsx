import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/breadcrumb";

// Sample testimonial data - in a real app, this would come from an API or database
const testimonials = [
  {
    id: 1,
    name: "Sarah Elwood",
    location: "New York, USA",
    rating: 5,
    text: "Our trip to Cairo and Dubai with Zenith Travel Agency was absolutely incredible. The attention to detail, the knowledgeable guides, and the luxury accommodations exceeded all our expectations. We’ll definitely be booking with them again!",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Cairo & Dubai Luxury Tour",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Jakob Müller",
    location: "Zurich, Switzerland",
    rating: 5,
    text: "Zenith Travel Agency created a perfect itinerary for our family trip to Oman. The balance of cultural experiences, outdoor adventures, and relaxation was just right. Our guide was exceptional and made us feel like we were traveling with a knowledgeable friend.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Oman Cultural Experience",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Elena Bianchi",
    location: "Milan, Italy",
    rating: 5,
    text: "As a solo female traveler, I was initially hesitant about visiting the Middle East, but Zenith Travel Agency made me feel safe and comfortable throughout my journey. The experiences they arranged in Qatar were authentic and off the beaten path.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Qatar Highlights Tour",
    date: "January 2025",
  },
  {
    id: 4,
    name: "Sofia Martínez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "The culinary tour through Lebanon was a gastronomic delight! Zenith Travel Agency arranged private cooking classes, market tours with local chefs, and reservations at the best restaurants. A perfect trip for food lovers!",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Lebanon Culinary Journey",
    date: "November 2024",
  },
  {
    id: 5,
    name: "Daniel & Leila Haddad",
    location: "Toronto, Canada",
    rating: 5,
    text: "Our honeymoon in Jordan was magical. From the candlelit dinner overlooking Petra to the luxury desert camp in Wadi Rum, every moment was special. Zenith Travel Agency thought of everything to make our trip romantic and memorable.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Jordan Romantic Getaway",
    date: "October 2024",
  },
];

// Featured video testimonials
const videoTestimonials = [
  {
    id: 1,
    name: "The Williams Family",
    trip: "Egypt Family Adventure",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "John & Rebecca",
    trip: "Dubai Luxury Escape",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Adventure Seekers Group",
    trip: "Jordan & Petra Expedition",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Testimonials" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">
        Client Testimonials
      </h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600">
          Discover what our clients have to say about their experiences with
          Zenith Travel Agency. We take pride in creating unforgettable journeys
          and memories that last a lifetime.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-warm-sand mb-2">98%</div>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-warm-sand mb-2">68%</div>
          <p className="text-gray-600">Customer Retention Rate</p>
        </div>
        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-warm-sand mb-2">4.9/5</div>
          <p className="text-gray-600">Average Rating</p>
        </div>
        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-warm-sand mb-2">15+</div>
          <p className="text-gray-600">Years of Experience</p>
        </div>
      </div>

      {/* Featured Video Testimonials
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Video Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-warm-sand/80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-ivory-white">
                <h3 className="font-bold">{video.name}</h3>
                <p className="text-sm text-gray-600">{video.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Written Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-warm-sand fill-warm-sand"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="text-sm text-gray-500">
                  <p className="font-medium">{testimonial.trip}</p>
                  <p>{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-warm-sand text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Create Your Own Success Story?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our satisfied clients and experience the luxury and authenticity
          of the Middle East with Zenith Travel Agency.
        </p>
        <button className="bg-black hover:bg-black/80 text-white px-6 py-2 rounded-md">
          Start Planning Your Journey
        </button>
      </div>
    </div>
  );
}
