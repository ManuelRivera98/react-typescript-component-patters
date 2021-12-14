import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {

  const [data, setData] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const reset = () => {
    setData(initialState);
  };

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    // props
    ...data,

    //methods
    onChange,
    reset,
    isValidEmail,
  };
};