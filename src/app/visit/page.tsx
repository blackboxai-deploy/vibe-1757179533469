"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to know for an amazing day at ZooE
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="tickets">Tickets & Pricing</TabsTrigger>
            <TabsTrigger value="hours">Hours & Calendar</TabsTrigger>
            <TabsTrigger value="map">Zoo Map</TabsTrigger>
            <TabsTrigger value="services">Services & Amenities</TabsTrigger>
          </TabsList>

          <TabsContent value="tickets" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pricing Cards */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Prices</h2>
                <div className="space-y-4">
                  <Card className="border-2 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Adults</h3>
                          <p className="text-sm text-gray-600">Ages 13-64</p>
                        </div>
                        <div className="text-2xl font-bold text-green-600">$25</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Children</h3>
                          <p className="text-sm text-gray-600">Ages 3-12</p>
                        </div>
                        <div className="text-2xl font-bold text-green-600">$18</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Seniors</h3>
                          <p className="text-sm text-gray-600">Ages 65+</p>
                        </div>
                        <div className="text-2xl font-bold text-green-600">$22</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Children Under 3</h3>
                          <p className="text-sm text-gray-600">Free admission</p>
                        </div>
                        <div className="text-2xl font-bold text-yellow-600">FREE</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-lg py-3">
                  Buy Tickets Online - Save $2 per ticket!
                </Button>
              </div>

              {/* Special Packages */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Packages</h2>
                <div className="space-y-4">
                  <Card className="border-2 border-purple-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-purple-900 mb-2">Family Pack</h3>
                      <p className="text-gray-600 mb-3">2 Adults + 2 Children + Parking</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 line-through">Regular: $86</span>
                        <span className="text-2xl font-bold text-purple-600">$75</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">VIP Experience</h3>
                      <p className="text-gray-600 mb-3">Priority entry + Guided tour + Lunch</p>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">$65</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-orange-900 mb-2">Annual Membership</h3>
                      <p className="text-gray-600 mb-3">Unlimited visits + Discounts + Events</p>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-orange-600">$99</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-green-800 mb-2">Group Discounts Available!</h4>
                  <p className="text-sm text-green-700">
                    Groups of 15+ save 15%. Contact us for school and organization rates.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hours" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Operating Hours</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Daily</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Last Entry</span>
                        <span>5:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Parking Opens</span>
                        <span>8:30 AM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Extended Summer Hours</h4>
                  <p className="text-sm text-blue-700">
                    June - August: Open until 8:00 PM weekends and holidays
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Events Calendar</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Zoo Lights Holiday Festival</h4>
                        <p className="text-sm text-gray-600">Dec 15 - Jan 8, 5:00 PM - 9:00 PM</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Conservation Day</h4>
                        <p className="text-sm text-gray-600">Dec 22, All Day</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Night Safari Tours</h4>
                        <p className="text-sm text-gray-600">Every Saturday, 7:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Zoo Map</h2>
              <p className="text-gray-600 mb-6">Navigate through ZooE and plan your perfect route</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bfed372-1bdc-484f-9ee1-d7492d5b624f.png"
                        alt="ZooE Interactive Map"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Locations</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm">Main Entrance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm">Restrooms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Restaurants & Cafés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm">Gift Shops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-sm">First Aid</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm">Playgrounds</span>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Download PDF Map
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Parking</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free parking for all guests</li>
                    <li>• Accessible parking available</li>
                    <li>• EV charging stations</li>
                    <li>• Oversized vehicle spaces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wheelchair rentals available</li>
                    <li>• Paved pathways throughout</li>
                    <li>• Accessible restrooms</li>
                    <li>• ASL interpretation available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Services</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stroller rentals & parking</li>
                    <li>• Baby changing stations</li>
                    <li>• Family restrooms</li>
                    <li>• Nursing rooms available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dining</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Savanna Café (full service)</li>
                    <li>• Quick Bite snack stands</li>
                    <li>• Picnic areas available</li>
                    <li>• Outside food permitted</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shopping</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wildlife Gift Shop</li>
                    <li>• Educational toys & books</li>
                    <li>• Souvenirs & apparel</li>
                    <li>• Online shopping available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Guest Services</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lost & found</li>
                    <li>• First aid stations</li>
                    <li>• Guest information desk</li>
                    <li>• Free WiFi throughout</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}