"use client";

import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

export default function FeaturedArticlePage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const articleUrl =
      typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div className="container py-16">
      <Breadcrumb
        items={[
          { label: "Zenith Travel Agency News", href: "/news" },
          { label: "Exploring the Ancient Wonders of Egypt" },
        ]}
      />

      <Link
        href="/news"
        className="inline-flex items-center text-warm-sand hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to News
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-warm-sand text-white text-sm px-3 py-1 rounded-full">
              Featured
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>April 15, 2025</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Exploring the Ancient Wonders of Egypt: A Journey Through Time
          </h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                <span className="font-bold text-gray-500">M</span>
              </div>
              <span className="text-gray-600">
                Maria Gonzalez, Travel Expert
              </span>
            </div>

            <Button
              onClick={handleShare}
              variant="ghost"
              size="sm"
              className="flex items-center"
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/Pyramids.png?height=800&width=1200&text=Egypt"
            alt="Ancient Wonders of Egypt"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Egypt, the land of pharaohs and pyramids, has captivated the
            imagination of travelers for centuries. From the iconic Great
            Pyramids of Giza to the lesser-known temples of Luxor and Aswan,
            this ancient civilization has left behind a legacy of architectural
            marvels that continue to astound visitors from around the world.
          </p>

          <p>
            At Zenith Travel Agency, we've crafted a special journey that takes
            you beyond the typical tourist experience, offering an in-depth
            exploration of Egypt's most significant historical sites with expert
            Egyptologists as your guides.
          </p>

          <h2>The Great Pyramids and the Sphinx</h2>

          <p>
            No visit to Egypt would be complete without experiencing the only
            remaining wonder of the ancient world: the Great Pyramids of Giza.
            Built more than 4,500 years ago, these massive structures continue
            to baffle modern engineers with their precision and scale.
          </p>

          <p>
            Our exclusive tour provides special access to areas typically closed
            to the public, including entry to the interior chambers of the Great
            Pyramid of Khufu. You'll also enjoy a private viewing of the Sphinx
            at sunset, when the ancient monument is bathed in golden light and
            the crowds have dispersed.
          </p>

          <h2>The Valley of the Kings</h2>

          <p>
            Across the Nile from the ancient city of Thebes (modern-day Luxor)
            lies the Valley of the Kings, where for nearly 500 years, elaborate
            tombs were constructed for the pharaohs and powerful nobles of the
            New Kingdom.
          </p>

          <p>
            With Zenith Travel Agency, you'll explore not only the famous tomb
            of Tutankhamun but also several lesser-visited tombs known for their
            exceptionally preserved colorful reliefs. Our Egyptologist guides
            will decode the symbolic imagery and hieroglyphics, bringing the
            ancient stories to life.
          </p>

          <h2>Abu Simbel: Monuments to Eternity</h2>

          <p>
            Perhaps the most impressive testament to ancient Egyptian
            engineering and modern archaeological preservation is the temple
            complex of Abu Simbel. Carved into the mountainside in the 13th
            century BCE, these massive temples were later relocated in their
            entirety to save them from the rising waters of Lake Nasser.
          </p>

          <p>
            Our journey includes a private visit to Abu Simbel timed to witness
            the remarkable solar phenomenon that occurs only twice a year, when
            the sun's rays penetrate the temple's inner sanctuary to illuminate
            the statues of the gods.
          </p>

          <h2>Beyond the Monuments: Connecting with Egyptian Culture</h2>

          <p>
            While Egypt's ancient monuments are undoubtedly awe-inspiring, our
            journey also emphasizes connections with contemporary Egyptian
            culture. You'll enjoy a home-cooked meal with a local family in
            Cairo, learn traditional bread-making techniques in a Nubian
            village, and sail the Nile on a traditional felucca at sunset.
          </p>

          <p>
            These authentic experiences provide context for the ancient wonders
            and demonstrate how Egypt's rich cultural heritage continues to
            influence daily life in the region.
          </p>

          <h2>Luxury Accommodations with Historical Significance</h2>

          <p>
            Throughout your journey, you'll stay in carefully selected
            accommodations that blend luxury with historical significance.
            Highlights include the legendary Mena House in Giza, with pyramid
            views from your balcony, and the historic Old Cataract Hotel in
            Aswan, where Agatha Christie wrote "Death on the Nile."
          </p>

          <h2>A Journey Through Time</h2>

          <p>
            Our "Ancient Wonders of Egypt" tour is more than just a
            vacation—it's a journey through time that connects you with one of
            humanity's greatest civilizations. With expert guides, exclusive
            access, and thoughtfully curated experiences, this tour represents
            the pinnacle of luxury travel in Egypt.
          </p>

          <p>
            Contact our travel specialists today to begin planning your own
            Egyptian adventure and discover why this ancient land continues to
            inspire wonder and awe in all who visit.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-12">
          <div>
            <span className="text-sm text-gray-500">Published on</span>
            <div className="font-medium">April 15, 2025</div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
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
                className="h-4 w-4 mr-1"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
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
                className="h-4 w-4 mr-1"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/images/old-cairo.png?height=400&width=600"
                  alt="Top 5 Hidden Gems in Cairo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">
                  Top 5 Hidden Gems in Cairo You Need to Visit
                </h3>
                <Link
                  href="/news/article/2"
                  className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
            {/* 
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Culinary Journey Through the Middle East"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">
                  Culinary Journey Through the Middle East
                </h3>
                <Link
                  href="/news/article/5"
                  className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card> */}

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/images/desert.jpeg?height=400&width=600"
                  alt="Zenith Travel Agency Launches New Luxury Desert Experiences"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">
                  Zenith Travel Agency Launches New Luxury Desert Experiences
                </h3>
                <Link
                  href="/news/article/1"
                  className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-warm-sand/90 text-gray-700 px-8 py-4 rounded-xl shadow-2xl z-50 max-w-md w-full text-center text-lg font-semibold">
          Link copied!
        </div>
      )}
    </div>
  );
}
