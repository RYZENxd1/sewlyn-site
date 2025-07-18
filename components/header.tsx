"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selwyn_contractors-removebg-preview-ARYM2Dlmfwv2PhhK0kswXCzo8eEG4A.png"
            alt="Selwyn Landscape & Contractors Logo"
            width={120}
            height={48}
            className="h-20 w-20"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4 pr-20">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        {/* Updated Hamburger Button */}
        <Button
          variant="ghost"
          size="lg"
          className="md:hidden p-0 h-16 w-16"
          onClick={toggleMenu}
        >
          <Menu className="h-10 w-10 text-primary" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-white md:hidden", isMenuOpen ? "flex flex-col" : "hidden")}>
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selwyn_contractors-removebg-preview-ARYM2Dlmfwv2PhhK0kswXCzo8eEG4A.png"
              alt="Selwyn Landscape & Contractors Logo"
              width={20}
              height={28}
            />
          </Link>
          {/* Updated Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-16 w-16 p-0"
            onClick={toggleMenu}
          >
            <X className="h-10 w-10 text-primary" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link href="/" className="text-lg font-medium text-foreground" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium text-foreground" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="text-lg font-medium text-foreground" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/projects" className="text-lg font-medium text-foreground" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/contact" className="text-lg font-medium text-foreground" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://www.facebook.com/selwyncontractors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
            <Link href="/contact" onClick={toggleMenu}>
              Get a Quote
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
