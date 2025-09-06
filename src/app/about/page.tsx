"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Zoo Director",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4d69eba-f137-45c9-9f7b-fbbf52744641.png",
      bio: "With over 20 years in wildlife conservation, Dr. Johnson leads ZooE's mission to protect endangered species.",
    },
    {
      name: "Michael Chen",
      role: "Head Veterinarian",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00772ecc-aa52-4a96-a504-33064ed071bf.png",
      bio: "Our chief veterinarian ensures the health and wellbeing of all animals with advanced medical care.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Conservation Director",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eb22c65f-0a45-4b09-aff7-a30d0adafa3d.png",
      bio: "Leading our global conservation efforts and research programs to protect wildlife worldwide.",
    },
    {
      name: "James Wilson",
      role: "Education Curator",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/55e6fdb6-c99b-43c1-93bc-253786001122.png",
      bio: "Developing innovative educational programs that inspire the next generation of conservationists.",
    }
  ]

  const milestones = [
    { year: "1962", event: "ZooE founded as a small local wildlife sanctuary" },
    { year: "1978", event: "First successful breeding program for endangered species" },
    { year: "1995", event: "Opened state-of-the-art veterinary hospital" },
    { year: "2005", event: "Launched global conservation partnership programs" },
    { year: "2012", event: "Achieved AZA accreditation for excellence in animal care" },
    { year: "2018", event: "Opened immersive habitat experiences" },
    { year: "2024", event: "Celebrating 62 years of wildlife conservation" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ZooE</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicated to wildlife conservation, education, and creating connections between people and nature
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservation</h3>
              <p className="text-gray-600">
                Protecting endangered species through breeding programs, habitat preservation, and global partnerships.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">
                Inspiring visitors of all ages to care about wildlife and take action for conservation.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection</h3>
              <p className="text-gray-600">
                Building meaningful relationships between people and wildlife to foster a love for nature.
              </p>
            </Card>
          </div>
        </section>

        {/* History Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* By the Numbers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ZooE by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">300+</div>
              <p className="text-gray-600">Animal Species</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">2,000+</div>
              <p className="text-gray-600">Individual Animals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">Conservation Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500K+</div>
              <p className="text-gray-600">Annual Visitors</p>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accreditations & Partnerships</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Memberships</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Association of Zoos and Aquariums (AZA)</li>
                  <li>• World Association of Zoos and Aquariums (WAZA)</li>
                  <li>• Species Survival Plan (SSP) Programs</li>
                  <li>• International Union for Conservation of Nature (IUCN)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Partnerships</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wildlife Conservation Society</li>
                  <li>• Panthera (Wild Cat Conservation)</li>
                  <li>• Sea Turtle Conservancy</li>
                  <li>• International Crane Foundation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location & Contact</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <strong>Address:</strong><br />
                  123 Wildlife Drive<br />
                  Nature City, NC 12345
                </div>
                <div>
                  <strong>Phone:</strong> (555) 123-4567
                </div>
                <div>
                  <strong>Email:</strong> info@zooe.org
                </div>
                <div>
                  <strong>Hours:</strong> Daily 9:00 AM - 6:00 PM
                </div>
              </div>
              <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                Get Directions
              </Button>
            </Card>

            <Card className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be9a14aa-a07a-4ce0-ba76-e4d803533e6f.png"
                  alt="ZooE Location Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Conservation Mission</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether through visiting, volunteering, or supporting our conservation programs, 
            you can make a difference in protecting wildlife for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-teal-600 border-white hover:bg-white">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="text-teal-600 border-white hover:bg-white">
              Volunteer With Us
            </Button>
            <Button size="lg" variant="outline" className="text-teal-600 border-white hover:bg-white">
              Support Conservation
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}