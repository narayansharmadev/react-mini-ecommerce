// src/pages/AllProductRedux.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { productList } from '../utils/productData';
import styles from './AllProductDetail.module.css';
import { toast } from 'react-toastify';
import ProductCard from '../components/ProductCard';

const AllProductRedux: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredProducts = useMemo(() => {
    return productList.filter(product => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const handleAddToCart = useCallback((productId: string) => {
    const product = productList.find(p => p.id === productId);
    if (!product) return;

    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`🛒 ${product.title} added to cart (Redux)`, {
      position: 'bottom-right',
      autoClose: 1500,
    });
  }, [dispatch]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchandtitle}>
        <h1 className={styles.heading}>All Products (Redux)</h1>
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '250px',
            }}
          />
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProductRedux;
