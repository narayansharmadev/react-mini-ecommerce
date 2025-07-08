# react-mini-ecommerce
A modern React-based mini e-commerce application showcasing product listings, dynamic search, and cart functionality using both Context API and Redux Toolkit. Includes routing, lazy loading, toast notifications, and responsive UI components.

# 🛍️ React Mini E-commerce App

A modern React-based mini e-commerce application that demonstrates core concepts such as routing, component architecture, state management (using both Context API and Redux Toolkit), and user interaction with a dynamic product cart. Built with scalability and performance in mind.

---

## 🚀 Features

- 🧩 Product listing with reusable cards  
- 🔍 Search filtering using `useMemo`  
- 🛒 Add-to-cart functionality  
- 🎯 Dual state management: `Context API` + `Redux Toolkit`  
- 🛤️ Routing using `react-router-dom`  
- 📦 Lazy loading with `React.lazy` + `Suspense`  
- ✅ Toast notifications with `react-toastify`  
- ⚙️ Component-based architecture  
- 🧠 Optimized with `useCallback`, `useRef`  
- 📱 Fully responsive UI  

---

## 🛠️ Tech Stack

| Frontend      | State Management     | Routing            | Tooling           |
|---------------|----------------------|--------------------|-------------------|
| React + TypeScript | Context API, Redux Toolkit | React Router DOM | Vite, Toastify    |

---

## 📂 Folder Structure

src/
├── components/ # Reusable UI components
├── context/ # Context API logic
├── redux/ # Redux Toolkit setup
├── pages/ # All screens (Home, Product Details, Cart)
├── utils/ # Static product data
├── AppRouter.tsx # Lazy-loaded routing logic
├── main.tsx # App entry point
└── styles/ # CSS Modules
