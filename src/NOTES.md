📘 React Developer Learning Notes (Day 1 to Day 11)

📅 Day 1: React Basics & Component Architecture
JSX (JavaScript XML): HTML-like syntax written inside JavaScript.

Functional vs Class Components: Functional components are simpler and support hooks.

Props: Data passed from one component to another.

State: Stores and manages internal data in a component.

✅ Practice: Built a ProductCard with title, image, and price.

📅 Day 2: Routing, Lazy Loading & Error Boundaries
React Router DOM: Used <Route>, <Link>, and useParams() for page routing.

Dynamic Routing: Displayed individual product pages via URL parameters.

Lazy Loading: Applied React.lazy() and Suspense to delay component loading.

Error Boundary: Implemented class-based error handling component.

📅 Day 3: Hooks Deep Dive
useMemo: Avoids unnecessary re-calculations of values.

useCallback: Prevents re-creation of functions on re-render.

useRef: Holds mutable values across renders without causing re-renders.

useReducer: Manages complex state logic in components.

✅ Practice: Used useMemo for optimized product search filtering.

📅 Day 4: State Management – Context API vs Redux Toolkit
Context API:

Created cart context for adding/removing items.

Accessed it using useContext().

Redux Toolkit:

Built store using configureStore and createSlice.

Accessed state using useSelector and updated using useDispatch.

✅ Comparison:

Context API: best for smaller apps.

Redux Toolkit: better for large-scale apps with scalable needs.

📅 Day 5: Advanced JavaScript for Interviews
Promises vs Async/Await: Compared syntax and readability.

Flatten Arrays: Converted nested arrays to flat using .flat().

Filter Object Arrays: Used .filter() to extract data based on conditions.

Event Delegation: Handled child elements' events via parent.

📅 Day 6: Authentication + Protected Routes
Fake JWT: Stored dummy token in localStorage after login.

AuthContext: Used to globally manage login/logout status.

Protected Routes: Restricted access using a ProtectedRoute component.

✅ Toast Alerts: Used react-toastify to show login status feedback.

📅 Day 7: JavaScript Project + Reflection
🔍 Project: Pokémon Table App (Vanilla JS)

Used fetch() and Promise.all() to fetch data.

Created DOM elements using JS (createElement, appendChild)

✅ Reflection:

Improved understanding of async calls and DOM APIs.

Gained practical experience with promises and parallel fetch.

📅 Day 8: CSS Practice + Accessibility
CSS Modules: Scoped styles for each component individually.

Responsive Layout: Used Flexbox and Grid to support different screen sizes.

Form Styling: Styled login form inputs, buttons with consistent spacing.

Accessibility:

Added proper alt, label, and aria attributes.

Ensured contrast and keyboard navigation.

✅ Practice Pages:

StyledLogin.tsx: Styled login page.

StyledTable.tsx: Table UI using responsive layout.

📅 Day 9: Performance Optimization Tools & Techniques
React DevTools: Analyzed re-renders, state changes, and props.

Chrome Performance Tab: Tracked long frames, JS execution time.

Memoization:

Used useMemo for expensive value calculations.

Used useCallback to avoid re-creating functions.

Lazy Loading: Reduced initial bundle size using React.lazy.

📅 Day 10: ESLint, Webpack & WebSocket Basics
ESLint:

Configured custom ESLint rules using .eslintrc.

Helps enforce code quality and consistency.

Webpack:

Understood roles of entry, loaders, output, and plugins.

Webpack bundles JS/CSS/Assets for production.

Vite vs Webpack:

Vite is faster in dev because of native ES Modules.

Webpack is widely used and highly customizable.

WebSocket Basics:

Real-time communication protocol.

Compared it to HTTP polling.

Learned when to use it (e.g., chat apps, notifications).

📅 Day 11: Testing & Error Handling
Vitest Setup:

Installed Vitest and configured it with Vite.

Used jsdom for simulating browser environment.

React Testing Library:

render(), screen.getByText(), and expect() to assert output.

Used toBeInTheDocument() matcher from @testing-library/jest-dom.

Error Handling:

Implemented error boundary using class components.

Added fallback UIs for crash-safe applications.

🔖 Summary (Till Day 11)
React knowledge (JSX, props, hooks, routing, lazy loading) is solid.

Implemented both Context API and Redux for managing global state.

Completed an authentication system and protected routing.

Gained frontend interview confidence: promises, arrays, event handling.

Practiced performance profiling, linting, and introduced testing strategy.

Learned UI design with responsive layouts and accessibility best practices.