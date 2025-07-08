import React, { useState, useMemo, useCallback , useEffect} from 'react';
import ProductCard from '../components/ProductCard';
// import { productList } from '../utils/productData';
import { Link } from 'react-router-dom';
import styles from './AllProductDetail.module.css';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { fetchProducts } from '../utils/fakeApi';

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

const AllProductDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();


    useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error('❌ Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(products.map(p => p.category));
    return ['All', ...Array.from(unique)];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, products]);

  const handleAddToCart = useCallback((productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    addToCart({ ...product, quantity: 1 });

    toast.success(`🛒 ${product.title} added to cart`, {
      position: 'bottom-right',
      autoClose: 1500,
    });
  }, [addToCart, products]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchandtitle}>
        <h1 className={styles.heading}>All Products</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
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

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center' }}>⏳ Loading products...</p>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className={styles.cardLink}
              >
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  onAddToCart={handleAddToCart}
                />
              </Link>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllProductDetail;
