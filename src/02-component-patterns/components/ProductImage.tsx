import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductImgProps } from "../interfaces/interfaces";


export const ProductImg = ({ img = '', className, style }: ProductImgProps) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  };

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`} src={imgToShow} alt="Coffee Mug" />
  )
};