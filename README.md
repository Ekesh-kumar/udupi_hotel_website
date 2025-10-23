# Premium Services App 🏨

A modern React application for a multi-service establishment offering AC Service Hall, Rooms Stay Service, and Party Hall Service. Features a beautiful, responsive UI with separate pages for each service.

## Services

### 🍽️ AC Service Hall
- **Fine Dining Experience** - Air-conditioned service hall with comprehensive food menu
- **Food Categories** - Appetizers, Main Course, Desserts, Fresh Juices, Beverages
- **Search & Filter** - Find your favorite dishes quickly
- **Popular Items** - Highlighted bestsellers

### 🛏️ Rooms Stay Service
- **Comfortable Accommodation** - Various room types from standard to suites
- **Room Categories** - Standard, Deluxe, Suites, Family rooms
- **Modern Amenities** - WiFi, AC, Smart TV, Mini Bar, and more
- **Flexible Occupancy** - Rooms for 1-6 guests

### 🎉 Party Hall Service
- **Event Packages** - Weddings, birthdays, corporate events, celebrations
- **Package Categories** - Wedding, Birthday, Corporate, Celebration packages
- **Complete Services** - Decoration, catering, entertainment, photography
- **Customizable Options** - Tailored packages for your needs

## Features

- 🎨 **Modern UI Design** - Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Search Functionality** - Search through all services and items
- 🏷️ **Category Filtering** - Filter by service categories
- ⭐ **Popular Items** - Highlighted popular services and items
- 🚀 **Multi-Service Platform** - Three distinct services in one application

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Header with navigation and search
│   ├── CategoryFilter.js  # Category filtering buttons
│   ├── MenuGrid.js        # Grid layout for menu items
│   ├── MenuItem.js        # Individual menu item component
│   ├── RoomsGrid.js       # Grid layout for rooms
│   ├── RoomItem.js        # Individual room component
│   ├── PartyGrid.js       # Grid layout for party packages
│   └── PartyItem.js       # Individual party package component
├── pages/
│   ├── HomePage.js        # Home page with hero and services
│   ├── ACServicePage.js   # AC Service Hall page
│   ├── RoomsPage.js       # Rooms Stay Service page
│   └── PartyHallPage.js   # Party Hall Service page
├── data/
│   ├── menuData.js        # Food menu data
│   ├── roomsData.js       # Room accommodation data
│   └── partyData.js       # Party packages data
├── App.js                 # Main application with routing
├── App.css                # Main application styles
├── index.js               # Application entry point
└── index.css              # Global styles
```

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing between pages
- **CSS3** - Advanced styling with gradients and animations
- **Responsive Design** - Mobile-first approach
- **Modern JavaScript** - ES6+ features

## Features in Detail

### Multi-Service Navigation
- Home page with hero section and service overview
- Separate pages for each service (AC Hall, Rooms, Party Hall)
- Back navigation between pages
- Service-specific search and filtering

### Search Functionality
- Real-time search through all services
- Searches item names and descriptions
- Case-insensitive search across all pages

### Category Filtering
- Service-specific category filtering
- Visual category buttons with icons
- Smooth transitions and hover effects

### Responsive Design
- Mobile-first responsive design
- Optimized for all screen sizes
- Touch-friendly interface

### Modern UI Elements
- Glassmorphism design with backdrop blur
- Gradient backgrounds
- Smooth animations and transitions
- Popular item badges
- Interactive hover effects

## Customization

You can easily customize the services by editing the data files:

- **Food Menu**: `src/data/menuData.js` - Add categories, items, prices
- **Rooms**: `src/data/roomsData.js` - Add room types, amenities, pricing
- **Party Packages**: `src/data/partyData.js` - Add event packages, services

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## License

This project is open source and available under the [MIT License](LICENSE).
