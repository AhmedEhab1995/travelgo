import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/breadcrumb";

// Sample affiliate companies data
const affiliateCompanies = [
  {
    id: 1,
    name: "Luxury Hotels Group",
    description:
      "A collection of 5-star hotels and resorts across the Middle East, providing our clients with exceptional accommodations.",
    logo: "/images/Marriot.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Elite Airways",
    description:
      "Premium airline service offering special rates and exclusive benefits only for Zenith Travel Agency clients everywhere.",
    logo: "/images/Etihad.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Desert Safari Adventures",
    description:
      "Specialized in authentic desert experiences with luxury camping, hospitality and traditional entertainment.",
    logo: "/images/Dunes.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "Cultural Heritage Foundation",
    description:
      "Providing exclusive access to historical sites and cultural experiences throughout the region.",
    logo: "/images/Culture.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "Adventure Excursions",
    description:
      "Specialized in unique outdoor activities and adventures across the Middle East.",
    logo: "/images/Adventure.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "Luxury Transportation Services",
    description:
      "Fleet of premium vehicles and chauffeurs ensuring comfortable and stylish transportation.",
    logo: "/images/Transportation.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 7,
    name: "Wellness & Spa Retreats",
    description:
      "Collection of luxury spas and wellness centers offering rejuvenating experiences for our travelers.",
    logo: "/images/Wellness.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
  {
    id: 8,
    name: "Gourmet Dining Experiences",
    description:
      "Network of fine dining restaurants offering special menus and reservations for Zenith Travel Agency clients.",
    logo: "/images/Dining.png?height=100&width=200&text=Luxury Hotels",
    website: "https://example.com",
  },
];

export default function AffiliatesPage() {
  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Affiliated Companies" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Affiliated Companies
      </h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600">
          Zenith Travel Agency partners with premium service providers across
          the Middle East to ensure our clients receive the highest quality
          experiences. Our carefully selected affiliates share our commitment to
          excellence and attention to detail.
        </p>
      </div>

      {/* Affiliate Companies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {affiliateCompanies.map((company) => (
          <Card
            key={company.id}
            className="flex flex-col justify-between h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="flex flex-col h-full p-6">
              <div className="h-24 flex items-center justify-center mb-6">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {company.description}
                  </p>
                </div>
                <div className="flex justify-center mt-auto"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Partnership Benefits */}
      <div className="bg-ivory-white p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Benefits of Our Partnerships
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Exclusive Access</h3>
            <p className="text-gray-600">
              Our partnerships provide our clients with exclusive access to
              experiences and venues not available to the general public.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Preferential Rates</h3>
            <p className="text-gray-600">
              Enjoy special pricing and added value through our established
              relationships with premium service providers.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              All our partners undergo rigorous vetting to ensure they meet our
              high standards for quality and service.
            </p>
          </div>
        </div>
      </div>

      {/* Become a Partner */}
      <div className="bg-warm-sand text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Interested in Becoming a Partner?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          If your company provides premium services in the Middle East travel
          industry and shares our commitment to excellence, we'd love to hear
          from you.
        </p>
        <Button className="bg-black hover:bg-black/80" asChild>
          <Link href="/contact">Contact Us About Partnerships</Link>
        </Button>
      </div>
    </div>
  );
}
