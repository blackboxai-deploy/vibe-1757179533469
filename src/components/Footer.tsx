import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Zoo Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-green-400">ZooE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your gateway to wildlife adventure. Discover, learn, and connect with nature at ZooE.
            </p>
            <div className="text-sm text-gray-400">
              <p>123 Wildlife Drive</p>
              <p>Nature City, NC 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/animals" className="text-gray-300 hover:text-green-400 transition-colors">Animals</Link></li>
              <li><Link href="/visit" className="text-gray-300 hover:text-green-400 transition-colors">Plan Your Visit</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-green-400 transition-colors">Events</Link></li>
              <li><Link href="/education" className="text-gray-300 hover:text-green-400 transition-colors">Education</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Visitor Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visitor Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hours: 9:00 AM - 6:00 PM</li>
              <li>Adults: $25</li>
              <li>Children (3-12): $18</li>
              <li>Seniors (65+): $22</li>
              <li>Children under 3: Free</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Follow us for the latest animal updates and zoo news!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ZooE. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Dedicated to wildlife conservation and education
          </p>
        </div>
      </div>
    </footer>
  )
}