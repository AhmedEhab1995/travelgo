"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

// Sample city data - in a real app, this would come from an API or database
const cities = [
  {
    name: "Cairo",
    country: "Egypt",
    image: "/images/Cairo.png?height=400&width=600",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "/images/Dubai.png?height=400&width=600",
  },
  {
    name: "Doha",
    country: "Qatar",
    image: "/images/Doha.png?height=400&width=600",
  },
  {
    name: "Riyadh",
    country: "Saudi Arabia",
    image: "/images/Riyadh.png?height=400&width=600",
  },
  {
    name: "Muscat",
    country: "Oman",
    image: "/images/Muscat.png?height=400&width=600",
  },
  {
    name: "Amman",
    country: "Jordan",
    image: "/images/Amman.png?height=400&width=600",
  },
  {
    name: "Beirut",
    country: "Lebanon",
    image: "/images/Beirut.png?height=400&width=600",
  },
  {
    name: "Petra",
    country: "Jordan",
    image: "/images/Petra.png?height=400&width=600",
  },
];

// Group cities by country
const countriesWithCities = cities.reduce((acc, city) => {
  if (!acc[city.country]) {
    acc[city.country] = [];
  }
  acc[city.country].push(city);
  return acc;
}, {} as Record<string, typeof cities>);

export default function DestinationsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    if (selectedCountry) {
      setFilteredCities(
        cities.filter((city) => city.country === selectedCountry)
      );
    } else {
      setFilteredCities(cities);
    }
  }, [selectedCountry]);

  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Destinations" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">Our Destinations</h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Explore our curated selection of luxury destinations across the Middle
          East. Each location offers unique experiences, rich culture, and
          unforgettable memories.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-medium mb-3">Filter by Country</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCountry === null ? "default" : "outline"}
              className={
                selectedCountry === null
                  ? "bg-warm-sand hover:bg-warm-sand/90"
                  : "border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white"
              }
              onClick={() => setSelectedCountry(null)}
            >
              All Countries
            </Button>

            {Object.keys(countriesWithCities).map((country) => (
              <Button
                key={country}
                variant={selectedCountry === country ? "default" : "outline"}
                className={
                  selectedCountry === country
                    ? "bg-warm-sand hover:bg-warm-sand/90"
                    : "border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white"
                }
                onClick={() => setSelectedCountry(country)}
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filteredCities.map((city) => (
            <Button
              key={city.name}
              variant="outline"
              className="border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white"
              asChild
            >
              <Link href={`/destinations/${city.name.toLowerCase()}`}>
                {city.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCities.map((city) => (
          <Link
            key={city.name}
            href={`/destinations/${city.name.toLowerCase()}`}
            className="group block relative rounded-lg overflow-hidden h-64 transition-all duration-300 hover:shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
              <p className="text-lg">{city.country}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button className="bg-warm-sand hover:bg-warm-sand/90">
                  Explore Tours
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
