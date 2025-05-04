"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Breadcrumb from "@/components/breadcrumb";

// Sample news data - in a real app, this would come from an API or database
const allNewsArticles = [
  {
    id: 1,
    title: "Zenith Travel Agency Launches New Luxury Desert Experiences",
    excerpt:
      "Experience the magic of the Arabian desert with our new collection of exclusive luxury desert experiences.",
    date: "April 10, 2025",
    image: "/images/desert.jpeg?height=400&width=600",
    category: "New Offerings",
  },
  {
    id: 2,
    title: "Top 5 Hidden Gems in Cairo You Need to Visit",
    excerpt:
      "Beyond the pyramids and museums, Cairo offers a wealth of lesser-known attractions that provide authentic experiences.",
    date: "March 28, 2025",
    image: "/images/old-cairo.png?height=400&width=600",
    category: "Travel Tips",
  },
  {
    id: 3,
    title: "Zenith Travel Agency Partners with Luxury Hotel Chain",
    excerpt:
      "We're excited to announce our new partnership with a leading luxury hotel chain across the Middle East.",
    date: "March 15, 2025",
    image: "/images/Marriot.png?height=400&width=600",
    category: "Company News",
  },
  // {
  //   id: 4,
  //   title: "The Best Time to Visit Dubai: A Seasonal Guide",
  //   excerpt:
  //     "Planning a trip to Dubai? Learn about the best seasons to visit for different activities and experiences.",
  //   date: "February 22, 2025",
  //   image: "/placeholder.svg?height=400&width=600",
  //   category: "Travel Tips",
  // },
  // {
  //   id: 5,
  //   title: "Culinary Journey Through the Middle East",
  //   excerpt:
  //     "Explore the rich and diverse flavors of Middle Eastern cuisine with our new culinary-focused tour packages.",
  //   date: "February 10, 2025",
  //   image: "/placeholder.svg?height=400&width=600",
  //   category: "New Offerings",
  // },
  // {
  //   id: 6,
  //   title: "Zenith Travel Agency Recognized for Excellence in Luxury Travel",
  //   excerpt: "We're proud to announce that Zenith Travel Agency has been awarded the prestigious Luxury Travel Award for 2025.",
  //   date: "January 30, 2025",
  //   image: "/placeholder.svg?height=400&width=600",
  //   category: "Company News",
  // },
];

// Categories for filtering
const categories = [
  "All News",
  "Company News",
  "Travel Tips",
  "New Offerings",
  "Destinations",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All News");
  const [newsArticles, setNewsArticles] = useState(allNewsArticles);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (category === "All News") {
      setNewsArticles(allNewsArticles);
    } else {
      const filtered = allNewsArticles.filter(
        (article) => article.category === category
      );
      setNewsArticles(filtered);
    }
  };

  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Zenith Travel Agency News" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">
        Zenith Travel Agency News
      </h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600">
          Stay updated with the latest news, travel tips, and exclusive offers
          from Zenith Travel Agency. Discover new destinations, learn about our
          special packages, and get inspired for your next Middle Eastern
          adventure.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-16">
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[21/9] relative">
            <Image
              src="/images/Pyramids.png?height=600&width=1400"
              alt="Featured Article"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-10">
            <div className="inline-block bg-warm-sand text-white text-sm px-3 py-1 rounded-full mb-4">
              Featured
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Exploring the Ancient Wonders of Egypt: A Journey Through Time
            </h2>
            <p className="text-white/90 mb-4 max-w-3xl">
              Join us on an extraordinary expedition through Egypt's most iconic
              historical sites and discover the secrets of one of the world's
              oldest civilizations.
            </p>
            <div className="flex items-center text-white/80 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>April 15, 2025</span>
            </div>
            <Button
              className="bg-warm-sand hover:bg-warm-sand/90 text-black"
              onClick={() => (window.location.href = "/news/featured-article")}
            >
              Read Full Article
            </Button>
          </div>
        </div>
      </div>

      {/* News Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={
              selectedCategory === category
                ? "bg-warm-sand hover:bg-warm-sand/90"
                : "border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white"
            }
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* News Articles Grid */}
      {newsArticles.length === 0 ? (
        <div className="bg-ivory-white p-8 rounded-lg text-center mb-12">
          <p className="text-lg mb-4">No articles found in this category.</p>
          <Button
            className="bg-warm-sand hover:bg-warm-sand/90"
            onClick={() => handleCategoryChange("All News")}
          >
            View All News
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-warm-sand text-white text-xs px-2 py-1 rounded-full">
                  {article.category}
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.excerpt}</p>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Link
                  href={`/news/article/${article.id}`}
                  className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
                >
                  Read More →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-warm-sand text-white border-warm-sand"
        >
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-ivory-white p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest news, travel tips, and exclusive offers
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-warm-sand hover:bg-warm-sand/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
