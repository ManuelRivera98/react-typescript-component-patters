import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: ProductCardProps) => {

  const { counter, incrementBy } = useProduct();

  return (
    <Provider value={{
      product,
      counter,
      incrementBy,
    }}>
      <div
        style={style}
        className={`${styles.productCard} ${className}`}>

        {children}

      </div>
    </Provider>
  )
};
