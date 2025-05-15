"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Breadcrumb from "@/components/breadcrumb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600">
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
            href="mailto:info@travelgo.com"
            className="text-warm-sand hover:underline"
          >
            info@travelgo.com
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

      <div className="max-w-3xl mx-auto">
        <div className="bg-ivory-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send Us a Message
          </h2>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-warm-sand rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="text-white"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. One of our travel experts will get
                back to you shortly.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="bg-warm-sand hover:bg-warm-sand/90"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, subject: value }))
                  }
                >
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

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button
                type="submit"
                className="w-full bg-warm-sand hover:bg-warm-sand/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
