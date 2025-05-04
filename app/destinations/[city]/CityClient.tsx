"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, DollarSign, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Breadcrumb from "@/components/breadcrumb";

interface City {
  name: string;
  country: string;
  description: string;
}

interface Trip {
  id: number;
  title: string;
  description: string;
  days: number;
  price: number;
  image: string;
}

export default function CityClient({
  city,
  trips: allTrips,
}: {
  city: City;
  trips: Trip[];
}) {
  const router = useRouter();
  const [trips, setTrips] = useState(allTrips);

  const [priceFilters, setPriceFilters] = useState({
    low: false,
    medium: false,
    high: false,
  });

  const [durationFilters, setDurationFilters] = useState({
    short: false,
    medium: false,
    long: false,
  });

  const handlePriceFilterChange = (range: "low" | "medium" | "high") => {
    const newFilters = { ...priceFilters, [range]: !priceFilters[range] };
    setPriceFilters(newFilters);
    applyFilters(newFilters, durationFilters);
  };

  const handleDurationFilterChange = (range: "short" | "medium" | "long") => {
    const newFilters = { ...durationFilters, [range]: !durationFilters[range] };
    setDurationFilters(newFilters);
    applyFilters(priceFilters, newFilters);
  };

  const applyFilters = (
    prices: typeof priceFilters,
    durations: typeof durationFilters
  ) => {
    const anyPriceSelected = Object.values(prices).some((v) => v);
    const anyDurationSelected = Object.values(durations).some((v) => v);

    if (!anyPriceSelected && !anyDurationSelected) {
      setTrips(allTrips);
      return;
    }

    const filtered = allTrips.filter((trip) => {
      const priceMatch =
        !anyPriceSelected ||
        (prices.low && trip.price >= 500 && trip.price < 1000) ||
        (prices.medium && trip.price >= 1000 && trip.price < 1500) ||
        (prices.high && trip.price >= 1500);

      const durationMatch =
        !anyDurationSelected ||
        (durations.short && trip.days >= 1 && trip.days <= 3) ||
        (durations.medium && trip.days >= 4 && trip.days <= 7) ||
        (durations.long && trip.days >= 8);

      return priceMatch && durationMatch;
    });

    setTrips(filtered);
  };

  const handleViewDetails = (tripId: number, image: string) => {
    router.push(
      `/destinations/${city.name.toLowerCase()}/trips/${tripId}?image=${encodeURIComponent(
        image
      )}`
    );
  };

  return (
    <div className="container py-16">
      <Breadcrumb
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: city.name },
        ]}
      />

      <div className="mb-12">
        <Link
          href="/destinations"
          className="text-warm-sand hover:underline mb-4 inline-block"
        >
          ← Back to All Destinations
        </Link>

        <div className="relative h-[40vh] rounded-xl overflow-hidden mb-8">
          <Image
            src={`/images/${city.name}.png`}
            alt={city.name}
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{city.name}</h1>
            <p className="text-xl">{city.country}</p>
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl">
          {city.description} Discover the perfect tour package for your visit to{" "}
          {city.name} and create unforgettable memories.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Panel */}
        <div className="md:w-1/4">
          <div className="bg-ivory-white p-6 rounded-lg sticky top-24">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Options
            </h2>

            {/* Price Filters */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={priceFilters.low}
                    onChange={() => handlePriceFilterChange("low")}
                  />
                  <span>$500 - $1000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={priceFilters.medium}
                    onChange={() => handlePriceFilterChange("medium")}
                  />
                  <span>$1000 - $1500</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={priceFilters.high}
                    onChange={() => handlePriceFilterChange("high")}
                  />
                  <span>$1500 - $2000</span>
                </label>
              </div>
            </div>

            {/* Duration Filters */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Duration</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={durationFilters.short}
                    onChange={() => handleDurationFilterChange("short")}
                  />
                  <span>1-3 days</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={durationFilters.medium}
                    onChange={() => handleDurationFilterChange("medium")}
                  />
                  <span>4-7 days</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={durationFilters.long}
                    onChange={() => handleDurationFilterChange("long")}
                  />
                  <span>8+ days</span>
                </label>
              </div>
            </div>

            <Button
              className="w-full bg-warm-sand hover:bg-warm-sand/90"
              onClick={() => {
                setPriceFilters({ low: false, medium: false, high: false });
                setDurationFilters({
                  short: false,
                  medium: false,
                  long: false,
                });
                setTrips(allTrips);
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Trip Results */}
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold mb-6">
            Available Tours in {city.name}
          </h2>

          {trips.length === 0 ? (
            <div className="bg-ivory-white p-8 rounded-lg text-center">
              <p className="text-lg mb-4">
                No tours match your selected filters.
              </p>
              <Button
                className="bg-warm-sand hover:bg-warm-sand/90"
                onClick={() => {
                  setPriceFilters({ low: false, medium: false, high: false });
                  setDurationFilters({
                    short: false,
                    medium: false,
                    long: false,
                  });
                  setTrips(allTrips);
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {trips.map((trip) => (
                <Card key={trip.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
                      <p className="text-gray-600 mb-4">{trip.description}</p>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-warm-sand">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{trip.days} days</span>
                        </div>
                        <div className="flex items-center text-warm-sand">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span>${trip.price}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-warm-sand hover:bg-warm-sand/90">
                          <Link href="/contact">Book Now </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white"
                          onClick={() => handleViewDetails(trip.id, trip.image)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
