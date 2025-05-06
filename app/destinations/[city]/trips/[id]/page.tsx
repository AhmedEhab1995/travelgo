"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Import to read URL parameters
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

// Sample city data - in a real app, this would come from an API or database
const cities = [
  {
    name: "Cairo",
    country: "Egypt",
    description:
      "Explore the ancient pyramids and the rich history of Egypt's capital.",
  },
  {
    name: "Dubai",
    country: "UAE",
    description:
      "Experience luxury shopping, modern architecture, and desert adventures.",
  },
  {
    name: "Doha",
    country: "Qatar",
    description:
      "Visit the futuristic skyline and traditional souqs of Qatar's capital.",
  },
  {
    name: "Riyadh",
    country: "Saudi Arabia",
    description: "Explore the rapidly modernizing capital of Saudi Arabia.",
  },
  {
    name: "Muscat",
    country: "Oman",
    description:
      "Experience the natural beauty and traditional culture of Oman.",
  },
  {
    name: "Amman",
    country: "Jordan",
    description:
      "Discover the ancient citadel and modern charm of Jordan's capital.",
  },
  {
    name: "Beirut",
    country: "Lebanon",
    description:
      "Enjoy the vibrant nightlife and Mediterranean cuisine of Lebanon.",
  },
  {
    name: "Petra",
    country: "Jordan",
    description:
      "Discover the ancient city carved into rose-colored stone cliffs.",
  },
];

