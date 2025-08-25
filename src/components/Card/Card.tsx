// src/components/Card/Card.tsx
import styles from './Card.module.css';

const Card = ({ title, description, image, children }) => {
  return (
    <a href="#" className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        {children}
      </div>
    </a>
  );
};

export default Card;