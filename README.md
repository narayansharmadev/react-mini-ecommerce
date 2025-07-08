# 🛍️ React Mini E-commerce App

A modern React + TypeScript e-commerce project that demonstrates essential React concepts with a clean and responsive UI. Built using both **Context API** and **Redux Toolkit** to compare state management techniques.

---

## 🚀 Features

- 🧩 Reusable Product Cards
- 🔍 Live Search Filtering with `useMemo`
- 🛒 Add to Cart (Context API + Redux Toolkit)
- 🧠 React Hooks: `useCallback`, `useRef`, `useMemo`, `useReducer`
- 🛤️ Client-side Routing with `react-router-dom`
- 💤 Lazy Loading via `React.lazy` & `Suspense`
- ✅ Toast Notifications with `react-toastify`
- 📱 Fully Responsive UI with modular CSS
- 🔧 Built using Vite for fast development

---

## 🛠️ Tech Stack

| Category         | Tech                          |
|------------------|-------------------------------|
| Framework        | React (with TypeScript)       |
| State Management | Context API, Redux Toolkit    |
| Routing          | React Router DOM              |
| Build Tool       | Vite                          |
| Notifications    | React Toastify                |
| Styling          | CSS Modules                   |

---

## 📁 Folder Structure

src/
├── components/ # Reusable components (ProductCard, Navbar)
├── context/ # Context API logic
├── redux/ # Redux slices and store
├── pages/ # Route components (Home, Products, Cart, etc.)
├── utils/ # Static product data
├── AppRouter.tsx # Centralized route management
├── main.tsx # App entry point
└── styles/ # Module CSS files



---

## 🧪 Learning Highlights

This project covers all major concepts from **Day 1 to Day 5** of the React roadmap:

### ✅ React Concepts:
- JSX, props, state
- Functional Components
- Component Architecture

### ✅ React Router:
- `Route`, `Link`, `useParams`
- Lazy loading and suspense
- Error boundaries

### ✅ Hooks:
- `useMemo`, `useCallback`, `useRef`, `useReducer`

### ✅ State Management:
- Context API and custom hooks
- Redux Toolkit (store, slice, `useSelector`, `useDispatch`)

### ✅ JavaScript Concepts:
- Async/await & Promises
- Array filtering, flattening
- Event delegation basics

---

## 📦 Getting Started

```bash
git clone https://github.com/narayansharmadev/react-mini-ecommerce.git
cd react-mini-ecommerce
npm install
npm run dev
