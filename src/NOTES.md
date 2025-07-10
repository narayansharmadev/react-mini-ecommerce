# 📘 React Developer Learning Notes (Day 1 to Day 7)

---

## 📅 Day 1: React Basics & Component Architecture

- **JSX (JavaScript XML):** HTML jaisa syntax jo JavaScript me likhte hain.
- **Functional vs Class Components:**
  - Functional components hooks ke saath easy hote hain.
- **Props:** Data ko ek component se dusre me bhejne ke liye.
- **State:** Component ke andar ka dynamic data.
- ✅ **Practice:** Ek ProductCard banaya jisme image, title, price tha.

---

## 📅 Day 2: Routing, Lazy Loading & Error Boundaries

- **React Router DOM:**
  - `<Route>`, `<Link>`, `useParams()` ka use karke pages ke beech routing ki.
- **Dynamic Routing:** Product detail page me dynamic URL se data fetch kiya.
- **Lazy Loading:** `React.lazy()` & `Suspense` se components ko on-demand load kiya.
- **Error Boundary:** Custom class component banaya jo error handle karta hai render phase me.

---

## 📅 Day 3: Hooks Deep Dive

- **useMemo:** Heavy calculation ko memoize karta hai taaki har render me na chale.
- **useCallback:** Function ko memoize karta hai taaki unnecessary re-creation na ho.
- **useRef:** DOM elements ya koi bhi value ko store karta hai bina re-render ke.
- **useReducer:** State ka complex logic manage karne ke liye.
- ✅ **Practice:** useMemo ke sath optimized product filtering kiya.

---

## 📅 Day 4: State Management – Context API vs Redux Toolkit

- **Context API:**
  - Cart context banaya jisme `addToCart`, `removeFromCart`, `clearCart`.
  - `useContext()` se context access kiya.
- **Redux Toolkit:**
  - `createSlice`, `useDispatch`, `useSelector` ka use kiya centralized state ke liye.
- ✅ **Comparison:**
  - Context choti apps ke liye theek hai.
  - Redux large apps me better scalability deta hai.

---

## 📅 Day 5: Advanced JavaScript for Interviews

- **Promises vs Async/Await:**
  - Promises me `.then()` use hota hai, `async/await` se code readable hota hai.
- **Flattening Arrays:** Nested arrays ko single level me convert kiya.
- **Filtering Object Arrays:** `.filter()` se category wise data nikala.
- **Event Delegation:** Parent element se sab children ke event handle kiye.

---

## 📅 Day 6: Authentication + Protected Routes

- **Fake JWT Auth:** Dummy token `localStorage` me store kiya login ke baad.
- **AuthContext:** Login/logout logic ke liye ek global context banaya.
- **ProtectedRoute Component:** Login na hone par dashboard ko access nahi karne diya.
- **Navigation:** `useNavigate()` se login ke baad dashboard me redirect.
- ✅ **Notifications:** Login error/success ke liye `react-toastify` ka use.

---

## 📅 Day 7: JavaScript Project + Reflection

- 🔍 **Project:** Pokémon Table App banaya using:
  - `fetch()` for API calls
  - DOM manipulation (`createElement`, `innerHTML`)
  - `Promise.all()` for parallel fetch
- ✅ **New Repo:** [Pok-mon-Table-App](https://github.com/narayansharmadev/Pok-mon-Table-App)
- 🧠 **Reflection:**
  - Confidence in API, async/await, and JavaScript logic improved.
  - DOM ke sath interact karne ka achha practical mila.
  - React ke bahar ka bhi experience mila Vanilla JS me.

---

## 🔖 Summary (Till Day 7)

- React ka complete base clear ho chuka hai (JSX, state, props, routing, hooks).
- Context vs Redux samajh aa gaya.
- Authentication flow and protected routing implemented.
- JS ke core topics like promises, filtering, and DOM manipulation par confidence aaya.
