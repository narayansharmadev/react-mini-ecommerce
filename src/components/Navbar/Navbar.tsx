import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCart } from '../../context/CartContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const reduxCartCount = useSelector(
    (state: RootState) =>
      state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">MyShop</Link>
      </div>

      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <Link to="/home" className={styles.button}>Home</Link>
        <Link to="/dashboard" className={styles.button}>Dashboard</Link>
        <Link to="/products" className={styles.button}>Products</Link>
        <Link to="/redux-products" className={styles.button}>Redux Products</Link>
        <Link to="/about" className={styles.buttonOutline}>About Us</Link>
        <Link to="/contact" className={styles.buttonOutline}>Contact</Link>
        <Link to="/responsive-form" className={styles.buttonOutline}>Form</Link>
        <Link to="/styled-table" className={styles.buttonOutline}>Table</Link>

        <Link to="/cart" className={styles.buttonOutline}>
          Cart 🛒 {cartItemCount > 0 && <span>({cartItemCount})</span>}
        </Link>

        <Link to="/redux-cart" className={styles.buttonOutline}>
          Redux Cart 🛍️ {reduxCartCount > 0 && <span>({reduxCartCount})</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
