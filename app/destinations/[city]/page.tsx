import { notFound } from "next/navigation";
import CityClient from "./CityClient";

// Sample city data
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

// Fixed trips data for each city
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
      description: "Stay at the finest hotels and experience luxury shopping.",
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
      description: "Experience Muscat's natural beauty and traditional souqs.",
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

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find(
    (c) => c.name.toLowerCase() === params.city.toLowerCase()
  );

  if (!city) notFound();

  const trips = tripsByCity[city.name] || [];

  return <CityClient city={city} trips={trips} />;
}
