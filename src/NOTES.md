# 📘 React Developer Learning Notes (Day 1 to Day 6)

---

## 📅 Day 1: React Basics & Component Architecture

- **JSX (JavaScript XML):** Syntax that lets you write HTML inside JavaScript.
- **Functional vs Class Components:**
  - Functional components are simpler and commonly used with hooks.
- **Props:** Used to pass data from parent to child components.
- **State:** Used to manage dynamic data inside a component.
- **Practice Task:** Built a `ProductCard` component showing product image, title, and price.

---

## 📅 Day 2: Routing, Lazy Loading & Error Boundaries

- **React Router DOM:**
  - Used `<Route>`, `<Link>`, and `useParams()` for client-side routing.
- **Dynamic Routing:** Created product detail page using dynamic routes with `useParams`.
- **Lazy Loading:** Loaded components on-demand using `React.lazy()` and `<Suspense>`.
- **Error Boundaries:** Implemented a class-based component to catch rendering errors.

---

## 📅 Day 3: React Hooks Deep Dive

- **useMemo:** Memoizes expensive calculations to avoid recalculating on every render.
- **useCallback:** Memoizes functions to prevent unnecessary re-creation.
- **useRef:** References DOM elements or persists values across renders without causing re-renders.
- **useReducer:** An alternative to `useState` for more complex state logic.
- **Practice Task:** Added search filter functionality in product list using `useMemo`.

---

## 📅 Day 4: State Management – Context API vs Redux Toolkit

- **Context API:**
  - Built a global cart context with `addToCart`, `removeFromCart`, and `clearCart`.
  - Used `useContext()` to access cart data throughout the app.
- **Redux Toolkit:**
  - Used `createSlice`, `useDispatch`, and `useSelector` for centralized state.
  - Created a `cartSlice.ts` with actions and reducers.
- **Comparison:**
  - Context API is good for small to medium apps.
  - Redux Toolkit is more scalable for large applications with multiple state slices.

---

## 📅 Day 5: Advanced JavaScript for Interviews

- **Promises vs Async/Await:**
  - Promises use `.then()` chaining.
  - `async/await` offers cleaner, more readable syntax.
- **Flattening Arrays:** Converted nested arrays into a single-level array using recursion or `flat()`.
- **Filtering Object Arrays:** Used `.filter()` to get data based on category or condition.
- **Event Delegation:** Handled multiple child events using a single parent event listener.

---

## 📅 Day 6: Authentication + Protected Routes

- **Fake JWT Auth:** Used localStorage to store a dummy token after login.
- **AuthContext:** Created context for login/logout functionality with a fake user.
- **ProtectedRoute Component:** Prevents access to certain routes (like `/dashboard`) if the user is not authenticated.
- **Navigation:** Used `useNavigate()` from React Router to redirect after login.
- **Toast Notifications:** Displayed success or error messages using `react-toastify`.

---

🧠 **Summary:**
This covers everything from React basics to state management and authentication, preparing you for real-world projects and interviews.

---

🔗 **Next:** Continue with Day 7 – JavaScript Project & Reflection

