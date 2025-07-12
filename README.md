# 📘 React Developer Learning Notes (Day 1 to Day 8)

---

## 📅 Day 1: React Basics & Component Architecture

- **JSX (JavaScript XML):** HTML-like syntax written inside JavaScript.
- **Functional vs Class Components:**
  - Functional components are simple and work well with hooks.
- **Props:** Used to pass data from one component to another.
- **State:** Manages dynamic data within a component.
- ✅ **Practice:** Created a `ProductCard` with image, title, and price.

---

## 📅 Day 2: Routing, Lazy Loading & Error Boundaries

- **React Router DOM:**
  - Used `<Route>`, `<Link>`, and `useParams()` for navigation.
- **Dynamic Routing:** Displayed product details using dynamic URLs.
- **Lazy Loading:** Used `React.lazy()` & `Suspense` to load components only when needed.
- **Error Boundary:** Created a class-based component to catch render-time errors.

---

## 📅 Day 3: Hooks Deep Dive

- **useMemo:** Memoizes expensive calculations to optimize performance.
- **useCallback:** Memoizes functions to prevent unnecessary re-creations.
- **useRef:** Stores DOM references or values across renders without re-rendering.
- **useReducer:** Manages complex state logic in components.
- ✅ **Practice:** Applied `useMemo` for optimized product search filtering.

---

## 📅 Day 4: State Management – Context API vs Redux Toolkit

- **Context API:**
  - Built a global cart context with `addToCart`, `removeFromCart`, `clearCart`.
  - Accessed context using `useContext()`.
- **Redux Toolkit:**
  - Used `createSlice`, `useDispatch`, and `useSelector` for global state.
- ✅ **Comparison:**
  - Context is ideal for small/medium apps.
  - Redux Toolkit is better suited for larger applications.

---

## 📅 Day 5: Advanced JavaScript for Interviews

- **Promises vs Async/Await:**
  - Promises use `.then()`, while `async/await` provides cleaner syntax.
- **Flattening Arrays:** Converted nested arrays into flat arrays.
- **Filtering Object Arrays:** Used `.filter()` to extract items by condition.
- **Event Delegation:** Used a parent event handler to manage child events efficiently.

---

## 📅 Day 6: Authentication + Protected Routes

- **Fake JWT Auth:** Stored a dummy token in `localStorage` after login.
- **AuthContext:** Created a global context for login/logout.
- **ProtectedRoute Component:** Prevented access to dashboard if not logged in.
- **Navigation:** Used `useNavigate()` for redirection after login.
- ✅ **Toast Notifications:** Displayed login success/error using `react-toastify`.

---

## 📅 Day 7: JavaScript Project + Reflection

- 🔍 **Project:** Built a Pokémon Table App using:
  - `fetch()` for API calls
  - DOM manipulation (`createElement`, `innerHTML`)
  - `Promise.all()` for concurrent data fetching
- ✅ **New Repo:** [Pok-mon-Table-App](https://github.com/narayansharmadev/Pok-mon-Table-App)
- 🧠 **Reflection:**
  - Gained confidence in working with APIs and async logic.
  - Practiced raw DOM manipulation outside React.
  - Learned real-world use of `Promise.all()` and basic error handling.

---

## 📅 Day 8: CSS Practice + Accessibility + UI Design

- **CSS Modules:** Styled each component with isolated `.module.css` files.
- **Responsive Design:** Used Flexbox and CSS Grid to support mobile/tablet/desktop views.
- **Form Styling:** Styled the login form with spacing, border-radius, focus effects.
- **Accessibility:**
  - Used `alt` attributes for images.
  - Provided labels and placeholders for form inputs.
  - Ensured good color contrast and spacing for readability.
- ✅ **Practice Pages Created:**
  - `StyledLogin.tsx` → Designed login UI.
  - `StyledTable.tsx` → Displayed table using modern CSS layout.

---

## 🔖 Summary (Till Day 8)

- React fundamentals like JSX, props, state, routing, and hooks are now strong.
- Understood both Context API and Redux for state management.
- Implemented complete authentication and routing guards.
- Strengthened JavaScript with APIs, fetch, promises, and DOM control.
- Enhanced UI/UX knowledge using responsive CSS and accessibility best practices.
