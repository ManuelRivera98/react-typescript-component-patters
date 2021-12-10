import { useState, useEffect, useRef } from "react"
import { useProductProps } from "../interfaces/interfaces";

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef<boolean>(false);

  const incrementBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)

    // validation max Count
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    };

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  // listen is mounted hook
  useEffect(() => {
    isMounted.current = true;
  }, [])

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,

    incrementBy,
    reset,
  };
};