import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  //Otra manera de evitar el if else es usar el opereador or
  //<img src={img || product.img || NoImage} alt="Product img" className={style.productImg} />
  return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};
