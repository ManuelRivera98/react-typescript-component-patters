import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from "../interfaces/interfaces";


export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

  const { counter, incrementBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );

  return (
    <div
      style={style}
      className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => incrementBy(-1)}
        className={styles.buttonMinus}>
        -
      </button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button
        onClick={() => incrementBy(1)}
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>
        +
      </button>
    </div>
  )
};