// Generate trip data based on city and trip ID
const generateTripDetails = (
  cityName: string,
  tripId: number,
  imageFromURL: String
) => {
  const tripTypes = [
    "Highlights",
    "Cultural Tour",
    "Luxury Experience",
    "Adventure",
    "Food Tour",
    "Skyline Tour",
    "Souq Waqif Experience",
    "Modernization Tour",
    "Historical",
    "Ancient Sites Tour",
    "& Dead Sea Adventure",
    "Nightlife Tour",
    "Historical Walk",
    "Discovery",
    " & Wadi Rum",
  ];
  const tripType = tripTypes[tripId % tripTypes.length];

  function getTripDetailsByTitle(
    title: string
  ): { price: number; days: number } | null {
    for (const city in tripsByCity) {
      const trips = tripsByCity[city];
      for (const trip of trips) {
        if (
          trip.title.replace(/\s+/g, "").toLowerCase() ===
          title.replace(/\s+/g, "").toLowerCase()
        ) {
          return {
            price: trip.price,
            days: trip.days,
          };
        }
      }
    }
    return null;
  }

  const tripsByCity: Record<
    string,
    {
      id: number;
      title: string;
      description: string;
      days: number;
      price: number;
      image: string;
    }[]
  > = {
    Cairo: [
      {
        id: 0,
        title: "Cairo Highlights",
        description: "Visit the pyramids, the Sphinx, and the Egyptian Museum.",
        days: 4,
        price: 800,
        image: "/images/Cairo-Highlights.png?height=400&width=600",
      },
      {
        id: 1,
        title: "Cairo Cultural Tour",
        description: "Explore Islamic Cairo and Khan El Khalili bazaar.",
        days: 3,
        price: 600,
        image: "/images/Cairo-Cultural-Tour.png?height=400&width=600",
      },
    ],
    Dubai: [
      {
        id: 2,
        title: "Dubai Luxury Experience",
        description:
          "Stay at the finest hotels and experience luxury shopping.",
        days: 5,
        price: 2000,
        image: "/images/Dubai-Luxury-Experience.png?height=400&width=600",
      },
      {
        id: 3,
        title: "Dubai Adventure",
        description: "Experience dune bashing and desert camping.",
        days: 3,
        price: 1000,
        image: "/images/Dubai-Desert-Adventure.png?height=400&width=600",
      },
      {
        id: 4,
        title: "Dubai Food Tour",
        description: "Discover Dubai's diverse culinary scene.",
        days: 2,
        price: 700,
        image: "/images/Dubai-Food-Tour.png?height=400&width=600",
      },
    ],
    Doha: [
      {
        id: 5,
        title: "Doha Skyline Tour",
        description: "Marvel at the modern architecture of West Bay.",
        days: 2,
        price: 500,
        image: "/images/Doha-Skyline-Tour.png?height=400&width=600",
      },
      {
        id: 6,
        title: "Doha Souq Waqif Experience",
        description: "Explore the vibrant traditional markets.",
        days: 3,
        price: 650,
        image: "/images/Doha-Souq-Waqif-Experience.png?height=400&width=600",
      },
    ],
    Riyadh: [
      {
        id: 7,
        title: "Riyadh Modernization Tour",
        description: "Discover Riyadh’s new cultural and entertainment venues.",
        days: 3,
        price: 800,
        image: "/images/Riyadh-Modernization-Tour.png?height=400&width=600",
      },
      {
        id: 8,
        title: "Riyadh Historical",
        description: "Visit Diriyah and old forts.",
        days: 2,
        price: 550,
        image: "/images/Historical-Riyadh.png?height=400&width=600",
      },
    ],
    Muscat: [
      {
        id: 8,
        title: "Muscat Historical",
        description:
          "Experience Muscat's natural beauty and traditional souqs.",
        days: 3,
        price: 700,
        image: "/images/Muscat-Essentials.png?height=400&width=600",
      },
    ],
    Amman: [
      {
        id: 9,
        title: "Amman Ancient Sites Tour",
        description: "Visit the Citadel, Roman Theater, and Rainbow Street.",
        days: 3,
        price: 600,
        image: "/images/Amman-Ancient-Sites-Tour.png?height=400&width=600",
      },
      {
        id: 10,
        title: "Amman & Dead Sea Adventure",
        description: "Day trip to the Dead Sea and surrounding areas.",
        days: 2,
        price: 500,
        image: "/images/Amman-and-Dead-Sea-Adventure.png?height=400&width=600",
      },
    ],
    Beirut: [
      {
        id: 11,
        title: "Beirut Nightlife Tour",
        description: "Experience the lively clubs and bars of Beirut.",
        days: 2,
        price: 750,
        image: "/images/Beirut-Nightlife-Tour.png?height=400&width=600",
      },
      {
        id: 12,
        title: "Beirut Historical Walk",
        description: "Explore downtown Beirut's historical sites.",
        days: 3,
        price: 650,
        image: "/images/Historical-Beirut-Walk.png?height=400&width=600",
      },
    ],
    Petra: [
      {
        id: 13,
        title: "Petra Discovery",
        description: "Explore the ancient rose city.",
        days: 2,
        price: 700,
        image: "/images/Petra-Discovery.png?height=400&width=600",
      },
      {
        id: 14,
        title: "Petra & Wadi Rum",
        description: "Combine Petra with a desert adventure in Wadi Rum.",
        days: 3,
        price: 1000,
        image: "/images/Petra-and-Wadi-Rum.png?height=400&width=600",
      },
    ],
  };

  const title = `${cityName} ${tripType}`;
  const tripData = getTripDetailsByTitle(title);
  return {
    id: tripId,
    title: `${cityName} ${tripType}`,
    description: `Experience the best of ${cityName} with our guided ${tripType.toLowerCase()} package.`,
    longDescription: `Immerse yourself in the wonders of ${cityName} with our exclusive ${tripType.toLowerCase()} package. This carefully crafted journey takes you through the most iconic landmarks and hidden gems of the region, providing an authentic and unforgettable experience. Our expert guides will share fascinating insights about the local culture, history, and traditions, making this trip both educational and entertaining.`,
    days: tripData?.days ?? Math.floor(Math.random() * 5) + 3,
    price: tripData?.price ?? Math.floor(Math.random() * 1500) + 500,
    image: `${imageFromURL}&text=${cityName} ${tripType}`,
    gallery: Array(4)
      .fill(null)
      .map(
        (_, i) => `/placeholder.svg?height=400&width=600&text=Gallery ${i + 1}`
      ),
    highlights: [
      `Guided tour of ${cityName}'s most famous attractions`,
      "Authentic local cuisine experiences",
      "Luxury accommodations in prime locations",
      "Private transportation throughout the journey",
      "Exclusive access to special venues and events",
    ],
    itinerary: Array(Math.floor(Math.random() * 3) + 3)
      .fill(null)
      .map((_, i) => ({
        day: i + 1,
        title: `Day ${i + 1}: ${
          i === 0
            ? "Arrival & Welcome"
            : i === 1
            ? "City Exploration"
            : i === 2
            ? "Cultural Immersion"
            : i === 3
            ? "Adventure Day"
            : "Leisure & Departure"
        }`,
        description: `Detailed activities for day ${
          i + 1
        } of your ${cityName} journey, including meals, transportation, and accommodations.`,
      })),
    includes: [
      "Luxury accommodations",
      "Daily breakfast and select meals",
      "Private transportation",
      "Professional English-speaking guide",
      "Entrance fees to attractions",
      "Welcome dinner with traditional entertainment",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities not mentioned in the itinerary",
      "Gratuities for guides and drivers",
    ],
    maxGroupSize: getMaxGroupSize(cityName.length),
  };
};

