"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Event {
  id: string
  title: string
  date: string
  time: string
  category: "Special Event" | "Educational" | "Seasonal" | "Behind the Scenes"
  price: string
  image: string
  description: string
  location: string
  duration: string
  capacity: string
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const events: Event[] = [
    {
      id: "zoo-lights",
      title: "Zoo Lights Holiday Festival",
      date: "Dec 15 - Jan 8, 2024",
      time: "5:00 PM - 9:00 PM",
      category: "Seasonal",
      price: "Included with admission",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68c6538d-c964-488a-80ee-5e8dd6296e89.png",
      description: "Experience the magic of the holidays with stunning light displays throughout the zoo, hot cocoa, and special evening animal presentations.",
      location: "Throughout ZooE",
      duration: "4 hours",
      capacity: "No limit"
    },
    {
      id: "night-safari",
      title: "Nocturnal Night Safari",
      date: "Every Saturday",
      time: "7:00 PM - 9:00 PM",
      category: "Behind the Scenes",
      price: "$35 per person",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5a7c0c1-421d-408a-8c26-9bcc8df00346.png",
      description: "Join our expert guides for an exclusive after-hours tour to see how animals behave when the sun goes down.",
      location: "Meet at Main Entrance",
      duration: "2 hours",
      capacity: "20 guests"
    },
    {
      id: "conservation-day",
      title: "World Wildlife Conservation Day",
      date: "December 22, 2024",
      time: "10:00 AM - 4:00 PM",
      category: "Educational",
      price: "Free with admission",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4a7a3808-fcf9-4590-bb44-4eccd9502c61.png",
      description: "Learn about global conservation efforts, meet researchers, and discover how you can help protect endangered species.",
      location: "Education Center",
      duration: "All day",
      capacity: "Open to all"
    },
    {
      id: "keeper-talks",
      title: "Meet the Keepers Series",
      date: "Daily",
      time: "Various times",
      category: "Educational",
      price: "Included with admission",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf643308-f008-4485-a6d8-fd251470fe38.png",
      description: "Get up close with our animal care team and learn fascinating facts about your favorite animals.",
      location: "Various exhibits",
      duration: "30 minutes",
      capacity: "50 per session"
    },
    {
      id: "photography-workshop",
      title: "Wildlife Photography Workshop",
      date: "January 15, 2025",
      time: "8:00 AM - 12:00 PM",
      category: "Special Event",
      price: "$75 per person",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05cad9c1-a644-4b22-bc32-913515e60ae1.png",
      description: "Learn professional wildlife photography techniques with expert guidance and exclusive early morning access.",
      location: "Various exhibits",
      duration: "4 hours",
      capacity: "15 participants"
    },
    {
      id: "summer-camps",
      title: "Junior Zookeeper Summer Camps",
      date: "June - August 2025",
      time: "9:00 AM - 3:00 PM",
      category: "Educational",
      price: "$150 per week",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/60a40e45-c651-4339-9e1e-7a68428ec987.png",
      description: "Week-long camps where kids get hands-on experience with animal care, conservation projects, and STEM activities.",
      location: "Education Center",
      duration: "5 days",
      capacity: "20 campers per week"
    }
  ]

  const categories = ["All", "Special Event", "Educational", "Seasonal", "Behind the Scenes"]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Special Event": return "bg-purple-100 text-purple-800"
      case "Educational": return "bg-blue-100 text-blue-800"
      case "Seasonal": return "bg-orange-100 text-orange-800"
      case "Behind the Scenes": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Experiences</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us for unforgettable experiences and special events throughout the year
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[8/5] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-4">
                    {event.title}
                  </h3>
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div><strong>Date:</strong> {event.date}</div>
                  <div><strong>Time:</strong> {event.time}</div>
                  <div><strong>Location:</strong> {event.location}</div>
                  <div><strong>Duration:</strong> {event.duration}</div>
                  <div><strong>Capacity:</strong> {event.capacity}</div>
                  <div><strong>Price:</strong> {event.price}</div>
                </div>

                <p className="text-gray-700 mb-6">{event.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    Register Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found in this category.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSelectedCategory("All")}
            >
              View All Events
            </Button>
          </div>
        )}

        {/* Upcoming Highlights */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Don't Miss These Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Holiday Celebrations</h3>
              <p className="text-sm text-gray-600">Special themed events throughout the holiday season with unique activities and experiences.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Night Experiences</h3>
              <p className="text-sm text-gray-600">Discover the zoo after dark with exclusive nocturnal tours and special evening programs.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Programs</h3>
              <p className="text-sm text-gray-600">Learn from experts with hands-on workshops, conservation talks, and interactive experiences.</p>
            </div>
          </div>
        </section>

        {/* Event Planning */}
        <section className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Plan Your Special Event at ZooE</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Looking for a unique venue for your birthday party, corporate event, or special celebration? 
              ZooE offers customizable packages for unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-orange-600 border-white hover:bg-white">
                Birthday Parties
              </Button>
              <Button size="lg" variant="outline" className="text-orange-600 border-white hover:bg-white">
                Corporate Events
              </Button>
              <Button size="lg" variant="outline" className="text-orange-600 border-white hover:bg-white">
                Private Tours
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}