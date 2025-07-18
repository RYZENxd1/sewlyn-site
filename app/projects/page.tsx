import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our portfolio of completed landscaping and contracting projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="landscaping">Landscaping</TabsTrigger>
                <TabsTrigger value="concrete">Concrete</TabsTrigger>
                <TabsTrigger value="construction">Construction</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Project+${item}`}
                        alt={`Project ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Project {item}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item % 3 === 0
                          ? "Concrete patio with custom design"
                          : item % 3 === 1
                            ? "Complete garden landscaping"
                            : "Retaining wall and fencing installation"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="landscaping" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 4].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Landscaping+${item}`}
                        alt={`Landscaping Project ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Landscaping Project {item}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Complete garden landscaping with custom planting and irrigation
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="concrete" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[2, 5].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Concrete+${item}`}
                        alt={`Concrete Project ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Concrete Project {item}</h3>
                      <p className="text-sm text-gray-500 mt-1">Concrete patio with custom design and finishing</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="construction" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[3, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Construction+${item}`}
                        alt={`Construction Project ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Construction Project {item}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Retaining wall and fencing installation for residential property
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                name: "Sarah Johnson",
                text: "Selwyn Contractors transformed our backyard into a beautiful outdoor living space. Their attention to detail and professionalism was outstanding.",
                rating: 5,
              },
              {
                name: "Mike Thompson",
                text: "We hired Selwyn for our concrete patio project and couldn't be happier with the results. They completed the work on time and within budget.",
                rating: 5,
              },
              {
                name: "Emma Wilson",
                text: "The team at Selwyn Landscape & Contractors did an amazing job with our garden landscaping. They were professional, efficient, and the results exceeded our expectations.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="mb-4 text-gray-500">"{testimonial.text}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and quote
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
