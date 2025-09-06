"use client"

import { Hero } from "@/components/Hero"
import { FeaturedAnimals } from "@/components/FeaturedAnimals"
import { QuickInfo } from "@/components/QuickInfo"
import { NewsEvents } from "@/components/NewsEvents"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedAnimals />
      <QuickInfo />
      <NewsEvents />
    </div>
  )
}