"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
        <p className="text-sm text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-900">
          Name
        </Label>
        <Input id="name" name="name" placeholder="Your name" required className="border-gray-300" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-900">
          Email
        </Label>
        <Input id="email" name="email" type="email" placeholder="Your email" required className="border-gray-300" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-900">
          Phone
        </Label>
        <Input id="phone" name="phone" type="tel" placeholder="Your phone number" className="border-gray-300" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-900">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project"
          required
          className="min-h-[120px] border-gray-300"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
