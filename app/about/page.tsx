import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, ThumbsUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Learn more about Selwyn Landscape &amp; Contractors and our commitment to excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/abtus1.jpg"
                alt="Selwyn Contractors Team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-gray-500 md:text-lg">
                  At Selwyn Landscape &amp; Contractors, we are passionate about transforming outdoor spaces into
                  breathtaking landscapes.
                </p>
              </div>
              <div className="space-y-4 text-gray-500">
                <p>
                  Founded with a vision to provide exceptional landscaping and contracting services to the Selwyn
                  district, our company has grown through a commitment to quality workmanship and customer satisfaction.
                </p>
                <p>
                  Our mission is to create outdoor environments that inspire, uplift, and enhance the beauty of your
                  property. We understand that your outdoor space is a reflection of your style and personality, and our
                  team of dedicated professionals is here to bring your vision to life.
                </p>
                <p>
                  We are Selwyn Civil Contractors Ltd, your local Concrete + Paving + Keystone + Renovations + Fencing +
                  Retaining Walls professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We’re Different */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why We’re Different</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Core values that guide every project we undertake
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Award-Winning Quality",
                desc: "Recognised locally for excellence in workmanship.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Dedicated Team",
                desc: "Skilled professionals focused on your satisfaction.",
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "On-Time Delivery",
                desc: "Projects completed to schedule, every time.",
              },
              {
                icon: <ThumbsUp className="h-6 w-6 text-primary" />,
                title: "100% Satisfaction",
                desc: "Most of our work comes from word-of-mouth referrals.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Contact us today for a free consultation and quote.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
