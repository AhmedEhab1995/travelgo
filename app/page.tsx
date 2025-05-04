"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DestinationCard from "@/components/destination-card";
import FeaturedCityCard from "@/components/featured-city-card";
import NewsletterForm from "@/components/newsletter-form";
import FeaturedCityCardNoLink from "@/components/featured-city-card-no-link";

// Sample destination data - in a real app, this would come from an API or database
const destinations = [
  {
    id: 1,
    city: "Cairo",
    country: "Egypt",
    description:
      "Explore the ancient pyramids and the rich history of Egypt's capital.",
    days: 7,
    image: "/images/Cairo.png?height=400&width=600",
  },
  {
    id: 2,
    city: "Dubai",
    country: "UAE",
    description:
      "Experience luxury shopping, modern architecture, and desert adventures.",
    days: 5,
    image: "/images/Dubai.png?height=400&width=600",
  },
  {
    id: 3,
    city: "Petra",
    country: "Jordan",
    description:
      "Discover the ancient city carved into rose-colored stone cliffs.",
    days: 4,
    image: "/images/Petra.png?height=400&width=600",
  },
  {
    id: 4,
    city: "Doha",
    country: "Qatar",
    description:
      "Visit the futuristic skyline and traditional souqs of Qatar's capital.",
    days: 3,
    image: "/images/Doha.png?height=400&width=600",
  },
  {
    id: 6,
    city: "Riyadh",
    country: "Saudi Arabia",
    description: "Explore the rapidly modernizing capital of Saudi Arabia.",
    days: 4,
    image: "/images/Riyadh.png?height=400&width=600",
  },
  {
    id: 7,
    city: "Muscat",
    country: "Oman",
    description:
      "Experience the natural beauty and traditional culture of Oman.",
    days: 5,
    image: "/images/Muscat.png?height=400&width=600",
  },
  {
    id: 8,
    city: "Amman",
    country: "Jordan",
    description:
      "Discover the ancient citadel and modern charm of Jordan's capital.",
    days: 3,
    image: "/images/Amman.png?height=400&width=600",
  },
  {
    id: 9,
    city: "Beirut",
    country: "Lebanon",
    description:
      "Enjoy the vibrant nightlife and Mediterranean cuisine of Lebanon.",
    days: 4,
    image: "/images/Beirut.png?height=400&width=600",
  },
];

// Sample featured cities
const featuredCities = [
  {
    id: 1,
    name: "Luxor",
    country: "Egypt",
    image: "/images/Luxor.png?height=500&width=400",
    description: "Ancient temples and tombs of pharaohs",
  },
  {
    id: 2,
    name: "Wadi Rum",
    country: "Jordan",
    image: "/images/Wadi.png?height=500&width=400",
    description: "Dramatic desert landscapes and Bedouin culture",
  },
  {
    id: 3,
    name: "Sharjah",
    country: "UAE",
    image: "/images/Sharjah.png?height=500&width=400",
    description: "Cultural capital with museums and heritage sites",
  },
  {
    id: 4,
    name: "Aswan",
    country: "Egypt",
    image: "/images/Aswan.png?height=500&width=400",
    description: "Nubian villages and the majestic Nile",
  },
  {
    id: 5,
    name: "Bahrain",
    country: "Bahrain",
    image: "/images/Bahrain.png?height=500&width=400",
    description: "Pearl diving heritage and modern attractions",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(
        (destination) =>
          destination.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          destination.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* In a real implementation, you would use the actual video */}
          <div className="w-full h-full bg-black">
            <video
              className="w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg?height=1080&width=1920"
            >
              <source src="/Middle-East-Header-REVISED.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Luxury Middle East tours{" "}
            <span className="font-miller italic">made for you</span>
          </h1>
          <Button
            className="bg-warm-sand/80 hover:bg-warm-sand text-black text-lg px-8 py-6"
            asChild
          >
            <Link href="#explore">Explore Now</Link>
          </Button>
        </div>
      </section>

      {/* Explore Locations Section */}
      <section id="explore" className="py-16 bg-ivory-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Locations
          </h2>

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for a city..."
                className="pl-10 border-warm-sand focus:ring-warm-sand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No destinations found matching your search.
              </p>
              <Button
                variant="link"
                className="text-warm-sand mt-2"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Unveiling Exquisite Treasures
            </h2>
            <p className="text-lg text-gray-600">
              Unlock Secret Gems for Unforgettable Discoveries in Egypt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredCities.map((city) => (
              <FeaturedCityCardNoLink key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-warm-sand">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join our community and receive exclusive updates, travel insights,
              and special offers.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
