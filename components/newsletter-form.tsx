"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {isSuccess ? (
        <div className="bg-white/10 rounded-lg p-4 text-white">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white"
          />
          <Button type="submit" disabled={isSubmitting} className="bg-black hover:bg-black/80 text-white">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}

      {error && <p className="mt-2 text-sm text-red-200">{error}</p>}
    </div>
  )
}
