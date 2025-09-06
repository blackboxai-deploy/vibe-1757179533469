"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Animal {
  id: string
  name: string
  species: string
  habitat: string
  status: "Endangered" | "Vulnerable" | "Stable" | "Critically Endangered"
  image: string
  description: string
}

export function FeaturedAnimals() {
  const featuredAnimals: Animal[] = [
    {
      id: "siberian-tiger",
      name: "Amara",
      species: "Siberian Tiger",
      habitat: "Asian Forests",
      status: "Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50fc7f71-bb5e-4444-868f-af4c91373640.png",
      description: "Meet Amara, our magnificent Siberian tiger who loves swimming and playing in the snow."
    },
    {
      id: "african-elephant",
      name: "Kesi",
      species: "African Elephant",
      habitat: "African Savanna", 
      status: "Vulnerable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5fc980e-dc63-469c-a55e-2fa6b265e957.png",
      description: "Kesi is our gentle giant who enjoys mud baths and entertaining visitors with her playful personality."
    },
    {
      id: "mountain-gorilla",
      name: "Bomba",
      species: "Mountain Gorilla",
      habitat: "Mountain Forests",
      status: "Critically Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/600fbbd0-6ff7-4f28-ba98-cb581dfbb30c.png",
      description: "Bomba is our wise silverback who leads his family group with intelligence and compassion."
    },
    {
      id: "snow-leopard",
      name: "Zara",
      species: "Snow Leopard",
      habitat: "Mountain Peaks",
      status: "Vulnerable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d05f9ba-eaa4-4329-9e49-f76ae184b2dc.png",
      description: "Zara is known for her incredible jumping ability and beautiful thick coat perfect for cold mountains."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critically Endangered": return "bg-red-600"
      case "Endangered": return "bg-red-500"
      case "Vulnerable": return "bg-orange-500"
      case "Stable": return "bg-green-600"
      default: return "bg-gray-500"
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Amazing Animals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know some of our most beloved residents and learn about their 
            conservation stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal) => (
            <Link key={animal.id} href={`/animals/${animal.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={animal.image}
                    alt={`${animal.name} - ${animal.species}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {animal.name}
                    </h3>
                    <Badge className={`${getStatusColor(animal.status)} text-white`}>
                      {animal.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{animal.species}</p>
                  <p className="text-sm text-gray-500 mb-3">{animal.habitat}</p>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {animal.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/animals"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            View All Animals
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}