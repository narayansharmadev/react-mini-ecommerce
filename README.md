# 🛍️ React Mini E-commerce App

A modern React + TypeScript e-commerce project that demonstrates essential React concepts with a clean and responsive UI. This app showcases state management using **both Context API and Redux Toolkit**, allowing you to compare their real-world usage side-by-side.

---

## 🚀 Features

- 🧩 **Reusable Product Cards**
- 🔍 **Live Search Filtering** using `useMemo`
- 🛒 **Add to Cart** (via Context API + Redux Toolkit)
- 🧠 **React Hooks**: `useCallback`, `useRef`, `useMemo`, `useReducer`
- 🛤️ **Client-side Routing** with `react-router-dom`
- 💤 **Lazy Loading** via `React.lazy` & `Suspense`
- ✅ **Toast Notifications** with `react-toastify`
- 🔐 **Protected Routes & Fake Auth** with custom `AuthContext`
- 🧪 **Login Flow** with hardcoded credentials (`admin@gmail.com` / `123456`)
- 📱 **Responsive UI** using **CSS Modules**
- 🔧 Built using **Vite** for lightning-fast development

---

## 🛠️ Tech Stack

| Category         | Tech                          |
|------------------|-------------------------------|
| Framework        | React (TypeScript)            |
| State Management | Context API, Redux Toolkit    |
| Routing          | React Router DOM              |
| Styling          | CSS Modules                   |
| Build Tool       | Vite                          |
| Notifications    | React Toastify                |

---

## 📁 Folder Structure

src/
├── components/ # Reusable components (ProductCard, Navbar, etc.)
│ └── Redux/ # Redux-specific components (ReduxCart)
├── context/ # Context API logic (Cart & Auth)
├── redux/ # Redux store and cart slice
├── pages/ # Page components (Home, Products, Cart, Login, etc.)
├── routes/ # AppRouter and ProtectedRoute
├── utils/ # Static product data
├── styles/ # CSS Modules
├── App.tsx # App root with providers
├── main.tsx # App entry point
└── vite.config.ts # Vite configuration




---

## 🧪 Learning Highlights

This project implements concepts from **Day 1 to Day 8** of your React roadmap:

### ✅ Day 1 - React Basics & Architecture
- JSX, props, state
- Functional components
- ProductCard component

### ✅ Day 2 - Routing & Lazy Loading
- `react-router-dom` (Route, Link, useParams)
- `React.lazy`, `Suspense`
- Custom `ErrorBoundary`

### ✅ Day 3 - Hooks Deep Dive
- `useMemo` for optimized filtering
- `useCallback`, `useReducer`, `useRef`

### ✅ Day 4 - State Management
- Add to Cart using **Context API**
- Compare with **Redux Toolkit** implementation
- `useSelector`, `useDispatch`, `createSlice`

### ✅ Day 5 - JavaScript Deep Concepts
- Promises vs async/await
- Filtering arrays by category
- Event delegation (prep for UI interactions)

### ✅ Day 6 - Authentication
- Fake login system using `AuthContext`
- Token-based logic (hardcoded `fake-jwt-token`)
- `ProtectedRoute` for `/dashboard`

### ✅ Day 7 - JavaScript Project & Reflection
- Created a **Pokémon Table App** using plain JavaScript.
- DOM manipulation with `createElement`, `innerHTML`, `querySelector`.
- Used `Promise.all()` to fetch multiple APIs in parallel.
- ✅ [GitHub Repo](https://github.com/narayansharmadev/Pok-mon-Table-App)

### ✅ Day 8 – UI, CSS Practice & Accessibility
- Practiced responsive design with **CSS Modules**.
- Styled **Login Form** and **Table** layout pages.
- Used **Flexbox**, **Grid**, and media queries.
- Applied **accessibility best practices** like `aria-label`, `alt` text, and keyboard nav.
- ✅ Created: `StyledLogin.tsx`, `StyledTable.tsx`

---

## 📦 Getting Started

```bash
git clone https://github.com/narayansharmadev/react-mini-ecommerce.git
cd react-mini-ecommerce
npm install
npm run dev



Email: admin@gmail.com
Password: 123456
