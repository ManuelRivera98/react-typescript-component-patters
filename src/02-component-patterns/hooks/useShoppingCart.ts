import { useState } from "react";
import { onChangeArg, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, stShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArg) => {


    stShoppingCart((oldState) => {

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldState;

        return rest;
      };

      return {
        ...oldState,
        [product.id]: { ...product, count },
      };
    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  };
};