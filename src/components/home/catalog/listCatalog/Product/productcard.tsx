import { FC } from "react";
import style from "./productcard.module.scss";
import { IProduct } from "../../../../../store/product/productSlice";

const Productcard: FC<IProduct> = ({ id, images, price, title }) => {
  return (
    <div key={`${title} ${id}`} className={style.product}>
      <img className={style.img} src={images[0]} alt={`${title}`} />
      <h5 className={style.title}>{title}</h5>
      <p className={style.price}>{price} $</p>
    </div>
  );
};

export default Productcard;
