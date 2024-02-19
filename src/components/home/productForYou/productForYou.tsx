import { useSelector } from "react-redux";
import style from "./productForYou.module.scss";
import { RootState } from "../../../store/store";

const ProductForYou = () => {
  const category = useSelector((s: RootState) => s.category.category);

  return (
    <div className={style.productForYou} id="ProductSelection">
      <div className="container">
        <div className={style.body}>
          <h3 className={style.title}>
            We will select the perfect product for you
          </h3>
          <p className={style.subtitle}>
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </p>
          <div className={style.content}>
            <h4 className={style.title}>
              What type of product are you considering?
            </h4>
            <div className={style.list}>
              {category.map((item, i) => (
                <div key={`sheakers${i}`} className={style.item}>
                  <span>
                    <input
                      className={style.checkbox}
                      type="checkbox"
                      name={`sneakers${i}`}
                      id={`sneakers${i}`}
                    />
                    <label className={style.label} htmlFor={`sneakers${i}`}>
                      {item}
                    </label>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={style.pagination}>
            <span className={style.step}>1 of 3</span>
            <button className={style.nextStep}>Next step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForYou;
