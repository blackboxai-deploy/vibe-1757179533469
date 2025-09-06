"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  const programs = [
    {
      id: "school-visits",
      title: "School Field Trips",
      age: "K-12",
      duration: "2-4 hours",
      capacity: "Up to 50 students",
      price: "$8 per student",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f945fe65-af5a-4e53-b3d6-94719d8e9861.png",
      description: "Engaging educational programs aligned with curriculum standards, featuring guided tours and hands-on activities.",
      highlights: ["Curriculum-aligned content", "Interactive activities", "Meet animal ambassadors", "Take-home materials"]
    },
    {
      id: "family-programs",
      title: "Family Learning Adventures",
      age: "All ages",
      duration: "1-2 hours",
      capacity: "15 families",
      price: "$5 per person",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f640a946-3f83-40b7-aa4c-e7b4100c42f9.png",
      description: "Fun, family-friendly programs that bring everyone together to learn about wildlife conservation.",
      highlights: ["Family bonding activities", "Age-appropriate content", "Hands-on experiences", "Conservation focus"]
    },
    {
      id: "summer-camp",
      title: "Wildlife Summer Camps",
      age: "6-14",
      duration: "5 days",
      capacity: "20 campers",
      price: "$150 per week",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc4ee4a9-9bf2-49fa-adda-37534c8b8936.png",
      description: "Week-long immersive camps where kids become junior zookeepers and conservation scientists.",
      highlights: ["Behind-the-scenes access", "Animal care activities", "STEM learning", "Conservation projects"]
    },
    {
      id: "adult-workshops",
      title: "Adult Education Workshops",
      age: "18+",
      duration: "2-3 hours",
      capacity: "25 participants",
      price: "$25 per person",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/324244e8-a33b-4b8a-9808-37eba2bc41b1.png",
      description: "In-depth workshops covering wildlife biology, conservation research, and environmental issues.",
      highlights: ["Expert-led sessions", "Current research topics", "Career insights", "Networking opportunities"]
    }
  ]

  const conservationProjects = [
    {
      title: "Tiger Conservation Initiative",
      location: "Southeast Asia",
      status: "Active",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e651d0f9-dfbc-40a3-a757-a5157105041b.png",
      description: "Supporting wild tiger populations through habitat protection and anti-poaching efforts.",
      impact: "Protected 50,000 acres of habitat"
    },
    {
      title: "Sea Turtle Rescue Program",
      location: "Pacific Coast",
      status: "Ongoing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0b74276-d89d-4f14-88ca-b813a2e74bca.png",
      description: "Rescuing, rehabilitating, and releasing injured sea turtles back to the wild.",
      impact: "200+ turtles rescued and released"
    },
    {
      title: "Pollinator Garden Network",
      location: "Local Community",
      status: "Expanding",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/305d13dc-6283-4515-b859-2847ca6098a6.png",
      description: "Creating pollinator-friendly habitats in schools and community spaces.",
      impact: "25 gardens established"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education & Conservation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Inspiring the next generation of wildlife conservationists through hands-on learning and real-world impact
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Educational Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Educational Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[8/5] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      {program.age}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div><strong>Duration:</strong> {program.duration}</div>
                    <div><strong>Capacity:</strong> {program.capacity}</div>
                    <div><strong>Price:</strong> {program.price}</div>
                  </div>

                  <p className="text-gray-700 mb-4">{program.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Program Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.highlights.map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Book Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conservation Projects */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Conservation Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ZooE is committed to protecting wildlife and their habitats around the world. 
              Here are some of the conservation projects we actively support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conservationProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-800">Impact: {project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources & Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lesson Plans</h3>
              <p className="text-sm text-gray-600 mb-4">Free downloadable curriculum materials for educators</p>
              <Button variant="outline" size="sm">Download</Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Virtual Tours</h3>
              <p className="text-sm text-gray-600 mb-4">Explore animal habitats from your classroom</p>
              <Button variant="outline" size="sm">Watch Now</Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-sm text-gray-600 mb-4">Latest scientific findings from our conservation work</p>
              <Button variant="outline" size="sm">Read More</Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Competitions</h3>
              <p className="text-sm text-gray-600 mb-4">Student conservation challenges and science fairs</p>
              <Button variant="outline" size="sm">Join Now</Button>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn and Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us in our mission to protect wildlife and educate communities. 
            Book your educational program today or learn how you can support our conservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Book Education Program
            </Button>
            <Button size="lg" variant="outline">
              Support Conservation
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}