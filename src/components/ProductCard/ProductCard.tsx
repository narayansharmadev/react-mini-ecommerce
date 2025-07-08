import React from "react";
import styles from "../ProductCard/ProductCard.module.css";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={title} />
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>₹ {price}</p>
      <button
        onClick={() => onAddToCart(id)}
        style={{
          marginTop: "0.5rem",
          padding: "0.4rem 1rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#3182ce",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
