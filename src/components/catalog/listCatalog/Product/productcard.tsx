import React, { FC } from "react";
import style from "./productcard.module.scss";

export interface IProduct {
  img: string;
  name: string;
  price: string;
}

const Productcard: FC<IProduct> = ({ img, name, price}) => {
  return (
    <div className={style.product}>
      <img className={style.img} src={img} alt={`Фото кросовок ${name}`} />
      <h5 className={style.title}>{name}</h5>
      <p className={style.price}>{price}</p>
    </div>
  );
};

export default Productcard;
