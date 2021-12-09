import { useState, useEffect } from "react"
import { useProductProps } from "../interfaces/interfaces";

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState<number>(value);

  const incrementBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)
    setCounter((prev) => Math.max(prev + value, 0));

    onChange && onChange({ count: newValue, product });
  };


  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    incrementBy,
  };
};