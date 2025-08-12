# GameHub 🎮

GameHub is a modern, responsive video game discovery web application built with React and TypeScript. It helps users explore and discover new games by providing comprehensive filtering, searching, and browsing capabilities powered by the RAWG Video Games Database API.

## ✨ Features

### 🔍 Game Discovery

- **Search Functionality**: Search for games by title with real-time results
- **Platform Filtering**: Filter games by gaming platforms (PC, PlayStation, Xbox, Nintendo, etc.)
- **Genre Filtering**: Browse games by genre categories
- **Sorting Options**: Sort games by relevance, release date, rating, and more

### 🎨 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Game Cards**: Rich game cards displaying:
  - High-quality game artwork
  - Platform availability icons
  - Metacritic critic scores with color-coded badges
  - Game ratings with emoji indicators
- **Loading States**: Skeleton loading animations for better user experience
- **Dynamic Headings**: Context-aware page headings based on selected filters

### 🎯 Game Information

- **Critic Scores**: Metacritic scores with color-coded badges (green: 75+, yellow: 60-74)
- **Rating System**: Visual emoji ratings (⭐ Exceptional, 👍 Recommended, 😐 Meh)
- **Platform Icons**: Visual indicators for supported gaming platforms
- **High-Quality Images**: Optimized game artwork and screenshots

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Chakra UI** - Modern, modular, and accessible component library
- **Framer Motion** - Smooth animations and transitions

### HTTP & API

- **Axios** - HTTP client for API requests
- **RAWG API** - Comprehensive video game database

### Development

- **ESLint** - Code linting and formatting
- **TypeScript Compiler** - Type checking and compilation

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- RAWG API key (free registration required)

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd game-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get RAWG API Key**

   - Visit [RAWG API Documentation](https://rawg.io/apidocs)
   - Create a free account
   - Generate your API key

4. **Configure API Key**

   - Open `src/services/api-client.ts`
   - Replace the placeholder API key with your actual key:

   ```typescript
   params: {
     key: "YOUR_API_KEY_HERE";
   }
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start exploring games! 🎮

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── GameGrid.tsx    # Main game display grid
│   ├── GameCard.tsx    # Individual game card
│   ├── SearchInput.tsx # Search functionality
│   ├── GenreList.tsx   # Genre filtering sidebar
│   ├── PlatformSelector.tsx # Platform dropdown
│   ├── SortSelector.tsx # Sorting options
│   ├── ColorModeSwitch.tsx # Theme toggle
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useGames.ts     # Game data fetching
│   ├── useGenres.ts    # Genre data management
│   └── usePlatforms.ts # Platform data management
├── services/           # API and external services
│   ├── api-client.ts   # Axios configuration
│   └── image-url.ts    # Image optimization utilities
├── data/               # Static data and constants
├── assets/             # Images and static assets
└── theme.ts            # Chakra UI theme configuration
```

## 🎨 Design Features

- **Responsive Grid Layout**: Adapts from 1 column (mobile) to 4 columns (desktop)
- **Smooth Animations**: Loading states and hover effects
- **Accessible Design**: Keyboard navigation and screen reader support
- **Modern UI**: Clean, minimalist design with excellent typography
- **Color-Coded Elements**: Intuitive visual feedback for scores and ratings

## 🔧 Customization

The application uses Chakra UI's theming system, making it easy to customize:

- **Colors**: Modify theme colors in `src/theme.ts`
- **Components**: Extend or override component styles
- **Responsive Breakpoints**: Adjust layout breakpoints as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [RAWG](https://rawg.io/) for providing the comprehensive games database API
- [Chakra UI](https://chakra-ui.com/) for the excellent component library
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icon set

---

**Happy Gaming! 🎮✨**
