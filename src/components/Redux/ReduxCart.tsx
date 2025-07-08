// src/pages/ReduxCart.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addToCart, removeFromCart, clearCart } from '../../redux/cartSlice';
import styles from '../../pages/cart.module.css'; // Assuming you have a CSS module for styling

const ReduxCart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Redux Cart 🛒</h2>

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
                  <button onClick={() => dispatch(addToCart(item))}>➕</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>❌</button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className={styles.total}>Total: ₹{totalPrice}</h3>
          <button className={styles.clearButton} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ReduxCart;
