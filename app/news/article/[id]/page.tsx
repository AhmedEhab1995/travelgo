"use client";

import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/breadcrumb";

// Sample news data - in a real app, this would come from an API or database
const newsArticles = [
  {
    id: 1,
    title: "Zenith Travel Agency Launches New Luxury Desert Experiences",
    excerpt:
      "Experience the magic of the Arabian desert with our new collection of exclusive luxury desert experiences.",
    content: `
      <p>Zenith Travel Agency is thrilled to announce the launch of our new collection of luxury desert experiences across the Middle East. These carefully curated adventures offer our clients the opportunity to experience the magic and mystery of the Arabian desert in unparalleled comfort and style.</p>
      
      <p>Our new desert experiences include:</p>
      
      <h3>Luxury Desert Camps</h3>
      <p>Stay in exclusive desert camps featuring private tents with en-suite bathrooms, plush bedding, and climate control. Each camp is strategically located to offer stunning views of the desert landscape while providing all the comforts of a luxury hotel.</p>
      
      <h3>Gourmet Desert Dining</h3>
      <p>Enjoy exquisite meals prepared by private chefs under the stars. Our desert dining experiences combine traditional Middle Eastern cuisine with modern culinary techniques, creating unforgettable gastronomic adventures in the most dramatic of settings.</p>
      
      <h3>Exclusive Desert Activities</h3>
      <p>From private dune bashing excursions in luxury 4x4 vehicles to falconry demonstrations, camel riding, and stargazing with an astronomer, our desert experiences offer activities that can't be found anywhere else.</p>
      
      <p>"We've designed these experiences for travelers who want to connect with the timeless beauty of the desert without sacrificing comfort," says Sarah Johnson, Zenith Travel Agency's Director of Experiences. "The desert has always been at the heart of Middle Eastern culture and history, and we wanted to create a way for our clients to experience this magical landscape in a truly luxurious way."</p>
      
      <p>These new desert experiences are available as standalone packages or can be incorporated into broader itineraries across the Middle East. They are currently available in the UAE, Saudi Arabia, and Jordan, with plans to expand to additional destinations in the coming months.</p>
      
      <p>For more information or to book a luxury desert experience, contact our team of travel specialists.</p>
    `,
    date: "April 10, 2025",
    author: "Zenith Travel Agency Team",
    image: "/images/desert.jpeg?height=600&width=1200",
    category: "New Offerings",
    relatedArticles: [2, 5, 6],
  },
  {
    id: 2,
    title: "Top 5 Hidden Gems in Cairo You Need to Visit",
    excerpt:
      "Beyond the pyramids and museums, Cairo offers a wealth of lesser-known attractions that provide authentic experiences.",
    content: `
      <p>Cairo, the vibrant capital of Egypt, is known worldwide for its iconic pyramids and the Egyptian Museum. However, beyond these famous attractions lies a treasure trove of hidden gems that offer visitors a more authentic and less crowded experience of this ancient city.</p>
      
      <p>Here are our top 5 hidden gems in Cairo that deserve a spot on your itinerary:</p>
      
      <h3>1. Al-Azhar Park</h3>
      <p>Once a mound of rubble and debris, this 30-hectare park is now one of Cairo's most beautiful green spaces. Offering stunning views of the city's historic Islamic district, the park features fountains, gardens, and the excellent Citadel View Restaurant. It's the perfect escape from the hustle and bustle of the city.</p>
      
      <h3>2. The Nilometer on Roda Island</h3>
      <p>This ancient structure was used to measure the level of the Nile River to predict harvest yields and set tax rates. Dating back to 861 AD, this architectural marvel features beautiful geometric patterns and Arabic calligraphy. Despite its historical significance, it remains off the radar for most tourists.</p>
      
      <h3>3. Darb 1718 Contemporary Art Center</h3>
      <p>Located in the historic Fustat area, this cultural center showcases the work of emerging Egyptian artists across various mediums. With regular exhibitions, workshops, and cultural events, it offers insight into Cairo's vibrant contemporary art scene.</p>
      
      <h3>4. The Hanging Church (Al-Mu'allaqah)</h3>
      <p>While not entirely unknown, this Coptic church is often overlooked by visitors focused on Islamic and ancient Egyptian sites. Built on top of the gatehouse of the Babylon Fortress, the church appears to be suspended in air (hence its name). Its beautiful wooden ceiling designed to resemble Noah's Ark is particularly noteworthy.</p>
      
      <h3>5. El Fishawy Café</h3>
      <p>Tucked away in the Khan el-Khalili bazaar, this historic café has been serving customers continuously since 1773. Once a favorite haunt of Nobel laureate Naguib Mahfouz, the café offers an authentic taste of Cairene social life. Sip on mint tea or Turkish coffee while watching the world go by through ornate mirrors and stained glass.</p>
      
      <p>At Zenith Travel Agency, our local guides can help you discover these hidden gems and many more, providing you with a deeper and more authentic experience of Cairo beyond the typical tourist trail.</p>
    `,
    date: "March 28, 2025",
    author: "Ahmed Hassan",
    image: "/images/old-cairo.png?height=600&width=1200",
    category: "Travel Tips",
    relatedArticles: [1, 3, 5],
  },
  {
    id: 3,
    title: "Zenith Travel Agency Partners with Luxury Hotel Chain",
    excerpt:
      "We're excited to announce our new partnership with a leading luxury hotel chain across the Middle East.",
    content: `
      <p>Zenith Travel Agency is delighted to announce a new strategic partnership with Elegance Hotels International, one of the Middle East's premier luxury hotel chains. This collaboration will provide our clients with enhanced benefits, exclusive access, and preferential rates at Elegance properties throughout the region.</p>
      
      <p>Elegance Hotels International operates 15 luxury properties across the UAE, Saudi Arabia, Qatar, Oman, and Egypt, with each hotel and resort designed to reflect the unique cultural heritage of its location while providing world-class amenities and service.</p>
      
      <h3>Enhanced Benefits for Zenith Travel Agency Clients</h3>
      <p>Through this partnership, Zenith Travel Agency clients will enjoy a range of exclusive benefits when staying at Elegance properties, including:</p>
      <ul>
        <li>Complimentary room upgrades (subject to availability)</li>
        <li>Early check-in and late check-out privileges</li>
        <li>Welcome amenities upon arrival</li>
        <li>Daily breakfast for two</li>
        <li>$100 hotel credit per stay</li>
        <li>Personalized concierge service</li>
      </ul>
      
      <h3>Exclusive Experiences</h3>
      <p>In addition to these benefits, Zenith Travel Agency and Elegance Hotels have collaborated to create a series of exclusive experiences available only to our clients. These include private dining events with celebrity chefs, behind-the-scenes cultural tours, and wellness retreats designed specifically for Zenith Travel Agency travelers.</p>
      
      <p>"This partnership represents our commitment to providing our clients with the very best in luxury accommodations and experiences," says Michael Chen, CEO of Zenith Travel Agency. "Elegance Hotels shares our dedication to exceptional service and authentic cultural experiences, making them the perfect partner for our Middle East journeys."</p>
      
      <p>Sophia Al Mansouri, Vice President of Partnerships at Elegance Hotels International, adds: "We are excited to welcome Zenith Travel Agency clients to our properties across the Middle East. This collaboration allows us to showcase our unique approach to luxury hospitality to discerning travelers who value both comfort and cultural authenticity."</p>
      
      <p>The partnership is effective immediately, and all current and future Zenith Travel Agency bookings at Elegance properties will automatically receive the enhanced benefits.</p>
    `,
    date: "March 15, 2025",
    author: "Zenith Travel Agency Team",
    image: "/images/Marriot.png?height=600&width=1200",
    category: "Company News",
    relatedArticles: [1, 6],
  },
];

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleId = Number.parseInt(params.id);
  const article = newsArticles.find((a) => a.id === articleId);
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

  if (!article) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="bg-warm-sand hover:bg-warm-sand/90">
          <Link href="/news">Back to News</Link>
        </Button>
      </div>
    );
  }

  // Get related articles
  const relatedArticles = article.relatedArticles
    .map((id) => newsArticles.find((a) => a.id === id))
    .filter(Boolean) as typeof newsArticles;

  return (
    <div className="container py-16">
      <Breadcrumb
        items={[
          { label: "Zenith Travel Agency News", href: "/news" },
          { label: article.title },
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
              {article.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                <span className="font-bold text-gray-500">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="text-gray-600">{article.author}</span>
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
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-12">
          <div>
            <span className="text-sm text-gray-500">Published on</span>
            <div className="font-medium">{article.date}</div>
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

        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">{relatedArticle.title}</h3>
                    <Link
                      href={`/news/article/${relatedArticle.id}`}
                      className="text-warm-sand hover:text-warm-sand/80 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-warm-sand/90 text-gray-700 px-8 py-4 rounded-xl shadow-2xl z-50 max-w-md w-full text-center text-lg font-semibold">
          Link copied!
        </div>
      )}
    </div>
  );
}
