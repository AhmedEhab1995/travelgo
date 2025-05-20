import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";

export default function AboutPage() {
  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "About" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">
        About Zenith Travel Agency
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Zenith Travel Agency has established itself as the premier luxury
            travel company specializing in Middle Eastern destinations. Our
            journey began with a simple vision: to showcase the rich cultural
            heritage, breathtaking landscapes, and warm hospitality of the
            Middle East to discerning travelers from around the world.
          </p>
          <p className="text-gray-600 mb-4">
            What started as a small team of passionate travel enthusiasts has
            grown into a network of local experts across the region, all
            committed to creating unforgettable experiences for our clients.
          </p>
          <p className="text-gray-600">
            Today, Zenith Travel Agency continues to set the standard for luxury
            travel in the Middle East, combining authentic cultural experiences
            with the comfort and exclusivity our clients expect.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-100 rounded-lg">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="text-warm-sand/30"
            >
              <path
                d="M130,150 L200,280 L270,150 L340,280 L410,150 L480,280 L550,150 L620,280 L690,150"
                stroke="currentColor"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="200" cy="150" r="10" fill="#C1AA7F" />
              <text
                x="200"
                y="130"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Cairo
              </text>
              <circle cx="270" cy="280" r="10" fill="#C1AA7F" />
              <text
                x="270"
                y="310"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Dubai
              </text>
              <circle cx="340" cy="150" r="10" fill="#C1AA7F" />
              <text
                x="340"
                y="130"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Doha
              </text>
              <circle cx="410" cy="280" r="10" fill="#C1AA7F" />
              <text
                x="410"
                y="310"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Riyadh
              </text>
              <circle cx="480" cy="150" r="10" fill="#C1AA7F" />
              <text
                x="480"
                y="130"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Muscat
              </text>
              <circle cx="550" cy="280" r="10" fill="#C1AA7F" />
              <text
                x="550"
                y="310"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Amman
              </text>
              <circle cx="620" cy="150" r="10" fill="#C1AA7F" />
              <text
                x="620"
                y="130"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
              >
                Beirut
              </text>
              <text
                x="400"
                y="50"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fill="#000"
              >
                Zenith Travel Agency Destinations
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-ivory-white p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          "To reveal the authentic beauty and cultural richness of the Middle
          East through thoughtfully crafted luxury experiences that create
          lasting memories and foster cross-cultural understanding."
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-ivory-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
            <p className="text-gray-600 mb-4">
              Our team consists of local experts who provide authentic insights
              and access to hidden gems that typical tourists might miss.
            </p>
          </div>

          <div className="bg-ivory-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
            <p className="text-gray-600 mb-4">
              We tailor each itinerary to match our clients' interests,
              preferences, and pace, ensuring a truly personalized experience.
            </p>
          </div>

          <div className="bg-ivory-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Luxury Accommodations</h3>
            <p className="text-gray-600 mb-4">
              We partner with the finest hotels and resorts across the Middle
              East to provide our clients with exceptional comfort and service.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Karim El Sherif",
              title: "Chief Executive Officer (CEO)",
              image: "team1",
            },
            {
              name: "Yasmine Mostafa",
              title: "Chief Operations Officer (COO)",
              image: "team2",
            },
            {
              name: "Ahmed Riad",
              title: "Chief Financial Officer (CFO)",
              image: "team3",
            },
            {
              name: "Elena Martín",
              title: "Chief Marketing Officer (CMO)",
              image: "team4",
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={`/images/${
                    member.image
                  }.png?height=200&width=200&text=${encodeURIComponent(
                    member.name
                  )}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-warm-sand">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-warm-sand text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Experience the Middle East?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Let us help you plan your perfect journey through the treasures of the
          Middle East.
        </p>
        <Button className="bg-black hover:bg-black/80" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
}
