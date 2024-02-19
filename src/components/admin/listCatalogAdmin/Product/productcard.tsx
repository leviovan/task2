import { FC } from "react";
import style from "./productcard.module.scss";

import { IProduct } from "../../../../store//product/productSlice";
import { NavLink } from "react-router-dom";

const Productcard: FC<IProduct> = ({ id, images, price, title }) => {
  return (
    <NavLink to={`../admin/${id}`}>
      <div key={`${title} ${id}`} className={style.product}>
        <img className={style.img} src={images[0]} alt={`${title}`} />
        <h5 className={style.title}>{title}</h5>
        <p className={style.price}>{price} $</p>
      </div>
    </NavLink>
  );
};

export default Productcard;
