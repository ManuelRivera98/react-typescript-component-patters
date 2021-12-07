import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
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
};

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Img: ({ img }: { img?: string }) => JSX.Element;
  Title: ({ name }: { name?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}