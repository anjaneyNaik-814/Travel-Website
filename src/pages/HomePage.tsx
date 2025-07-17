import React, { useState } from 'react';
import { Search, MapPin, Star, Users, Calendar, ArrowRight, Sunrise, Tent } from 'lucide-react';
import { destinations, trekTypes } from '../data/travelData';

interface HomePageProps {
  onDestinationSelect: (destination: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onDestinationSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sunriseTrips = trekTypes.filter(trek => trek.category === 'sunrise').slice(0, 4);
  const twoDayTrips = trekTypes.filter(trek => trek.category === '2-day').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-blue-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find the Best Treks & Travel Agents in One Place
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover verified travel agents for your perfect Karnataka adventure
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search destinations like Coorg, Chikmagalur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-green-300"
                />
              </div>
              {searchQuery && filteredDestinations.length > 0 && (
                <div className="absolute z-10 w-full max-w-2xl mx-auto mt-2 bg-white rounded-lg shadow-lg">
                  {filteredDestinations.slice(0, 5).map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => onDestinationSelect(dest.name)}
                      className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg border-b last:border-b-0"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>{dest.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sunrise Treks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sunrise className="h-8 w-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sunrise Treks</h2>
            </div>
            <p className="text-lg text-gray-600">Experience magical sunrises from Karnataka's peaks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sunriseTrips.map((trek) => (
              <div key={trek.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 bg-gradient-to-br from-orange-400 to-pink-500">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{trek.name}</h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{trek.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-600 font-semibold">₹{trek.startingPrice}+</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {trek.groupSize}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{trek.description}</p>
                  <button
                    onClick={() => onDestinationSelect(trek.location)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Agents</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2-Day Treks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Tent className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">2-Day Treks</h2>
            </div>
            <p className="text-lg text-gray-600">Perfect weekend getaways with camping</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {twoDayTrips.map((trek) => (
              <div key={trek.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-green-500">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{trek.name}</h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{trek.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-600 font-semibold">₹{trek.startingPrice}+</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {trek.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{trek.description}</p>
                  <button
                    onClick={() => onDestinationSelect(trek.location)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Agents</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Destination */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore by Destination</h2>
            <p className="text-lg text-gray-600">Discover Karnataka's most beautiful trekking destinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {destinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer" onClick={() => onDestinationSelect(destination.name)}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className={`h-40 bg-gradient-to-br ${destination.gradient} relative`}>
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <MapPin className="h-5 w-5 mb-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{destination.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">₹{destination.startingPrice}+</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{destination.agentCount} agents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of travelers who trust TripConnect for their perfect trek</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Destinations
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;