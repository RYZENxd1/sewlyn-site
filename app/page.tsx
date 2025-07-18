import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ChevronRight,
  Shovel,
  Trees,
  Hammer,
  Award,
  ThumbsUp,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Users,
} from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced and Bigger */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
        <div
          className="relative min-h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/bgf.jpg')",
          }}
        >
          <div className="container relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center md:px-6">
            <div className="max-w-4xl space-y-8">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Outdoor Space Into Something
                <span className="block text-primary-400"> Extraordinary</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl leading-relaxed">
                Professional landscaping and contracting services in Selwyn. From stunning gardens to durable concrete
                work, we bring your vision to life with expert craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                    <Link href="/contact">Get Your Free Quote Today</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    <Link href="/projects">View Our Amazing Projects</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary-400" />
                    <a href="tel:+64210535237" className="hover:text-primary-400 transition-colors">
                      +64 210 535 237
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <a href="mailto:contact@selwyn.org.nz" className="hover:text-primary-400 transition-colors">
                      contact@selwyn.org.nz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-primary-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Expert Services</h2>
              <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
                We offer a comprehensive range of professional landscaping and contracting services designed to
                transform your outdoor space into something truly special.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors group">
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Trees className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Professional Landscaping</CardTitle>
                <CardDescription className="text-base">
                  Transform your outdoor space with our expert landscaping services, from design to maintenance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom Garden Design & Installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Lawn Mowing & Maintenance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Tree Pruning & Hedge Trimming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Irrigation System Installation</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <Link href="/services#landscaping">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors group">
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shovel className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Concrete Specialists</CardTitle>
                <CardDescription className="text-base">
                  Durable, beautiful concrete solutions that add functionality and value to your property.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom Patios & Outdoor Living</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Driveways & Footpaths</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Decorative Concrete Finishes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Concrete Repairs & Restoration</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <Link href="/services#concrete">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors group">
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Hammer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Construction & Renovation</CardTitle>
                <CardDescription className="text-base">
                  Complete construction services including fencing, retaining walls, and outdoor structures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Paving & Keystone Installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom Fencing Solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Retaining Walls & Structures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Outdoor Renovations</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <Link href="/services#construction">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Selwyn Landscape & Contractors</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  At Selwyn Landscape & Contractors, we are passionate about transforming outdoor spaces into
                  breathtaking landscapes that inspire and uplift.
                </p>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our mission is to create outdoor environments that enhance the beauty of your property while
                  reflecting your unique style and personality. With years of experience serving the Selwyn district,
                  our team of dedicated professionals brings expertise, creativity, and attention to detail to every
                  project.
                </p>
                <p>
                  We are Selwyn Civil Contractors Ltd, your trusted local specialists in Concrete, Paving, Keystone,
                  Renovations, Fencing, and Retaining Walls. From small residential gardens to large commercial
                  projects, we deliver exceptional results that stand the test of time.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/about">Discover Our Story</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <Link href="/projects">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/CONTRACTOR.jpg"
                  alt="Selwyn Contractors Professional Team"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm font-medium">5.0 Rating</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">From 200+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Why Choose Selwyn Contractors
              </h2>
              <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
                What sets us apart and makes us the preferred choice for landscaping and contracting in Selwyn
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of highly skilled professionals with years of experience in landscaping and
                construction. We take pride in delivering exceptional quality on every project.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fully Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                We are fully licensed and insured, giving you peace of mind. Our commitment to safety and
                professionalism is evident in everything we do.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Time Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the importance of completing projects on schedule. Our efficient project management
                ensures timely delivery without compromising quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ThumbsUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We stand behind our work with a comprehensive satisfaction guarantee
                and ongoing support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                As locals, we understand the unique challenges and opportunities of the Selwyn district. Our knowledge
                of local conditions ensures optimal results.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Free Consultations</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer free, no-obligation consultations and quotes. Our experts will assess your needs and provide
                honest, professional advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Simple Process</h2>
              <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
                From initial consultation to project completion, we make the process smooth and stress-free
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "We visit your property to understand your vision, assess the space, and provide expert recommendations tailored to your needs and budget.",
              },
              {
                step: "02",
                title: "Custom Design & Quote",
                description:
                  "Our team creates a detailed plan and provides a transparent, competitive quote with no hidden costs. We'll refine the design until you're completely satisfied.",
              },
              {
                step: "03",
                title: "Expert Execution",
                description:
                  "Our skilled professionals bring your vision to life with precision and care, keeping you informed throughout the process and ensuring exceptional results.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="flex items-center">
                      <div className="flex-1 border-t-2 border-dashed border-primary/30"></div>
                      <ChevronRight className="h-6 w-6 text-primary/50 mx-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Ready to Transform Your Outdoor Space?
                </h2>
                <p className="text-xl text-primary-100 leading-relaxed">
                  Don't wait any longer to create the outdoor space of your dreams. Contact us today for a free
                  consultation and discover how we can bring your vision to life with our expert craftsmanship and
                  attention to detail.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-col">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  <Link href="/contact">Get Your Free Quote Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className=" bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  <Link href="/projects">View Our Amazing Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+64210535237" className="hover:text-primary-200 transition-colors">
                    +64 210 535 237
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:contact@selwyn.org.nz" className="hover:text-primary-200 transition-colors">
                    contact@selwyn.org.nz
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
