import Image from "next/image";
import Link from "next/link";

interface FeaturedCityCardProps {
  city: {
    id: number;
    name: string;
    country: string;
    image: string;
    description: string;
  };
}

export default function FeaturedCityCard({ city }: FeaturedCityCardProps) {
  return (
    <Link
      href={`/destinations/${city.name.toLowerCase()}`}
      className="group block relative overflow-hidden rounded-lg h-80"
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10" />

      <Image
        src={city.image || "/placeholder.svg"}
        alt={`${city.name}, ${city.country}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <h3 className="text-xl font-bold mb-1">{city.name}</h3>
        <p className="text-sm text-white/90 mb-2">{city.country}</p>
        <p className="text-sm text-white/80 hidden group-hover:block transition-all duration-300">
          {city.description}
        </p>
      </div>
    </Link>
  );
}
