import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCart } from '../../context/CartContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const NavBar: React.FC = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const reduxCartCount = useSelector(
    (state: RootState) =>
      state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">MyShop</Link>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.button}>Home</Link>
        <Link to="/products" className={styles.button}>Products</Link>
        <Link to="/redux-products" className={styles.button}>Redux Products</Link>
        <Link to="/about" className={styles.buttonOutline}>About Us</Link>
        <Link to="/contact" className={styles.buttonOutline}>Contact</Link>

        {/* Context Cart */}
        <Link to="/cart" className={styles.buttonOutline}>
          Cart 🛒 {cartItemCount > 0 && <span>({cartItemCount})</span>}
        </Link>

        {/* Redux Cart */}
        <Link to="/redux-cart" className={styles.buttonOutline}>
          Redux Cart 🛍️ {reduxCartCount > 0 && <span>({reduxCartCount})</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
