# Frondend Capstone

A modern, full-featured blogging platform built with React and Appwrite. This project showcases best practices in modern web development with seamless backend integration.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with Vite for fast development & builds
- **Backend-as-a-Service**: Appwrite for authentication, data management, and file storage
- **State Management**: Redux Toolkit with React Redux
- **Styling**: Tailwind CSS v4 with responsive design utilities
- **Forms**: React Hook Form for efficient form handling
- **Rich Text Editor**: TinyMCE for formatted blog post creation
- **Routing**: React Router v7 for seamless navigation

##  Key Features

-  **Authentication** - Secure user login and sign-up with session management
-  **Post Management** - Create, read, update, and delete blog posts
-  **Rich Content Editor** - TinyMCE integration for formatted content creation
-  **File Management** - Image and media uploads via Appwrite storage
-  **Responsive Design** - Tailwind CSS-based fully responsive UI
-  **State Management** - Redux store for persistent auth and post data
-  **Fast Performance** - Vite-powered development and production builds

##  Project Structure

```
src/
├── pages/              # Page components (Landing, Login, SignUp, etc.)
├── components/         # Reusable UI components
│   ├── auth/          # Authentication components
│   ├── buttons/       # Button components
│   ├── container/     # Layout containers
│   ├── header/        # Navigation header
│   ├── footer/        # Footer component
│   └── post-form/     # Post creation/edit form
├── services/          # Appwrite API integration
│   ├── auth.js        # Authentication services
│   ├── config.js      # Configuration Post
│   └── file.js        # File upload services
├── store/             # Redux store configuration
│   └── features/      # Redux slices (auth, posts)
└── assets/            # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Muhammad-Zain-Ikram/Frondend-Capstone-Blog-app-with-Appwrite.git
   cd Frondend-Capstone-Blog-app-with-Appwrite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Appwrite credentials:
   ```
   VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_API_KEY=your_api_key
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_USERS_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_POSTS_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎯 Core Features Explained

### Authentication
- User registration and login powered by Appwrite Auth
- Secure session management with Redux state persistence
- Protected routes for authenticated users only

### Blog Management
- Full CRUD operations for blog posts
- Rich text editing with TinyMCE
- Image upload capability for post thumbnails and content
- Post preview and editing functionality

### Responsive UI
- Mobile-first design approach
- Tailwind CSS for consistent styling
- Custom components for reusability
- Clean and intuitive user interface

## 🔌 Appwrite Integration

The app leverages Appwrite as the backend service:
- **Authentication** - User account management
- **Database** - Document storage for posts and user data
- **Storage** - File hosting for uploaded images and media

## 👤 Author

[Muhammad Zain Ikram](https://github.com/Muhammad-Zain-Ikram)

---

**Status**: Production-ready blog application showcasing modern React development practices with comprehensive backend integration.