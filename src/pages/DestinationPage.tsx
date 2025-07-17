import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Users, Filter, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { agents, destinations } from '../data/travelData';

interface DestinationPageProps {
  destination: string;
  onPackageSelect: (packageId: string) => void;
  onBack: () => void;
}

const DestinationPage: React.FC<DestinationPageProps> = ({ destination, onPackageSelect, onBack }) => {
  const [filters, setFilters] = useState({
    minBudget: 0,
    maxBudget: 10000,
    rating: 0,
    groupSize: 'any',
  });
  const [showFilters, setShowFilters] = useState(false);

  const destinationData = destinations.find(d => d.name === destination);
  const destinationAgents = agents.filter(agent => 
    agent.locations.includes(destination) && 
    agent.rating >= filters.rating &&
    agent.packages.some(pkg => pkg.price >= filters.minBudget && pkg.price <= filters.maxBudget)
  );

  const handleBudgetChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    setFilters(prev => ({
      ...prev,
      [type === 'min' ? 'minBudget' : 'maxBudget']: numValue
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        {/* Destination Hero Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img 
            src={getDestinationHeroImage(destination)}
            alt={`${destination} trekking`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center space-x-2">
              <MapPin className="h-8 w-8" />
              <span>{destination} Treks</span>
            </h1>
            <p className="text-lg opacity-90">{destinationAgents.length} verified travel agents available</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </h3>
              
              {/* Budget Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (₹)</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minBudget || ''}
                    onChange={(e) => handleBudgetChange('min', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxBudget || ''}
                    onChange={(e) => handleBudgetChange('max', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value={0}>Any Rating</option>
                  <option value={3}>3+ Stars</option>
                  <option value={4}>4+ Stars</option>
                  <option value={4.5}>4.5+ Stars</option>
                </select>
              </div>

              {/* Group Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                <select
                  value={filters.groupSize}
                  onChange={(e) => setFilters(prev => ({ ...prev, groupSize: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="any">Any Size</option>
                  <option value="small">Small (1-10)</option>
                  <option value="medium">Medium (11-25)</option>
                  <option value="large">Large (25+)</option>
                </select>
              </div>

              <button
                onClick={() => setFilters({ minBudget: 0, maxBudget: 10000, rating: 0, groupSize: 'any' })}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Agents List */}
          <div className="flex-1">
            <div className="space-y-6">
              {destinationAgents.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No agents found matching your filters</p>
                  <button
                    onClick={() => setFilters({ minBudget: 0, maxBudget: 10000, rating: 0, groupSize: 'any' })}
                    className="mt-4 text-green-600 hover:text-green-700"
                  >
                    Clear filters to see all agents
                  </button>
                </div>
              ) : (
                destinationAgents.map((agent) => {
                  const relevantPackages = agent.packages.filter(pkg => 
                    pkg.destination === destination && 
                    pkg.price >= filters.minBudget && 
                    pkg.price <= filters.maxBudget
                  );

                  return relevantPackages.map((pkg) => (
                    <div key={`${agent.id}-${pkg.id}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-bold text-lg">{agent.name.charAt(0)}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-gray-600 ml-1">{agent.rating}</span>
                                  </div>
                                  {agent.verified && (
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">{pkg.duration}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Users className="h-4 w-4" />
                                <span className="text-sm">{pkg.groupSize}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{pkg.destination}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Inclusions:</h5>
                              <div className="flex flex-wrap gap-2">
                                {pkg.inclusions.map((inclusion, index) => (
                                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    {inclusion}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="md:ml-6 md:text-right">
                            <div className="mb-4">
                              <div className="text-3xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</div>
                              <div className="text-sm text-gray-500">per person</div>
                            </div>

                            <div className="flex flex-col space-y-2">
                              <button
                                onClick={() => onPackageSelect(pkg.id)}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                              >
                                View Package
                              </button>
                              <div className="flex space-x-2">
                                <a
                                  href={`tel:${agent.contact.phone}`}
                                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                                >
                                  <Phone className="h-4 w-4" />
                                  <span>Call</span>
                                </a>
                                <a
                                  href={`https://wa.me/${agent.contact.whatsapp}?text=Hi, I'm interested in ${pkg.name} package`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                                >
                                  <MessageCircle className="h-4 w-4" />
                                  <span>WhatsApp</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ));
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get destination hero images
const getDestinationHeroImage = (destination: string) => {
  const heroImageMap: { [key: string]: string } = {
    'Coorg': 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Chikmagalur': 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Sakleshpur': 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Kodachadri': 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Kudremukh': 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Agumbe': 'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Mullayanagiri': 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Nandi Hills': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Skandagiri': 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    'Anthargange': 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  };
  
  return heroImageMap[destination] || 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop';
};

export default DestinationPage;