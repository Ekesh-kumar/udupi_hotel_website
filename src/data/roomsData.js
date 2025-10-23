export const roomsData = {
  categories: [
    { id: 'standard', name: 'Standard Rooms', icon: '🛏️' },
    { id: 'deluxe', name: 'Deluxe Rooms', icon: '🏨' },
    { id: 'suite', name: 'Suites', icon: '🏰' },
    { id: 'family', name: 'Family Rooms', icon: '👨‍👩‍👧‍👦' }
  ],
  rooms: [
    // Standard Rooms
    {
      id: 1,
      name: 'Standard Single Room',
      description: 'Comfortable single room with essential amenities, perfect for solo travelers',
      price: 89,
      category: 'standard',
      image: '🛏️',
      amenities: ['WiFi', 'AC', 'TV', 'Private Bathroom'],
      size: '20 sq m',
      occupancy: '1 Guest',
      popular: true
    },
    {
      id: 2,
      name: 'Standard Double Room',
      description: 'Spacious double room with twin beds, ideal for business travelers',
      price: 129,
      category: 'standard',
      image: '🛏️',
      amenities: ['WiFi', 'AC', 'TV', 'Private Bathroom', 'Work Desk'],
      size: '25 sq m',
      occupancy: '2 Guests',
      popular: false
    },
    
    // Deluxe Rooms
    {
      id: 3,
      name: 'Deluxe King Room',
      description: 'Elegant room with king-size bed and premium amenities',
      price: 189,
      category: 'deluxe',
      image: '🏨',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'Room Service'],
      size: '35 sq m',
      occupancy: '2 Guests',
      popular: true
    },
    {
      id: 4,
      name: 'Deluxe Twin Room',
      description: 'Luxurious twin room with city view and modern facilities',
      price: 199,
      category: 'deluxe',
      image: '🏨',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'City View'],
      size: '32 sq m',
      occupancy: '2 Guests',
      popular: true
    },
    
    // Suites
    {
      id: 5,
      name: 'Executive Suite',
      description: 'Spacious suite with separate living area and premium services',
      price: 349,
      category: 'suite',
      image: '🏰',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'Living Area', 'Butler Service'],
      size: '55 sq m',
      occupancy: '2-3 Guests',
      popular: false
    },
    {
      id: 6,
      name: 'Presidential Suite',
      description: 'Luxury suite with panoramic views and exclusive amenities',
      price: 599,
      category: 'suite',
      image: '🏰',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'Living Area', 'Kitchenette', 'Butler Service', 'Panoramic View'],
      size: '80 sq m',
      occupancy: '2-4 Guests',
      popular: true
    },
    
    // Family Rooms
    {
      id: 7,
      name: 'Family Deluxe Room',
      description: 'Spacious family room with connecting beds and child-friendly amenities',
      price: 249,
      category: 'family',
      image: '👨‍👩‍👧‍👦',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'Extra Beds', 'Child Safety'],
      size: '45 sq m',
      occupancy: '4 Guests',
      popular: true
    },
    {
      id: 8,
      name: 'Family Suite',
      description: 'Two-bedroom suite perfect for families with children',
      price: 399,
      category: 'family',
      image: '👨‍👩‍👧‍👦',
      amenities: ['WiFi', 'AC', 'Smart TV', 'Private Bathroom', 'Mini Bar', 'Kitchenette', 'Play Area', 'Child Safety'],
      size: '65 sq m',
      occupancy: '6 Guests',
      popular: false
    }
  ]
};
