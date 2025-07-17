import React from 'react';
import { ArrowLeft, Star, Calendar, Users, MapPin, Clock, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { agents } from '../data/travelData';

interface PackageDetailsPageProps {
  packageId: string;
  onBack: () => void;
}

const PackageDetailsPage: React.FC<PackageDetailsPageProps> = ({ packageId, onBack }) => {
  // Find the package and agent
  let selectedPackage = null;
  let selectedAgent = null;

  for (const agent of agents) {
    const pkg = agent.packages.find(p => p.id === packageId);
    if (pkg) {
      selectedPackage = pkg;
      selectedAgent = agent;
      break;
    }
  }

  if (!selectedPackage || !selectedAgent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Package not found</h2>
          <button onClick={onBack} className="text-green-600 hover:text-green-700">
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to agents</span>
          </button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedPackage.name}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">{selectedAgent.name.charAt(0)}</span>
                  </div>
                  <span className="text-gray-600">by {selectedAgent.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{selectedAgent.rating}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-3xl font-bold text-green-600">₹{selectedPackage.price.toLocaleString()}</div>
              <div className="text-sm text-gray-500">per person</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Package Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{selectedPackage.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-medium">{selectedPackage.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Destination</div>
                    <div className="font-medium">{selectedPackage.destination}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Difficulty</div>
                    <div className="font-medium">Moderate</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Experience the breathtaking beauty of {selectedPackage.destination} with our carefully crafted itinerary. 
                This trek offers stunning views, challenging terrain, and unforgettable memories. Perfect for adventure 
                enthusiasts looking to explore Karnataka's natural wonders.
              </p>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPackage.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Itinerary</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Day 1: Departure & Trek Start</h3>
                  <p className="text-gray-600 mt-1">
                    Early morning departure from Bangalore. Reach base camp by afternoon. 
                    Brief introduction session and equipment check. Begin trek to campsite. 
                    Evening bonfire and dinner.
                  </p>
                  <div className="text-sm text-gray-500 mt-2">Activities: Travel, Trek (3-4 km), Camping</div>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Day 2: Summit & Return</h3>
                  <p className="text-gray-600 mt-1">
                    Early morning wake-up call for sunrise trek to summit. Reach peak by sunrise. 
                    Enjoy panoramic views and photo session. Descend to base camp. 
                    Lunch and departure back to Bangalore.
                  </p>
                  <div className="text-sm text-gray-500 mt-2">Activities: Summit Trek (4-5 km), Return Journey</div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Arjun Kumar</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Amazing experience! The guide was knowledgeable and the arrangements were perfect. 
                    Highly recommend this package for first-time trekkers."
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-sm">P</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Priya Sharma</div>
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Great trek with beautiful views. Food could have been better, but overall a good experience. 
                    Will definitely book again with {selectedAgent.name}."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-1">₹{selectedPackage.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
                  Book Now
                </button>
                
                <div className="flex space-x-2">
                  <a
                    href={`tel:${selectedAgent.contact.phone}`}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/${selectedAgent.contact.whatsapp}?text=Hi, I'm interested in ${selectedPackage.name} package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Request Custom Package
                </button>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Agent Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Agent:</span>
                    <span className="font-medium">{selectedAgent.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="font-medium">{selectedAgent.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{selectedAgent.experience} years</span>
                  </div>
                  {selectedAgent.verified && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;