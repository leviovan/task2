import { Formik } from "formik";
import { useState } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../store/product/productSlice";
import style from "./form.module.scss";

const Form = () => {
  const {
    brand,
    category,
    description,
    price,
    rating,
    stock,
    discountPercentage,
    id,
  } = useSelector((s: RootState) => s.product.currentProductAdmin);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={{
        Rating: rating,
        "Base price": price,
        "Discount percentage": discountPercentage,
        Stock: stock,
        Brand: brand,
        Category: category,
        "Discount price": Math.floor(price - price / discountPercentage),
        Description: description,
      }}
      onSubmit={(values) => {
        dispatch(updateProduct({ ...values, id: id }));
        alert(`данные Продукта № ${id}`);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form className={style.form} onSubmit={handleSubmit}>
          {Object.keys(values).map((item) => {
            return (
              <label className={style.label} htmlFor={`${item}`}>
                {item}
                {!edit ? (
                  <span> {values[item as keyof typeof values]} </span>
                ) : (
                  <input
                    className={style.input}
                    id={`${item}`}
                    type="text"
                    name={`${item}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[item as keyof typeof values]}
                  />
                )}
              </label>
            );
          })}
          {edit ? (
            <button
              type="button"
              className={style.btn}
              onClick={() => setEdit(!edit)}
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => setEdit(!edit)}
              className={style.btn}
            >
              Edit
            </button>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Form;
