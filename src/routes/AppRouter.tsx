import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const AllProductDetail = lazy(() => import('../pages/AllProducts'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Cart = lazy(() => import('../pages/Cart'));

// Redux pages
const AllProductRedux = lazy(() => import('../pages/AllProductRedux'));
const ReduxCart = lazy(() => import('../components/Redux/ReduxCart'));

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Context-based product & cart */}
        <Route path="/products" element={<AllProductDetail />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        {/* Redux-based product & cart */}
        <Route path="/redux-products" element={<AllProductRedux />} />
        <Route path="/redux-cart" element={<ReduxCart />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
