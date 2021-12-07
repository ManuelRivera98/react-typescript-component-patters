import { useState } from "react"

export const useProduct = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue)

  const incrementBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    incrementBy,
  };
};