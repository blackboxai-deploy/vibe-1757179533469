"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Animal {
  id: string
  name: string
  species: string
  category: string
  habitat: string
  status: "Endangered" | "Vulnerable" | "Stable" | "Critically Endangered"
  image: string
  description: string
}

export default function AnimalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const animals: Animal[] = [
    {
      id: "siberian-tiger",
      name: "Amara",
      species: "Siberian Tiger",
      category: "Mammals",
      habitat: "Asian Forests",
      status: "Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce40ca0e-af72-48ee-962c-c0f9c515d31b.png",
      description: "Meet Amara, our magnificent Siberian tiger who loves swimming and playing in the snow."
    },
    {
      id: "african-elephant",
      name: "Kesi",
      species: "African Elephant",
      category: "Mammals",
      habitat: "African Savanna",
      status: "Vulnerable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0beabdbd-6b7b-4911-9078-edfccf5202f2.png",
      description: "Kesi is our gentle giant who enjoys mud baths and entertaining visitors."
    },
    {
      id: "mountain-gorilla",
      name: "Bomba",
      species: "Mountain Gorilla",
      category: "Mammals",
      habitat: "Mountain Forests",
      status: "Critically Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66a3d1bc-0fb1-49fd-aaed-a55fd0f46220.png",
      description: "Bomba is our wise silverback who leads his family group with intelligence."
    },
    {
      id: "emperor-penguin",
      name: "Pip",
      species: "Emperor Penguin",
      category: "Birds",
      habitat: "Antarctic",
      status: "Stable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e32ea0b-425b-4d28-9fe8-450228f1084f.png",
      description: "Pip is our charming emperor penguin who loves to slide on ice and swim gracefully."
    },
    {
      id: "green-sea-turtle",
      name: "Marina",
      species: "Green Sea Turtle",
      category: "Reptiles",
      habitat: "Ocean Reefs",
      status: "Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3421e858-7997-4f45-a063-5d2eb6e2694a.png",
      description: "Marina is our graceful sea turtle who educates visitors about ocean conservation."
    },
    {
      id: "poison-dart-frog",
      name: "Rainbow",
      species: "Poison Dart Frog",
      category: "Amphibians",
      habitat: "Rainforest",
      status: "Vulnerable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9be9b23a-1145-4743-9e7b-3f2c42ada449.png",
      description: "Rainbow showcases the incredible diversity of amphibian colors and patterns."
    },
    {
      id: "great-white-shark",
      name: "Neptune",
      species: "Great White Shark",
      category: "Aquatic",
      habitat: "Ocean",
      status: "Vulnerable",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8918159-1383-40ce-8041-de4a917316ce.png",
      description: "Neptune helps visitors understand the importance of shark conservation."
    },
    {
      id: "red-panda",
      name: "Rusty",
      species: "Red Panda",
      category: "Mammals",
      habitat: "Mountain Forests",
      status: "Endangered",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0389b877-bcca-414e-800e-72ec52927bd8.png",
      description: "Rusty is our playful red panda who loves climbing and eating bamboo."
    }
  ]

  const categories = ["All", "Mammals", "Birds", "Reptiles", "Amphibians", "Aquatic"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critically Endangered": return "bg-red-600"
      case "Endangered": return "bg-red-500"
      case "Vulnerable": return "bg-orange-500"
      case "Stable": return "bg-green-600"
      default: return "bg-gray-500"
    }
  }

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.species.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || animal.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Amazing Animals</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the incredible diversity of wildlife at ZooE and learn about our conservation efforts
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search animals by name or species..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAnimals.length} of {animals.length} animals
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <Link key={animal.id} href={`/animals/${animal.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={animal.image}
                    alt={`${animal.name} - ${animal.species}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {animal.name}
                    </h3>
                    <Badge className={`${getStatusColor(animal.status)} text-white text-xs`}>
                      {animal.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{animal.species}</p>
                  <p className="text-xs text-gray-500 mb-1">{animal.category} • {animal.habitat}</p>
                  <p className="text-sm text-gray-700 line-clamp-3 flex-1">
                    {animal.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No animals found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}