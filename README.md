🛍️ React Mini E-commerce App
A modern React + TypeScript e-commerce project that demonstrates essential React concepts with a clean and responsive UI. This app showcases state management using both Context API and Redux Toolkit, allowing you to compare their real-world usage side-by-side.

🚀 Features
🧩 Reusable Product Cards

🔍 Live Search Filtering using useMemo

🛒 Add to Cart (via Context API + Redux Toolkit)

🧠 React Hooks: useCallback, useRef, useMemo, useReducer

🛤️ Client-side Routing with react-router-dom

💤 Lazy Loading via React.lazy & Suspense

✅ Toast Notifications with react-toastify

🔐 Protected Routes & Fake Auth with custom AuthContext

🧪 Login Flow with hardcoded credentials (admin@gmail.com / 123456)

📱 Responsive UI using CSS Modules

🔧 Built using Vite for lightning-fast development

🛠️ Tech Stack
Category	Tech
Framework	React (TypeScript)
State Management	Context API, Redux Toolkit
Routing	React Router DOM
Styling	CSS Modules
Build Tool	Vite
Notifications	React Toastify
Testing	Vitest + React Testing Library

Folder Structure

src/
├── components/         # Reusable UI components (ProductCard, Navbar, etc.)
│   └── Redux/          # Redux-specific components (ReduxCart)
├── context/            # Context API logic (Cart & Auth)
├── redux/              # Redux store and cart slice
├── pages/              # Pages (Home, Products, Cart, Login, etc.)
├── routes/             # AppRouter and ProtectedRoute
├── utils/              # Static product data
├── styles/             # CSS Modules
├── App.tsx             # App root with providers
├── main.tsx            # Entry point
└── vite.config.ts      # Vite configuration


🧪 Learning Highlights (Day 1 to Day 11)
✅ Day 1 - React Basics & Architecture
JSX, props, state, functional components

Reusable ProductCard

✅ Day 2 - Routing & Lazy Loading
react-router-dom: Routing with Link, Route, useParams

Lazy loading with React.lazy + Suspense

Custom ErrorBoundary

✅ Day 3 - React Hooks
useMemo, useCallback, useRef, useReducer

Optimized filtering with useMemo

✅ Day 4 - State Management
Add to Cart using Context API

Compared with Redux Toolkit

Used useSelector, useDispatch, createSlice

✅ Day 5 - JavaScript Deep Dive
Promises vs async/await

Filtering array of objects

Event delegation

✅ Day 6 - Authentication
Fake login using AuthContext

ProtectedRoute with token-based logic

Toast notifications with react-toastify

✅ Day 7 - Vanilla JS Project
Built a Pokémon Table App

Used fetch, Promise.all(), DOM manipulation

✅ Day 8 - UI & CSS Practice
Responsive design with CSS modules

Styled form and table

Learned accessibility attributes (aria-label, keyboard nav)

✅ Day 9 - Performance Optimization
Used React DevTools and Chrome Performance tab

Techniques: Memoization (useMemo, useCallback), lazy loading, code splitting

✅ Day 10 - ESLint, Webpack, and WebSocket Basics
Configured ESLint for better code quality

Understood Webpack concepts: entry, loaders, output, plugins

Introduction to WebSocket and real-time communication basics

✅ Day 11 - Testing & Error Handling
Introduced Vitest and React Testing Library

Tested React components using render, screen, and fireEvent

Used jest-dom for matchers like toBeInTheDocument

Implemented Error Boundaries with fallback UI


git clone https://github.com/narayansharmadev/react-mini-ecommerce.git
cd react-mini-ecommerce
npm install
npm run dev

Email: admin@gmail.com
Password: 123456
