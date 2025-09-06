"use client"

import { Card, CardContent } from "@/components/ui/card"

export function QuickInfo() {
  const quickInfoData = [
    {
      title: "Zoo Hours",
      content: [
        "Daily: 9:00 AM - 6:00 PM",
        "Last Entry: 5:00 PM",
        "Open 365 days a year"
      ],
      bgColor: "bg-blue-100",
      textColor: "text-blue-900"
    },
    {
      title: "Ticket Prices",
      content: [
        "Adults: $25",
        "Children (3-12): $18",
        "Seniors (65+): $22",
        "Under 3: Free"
      ],
      bgColor: "bg-green-100",
      textColor: "text-green-900"
    },
    {
      title: "Getting Here",
      content: [
        "123 Wildlife Drive",
        "Nature City, NC 12345",
        "Free Parking Available",
        "Metro Accessible"
      ],
      bgColor: "bg-purple-100",
      textColor: "text-purple-900"
    },
    {
      title: "Today's Highlights",
      content: [
        "Lion Feeding: 11:00 AM",
        "Penguin Talk: 2:00 PM",
        "Elephant Bath: 4:00 PM",
        "Night Tour: 7:00 PM"
      ],
      bgColor: "bg-orange-100",
      textColor: "text-orange-900"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Plan Your Perfect Visit
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know for an amazing day at ZooE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickInfoData.map((info, index) => (
            <Card key={index} className={`${info.bgColor} border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold ${info.textColor} mb-4`}>
                  {info.title}
                </h3>
                <ul className={`space-y-2 ${info.textColor}`}>
                  {info.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Make the Most of Your Visit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Before You Come</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Download our mobile app</li>
                  <li>• Check weather conditions</li>
                  <li>• Book skip-the-line tickets</li>
                  <li>• Plan your route</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What to Bring</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comfortable walking shoes</li>
                  <li>• Sun protection & water</li>
                  <li>• Camera for memories</li>
                  <li>• Snacks (if desired)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Special Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wheelchair rental available</li>
                  <li>• Stroller parking stations</li>
                  <li>• Lost & found service</li>
                  <li>• First aid stations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}