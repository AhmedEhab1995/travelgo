import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-ivory-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              About Zenith Travel Agency
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Luxury Middle East tours crafted for the discerning traveler.
              Experience the finest accommodations, exclusive access, and
              personalized service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/cairo"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Cairo, Egypt
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/dubai"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/petra"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Petra, Jordan
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/doha"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Doha, Qatar
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/riyadh"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Riyadh, Saudi Arabia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Zenith Travel Agency News
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliates"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Affiliated Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-300 hover:text-warm-sand"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-300 mb-2">
                Building 8, Polygon Business Park
              </p>
              <p className="text-sm text-gray-300 mb-2">Cairo, Egypt</p>
              <p className="text-sm text-gray-300 mb-2">
                <a href="tel:+201127219480" className="hover:text-warm-sand">
                  +2 0112 721 9480
                </a>
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <a
                  href="mailto:info@travelgo.com"
                  className="hover:text-warm-sand"
                >
                  info@travelgo.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Software SAVVY Labs.
          </p>
        </div>
      </div>
    </footer>
  );
}
