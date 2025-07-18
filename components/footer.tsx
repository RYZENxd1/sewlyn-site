import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-50/50 border-t">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selwyn_contractors-removebg-preview-ARYM2Dlmfwv2PhhK0kswXCzo8eEG4A.png"
              alt="Selwyn Landscape & Contractors Logo"
              width={140}
              height={56}
              className="h-auto w-auto mb-4"
            />
            <p className="text-sm text-gray-600 max-w-xs">
              Transforming outdoor spaces into breathtaking landscapes. Your local concrete, paving, and landscaping
              professionals.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-primary">
                Services
              </Link>
              <Link href="/projects" className="text-sm text-gray-600 hover:text-primary">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#landscaping" className="text-sm text-gray-600 hover:text-primary">
                Landscaping
              </Link>
              <Link href="/services#concrete" className="text-sm text-gray-600 hover:text-primary">
                Concrete Projects
              </Link>
              <Link href="/services#paving" className="text-sm text-gray-600 hover:text-primary">
                Paving
              </Link>
              <Link href="/services#fencing" className="text-sm text-gray-600 hover:text-primary">
                Fencing
              </Link>
              <Link href="/services#retaining" className="text-sm text-gray-600 hover:text-primary">
                Retaining Walls
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a href="tel:+64210535237" className="text-sm text-gray-600 hover:text-primary">
                  +64 210 535 237
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:contact@selwyn.org.nz" className="text-sm text-gray-600 hover:text-primary">
                  contact@selwyn.org.nz
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <Link
                  href="https://www.facebook.com/selwyncontractors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Powered by <a href="https://digitroncx.com/">DigitronCX</a>.

          </p>
        </div>
      </div>
    </footer>
  )
}
