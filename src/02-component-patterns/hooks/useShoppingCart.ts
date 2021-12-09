import { useState } from "react";
import { onChangeArg, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, stShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArg) => {



    stShoppingCart((oldState) => {

      const productInCart: ProductInCart = oldState[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldState,
          [product.id]: productInCart
        }
      };

      // remove product
      const { [product.id]: toDelete, ...rest } = oldState;
      return rest;

      /*       if (count === 0) {
              const { [product.id]: toDelete, ...rest } = oldState;
      
              return rest;
            };
      
            return {
              ...oldState,
              [product.id]: { ...product, count },
            }; */
    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  };
};