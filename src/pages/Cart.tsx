import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className={styles.cartButtons}>
                  <button onClick={() => addToCart(item)}>➕</button>
                  <button onClick={() => removeFromCart(item.id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className={styles.total}>Total: ₹{totalPrice}</h3>
          <button className={styles.clearButton} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
