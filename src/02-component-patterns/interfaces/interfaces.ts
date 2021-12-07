import React, { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
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
}