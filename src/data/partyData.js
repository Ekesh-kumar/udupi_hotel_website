export const partyData = {
  categories: [
    { id: 'wedding', name: 'Wedding Packages', icon: '💒' },
    { id: 'birthday', name: 'Birthday Parties', icon: '🎂' },
    { id: 'corporate', name: 'Corporate Events', icon: '🏢' },
    { id: 'celebration', name: 'Celebrations', icon: '🎉' }
  ],
  packages: [
    // Wedding Packages
    {
      id: 1,
      name: 'Royal Wedding Package',
      description: 'Complete wedding celebration with premium decorations, catering, and photography',
      price: 2999,
      category: 'wedding',
      image: '💒',
      capacity: '100-150 Guests',
      duration: '6 Hours',
      includes: ['Premium Decoration', 'Catering for 150', 'Photography', 'Music System', 'Bridal Suite'],
      popular: true
    },
    {
      id: 2,
      name: 'Elegant Wedding Package',
      description: 'Beautiful wedding celebration with elegant decorations and full service',
      price: 1999,
      category: 'wedding',
      image: '💒',
      capacity: '50-100 Guests',
      duration: '5 Hours',
      includes: ['Elegant Decoration', 'Catering for 100', 'Basic Photography', 'Music System'],
      popular: false
    },
    
    // Birthday Parties
    {
      id: 3,
      name: 'Kids Birthday Party',
      description: 'Fun-filled birthday celebration with games, entertainment, and party favors',
      price: 299,
      category: 'birthday',
      image: '🎂',
      capacity: '20-30 Kids',
      duration: '3 Hours',
      includes: ['Party Games', 'Entertainment', 'Birthday Cake', 'Party Favors', 'Decorations'],
      popular: true
    },
    {
      id: 4,
      name: 'Adult Birthday Party',
      description: 'Sophisticated birthday celebration with premium catering and entertainment',
      price: 599,
      category: 'birthday',
      image: '🎂',
      capacity: '30-50 Guests',
      duration: '4 Hours',
      includes: ['Premium Catering', 'Entertainment', 'Birthday Cake', 'Decorations', 'Bar Service'],
      popular: true
    },
    
    // Corporate Events
    {
      id: 5,
      name: 'Corporate Conference',
      description: 'Professional conference setup with AV equipment and catering services',
      price: 899,
      category: 'corporate',
      image: '🏢',
      capacity: '50-100 Attendees',
      duration: '8 Hours',
      includes: ['AV Equipment', 'Professional Setup', 'Catering', 'WiFi', 'Parking'],
      popular: false
    },
    {
      id: 6,
      name: 'Annual Meeting',
      description: 'Executive meeting with premium amenities and full service support',
      price: 1299,
      category: 'corporate',
      image: '🏢',
      capacity: '20-50 Executives',
      duration: '6 Hours',
      includes: ['Executive Setup', 'Premium Catering', 'AV Equipment', 'Secretarial Support', 'Parking'],
      popular: true
    },
    
    // Celebrations
    {
      id: 7,
      name: 'Anniversary Celebration',
      description: 'Romantic anniversary celebration with elegant decorations and fine dining',
      price: 799,
      category: 'celebration',
      image: '🎉',
      capacity: '20-40 Guests',
      duration: '4 Hours',
      includes: ['Romantic Decoration', 'Fine Dining', 'Music', 'Photography', 'Special Cake'],
      popular: true
    },
    {
      id: 8,
      name: 'Graduation Party',
      description: 'Celebrate academic achievements with friends and family',
      price: 499,
      category: 'celebration',
      image: '🎉',
      capacity: '30-60 Guests',
      duration: '4 Hours',
      includes: ['Graduation Theme', 'Catering', 'Music', 'Photography', 'Graduation Cake'],
      popular: false
    }
  ]
};
