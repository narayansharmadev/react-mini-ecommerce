import React from 'react';
import { useParams } from 'react-router-dom';
import { productList } from '../utils/productData';
import styles from './ProductDetails.module.css';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productList.find(p => p.id === id);
  const { addToCart } = useCart();

  const handleAddToCartClick = (product: {
  id: string;
  title: string;
  price: number;
  image: string;
}) => {
  addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
  });

  toast.success(`🛒 ${product.title} added to cart`, {
    position: 'bottom-right',
    autoClose: 1500,
  });
};

  if (!product) return <h2>❌ Product not found</h2>;

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>₹ {product.price}</p>
        <div className={styles.actions}>
          <button className={styles.buyBtn}>Buy Now</button>
          <button className={styles.cartBtn} onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
