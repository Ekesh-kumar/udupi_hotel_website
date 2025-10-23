export const menuData = {
  categories: [
    { id: 'jain-north-special', name: 'Jain North Special', icon: '🥘' },
    { id: 'north-indian-gravy', name: 'North Indian Gravy', icon: '🍛' },
    { id: 'paneer-special', name: 'Paneer Special', icon: '🧀' },
    { id: 'kadai-special', name: 'Kadai Special', icon: '🍲' },
    { id: 'kofta-items', name: 'Kofta Items', icon: '🥟' },
    { id: 'north-indian-special', name: 'North Indian Special', icon: '🍽️' },
    { id: 'dal-special', name: 'Dal Special', icon: '🫕' }
  ],
  items: [
    // Jain North Special
    {
      id: 1,
      name: 'Paneer Butter Masala',
      description: 'Creamy tomato-based curry with fresh paneer',
      price: 240,
      category: 'jain-north-special',
      image: '🧀',
      popular: true
    },
    {
      id: 2,
      name: 'Veg. Butter Masala',
      description: 'Mixed vegetables in rich tomato cream sauce',
      price: 240,
      category: 'jain-north-special',
      image: '🥕',
      popular: false
    },
    {
      id: 3,
      name: 'Mix Veg. Curry',
      description: 'Assorted vegetables in aromatic curry',
      price: 220,
      category: 'jain-north-special',
      image: '🥬',
      popular: false
    },
    {
      id: 4,
      name: 'Veg. Shahi Kurma',
      description: 'Royal mixed vegetables in rich gravy',
      price: 240,
      category: 'jain-north-special',
      image: '👑',
      popular: true
    },
    {
      id: 5,
      name: 'Malai Mutter',
      description: 'Green peas in creamy white sauce',
      price: 230,
      category: 'jain-north-special',
      image: '🫒',
      popular: false
    },
    {
      id: 6,
      name: 'Shahi Paneer',
      description: 'Royal paneer in rich tomato gravy',
      price: 240,
      category: 'jain-north-special',
      image: '🧀',
      popular: true
    },
    {
      id: 7,
      name: 'Veg. Kurma',
      description: 'Mixed vegetables in coconut-based curry',
      price: 230,
      category: 'jain-north-special',
      image: '🥥',
      popular: false
    },
    {
      id: 8,
      name: 'Veg. Kheema',
      description: 'Minced vegetables in spicy curry',
      price: 220,
      category: 'jain-north-special',
      image: '🌶️',
      popular: false
    },
    {
      id: 9,
      name: 'Paneer Burji',
      description: 'Scrambled paneer with onions and spices',
      price: 230,
      category: 'jain-north-special',
      image: '🧀',
      popular: false
    },
    {
      id: 10,
      name: 'Navaratna Kurma (Sweet)',
      description: 'Nine gems in sweet coconut curry',
      price: 240,
      category: 'jain-north-special',
      image: '💎',
      popular: true
    },
    {
      id: 11,
      name: 'Kaju Mutter',
      description: 'Cashews and green peas in rich gravy',
      price: 250,
      category: 'jain-north-special',
      image: '🥜',
      popular: true
    },
    {
      id: 12,
      name: 'Paneer Mutter',
      description: 'Paneer and green peas in tomato gravy',
      price: 240,
      category: 'jain-north-special',
      image: '🧀',
      popular: false
    },
    {
      id: 13,
      name: 'Kaju Masala',
      description: 'Cashews in spicy tomato masala',
      price: 250,
      category: 'jain-north-special',
      image: '🥜',
      popular: false
    },

    // North Indian Gravy
    {
      id: 14,
      name: 'Gobi Masala',
      description: 'Cauliflower in spicy tomato gravy',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥦',
      popular: false
    },
    {
      id: 15,
      name: 'Peas Gobi Masala',
      description: 'Cauliflower and peas in rich masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥬',
      popular: false
    },
    {
      id: 16,
      name: 'Peas Palak',
      description: 'Green peas in spinach gravy',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥬',
      popular: false
    },
    {
      id: 17,
      name: 'Plain Palak',
      description: 'Fresh spinach in aromatic gravy',
      price: 170,
      category: 'north-indian-gravy',
      image: '🥬',
      popular: false
    },
    {
      id: 18,
      name: 'Alu Palak',
      description: 'Potatoes and spinach in traditional curry',
      price: 170,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 19,
      name: 'Alu Gobi Masala',
      description: 'Potatoes and cauliflower in spicy masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 20,
      name: 'Alu Gobi Dry',
      description: 'Dry spiced potatoes and cauliflower',
      price: 180,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 21,
      name: 'Alu Jeera Dry',
      description: 'Cumin-spiced dry potatoes',
      price: 180,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 22,
      name: 'Alu Mutter',
      description: 'Potatoes and green peas curry',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 23,
      name: 'Alu Palak',
      description: 'Potatoes in spinach gravy',
      price: 180,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 24,
      name: 'Capsicum Masala',
      description: 'Bell peppers in spicy tomato masala',
      price: 200,
      category: 'north-indian-gravy',
      image: '🫑',
      popular: false
    },
    {
      id: 25,
      name: 'Alu Channa',
      description: 'Potatoes and chickpeas curry',
      price: 170,
      category: 'north-indian-gravy',
      image: '🥔',
      popular: false
    },
    {
      id: 26,
      name: 'Malai Mutter',
      description: 'Green peas in creamy white sauce',
      price: 190,
      category: 'north-indian-gravy',
      image: '🫒',
      popular: false
    },
    {
      id: 27,
      name: 'Malai Methi Mutter',
      description: 'Fenugreek leaves with peas in cream sauce',
      price: 190,
      category: 'north-indian-gravy',
      image: '🌿',
      popular: false
    },
    {
      id: 28,
      name: 'Mutter Masala',
      description: 'Green peas in spicy tomato masala',
      price: 180,
      category: 'north-indian-gravy',
      image: '🫒',
      popular: false
    },
    {
      id: 29,
      name: 'Palak Gobi',
      description: 'Cauliflower in spinach gravy',
      price: 180,
      category: 'north-indian-gravy',
      image: '🥬',
      popular: false
    },
    {
      id: 30,
      name: 'Channa Masala',
      description: 'Chickpeas in spicy tomato curry',
      price: 180,
      category: 'north-indian-gravy',
      image: '🫘',
      popular: false
    },
    {
      id: 31,
      name: 'Mushroom Masala',
      description: 'Mushrooms in spicy tomato masala',
      price: 240,
      category: 'north-indian-gravy',
      image: '🍄',
      popular: true
    },
    {
      id: 32,
      name: 'Mushroom Butter Masala',
      description: 'Mushrooms in creamy tomato butter sauce',
      price: 240,
      category: 'north-indian-gravy',
      image: '🍄',
      popular: true
    },
    {
      id: 33,
      name: 'Mushroom Mutter',
      description: 'Mushrooms and green peas curry',
      price: 240,
      category: 'north-indian-gravy',
      image: '🍄',
      popular: false
    },
    {
      id: 34,
      name: 'Babycorn Masala',
      description: 'Baby corn in spicy tomato masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🌽',
      popular: false
    },
    {
      id: 35,
      name: 'Babycorn Green Masala',
      description: 'Baby corn in green masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🌽',
      popular: false
    },
    {
      id: 36,
      name: 'Babycorn Mushroom Masala',
      description: 'Baby corn and mushrooms in masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🌽',
      popular: false
    },
    {
      id: 37,
      name: 'Kaju Mutter',
      description: 'Cashews and green peas in rich gravy',
      price: 280,
      category: 'north-indian-gravy',
      image: '🥜',
      popular: true
    },
    {
      id: 38,
      name: 'Kaju Masala',
      description: 'Cashews in spicy tomato masala',
      price: 280,
      category: 'north-indian-gravy',
      image: '🥜',
      popular: true
    },
    {
      id: 39,
      name: 'Veg Do Plaza',
      description: 'Mixed vegetables in onion-based curry',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥕',
      popular: false
    },
    {
      id: 40,
      name: 'Veg Butter Masala',
      description: 'Mixed vegetables in creamy tomato sauce',
      price: 190,
      category: 'north-indian-gravy',
      image: '🥕',
      popular: false
    },
    {
      id: 41,
      name: 'Channa Masala',
      description: 'Chickpeas in spicy tomato curry',
      price: 200,
      category: 'north-indian-gravy',
      image: '🫘',
      popular: false
    },
    {
      id: 42,
      name: 'Gobi Mutter',
      description: 'Cauliflower and green peas curry',
      price: 200,
      category: 'north-indian-gravy',
      image: '🥦',
      popular: false
    },
    {
      id: 43,
      name: 'Green Peas Masala',
      description: 'Green peas in spicy tomato masala',
      price: 190,
      category: 'north-indian-gravy',
      image: '🫒',
      popular: false
    },
    {
      id: 44,
      name: 'Mix Veg Curry',
      description: 'Mixed vegetables in traditional curry',
      price: 210,
      category: 'north-indian-gravy',
      image: '🥕',
      popular: false
    },
    {
      id: 45,
      name: 'Mushroom Masala',
      description: 'Mushrooms in spicy tomato masala',
      price: 225,
      category: 'north-indian-gravy',
      image: '🍄',
      popular: false
    },
    {
      id: 46,
      name: 'Navarathna Kurma (Sweetish)',
      description: 'Nine gems in sweet coconut curry',
      price: 255,
      category: 'north-indian-gravy',
      image: '💎',
      popular: true
    },
    {
      id: 47,
      name: 'Stuffed Capsicum',
      description: 'Bell peppers stuffed with spiced mixture',
      price: 205,
      category: 'north-indian-gravy',
      image: '🫑',
      popular: false
    },
    {
      id: 48,
      name: 'Stuffed Tomato',
      description: 'Tomatoes stuffed with spiced mixture',
      price: 205,
      category: 'north-indian-gravy',
      image: '🍅',
      popular: false
    },
    {
      id: 49,
      name: 'Kashmiri Gobi',
      description: 'Cauliflower in Kashmiri style curry',
      price: 210,
      category: 'north-indian-gravy',
      image: '🥦',
      popular: false
    },
    {
      id: 50,
      name: 'Udupi Gokula Special Gravy',
      description: 'House special mixed vegetable curry',
      price: 230,
      category: 'north-indian-gravy',
      image: '⭐',
      popular: true
    }
  ]
};
