import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZooE - Your Gateway to Wildlife Adventure",
  description: "Discover amazing animals, plan your visit, and learn about conservation at ZooE. Experience wildlife like never before with our interactive exhibits and educational programs.",
  keywords: "zoo, animals, wildlife, conservation, family fun, education, exhibits",
  authors: [{ name: "ZooE Team" }],
  openGraph: {
    title: "ZooE - Your Gateway to Wildlife Adventure",
    description: "Discover amazing animals and plan your visit to ZooE",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}