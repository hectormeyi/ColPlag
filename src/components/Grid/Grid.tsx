// src/components/Grid/Grid.tsx
import styles from './Grid.module.css';

const Grid = ({ children }) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};

export default Grid;