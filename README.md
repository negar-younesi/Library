# 📚 Book Library App

A modern, responsive book library application built with React and Vite. Browse, search, and manage your favorite books with an intuitive interface.

## ✨ Features

- 📖 **Browse Books**: View a collection of classic books with detailed information
- 🔍 **Real-time Search**: Search books by title with instant results
- ❤️ **Favorites System**: Like and save your favorite books
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ♿ **Accessible**: Built with semantic HTML and ARIA labels
- 🎨 **Modern UI**: Clean, dark-themed interface with smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Type Checking**: PropTypes
- **Code Quality**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/negar-younesi/Library.git
cd Library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 🖥️ **Desktop** (1200px+): Full-featured layout with sidebar
- 📱 **Tablet** (768px-1199px): Vertical layout with optimized spacing
- 📱 **Mobile** (≤767px): Compact layout with touch-friendly controls

## 🎯 Key Features

### Search Functionality
- Real-time search as you type
- Case-insensitive title search
- Clear search button for quick reset
- Enter key support

### Book Management
- View book details (title, author, language, pages, year)
- Like/unlike books with heart icon
- Favorites section showing liked books
- Smooth animations and transitions



## 📁 Project Structure

```
src/
├── components/
│   ├── BookCard.jsx          # Individual book card component
│   ├── BookLiked.jsx         # Favorite book item
│   ├── Books.jsx             # Main books container
│   └── Search/
│       └── Search.jsx        # Search functionality
├── layouts/
│   └── Layout.jsx            # Main layout wrapper
├── constants/
│   └── mockData.js           # Sample book data
└── styles/
    ├── *.module.css          # Component-specific styles
    └── index.css            # Global styles
```

## 🎨 Design System

- **Color Scheme**: Dark theme with purple accents
- **Typography**: System fonts for optimal readability
- **Spacing**: Consistent 8px grid system
- **Animations**: Subtle transitions and hover effects

## 🔧 Development

### Code Quality
- ESLint configuration for consistent code style
- PropTypes for runtime type checking
- Component-based architecture
- CSS Modules for scoped styling

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)



## 🙏 Acknowledgments

- Book data sourced from public domain classics
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Contact

Developed by Negar Younesi with ❤️

- GitHub: [@negar-younesi](https://github.com/negar-younesi)


⭐ If you like this project, please give it a star!
