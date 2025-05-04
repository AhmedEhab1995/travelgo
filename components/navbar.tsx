"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample city data - in a real app, this would come from an API or database
const cities = [
  "Cairo",
  "Dubai",
  "Doha",
  "Riyadh",
  "Muscat",
  "Amman",
  "Beirut",
  "Petra",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-warm-sand">
              Zenith Travel Agency
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-warm-sand"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="group flex items-center text-sm font-medium"
                >
                  Destinations
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {cities.map((city) => (
                  <DropdownMenuItem key={city} asChild>
                    <Link href={`/destinations/${city.toLowerCase()}`}>
                      {city}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="group flex items-center text-sm font-medium"
                >
                  Zenith Travel Agency
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/news">Zenith Travel Agency News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/testimonials">Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/affiliates">Affiliated Companies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/terms">Terms and Conditions</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-warm-sand"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <Button className="bg-warm-sand hover:bg-warm-sand/90">
              Book Now
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Destinations</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/destinations/${city.toLowerCase()}`}
                    className="block py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Zenith Travel Agency
                </span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/about"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/news"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zenith Travel Agency News
                </Link>
                <Link
                  href="/testimonials"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/affiliates"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Affiliated Companies
                </Link>
                <Link
                  href="/terms"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Button className="w-full bg-warm-sand hover:bg-warm-sand/90">
              <Link href="/contact"> </Link>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
