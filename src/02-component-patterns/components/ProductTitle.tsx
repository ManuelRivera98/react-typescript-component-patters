import { useContext } from 'react';
import { ProductTitleProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


export const ProductTitle = ({ name, className, style }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      style={style}
      className={`${styles.productDescription} ${className}`}>{name || product.name}</span>
  )
};