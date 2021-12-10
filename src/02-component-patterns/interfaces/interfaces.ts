import { CSSProperties } from "react";

export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
};

export interface Product {
  id: string,
  name: string,
  img?: string,
};

export interface ProductContextProps {
  product: Product;
  counter: number;
  incrementBy: (value: number) => void;
  maxCount?: number;
};

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Img: ({ img, className }: ProductImgProps) => JSX.Element;
  Title: ({ name, className }: ProductTitleProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}
export interface ProductTitleProps {
  name?: string,
  className?: string;
  style?: CSSProperties;
}


export interface ProductImgProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
};

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
};

export interface onChangeArg {
  count: number;
  product: Product;
};

export interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
};

export interface ProductInCart extends Product {
  count: number;
};
export interface InitialValues {
  count?: number;
  maxCount?: number;
};

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}