function getMaxGroupSize(days: number) {
  // This will always return a number between 6 and 15 (10 total values)
  return Math.floor(seededRandom(days) * 10) + 6;
}
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
interface TripDetailsPageProps {
  params: {
    city: string;
    id: string;
  };
}

export default function TripDetailsPage({
  params,
}: {
  params: Promise<{ city: string; id: string }>;
}) {
  const { city: otherCity, id } = use(params);
  const cityName = otherCity.charAt(0).toUpperCase() + otherCity.slice(1);
  const tripId = Number.parseInt(id);
  const city = cities.find(
    (c) => c.name.toLowerCase() === otherCity.toLowerCase()
  );

  if (!city || isNaN(tripId)) {
    notFound();
  }

  const searchParams = useSearchParams();
  const imageFromURL = searchParams.get("image");

  const trip = generateTripDetails(
    city.name,
    tripId,
    decodeURIComponent(imageFromURL)
  );

  // Use the image passed from the URL if it exists, otherwise fallback
  const tripImage = imageFromURL
    ? decodeURIComponent(imageFromURL)
    : trip.image;

  return (
    <div className="container py-16">
      <Breadcrumb
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: city.name, href: `/destinations/${otherCity}` },
          { label: trip.title },
        ]}
      />

      <div className="mb-12">
        <Link
          href={`/destinations/${otherCity}`}
          className="text-warm-sand hover:underline mb-4 inline-block"
        >
          ← Back to {city.name} Tours
        </Link>

        <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {trip.title}
            </h1>
            <p className="text-xl">
              {city.name}, {city.country}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
            <p className="text-gray-600 mb-6">{trip.longDescription}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center p-3 bg-ivory-white rounded-lg">
                <Calendar className="h-6 w-6 text-warm-sand mb-2" />
                <span className="text-sm text-gray-500">Duration</span>
                <span className="font-medium">{trip.days} Days</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-ivory-white rounded-lg">
                <MapPin className="h-6 w-6 text-warm-sand mb-2" />
                <span className="text-sm text-gray-500">Destination</span>
                <span className="font-medium">{city.name}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-ivory-white rounded-lg">
                <Users className="h-6 w-6 text-warm-sand mb-2" />
                <span className="text-sm text-gray-500">Group Size</span>
                <span className="font-medium">Max {trip.maxGroupSize}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-ivory-white rounded-lg">
                <Clock className="h-6 w-6 text-warm-sand mb-2" />
                <span className="text-sm text-gray-500">Tour Type</span>
                <span className="font-medium">Guided</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">Highlights</h3>
            <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
              {trip.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-6">
              {trip.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border-l-4 border-warm-sand pl-4 pb-6"
                >
                  <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                  <p className="text-gray-600">{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              What's Included/Not Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-warm-sand">
                  Included
                </h3>
                <ul className="space-y-2">
                  {trip.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
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
                        className="h-5 w-5 mr-2 text-green-500 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-warm-sand">
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {trip.excludes.map((item, index) => (
                    <li key={index} className="flex items-start">
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
                        className="h-5 w-5 mr-2 text-red-500 flex-shrink-0"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Price</h2>
              <div className="text-2xl font-bold text-warm-sand">
                ${trip.price}
              </div>
            </div>
            <p className="text-gray-500 mb-6">per person</p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{trip.days} Days</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-600">Group Size</span>
                <span className="font-medium">
                  Max {trip.maxGroupSize} People
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-600">Tour Type</span>
                <span className="font-medium">Guided Tour</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-600">Languages</span>
                <span className="font-medium">English, Arabic</span>
              </div>
            </div>
            <Button className="w-full bg-warm-sand hover:bg-warm-sand/90 mb-3 py-6 text-lg">
              <Link href="/contact">Book Now </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white py-6 text-lg"
            >
              <Link href="/contact"> Inquire About This Tour</Link>
            </Button>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Need help planning your trip?</p>
              <Link href="/contact" className="text-warm-sand hover:underline">
                Contact our travel experts
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ivory-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Experience {city.name}?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Book this tour today and embark on an unforgettable journey through
          the wonders of {city.name}. Our team is ready to assist you with any
          questions or special requests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-warm-sand hover:bg-warm-sand/90 py-6 px-8 text-lg">
            <Link href="/contact"> Book This Tour</Link>
          </Button>
          <Button
            variant="outline"
            className="border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white py-6 px-8 text-lg"
          >
            <Link href={`/destinations/${otherCity}`}>
              {" "}
              View Similar Tours{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
