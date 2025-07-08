import React from 'react';
import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar/Navbar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <CartProvider> {/* ✅ Wrap everything that uses useCart() */}
          <Navbar />
          <AppRouter />
          <ToastContainer />
        </CartProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
