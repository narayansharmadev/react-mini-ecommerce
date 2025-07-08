# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
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
