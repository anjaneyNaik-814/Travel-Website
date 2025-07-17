export interface Destination {
  id: string;
  name: string;
  description: string;
  gradient: string;
  startingPrice: number;
  agentCount: number;
}

export interface TrekType {
  id: string;
  name: string;
  location: string;
  category: 'sunrise' | '2-day' | 'forest' | 'beach';
  rating: number;
  startingPrice: number;
  duration: string;
  groupSize: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  groupSize: string;
  inclusions: string[];
}

export interface Agent {
  id: string;
  name: string;
  rating: number;
  verified: boolean;
  experience: number;
  locations: string[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  packages: Package[];
}

export const destinations: Destination[] = [
  {
    id: 'coorg',
    name: 'Coorg',
    description: 'Coffee plantations and misty hills',
    gradient: 'from-green-400 to-blue-500',
    startingPrice: 1500,
    agentCount: 8,
  },
  {
    id: 'chikmagalur',
    name: 'Chikmagalur',
    description: 'Land of coffee and scenic treks',
    gradient: 'from-orange-400 to-red-500',
    startingPrice: 1200,
    agentCount: 12,
  },
  {
    id: 'sakleshpur',
    name: 'Sakleshpur',
    description: 'Western Ghats adventure',
    gradient: 'from-purple-400 to-pink-500',
    startingPrice: 1000,
    agentCount: 6,
  },
  {
    id: 'kodachadri',
    name: 'Kodachadri',
    description: 'Sunset point and ancient temples',
    gradient: 'from-yellow-400 to-orange-500',
    startingPrice: 1800,
    agentCount: 4,
  },
  {
    id: 'kudremukh',
    name: 'Kudremukh',
    description: 'Horse face mountain trek',
    gradient: 'from-indigo-400 to-purple-500',
    startingPrice: 2000,
    agentCount: 7,
  },
  {
    id: 'agumbe',
    name: 'Agumbe',
    description: 'Sunset point of South India',
    gradient: 'from-pink-400 to-red-500',
    startingPrice: 1300,
    agentCount: 5,
  },
  {
    id: 'mullayanagiri',
    name: 'Mullayanagiri',
    description: 'Highest peak in Karnataka',
    gradient: 'from-blue-400 to-indigo-500',
    startingPrice: 1600,
    agentCount: 9,
  },
  {
    id: 'nandi-hills',
    name: 'Nandi Hills',
    description: 'Sunrise point near Bangalore',
    gradient: 'from-teal-400 to-blue-500',
    startingPrice: 800,
    agentCount: 15,
  },
  {
    id: 'skandagiri',
    name: 'Skandagiri',
    description: 'Night trek to ruined fortress',
    gradient: 'from-gray-400 to-blue-500',
    startingPrice: 900,
    agentCount: 10,
  },
  {
    id: 'anthargange',
    name: 'Anthargange',
    description: 'Cave exploration and night trek',
    gradient: 'from-amber-400 to-orange-500',
    startingPrice: 700,
    agentCount: 11,
  },
];

export const trekTypes: TrekType[] = [
  {
    id: 'nandi-sunrise',
    name: 'Nandi Hills Sunrise',
    location: 'Nandi Hills',
    category: 'sunrise',
    rating: 4.5,
    startingPrice: 800,
    duration: '1 Day',
    groupSize: '15-20 people',
    description: 'Early morning trek to catch the spectacular sunrise',
  },
  {
    id: 'skandagiri-sunrise',
    name: 'Skandagiri Sunrise',
    location: 'Skandagiri',
    category: 'sunrise',
    rating: 4.3,
    startingPrice: 900,
    duration: '1 Day',
    groupSize: '10-15 people',
    description: 'Night trek through ruins to witness magical sunrise',
  },
  {
    id: 'chikmagalur-sunrise',
    name: 'Mullayanagiri Sunrise',
    location: 'Chikmagalur',
    category: 'sunrise',
    rating: 4.7,
    startingPrice: 1600,
    duration: '1 Day',
    groupSize: '12-18 people',
    description: 'Trek to Karnataka\'s highest peak for sunrise views',
  },
  {
    id: 'kodachadri-sunrise',
    name: 'Kodachadri Sunrise',
    location: 'Kodachadri',
    category: 'sunrise',
    rating: 4.6,
    startingPrice: 1800,
    duration: '1 Day',
    groupSize: '10-15 people',
    description: 'Temple trek with breathtaking sunrise panorama',
  },
  {
    id: 'coorg-2day',
    name: 'Coorg Coffee Trail',
    location: 'Coorg',
    category: '2-day',
    rating: 4.4,
    startingPrice: 2800,
    duration: '2 Days',
    groupSize: '8-12 people',
    description: 'Explore coffee plantations with overnight camping',
  },
  {
    id: 'sakleshpur-2day',
    name: 'Sakleshpur Railway Trek',
    location: 'Sakleshpur',
    category: '2-day',
    rating: 4.2,
    startingPrice: 2200,
    duration: '2 Days',
    groupSize: '10-16 people',
    description: 'Trek through abandoned railway tunnels and bridges',
  },
  {
    id: 'kudremukh-2day',
    name: 'Kudremukh Wilderness',
    location: 'Kudremukh',
    category: '2-day',
    rating: 4.8,
    startingPrice: 3200,
    duration: '2 Days',
    groupSize: '6-10 people',
    description: 'Challenging trek through pristine national park',
  },
  {
    id: 'agumbe-2day',
    name: 'Agumbe Rainforest',
    location: 'Agumbe',
    category: '2-day',
    rating: 4.3,
    startingPrice: 2600,
    duration: '2 Days',
    groupSize: '8-14 people',
    description: 'Rainforest trek with sunset point and waterfalls',
  },
];

export const agents: Agent[] = [
  {
    id: 'mountain-explorers',
    name: 'Mountain Explorers',
    rating: 4.6,
    verified: true,
    experience: 5,
    locations: ['Chikmagalur', 'Coorg', 'Kudremukh'],
    contact: {
      phone: '+919876543210',
      whatsapp: '919876543210',
      email: 'info@mountainexplorers.com',
    },
    packages: [
      {
        id: 'me-chik-sunrise',
        name: 'Mullayanagiri Sunrise Trek',
        destination: 'Chikmagalur',
        duration: '1 Day',
        price: 1600,
        groupSize: '12-18 people',
        inclusions: ['Transportation', 'Breakfast', 'Guide', 'First Aid'],
      },
      {
        id: 'me-coorg-coffee',
        name: 'Coorg Coffee Estate Trek',
        destination: 'Coorg',
        duration: '2 Days',
        price: 2800,
        groupSize: '8-12 people',
        inclusions: ['Transportation', 'Accommodation', 'All Meals', 'Guide', 'Entry Fees'],
      },
      {
        id: 'me-kudremukh-wild',
        name: 'Kudremukh Wildlife Trek',
        destination: 'Kudremukh',
        duration: '2 Days',
        price: 3200,
        groupSize: '6-10 people',
        inclusions: ['Transportation', 'Camping', 'All Meals', 'Guide', 'Permits'],
      },
    ],
  },
  {
    id: 'adventure-seekers',
    name: 'Adventure Seekers',
    rating: 4.3,
    verified: true,
    experience: 3,
    locations: ['Nandi Hills', 'Skandagiri', 'Anthargange'],
    contact: {
      phone: '+919876543211',
      whatsapp: '919876543211',
      email: 'hello@adventureseekers.com',
    },
    packages: [
      {
        id: 'as-nandi-sunrise',
        name: 'Nandi Hills Sunrise Special',
        destination: 'Nandi Hills',
        duration: '1 Day',
        price: 800,
        groupSize: '15-20 people',
        inclusions: ['Transportation', 'Breakfast', 'Guide'],
      },
      {
        id: 'as-skandagiri-night',
        name: 'Skandagiri Night Trek',
        destination: 'Skandagiri',
        duration: '1 Day',
        price: 900,
        groupSize: '10-15 people',
        inclusions: ['Transportation', 'Headlamps', 'Guide', 'Snacks'],
      },
      {
        id: 'as-anthargange-cave',
        name: 'Anthargange Cave Exploration',
        destination: 'Anthargange',
        duration: '1 Day',
        price: 700,
        groupSize: '12-18 people',
        inclusions: ['Transportation', 'Cave Equipment', 'Guide', 'Lunch'],
      },
    ],
  },
  {
    id: 'trek-masters',
    name: 'Trek Masters',
    rating: 4.7,
    verified: true,
    experience: 7,
    locations: ['Kodachadri', 'Agumbe', 'Sakleshpur'],
    contact: {
      phone: '+919876543212',
      whatsapp: '919876543212',
      email: 'contact@trekmasters.com',
    },
    packages: [
      {
        id: 'tm-kodachadri-sunrise',
        name: 'Kodachadri Temple Trek',
        destination: 'Kodachadri',
        duration: '1 Day',
        price: 1800,
        groupSize: '10-15 people',
        inclusions: ['Transportation', 'Temple Visit', 'Guide', 'Breakfast'],
      },
      {
        id: 'tm-agumbe-rainforest',
        name: 'Agumbe Rainforest Adventure',
        destination: 'Agumbe',
        duration: '2 Days',
        price: 2600,
        groupSize: '8-14 people',
        inclusions: ['Transportation', 'Accommodation', 'All Meals', 'Guide', 'Waterfall Visit'],
      },
      {
        id: 'tm-sakleshpur-railway',
        name: 'Sakleshpur Railway Trek',
        destination: 'Sakleshpur',
        duration: '2 Days',
        price: 2200,
        groupSize: '10-16 people',
        inclusions: ['Transportation', 'Camping', 'All Meals', 'Guide', 'Railway Permits'],
      },
    ],
  },
  {
    id: 'nature-trails',
    name: 'Nature Trails',
    rating: 4.4,
    verified: true,
    experience: 4,
    locations: ['Chikmagalur', 'Nandi Hills', 'Coorg'],
    contact: {
      phone: '+919876543213',
      whatsapp: '919876543213',
      email: 'info@naturetrails.com',
    },
    packages: [
      {
        id: 'nt-chik-coffee',
        name: 'Chikmagalur Coffee Trek',
        destination: 'Chikmagalur',
        duration: '2 Days',
        price: 2400,
        groupSize: '10-15 people',
        inclusions: ['Transportation', 'Homestay', 'All Meals', 'Guide', 'Coffee Tasting'],
      },
      {
        id: 'nt-nandi-cycling',
        name: 'Nandi Hills Cycling Trek',
        destination: 'Nandi Hills',
        duration: '1 Day',
        price: 1200,
        groupSize: '8-12 people',
        inclusions: ['Bicycle Rental', 'Helmet', 'Guide', 'Breakfast', 'Support Vehicle'],
      },
      {
        id: 'nt-coorg-nature',
        name: 'Coorg Nature Walk',
        destination: 'Coorg',
        duration: '1 Day',
        price: 1500,
        groupSize: '12-20 people',
        inclusions: ['Transportation', 'Nature Guide', 'Lunch', 'Plantation Visit'],
      },
    ],
  },
  {
    id: 'peak-adventures',
    name: 'Peak Adventures',
    rating: 4.5,
    verified: true,
    experience: 6,
    locations: ['Kudremukh', 'Kodachadri', 'Mullayanagiri'],
    contact: {
      phone: '+919876543214',
      whatsapp: '919876543214',
      email: 'hello@peakadventures.com',
    },
    packages: [
      {
        id: 'pa-kudremukh-challenge',
        name: 'Kudremukh Challenge Trek',
        destination: 'Kudremukh',
        duration: '2 Days',
        price: 3500,
        groupSize: '6-8 people',
        inclusions: ['Transportation', 'Camping', 'All Meals', 'Expert Guide', 'Permits', 'Insurance'],
      },
      {
        id: 'pa-kodachadri-spiritual',
        name: 'Kodachadri Spiritual Trek',
        destination: 'Kodachadri',
        duration: '2 Days',
        price: 2800,
        groupSize: '8-12 people',
        inclusions: ['Transportation', 'Accommodation', 'All Meals', 'Guide', 'Temple Visit', 'Meditation Session'],
      },
      {
        id: 'pa-mullayanagiri-peak',
        name: 'Mullayanagiri Peak Conquest',
        destination: 'Chikmagalur',
        duration: '1 Day',
        price: 1800,
        groupSize: '10-15 people',
        inclusions: ['Transportation', 'Guide', 'Breakfast', 'Peak Certificate', 'Photography'],
      },
    ],
  },
  {
    id: 'wilderness-walkers',
    name: 'Wilderness Walkers',
    rating: 4.2,
    verified: true,
    experience: 3,
    locations: ['Sakleshpur', 'Agumbe', 'Anthargange'],
    contact: {
      phone: '+919876543215',
      whatsapp: '919876543215',
      email: 'info@wildernesswalkers.com',
    },
    packages: [
      {
        id: 'ww-sakleshpur-heritage',
        name: 'Sakleshpur Heritage Trek',
        destination: 'Sakleshpur',
        duration: '2 Days',
        price: 2000,
        groupSize: '12-18 people',
        inclusions: ['Transportation', 'Camping', 'All Meals', 'Guide', 'Historical Sites'],
      },
      {
        id: 'ww-agumbe-sunset',
        name: 'Agumbe Sunset Trek',
        destination: 'Agumbe',
        duration: '1 Day',
        price: 1300,
        groupSize: '10-16 people',
        inclusions: ['Transportation', 'Guide', 'Snacks', 'Sunset Point Access'],
      },
      {
        id: 'ww-anthargange-adventure',
        name: 'Anthargange Adventure Trek',
        destination: 'Anthargange',
        duration: '1 Day',
        price: 750,
        groupSize: '15-20 people',
        inclusions: ['Transportation', 'Cave Equipment', 'Guide', 'Lunch', 'First Aid'],
      },
    ],
  },
];