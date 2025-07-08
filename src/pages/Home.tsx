import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to the Home Page</h1>
        <p className={styles.subText}>Explore our latest products or learn more about us.</p>
      </div>
    </>
  );
};

export default Home;
