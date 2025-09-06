"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NewsEvent {
  id: string
  title: string
  type: "News" | "Event"
  date: string
  image: string
  description: string
  link: string
}

export function NewsEvents() {
  const newsEvents: NewsEvent[] = [
    {
      id: "baby-giraffe",
      title: "New Baby Giraffe Born at ZooE!",
      type: "News",
      date: "December 15, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84f39966-ac38-4566-b1c3-22b512bb5d62.png",
      description: "We're thrilled to announce the arrival of our newest family member - a healthy baby giraffe!",
      link: "/news/baby-giraffe"
    },
    {
      id: "conservation-day",
      title: "World Wildlife Conservation Day",
      type: "Event",
      date: "December 22, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a2b30de5-5533-4eb7-b995-7e352cb77c91.png",
      description: "Join us for special talks, activities, and learn how you can help protect endangered species.",
      link: "/events/conservation-day"
    },
    {
      id: "penguin-exhibit",
      title: "New Antarctic Penguin Exhibit Opens",
      type: "News",
      date: "December 10, 2024",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f954af56-f138-476b-8cd4-ecc5b2cadb82.png",
      description: "Experience the magic of Antarctica with our brand new state-of-the-art penguin habitat.",
      link: "/news/penguin-exhibit"
    },
    {
      id: "night-safari",
      title: "Magical Night Safari Experience",
      type: "Event",
      date: "Every Saturday",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/34c6c365-fc39-4d5b-9e34-c3d36072cc3a.png",
      description: "Discover the zoo after dark! See nocturnal animals in action during our guided night tours.",
      link: "/events/night-safari"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at ZooE and don't miss our exciting events!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsEvents.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-[8/5] overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    item.type === "News" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Link 
                  href={item.link}
                  className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/news">View All News</Link>
          </Button>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/events">Upcoming Events</Link>
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Connected with ZooE
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest updates on new arrivals, special events, and conservation efforts 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}