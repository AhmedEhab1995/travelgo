"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Breadcrumb from "@/components/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" container py-16 lg:py-20 xl:py-24">
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Have questions about our tours or need assistance planning your trip?
          Our travel experts are here to help you create the perfect Middle East
          experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="w-12 h-12 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm</p>
          <a
            href="tel:+201127219480"
            className="text-warm-sand hover:underline"
          >
            +2 0112 721 9480
          </a>
        </div>

        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="w-12 h-12 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
          <a
            href="mailto:info@zenithstravel.com"
            className="text-warm-sand hover:underline"
          >
            info@zenithstravel.com
          </a>
        </div>

        <div className="bg-ivory-white p-6 rounded-lg text-center">
          <div className="w-12 h-12 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-2">
            Building 8, Polygon Business Park
          </p>
          <p className="text-warm-sand">Cairo, Egypt</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="booking">Booking Information</SelectItem>
              <SelectItem value="custom">Custom Tour Request</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[150px]"
          required
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
        {isSuccess && (
          <div className="flex items-center text-green-600 text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            Your message has been sent successfully!
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-warm-sand hover:bg-warm-sand/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </section>
  );
}
